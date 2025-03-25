let num = 9;
let count = 0;

if(num<=1){
    console.log("number is prime");
}
else{
    for(let i=2;i<=num ; i++ ){
        if(num%i==0){
            count++;
        }
    }
    if(count>=2){
        console.log("is not a prime")
    }
    else{
        console.log("Is a prime")
    }
}