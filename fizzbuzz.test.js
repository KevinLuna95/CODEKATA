const { res } = require('./fizzbuzz.js');

describe('FizzBuzz test resolve',() => {

    it('expected return a string', () => {
        expect(res(1)).toEqual("1");
        expect(res(2)).toEqual("2");
        expect(res(4)).toEqual("4");
        expect(res(7)).toEqual("7");
        expect(res(8)).toEqual("8");
    });

    it('n is multiple of 3 return fizz', () => {
        expect(res(3)).toEqual("fizz");
        expect(res(6)).toEqual("fizz");
        expect(res(9)).toEqual("fizz");
        expect(res(12)).toEqual("fizz");
        expect(res(18)).toEqual("fizz");
    });

    it('n is multiple of 3 return fizz', () => {
        expect(res(5)).toEqual("buzz");
        expect(res(10)).toEqual("buzz");
        expect(res(20)).toEqual("buzz");
        expect(res(25)).toEqual("buzz");
        expect(res(35)).toEqual("buzz");
    });
});