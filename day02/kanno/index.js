

const testFunc = (s , test) => {
    // console.log(s)
    // console.log(test)
   const array = s.split(/[ ,;]+/);
//    const array2 = s.match(/[ ,;]+/);
//    const arr = Array.from(s)
//    console.log(array)
//    console.log(arr)

   const result = array.map(element => element.replace("?", test) );

   console.log(result)

    const counts = {};
    let maxCount = 0;
    let results = null;

    for (const str of result) {
    // 現在の文字列のカウントをインクリメント
    counts[str] = (counts[str] || 0) + 1;

    
    // もし現在のカウントが最大値より大きければ、最大値と結果を更新
    if (counts[str] > maxCount) {
        maxCount = counts[str];
        results = str;
    }
    console.log(maxCount)
    // if(counts[str] <= 2) {
    //     return -1
    // }


  }
   
   return results
}

console.log(testFunc("a b a ? c", "a"))
// console.log(testFunc("x y z x ?"))
// console.log(testFunc("b b ? a a"))
// console.log(testFunc("a b c d e"))