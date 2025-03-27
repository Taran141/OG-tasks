
// Write a function that will accept an array of objects (values can be any type, arr, obj, str,num) as a parameter, and will return a new array of sum of all numeric values of Object
// eg.  [{a:1, b: 4}, {b:2}]] ⇒ [5, 2]
function numAdd(arr){
    return arr.map(obj =>
        Object.values(obj)
            .filter(value => typeof value === 'number')
            .reduce((sum,num)=>sum + num,0)
        );
}

let arr = [{ a: 1, b: 4 }, { b: 2, c:5 }, { x: 10, y: "hii", z: "test" }];
console.log(numAdd(arr));
