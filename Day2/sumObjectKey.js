// Write a function that will accept an array of objects (values as numbers) as a parameter, and will return a new array of sum of all values of Object

let arr = [{a:1,b:4},{b:2,c:5}]

function sumObj(arr) {
    return arr.map(obj => 
        Object.values(obj).reduce((sum, num) => sum + num, 0)
        
    );
}


const output = sumObj(arr);
console.log(output);