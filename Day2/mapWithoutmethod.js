// Write a function that accepts two parameters,arr and callback, and will work like a map.
arr= [1,3,5,7]
function map (arr,cb){
    return cb(arr);
}
function cb(arr){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
       arr2.push(arr[i]*2);
        
    }
    return arr2;

}
console.log (map(arr,cb));