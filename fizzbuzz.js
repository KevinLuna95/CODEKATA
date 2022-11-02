function res (n) {
    if (n % 3 === 0){
        return "fizz"
        
    } else{
        return `${n}`
    }
};

module.exports.res = res;