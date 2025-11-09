
const checkFunc = (s) => {
  const arr = s.trim().split(/\s+/).filter(Boolean);      
  if (arr.length < 2) return -1;
  if (arr.some(t => t.startsWith('#'))) return -1;   
  if (arr.every(t => t === arr[0])) return -1;  

  let count = 0;
  let tag = null;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      tag = arr[i];
      if (count > 1) return -1;         
    }
  }
//   console.log(tag)
  return count === 1 ? tag : -1;              
};

console.log(checkFunc("apple banana cherry cherry date egg fig grape honey kiwi lemon mango nut orange peach"));           // cherry
console.log(checkFunc("apple apple banana cherry date egg fig grape grape honey kiwi lemon mango nut orange"));            // -1
console.log(checkFunc("apple banana cherry date egg fig grape honey kiwi lemon mango nut orange peach plum"));             // -1
