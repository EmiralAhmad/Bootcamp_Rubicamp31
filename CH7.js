function weirdMultiply(sentence) {
const oldmultiply = sentence.toString().split(''); 
// ['3', '9']
// ['9', '9', '9']
// ['3']
var newmultiply = oldmultiply.map(Number)
var d = newmultiply.length
var total = 1
    
if (d == 1)
return newmultiply[0]
    
for (let i = 0; i < newmultiply.length; i++){
if (newmultiply[i] < 0) {
return -1
} else if (newmultiply[i] == 0){
return 0 
} else {
total *= newmultiply[i]; 
}
}
return weirdMultiply(total)
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));