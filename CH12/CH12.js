//processargv
const process = require('process');
let arguments = process.argv;

if (process.argv.length <= 2) {
  console.log(`Tolong sertakan nama file sebagai inputan soalnya contoh CH12.js data.json`);
} else {
  console.log(`Selamat Datang di permainan Tebak-Tebakan, kamu akan diberikan pertanyaan dari file ini ${process.argv[2]} jawablah dengan jawaban yang sesuai`);
  console.log('Gunakan skip untuk menangguhkan pertanyaan,dan di akhir pertanyaan akan ditanyakan lagi');
}

if (arguments[2]) {
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
  let indexsalah = [1];

  rl.on('line', (line) => {
    if (line.toLowerCase() === 'skip') {
      newanswer.push(newanswer[count]);
      newanswer.splice(newanswer[count], 1);
      // newanswer.push(newanswer[count]);
      console.log('Pertanyaan :' + newanswer[count]['definition']);
      rl.prompt();
    }

    if (count === newanswer.length - 1) {
      rl.close();
      if (line == newanswer[count]['term']) {
        console.log('Anda Beruntung !');
        console.log('Anda Berhasil');
        process.exit(count++);
      }
    }

    if (line.toLowerCase() === newanswer[count]['term']) {
      console.log('Anda Beruntung!');
      count++;
      console.log('Pertanyaan :' + newanswer[count]['definition']);
      rl.prompt();
    } else if (line !== 'skip' && line !== newanswer[count]['term']) {
      console.log(`Anda kurang beruntung anda telah salah ${indexsalah++} kali, silahkan coba lagi`);
      rl.prompt();
    }
  });
}
