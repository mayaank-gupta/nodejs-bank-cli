const welcomeScreen = require('./welcome');
const firstPagePrompt = require('./first-page-prompt');

module.exports = () => {
  welcomeScreen('NodeJS Bank', async function (data) {
    console.clear();
    console.log(data);
    await firstPagePrompt();
    return;
  });
};