function indexPrime(param1){
var x = [2]
for (let i = 2; i++;) {
    let prime = true;
      for(let j = 2; j < i ; j++){
        if (i%j == 0){
            prime = false
        } 
      }

      if(prime == true){
        x.push(i)
      } 
      if(x.length >= param1){
        break;
      }
}

    return x[param1-1];

}

console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))