function res (n) {
    if (n % 3 === 0 && n % 5 === 0){
        return "FizzBuzz"    
    }  

    if (n % 3 === 0){
        return "Fizz"    
    }  

    if (n % 5 === 0){
        return "Buzz"

    } else{
        return `${n}`
    }
};
function bucle (){
    for (let i = 0; i < 200; i++) {
        console.log(res(i));
    }
}

module.exports.res = res;