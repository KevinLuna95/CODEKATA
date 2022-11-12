try {
    function calculator (chain) {
        if (chain == "" || chain == undefined) {
            return 0;
        };
        var bandComma = chain.includes(",");
        if(bandComma == true) {
            let numbers = chain.split(/,/);
            var a = 0, b = 0;
            for (let i = 0; i < numbers.length; i++) {
                a = parseInt(numbers[i]);
                b = a + b
            }
            return b;
        };
        var bandNaN = isNaN(chain);
        if (bandNaN == true) {
            return "The value is NaN"
        };
        return parseInt(chain);
    };

    console.log(calculator("2,8,5,6,8"))

} catch (error) {
    console.log(error);
};
module.exports.calculator = calculator;