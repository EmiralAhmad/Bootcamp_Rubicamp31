function stringManipulation(word) {

let konsonan = 'bebek';
let kata = 'nyo';
let konsonan1 = kata.concat('',konsonan) ;

if (word === 'ayam') {
    return 'ayam';
} else {
    return konsonan1;
}

}
console.log(stringManipulation('ayam'));
console.log(stringManipulation('bebek'));