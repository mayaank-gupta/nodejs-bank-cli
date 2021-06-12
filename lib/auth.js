const inquirer = require('inquirer');
let readSpreadSheetData = require('../lib/google-sheets/read-sheet');
const spreadsheetId = "1Y-5GemRF8z0fu3VLHV1PPaRkV8inpmQPuASkvCkc4HQ";
const sheetRange = "EMP!A2:B2";

let spreadSheetData = [];

module.exports = {
  askBankCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your BankEmpID:',
        filter: async function (username) {
          spreadSheetData = await readSpreadSheetData({ spreadsheetId, sheetRange });
          if (spreadSheetData && spreadSheetData.length) {
            let name = spreadSheetData.find(element => element.some(item => item === username));
            if (name) {
              await new Promise(r => setTimeout(r, 2000));
              return `Verified`;
            }
            return '';
          }
          return '';
        },
        filteringText: 'Checking username...',
        validatingText: 'Validating what you wrote...',
        validate: async function (value) {
          if (value && value.length) {
            return true;
          } else {
            return 'Please enter valid Bank Employee ID.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: async function (value) {
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