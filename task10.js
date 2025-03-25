// Given an array of strings, print the strings with even length, e.g [a, b, cat, ff, dog] output = [ff]
let arr = [ 'a', 'b', 'cat', 'ff', 'dog']

for(let i=0; i<arr.length;i++){
    if(arr[i].length %2==0){
    console.log(arr[i])
    }
 
 }