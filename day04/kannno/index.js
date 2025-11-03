



const testFunc = (s) => {

    const str = s.split(/[ ,;]+/);


for (let i = 1; i < str.length; i++) {
  if (str[i] === str[i - 1]) {
    return str[i]
  } else {
    return -1
  }
}

}





console.log(testFunc("a a b a a"))
console.log(testFunc("x y z"))
console.log(testFunc("m m m n n"))