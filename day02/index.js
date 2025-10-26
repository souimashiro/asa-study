const alphabets = 'abcdefghijklmnopqrstuvwxyz';

function getRandomAlphabet() {
    let result = '';

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * alphabets.length);
        const randomChar = alphabets[randomIndex];
        result += randomChar + (i < 4 ? ' ' : '');
    }

     const shouldIncludeWildCard = Math.random() < 0.5;

     if (!shouldIncludeWildCard) {
         const wildCardIndex = Math.floor(Math.random() * 5);
        const resultArr = result.split(' ');
        resultArr[wildCardIndex] = '?';
        return resultArr.join(' ');
     }

     return result;
}

console.log(getRandomAlphabet());