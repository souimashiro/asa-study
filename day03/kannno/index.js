const testFunc = (s) => {
    // console.log(s)
    // if(s.length < 3) {
    //     return
    // }
    // const array = s.split(/[ ,;]+/);
    // console.log(array)
    let str = s.replace(/\s+/g, "");
    // console.log(str)


    const charMap = {};
    let maxNum = 0;
    let maxChar = "";

    str.split("").forEach(function(char) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    // console.log(charMap)

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    // console.log(str.length/2)
    // console.log(maxNum)

    if (maxNum <= str.length/2) {
        return -1
    }
    
    return maxChar;
}

console.log(testFunc("a a b a c a"))
console.log(testFunc("x y x z"))
console.log(testFunc("m m m m n"))