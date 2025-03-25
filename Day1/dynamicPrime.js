// print first N prime numbers, N is dynamic
// var num = prompt("enter a number");
let num = 9;
function prime (num) {
    let count = 0;
   if(num<=1){
  return false;
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
for(let i=0;i<=num;i++){
  if(prime(i)){
    console.log(i)
  }
}