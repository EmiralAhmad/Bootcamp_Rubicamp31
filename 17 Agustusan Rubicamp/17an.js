worDict = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];

function dictionarylibs(word, worDict) {

    return verifyLibs(word, worDict, 0, '',[]);
};

function verifyLibs (word, dic, start, guessW, memo) {
    console.log(guessW, start)
    if (start === word.length) return true; 
    if (memo[start] !== undefined) return memo[start]
    for (let end = start + 1; end <=  word.length; end++) {
        let guess = word.substring(start, end);

        if(dic.includes(guess) && verifyLibs(word,dic,end, guess, memo)) {
            return memo[start] = true;
        }
    }
    return memo[start] = false;
}

