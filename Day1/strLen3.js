// Given an array of strings, print the strings with length 3, e.g [a, b, cat, f, dog] output = [cat, dog]

let arr=['a', 'b', 'cat', 'f', 'dog']

console.log(arr[2].length)

// for(let i of arr){
//    let v= arr[i].split();
//    console.log(v);


// }
for(let i=0; i<arr.length;i++){
   if(arr[i].length == 3){
   console.log(arr[i])
   }

}
