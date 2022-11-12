try {
    function calculator (chain) {
        band = isNaN(chain);
        if (chain == "" || chain == undefined) {
            return 0;
        } else if (band == true){
            throw new Error("The value is NaN");
        }
        return parseInt(chain);
    }
    console.log(calculator("a"));
    
} catch (error) {
    console.log(error);
}
module.exports.calculator = calculator;