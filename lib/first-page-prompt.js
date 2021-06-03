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
        const authData = await authPrompt.askBankCredentials();

        // if (authData && spreadSheetData.length) {
          
        //   spreadSheetData.forEach((el) => {

        //     if (el.includes(authData.username)) {
        //       console.log("hahahaha");
        //     }

        //   })
        // }

      }

      if (answers['theme'] === 'Exit') {
        console.clear();
        process.exit(1);
      }

    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = firstPagePrompt;