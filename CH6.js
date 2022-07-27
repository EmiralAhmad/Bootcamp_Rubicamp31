function sentencesManipulation(sentence) {

const mysplit = sentence.split(" "); // ['aku','pergi','ke','pasar','bersama','ibu']
let text = "";


for (let i = 0; i < mysplit.length; i++){
if (mysplit[i].startsWith('a') ||  mysplit[i].startsWith('i') || 
mysplit[i].startsWith('u') || mysplit[i].startsWith('e') || mysplit[i].startsWith('o')) {
    text += mysplit[i] + " "
} else {
    text += (mysplit[i].substring(1,mysplit[i].length) + mysplit[i].slice(0,1) + 'nyo' + " ")
}
}
return text;

}
console.log(sentencesManipulation('aku pergi ke pasar bersama ibu'))