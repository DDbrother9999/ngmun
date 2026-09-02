const CONFIG = {
  SPREADSHEET_ID: '1FuYiGAU2wvrqpwPsLPnpqrGsDcnmAZWMcKWCUFVr1QU',
  SIGNUPS_SHEET_NAME: 'pre-registration emails',
  HEADERS: ['Timestamp', 'Email', 'Conference'],
};

function jsonResponse(payload) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify(payload));
  return output;
}

function getSignupsSheet() {
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  const target = CONFIG.SIGNUPS_SHEET_NAME.toLowerCase();

  let sheet = ss.getSheets().filter(function (s) {
    return s.getName().toLowerCase() === target;
  })[0];

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SIGNUPS_SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CONFIG.HEADERS);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function alreadySignedUp(sheet, normalizedEmail) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return false;
  }

  return sheet
    .getRange(2, 2, lastRow - 1, 1)
    .getValues()
    .some(function (row) {
      return String(row[0]).trim().toLowerCase() === normalizedEmail;
    });
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    const data = JSON.parse(e.postData.contents);

    if (data.formType !== 'email_signup') {
      return jsonResponse({
        success: false,
        error: 'Registration is not open. Only email signups are accepted right now.',
      });
    }

    const email = String(data.email || '').trim();
    if (!isValidEmail(email)) {
      return jsonResponse({ success: false, error: 'Invalid email address' });
    }

    lock.waitLock(10000);

    const sheet = getSignupsSheet();
    const normalizedEmail = email.toLowerCase();

    if (alreadySignedUp(sheet, normalizedEmail)) {
      return jsonResponse({
        success: true,
        duplicate: true,
        message: 'Already on the list',
      });
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      email,
      data.conference || '',
    ]);

    return jsonResponse({ success: true, message: 'Signed up' });
  } catch (error) {
    console.error('Email signup failed:', error);
    return jsonResponse({ success: false, error: error.toString() });
  } finally {
    try {
      lock.releaseLock();
    } catch (ignored) {}
  }
}

function doGet() {
  return jsonResponse({
    status: 'active',
    message: 'Pre-registration email signup is running',
  });
}
