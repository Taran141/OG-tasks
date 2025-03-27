const data = [
    { a: 10, b: [5, 10], e: "hello" },
    { x: 2, y: { z: [1, 2, 3], w: 4 }, q: "test" },
    { p: { q: 8 }, s: [2, 3, 4] }
    ];

const sum = data.map((item,index)=>({item}));
console.log(sum)