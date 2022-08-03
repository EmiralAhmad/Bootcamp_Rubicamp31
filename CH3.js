function romawi(n){
    var romanNumber = {
        //4: 'IV',
        //9: 'IX',
        //13: 'XIII',
        //1453: 'MCDLII',
        //1646: 'MDCXLVI'
        M:1000,
        D:500,
        CD:400,
        C:100,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }
    var roman = '';

    for (key in romanNumber) { 
            while ( n >= romanNumber[key] ) {
                n -= romanNumber[key];
                roman += key;
            }
          }
          return roman;
        }

console.log("Script Testing untuk Konversi Romawi \n");
console.log("input | expected | result");
console.log("----- | -------- | ------");
console.log("4     | IV       | ",romawi(4));
console.log("9     | IX       | ",romawi(9));
console.log("13    | XIII     | ",romawi(13));
console.log("1453  | MCDLIII  | ",romawi(1453));
console.log("1646  | MDCXLVI  | ",romawi(1646));