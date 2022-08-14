const process = require('process');
let arguments = process.argv;

const fs = require('fs');
const { command, strictCommands, check } = require('yargs');
let rawdata = fs.readFileSync('datalist.json');
let newanswer = JSON.parse(rawdata);

if (arguments[3] == null) {
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
} 

if (command === 'add') {
    if (check && activity) {
        commands.add (check,activity)
    }
  let inputan = '';
  for (let i = 3; i < arguments.length; i++) {
    inputan += `${arguments[i]} `;
  }
  console.log(`${inputan}telah ditambahkan`);
} else if (arguments[2] === 'list') {

} else if (arguments[2] === 'delete') {

} else if (arguments[2] === 'complete') {

} else if (arguments[2] === 'uncomplete') {

} else if (arguments[2] === 'list: outstanding asc|desc') {

} else if (arguments[2] === 'list: completed asc|desc') {

} else if (arguments[2] === 'tag') {

} else if (arguments[2] === 'filter') {

}
