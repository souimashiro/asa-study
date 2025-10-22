const alphabets = 'abcdefghijklmnopqrstuvwxyz';

function getRandomAlphabet() {
    let result = '';

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * alphabets.length);
        const randomChar = alphabets[randomIndex];
        result += randomChar;
    }

    const wildCardIndex = Math.floor(Math.random() * 5);
    result = result.substring(0, wildCardIndex) + '?' + result.substring(wildCardIndex + 1);

    return result;
}

console.log(getRandomAlphabet());