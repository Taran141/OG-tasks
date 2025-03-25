// - Given an object in which values are integer only, print the double for each value only. eg. { a: 1, b: 2} ⇒ 2, 4

let obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}

for(let ele in obj){
    console.log(obj[ele]*2)
}