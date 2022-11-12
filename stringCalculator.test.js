const { calculator } = require('./stringCalculator.js');

describe('String test calculator', () => {

    it('Expect 0 when is empty', () => {
        expect(calculator("")).toEqual(0);
        expect(calculator()).toEqual(0);
    });

    it('Expect a number if function only have 1 number in to the string', () =>{
        expect(calculator("1")).toEqual(1);
        expect(calculator("3")).toEqual(3);
        expect(calculator("9")).toEqual(9);
        expect(calculator("40")).toEqual(40);
        expect(calculator("89")).toEqual(89);
        expect(calculator("154")).toEqual(154);
    });

    it('String has no number, so it returns an error', () =>{
        expect(calculator("a")).toEqual("The value is NaN");
        expect(calculator("hi")).toEqual("The value is NaN");
        expect(calculator("p")).toEqual("The value is NaN");
        expect(calculator("gr")).toEqual("The value is NaN");
        expect(calculator("kl")).toEqual("The value is NaN");
        expect(calculator("John")).toEqual("The value is NaN");
    });

    it('Expect a sum separated 2 numbers with ,', () =>{
        expect(calculator("1,1")).toEqual(2);
        expect(calculator("1,6")).toEqual(7);
        expect(calculator("31,61")).toEqual(92);
        expect(calculator("50,8")).toEqual(58);
        expect(calculator("161,14")).toEqual(175);
        expect(calculator("0,0")).toEqual(0);
    });

});
