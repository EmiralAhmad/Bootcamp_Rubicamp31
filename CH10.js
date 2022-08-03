const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini> ',
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case line:
      const mysplit = line.split(' '); 
      let text = '';

      for (let i = 0; i < mysplit.length; i++) {
        if (mysplit[i].startsWith('a') || mysplit[i].startsWith('i') || mysplit[i].startsWith('u') || mysplit[i].startsWith('e') || mysplit[i].startsWith('o')) {
          text += mysplit[i] + ' ';
        } else {
          text += mysplit[i].substring(1, mysplit[i].length) + mysplit[i].slice(0, 1) + 'nyo' + ' ';
        }
      }
      console.log(text);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Good bye!');
  process.exit(0);
});
