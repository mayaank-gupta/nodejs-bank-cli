const inquirer = require('inquirer');
let readSpreadSheetData = require('../lib/google-sheets/read-sheet');

const spreadsheetId = "1Y-5GemRF8z0fu3VLHV1PPaRkV8inpmQPuASkvCkc4HQ";
const sheetRange = "EMP!A2:B2";

module.exports = {
  askBankCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your BankEmpID:',
        filter: async answer => {
          const spreadSheetData = await readSpreadSheetData({ spreadsheetId, sheetRange });
          return `filtered${answer}`;
        },
        filteringText: 'Checking username...',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};