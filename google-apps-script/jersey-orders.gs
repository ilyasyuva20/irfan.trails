/**
 * Receives jersey orders from the website and adds one row per order to the
 * "Trails Jersy Order" spreadsheet, in a tab named after the order's month
 * (Nov, Dec, ...). A missing month tab is created automatically.
 * Paste into Extensions > Apps Script and deploy as a Web app
 * (Execute as: Me, Who has access: Anyone).
 */
const SPREADSHEET_ID = '15JyxC5F17-b5ccuUVGVMOEjqK3KdbrUHmr5NxN2Ux4g';
const TIME_ZONE = 'Asia/Kolkata';
const HEADERS = [
  'Order Date',
  'Customer Name',
  'Phone',
  'Jersey Name',
  'Jersey Number',
  'Size',
  'Quantity',
  'Total Amount',
];

// The leading apostrophe stores the value as plain text. That keeps zeros in
// numbers like "07" and stops customer input from running as a sheet formula.
function asText(value, maxLength) {
  return "'" + String(value === undefined || value === null ? '' : value).trim().slice(0, maxLength);
}

function respond(result) {
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function getMonthSheet(orderDate) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const monthName = Utilities.formatDate(orderDate, TIME_ZONE, 'MMM');
  const sheet = spreadsheet.getSheetByName(monthName)
    || spreadsheet.insertSheet(monthName, spreadsheet.getNumSheets());
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    const order = JSON.parse(e.postData.contents);
    const customerName = String(order.customerName || '').trim();
    const customerPhone = String(order.customerPhone || '');

    if (!customerName || !/^[6-9]\d{9}$/.test(customerPhone)) {
      return respond({ ok: false, error: 'Invalid customer details' });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const orderDate = new Date();
      getMonthSheet(orderDate).appendRow([
        asText(Utilities.formatDate(orderDate, TIME_ZONE, 'dd-MMM-yyyy hh:mm:ss a'), 30),
        asText(customerName, 60),
        asText(customerPhone, 10),
        asText(order.jerseyName, 20),
        asText(order.jerseyNumber, 10),
        asText(order.size, 5),
        Number(order.quantity) || 0,
        Number(order.total) || 0,
      ]);
    } finally {
      lock.releaseLock();
    }

    return respond({ ok: true });
  } catch (error) {
    console.error(error);
    return respond({ ok: false, error: 'Could not save order' });
  }
}
