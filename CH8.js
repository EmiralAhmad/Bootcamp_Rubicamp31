function pola (str) {

    var bilangan = str.split(' ')
    
    // [ '42#3', '*', '188', '=', '80#204' ]
    // [ '8#61', '*', '895', '=', '78410#5' ]
    
    //var y = bilangan.splice(0,1,'A')
    //var x = bilangan.splice(4,1,'C')
    var b = bilangan[0]
    var z = bilangan[2]
    var a = bilangan[4]
    
    var pagarb = b.indexOf('#')
    var pagara = a.indexOf('#')
    
    
    
    //var s = b.replace('#','0')
    //var f = a.replace('#','0')
    
    
    for (let i = 0; i <= 9; i++){
        var s = b.replace('#',i)
    for (let j = 0; j <= 9; j++){
        var f = a.replace('#',j)
    if (s * z == f){
    return [parseInt(i),parseInt(j)]
    }
    }
    }
    }
    
    
    console.log(pola("42#3 * 188 = 80#204"))
    console.log(pola("8#61 * 895 = 78410#5"))