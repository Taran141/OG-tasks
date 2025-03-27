// Write a function that will accept an array of objects (values as numbers) as a parameter,
//  and will return a new array of Object with values as index*value. eg [{a:1}, {b:2}] ⇒ [{a:0}, {b:2}]


arr = [{a:1}, {b:2}];
function arrayObj (arr){
    const arr2 = arr.map((item, index) => ({ a: index*item }));
    console.log(arr2);
    
 return arr2;
}
arrayObj(arr);
