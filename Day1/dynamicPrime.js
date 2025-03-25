// print first N prime numbers, N is dynamic
// var num = prompt("enter a number");
let num = 9;
for(let i=0;i<num;i++){
if(num<=1){
    console.log(1);
}
else{
    for(let i=2;i<=num ; i++ ){
        if(num%i!=0){
            console.log(i)
        }
    }
}}
