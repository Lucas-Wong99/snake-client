const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function() {
    stdin.on('data', (data) => {
      if (data === '\u0003') {
        console.log('Byeee my friends');
        process.exit();
      }
    });
  }
  return handleUserInput();
}

module.exports = {
  setupInput
}