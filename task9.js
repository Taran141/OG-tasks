// Given an object in which values are integer only, print the half for each value (whole numbers). eg. { a: 1, b: 2} ⇒ 0,  1
let obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
for(let ele in obj ){
    console.log(obj[ele]/2);
}