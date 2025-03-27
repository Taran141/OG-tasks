
// **IMPORTANT Write a function that will accept an array of objects 
// (values can be any type, arr, obj, str,num) as a parameter, 
// and will return a new array of sum of all numeric values of Object, 
// and if value is an Object or arr calculate the sum of it. **//
const data = [
    { a: 10, b: [5, 10], e: "hello" },
    { x: 2, y: { z: [1, 2, 3], w: 4 }, q: "test" },
    { p: { q: 8 }, s: [2, 3, 4] }
    ];

const sum = data.map((obj)=>
    Object.values(obj)
.flatMap((obj)=>obj)
.filter(value =>typeof value === "number")
.reduce((sum,num)=>sum + num,0));
console.log(sum)