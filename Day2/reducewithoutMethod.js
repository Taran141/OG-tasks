// Write a function that accepts two parameters,arr and callback, and will work like reduce
let arr = [1,5,8,7,2]
function Reduce (arr,cb) {
    const total = cb(arr);
    console.log(total);
    
    return total;
}

function cb(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum= sum + arr[i];
        
    }
    return sum;
}
Reduce(arr,cb);