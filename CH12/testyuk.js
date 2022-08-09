console.log("Selamat Datang di permainan Tebak-Tebakan, kamu akan diberikan pertanyaan dari file ini 'data.json' untuk bermain, jawablah dengan jawaban yang sesuai");
console.log('Gunakan skip untuk menangguhkan pertanyaan,dan di akhir pertanyaan akan ditanyakan lagi');

//processargv 
const process = require('process')
let arguments = process.argv

if(arguments[2]) {
    const fs = require('fs');
    let rawdata = fs.readFileSync(arguments[2]);
    let newanswer = JSON.parse(rawdata);
    
    
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan :',
});

let count = 0;
console.log('Pertanyaan :' + newanswer[count]['definition']);
rl.prompt();
let indexsalah = [1]

rl.on('line', (line) => {
  switch (line.trim()) {
    case line:

        if (line == 'skip') {
        count++;
        console.log('Pertanyaan :' + newanswer[count]['definition']);
        newanswer.push(newanswer[count]);
        newanswer.splice(newanswer[count],1)
        }

      if (count == newanswer.length - 1) {
        rl.close();
        if (line == newanswer[count]['term']) {
          console.log('Anda Beruntung !')
          console.log('Anda Berhasil');
          process.exit(count++);
        }
      }

      if (line == newanswer[count]['term']) {
        console.log('Anda Beruntung!');
        count++;
        console.log('Pertanyaan :' + newanswer[count]['definition']);
        rl.prompt();
        break;
      } else if (line !== newanswer[count]['term']) {
        console.log(`Anda kurang beruntung anda telah kalah ${indexsalah++} kali, silahkan coba lagi`);
        rl.prompt();
        if (line == newanswer[count]['term']) {
          console.log('Anda Beruntung!');
          count++;
          console.log('Pertanyaan :' + newanswer[count]['definition']);
          rl.prompt();
        }
      }
}});
} else {
    console.log('error')
}