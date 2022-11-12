const { calculator } = require('./stringCalculator.js');

describe('Calculator string test', () => {

    it('expect 0 when is empty', () => {
        expect(calculator("")).toEqual(0);
        expect(calculator()).toEqual(0);
    });

    it('ecpect a number if function only have 1 number in to the string', () =>{
        expect(calculator("1")).toEqual(1);
        expect(calculator("3")).toEqual(3);
        expect(calculator("9")).toEqual(9);
        expect(calculator("40")).toEqual(40);
        expect(calculator("89")).toEqual(89);
        expect(calculator("154")).toEqual(154);
    });

});
