const welcomeScreen = require('./welcome');
const firstPagePrompt = require('./first-page-prompt');

module.exports = function cliOptions() {
  welcomeScreen('NodeJS Bank', async function (data) {
    console.log(data);

    await firstPagePrompt();

  });
};