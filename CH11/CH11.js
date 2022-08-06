//filesystem
console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban benar ya');

const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let newanswer = JSON.parse(rawdata);

//readline
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan :',
});

// for (let i= 0; i < array.length; index++) {
//   const element = array[index];

// }
let count = 0;
console.log('Pertanyaan :' + newanswer[count]['definition']);
rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case line:
      if (count == newanswer.length - 1) {
        rl.close();
      }

      if (line == newanswer[count]['term']) {
        console.log('Selamat Anda benar !');
        count++;
        console.log('Pertanyaan :' + newanswer[count]['definition']);
        rl.prompt();
        break;
      } else {
        console.log('Wkwkwk, Anda belum beruntung');
      }
  }
}).on('close', () => {
  console.log('Hore Anda menang !');
  process.exit(0);
});
