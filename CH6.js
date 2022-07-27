function sentencesManipulation(sentence) {

let kata = 'nyo'
let a = sentence.slice(0,3) // = ibu 
let b = sentence.slice(4,9) // = pergi
let c = sentence.slice(10,12) //= ke 
let d = sentence.slice(13,18) //= pasar
let e = sentence.slice(19,26) //= bersama
let f = sentence.slice(27,30) //= aku

if (sentence)
    return (a + " "  + b.substr(1,4) + b.slice(0,1) + kata + " " + 
    c.substr(1,2)) + c.slice(0,1) + kata + " " + d.substr(1,4) + 
    d.slice(0,1) + kata + " " + e.substr(1,6) + e.slice(0,1) + kata
    + " " + f
}

console.log(sentencesManipulation('ibu pergi ke pasar bersama aku'))