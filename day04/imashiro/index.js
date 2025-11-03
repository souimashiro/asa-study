const input = "a a b c c";
const arr = input.split(" ");

let found = -1;

for(let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]){
        found = arr[i];
        break;
    }
}

console.log(found);
