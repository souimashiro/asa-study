const alphabets = 'abcdefghijklmnopqrstuvwxyz';

function getRandomAlphabet() {
    const tokenCount = 6;
    let result = [];

    for (let i = 0; i < tokenCount; i++) {
        const randomIndex = Math.floor(Math.random() * alphabets.length);
        const randomChar = alphabets[randomIndex];
        result.push(randomChar);
    }
    return result;
}

function countCharacters(arr) {
    const countMap = {};

    for (const char of arr) {
        if (countMap[char]) {
        countMap[char]++;
        } else {
        countMap[char] = 1;
        }
    }
    
    return countMap;
}

const randomAlphabets = getRandomAlphabet();
console.log(randomAlphabets); 

const counts = countCharacters(randomAlphabets);
console.log(counts); 