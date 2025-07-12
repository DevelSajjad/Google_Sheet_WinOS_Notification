
/**
 * Triggered automatically whenever a cell is edited in the spreadsheet.
 * Depending on the sheet and column, this function creates a log note and sends it to Google Drive.
 */
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;
  const editedValue = e.value;
  const sheetName = sheet.getName();
  
  var statusColumn = '';
  var noteColumn = '';
  if (sheetName === "Technical Problem Sheet") {
    statusColumn = 10; // Column J
    noteColumn = 9;    // Column I
  } else if (sheetName === "New Requirement List") {
    statusColumn = 15; // Column J
    noteColumn = 9;    // Column I
  } else {
    Logger.log(sheetName+": "+"Sheetname does not match!!");
    return false;
  }

  if (range.getColumn() === statusColumn && editedValue === "Approved") {
    const row = range.getRow();
    let note = sheet.getRange(row, noteColumn).getValue();
    note = `APPROVED: ${note} | ROW: ${row} | TIME: ${new Date().toISOString()}`;
    sendToFileService(note, row); 
  } else if(editedValue === "Pending" && sheetName === "Technical Problem Sheet") {
    const row = range.getRow();
    let note = sheet.getRange(row, noteColumn).getValue();
    let priority = sheet.getRange(row, 3).getValue();
    note = `Pending: ${note} | ROW: ${row} | Priority: ${priority}`;
    sendToFileService(note, row); 
  }
}



