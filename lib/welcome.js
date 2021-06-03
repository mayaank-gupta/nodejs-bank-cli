var figlet = require('figlet');
const { createPromptModule } = require('inquirer');

function art(dataToArt, callback) {
  figlet(dataToArt, {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true
  }, function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return callback('');
    }

    callback(data);
  });
}

module.exports = art;