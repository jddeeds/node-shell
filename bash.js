var commands = require('./commands.js');


// Output a prompt
process.stdout.write('Welcome to Mary and Joseph\'s shell> ');
// The stdin 'data' event fires after a user types in a line


process.stdin.on('data', function (data) {
  var input = data.toString().trim().split(' ');
  var cmd = input[0];//data.toString().trim(); // remove the newline
  var args = input.slice(1).join();
  //console.log('args ',  args)
  //console.log('input ', input);
  //console.log('cmd ', cmd);
  commands[cmd](args)
  process.stdout.write('\nprompt > ');

});



