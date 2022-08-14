const process = require('process')
let arguments = process.argv

const fs = require('fs');
const { command } = require('yargs');
const rawdata = fs.readFileSync('datalist.json','utf-8');
const newanswer = JSON.parse(rawdata);

if (arguments[2] === null) {
    console.log(">>> JS TODO <<<")
    console.log("$ node todo.js <command>")
    console.log('$ node todo.js list');
    console.log('$ node todo.js task <task_id>');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');   
    console.log('$ node todo.js uncomplete <task_id>');
    console.log('$ node todo.js list: outstanding asc|desc');
    console.log('$ node todo.js list: completed asc|desc');
    console.log('$ node todo.js tag <task_id>');
    console.log('$ node todo.js filter: <tag_name>');
 
} else if (arguments[2] === 'add'){
    var isi = arguments.slice(3).join(' ')
    newanswer.push({'command': '[ ]', 'kerjaan': isi})
    fs.writeFileSync("datalist.json",(JSON.stringify(newanswer)),'utf-8');    
    console.log(`"${isi}" telah ditambahkan`)    

} else if (arguments[2] === 'list') {
    console.log('Daftar Pekerjaan'); 
    var nomor = 1
    for (let i = 0; i < newanswer.length; i++) {
        console.log(`${nomor}.`, newanswer[i]['command'], newanswer[i]['kerjaan']); 
        nomor++
    } 
} else if (arguments[2] === 'delete') {

    console.log(`"${newanswer[arguments[3] - 1]['kerjaan']}" telah dihapus dari daftar`); //arguments 3 = delete dikurangi 1 supaya bisa mengurangi kata kata argumennya
    newanswer.splice([(arguments[3] - 1)],1) // mencari array yang dihapus
    fs.writeFileSync('datalist.json', JSON.stringify(newanswer), 'utf-8');  
    //supaya jadi 0 makanya dikurangi 1

} else if (arguments[2] === 'complete') {
  console.log(`"${newanswer[arguments[3] - 1]['kerjaan']}" telah selesai`); //arguments 3 = delete dikurangi 1 supaya bisa mengurangi kata kata argumennya
  newanswer[arguments[3] - 1]['command'] = '[x]'
  // declare telah selesai hanya dengan menambahkan = 
  fs.writeFileSync('datalist.json', JSON.stringify(newanswer), 'utf-8');

} else if (arguments[2] === 'help') {
    
        console.log('>>> JS TODO <<<');
        console.log('$ node todo.js <command>');
        console.log('$ node todo.js list');
        console.log('$ node todo.js task <task_id>');
        console.log('$ node todo.js add <task_content>');
        console.log('$ node todo.js delete <task_id>');
        console.log('$ node todo.js complete <task_id>');
        console.log('$ node todo.js uncomplete <task_id>');
        console.log('$ node todo.js list: outstanding asc|desc');
        console.log('$ node todo.js list: completed asc|desc');
        console.log('$ node todo.js tag <task_id>');
        console.log('$ node todo.js filter: <tag_name>');

} else if (arguments[2] === 'uncomplete') {

    console.log(`"${newanswer[arguments[3] - 1]['kerjaan']}" status selesai dibatalkan`); //arguments 3 = delete dikurangi 1 supaya bisa mengurangi kata kata argumennya
    newanswer[arguments[3] - 1]['command'] = '[]';
    // declare telah membatalkan hanya dengan menambahkan = []
    fs.writeFileSync('datalist.json', JSON.stringify(newanswer), 'utf-8');

} else if (arguments[2] === 'list:outstanding' && arguments[3] === 'asc') {
     var nomor = 1;
    console.log('Daftar Pekerjaan');
        for (let i = 0; i < newanswer.length; i++) {
        if (newanswer[i]['command'] === '[ ]') {
        // newanswer.sort(function (a, b) {return a - b;});
        console.log(`${nomor}.`, newanswer[i]['command'], newanswer[i]['kerjaan']);
        nomor++;

         } 
    }
} else if (arguments[2] === 'list:outstanding' && arguments[3] === 'desc') {
     var nomor = newanswer.length - 1;
     console.log('Daftar Pekerjaan');
     for (let i = 0; i < newanswer.length; i++) {
       if (newanswer[i]['command'] === '[ ]') {
         // newanswer.sort(function (a, b) {return a - b;});
         console.log(`${nomor}.`, newanswer[i]['command'], newanswer[i]['kerjaan']);
         nomor--;
       }
     }

  fs.writeFileSync('datalist.json', JSON.stringify(newanswer), 'utf-8');

} else if (arguments[2] === 'list:completed' && arguments[3] === 'desc') {
    var nomor = newanswer.length - 1;
    console.log('Daftar Pekerjaan');
    for (let i = 0; i < newanswer.length; i++) {
      if (newanswer[i]['command'] === '[x]') {
        // newanswer.sort(function (a, b) {return a - b;});
        console.log(`${nomor}.`, newanswer[i]['command'], newanswer[i]['kerjaan']);
        nomor--;
      }
    }
    fs.writeFileSync('datalist.json', JSON.stringify(newanswer), 'utf-8');

} else if(arguments[2] === 'list:completed' && arguments[3] === 'asc') {
    var nomor = 1;
    console.log('Daftar Pekerjaan');
    for (let i = 0; i < newanswer.length; i++) {
      if (newanswer[i]['command'] === '[x]') {
        // newanswer.sort(function (a, b) {return a - b;});
        console.log(`${nomor}.`, newanswer[i]['command'], newanswer[i]['kerjaan']);
        nomor++;
      }
    }
    fs.writeFileSync('datalist.json', JSON.stringify(newanswer), 'utf-8');

} else if (arguments[2] === 'tag' && arguments[3] && arguments[4]) {
  var c = []
  for (let n = 4; n <= arguments.length - 1; n++) {
    //
    c.push(arguments[n])
  }
  var gabungan = c.join()
  console.log(`"${gabungan}" telah ditambahkan ke daftar ${newanswer[(arguments[3] - 1)]['kerjaan']}`);
  newanswer[arguments[3] - 1]['tag'] = c;
  fs.writeFileSync('datalist.json', JSON.stringify(newanswer), 'utf-8');
    
} else if (arguments[2].includes('filter:')) {
  var z = arguments[2].split(":")
  // [filter, masak]
  console.log('Daftar Pekerjaan');
  var nomor = 1
    for (let i = 0; i < newanswer.length; i++) {
      if(newanswer[i]['tag'].includes(z[i])) {
        console.log(`${nomor}.`, newanswer[i]['command'], newanswer[i]['kerjaan']); 
        nomor++
      }
    } 
  fs.writeFileSync('datalist.json', JSON.stringify(newanswer), 'utf-8');
}