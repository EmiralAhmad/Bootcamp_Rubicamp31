function stringManipulation(word) {

let text = 'aiueo'
let vokal = text.slice(0,1)
let addition = 'nyo';
//let konsonan =! vokal

if (word.startsWith(vokal)) {
    return word;
} else {
    return word.substr(1,4) + (word.slice(0,1)) + (addition);
}
}

console.log(stringManipulation('ayam'));
console.log(stringManipulation('bebek'));

//solman

//function