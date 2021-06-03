let authentication = require('./authentication');

function getSpreadSheetValues({ spreadsheetId, sheetRange }) {
  return new Promise(async (resolve, reject) => {

    try {
      const { sheets } = await authentication();

      const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: sheetRange
      });

      return resolve(res.data.values);

    } catch (err) {

      return reject({
        success: false,
        msg: err
      })
    }

  })
}

module.exports = getSpreadSheetValues;