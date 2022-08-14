console.log("Selamat Datang di permainan Tebak-Tebakan, kamu akan diberikan pertanyaan dari file ini 'data.json' untuk bermain, jawablah dengan jawaban yang sesuai");
console.log('Gunakan skip untuk menangguhkan pertanyaan,dan di akhir pertanyaan akan ditanyakan lagi');

const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

//filesystem for read data
const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let newanswer = JSON.parse(rawdata);
// const newArr = Object.values(newanswer)
// console.log(newArr)