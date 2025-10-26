const alphabets = 'abcdefghijklmnopqrstuvwxyz';

function getRandomAlphabet() {
    const tokenCount = 6;
    let result = [];

    for (let i = 0; i < tokenCount; i++) {
        const randomIndex = Math.floor(Math.random() * alphabets.length);
        const randomChar = alphabets[randomIndex];
        result.push(randomChar);
    }
    return result.join(' ');
}

    console.log(getRandomAlphabet());
