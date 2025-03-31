const object1 = {
    1: "somestring",
    2: 42,
    3: false,
  };
 
 function object (object1){
  let arr=[]
    for(let key in object1){
      arr.push(key)
    // console.log(key);
    
    }
    return arr;
}
console.log(object(object1));
