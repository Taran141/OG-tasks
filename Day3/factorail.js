
function fact(n){
    if(n>=1){
        return n*fact(n-1);
    }else{
        return 1;
    }
}
console.log(fact(5));