function sum(){
    var a = 0
    for (var i = 0; i < arguments.length; i++){
        a += arguments[i];
    }
    return a;
}

console.log((sum(1,2,7)));
console.log((sum(1,4)));
console.log((sum(11)));
console.log((sum(10,3,6,7,9)));