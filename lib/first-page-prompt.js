const inquirer = require('inquirer');

const authPrompt = require('./auth');

function firstPagePrompt() {
  inquirer
    .prompt([
      {
        type: 'rawlist',
        name: 'theme',
        message: 'Welcome',
        choices: ['Login', 'Exit'],
      },
    ])
    .then(async (answers) => {
      if (answers['theme'] === 'Login') {
        await authPrompt.askBankCredentials();
      } else {
        console.clear();
        process.exit(1);
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = firstPagePrompt;