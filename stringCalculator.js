function calculator (chain) {
    if (chain == "" || chain == undefined) {
        return 0;
    }
    return parseInt(chain);
}
console.log(calculator("2"));
module.exports.calculator = calculator;