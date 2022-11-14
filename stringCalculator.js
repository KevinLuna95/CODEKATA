try {
    function calculator (chain) {
        if (chain == "" || chain == undefined) {
            return 0;
        };
        var bandComma = chain.includes("," || "\n");
        if(bandComma == true) {
            var bandSep = chain.search(/,$|\n$/gm);
            if (bandSep != -1 ){
                return "Value contains separator at end of text and is not allowed or the declaration is invalid"
            }

            let numbers = chain.split(/,|\n|\||;|sep/);
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

    console.log(calculator("31,40\n"))

} catch (error) {
    console.log(error);
};
module.exports.calculator = calculator;