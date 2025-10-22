



const testFunc = (s) => {
    console.log(s)

    let str = s.replace(/[^0-9a-z]/gi, '');

    console.log(str)


    if(str[0] == str[1] || str[0] == str[2]) {
        return str[0]
    } else if (str[1] == str[2]) {
        return str[1]
    }
return -1
}


console.log(testFunc("a a b"))
console.log(testFunc("k q k"))
console.log(testFunc("x y z"))