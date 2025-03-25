// Given an object in which values are integer only, print the value if it is prime only

let obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}


function prime (num) {
     let count = 0;
    if(num<=1){
   return true;
}
else{
    for(let i=2;i<=num ; i++ ){
        if(num%i==0){
            count++;
        }
    }
    if(count>=2){
        return false;
    }
    else{
        return true;
   }
}};
for(let ele in obj){
    let v = prime(obj[ele]);
    if(v==true){
        console.log(obj[ele])
    }
}

