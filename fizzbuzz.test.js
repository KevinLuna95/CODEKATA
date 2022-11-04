const { res } = require('./fizzbuzz.js');

describe('FizzBuzz test resolve',() => {

    it('expected return a string', () => {
        expect(res(1)).toEqual("1");
        expect(res(2)).toEqual("2");
        expect(res(4)).toEqual("4");
        expect(res(7)).toEqual("7");
        expect(res(8)).toEqual("8");
        expect(res(8)).not.toEqual(11);
        expect(res(8)).not.toEqual(13);
        expect(res(8)).not.toEqual(14);
        expect(res(8)).not.toEqual(16);
        expect(res(8)).not.toEqual(17);
    });

    it('n is multiple of 3 return fizz', () => {
        expect(res(3)).toEqual("Fizz");
        expect(res(9)).toEqual("Fizz");
        expect(res(6)).toEqual("Fizz");
        expect(res(12)).toEqual("Fizz");
        expect(res(18)).toEqual("Fizz");
        expect(res(21)).not.toEqual("21");
        expect(res(24)).not.toEqual("24");
        expect(res(27)).not.toEqual("27");
        expect(res(33)).not.toEqual("33");
        expect(res(36)).not.toEqual("36");

    });

    it('n is multiple of 5 return fizz', () => {
        expect(res(5)).toEqual("Buzz");
        expect(res(10)).toEqual("Buzz");
        expect(res(20)).toEqual("Buzz");
        expect(res(25)).toEqual("Buzz");
        expect(res(35)).toEqual("Buzz");
        expect(res(40)).not.toEqual("40");
        expect(res(50)).not.toEqual("50");
        expect(res(55)).not.toEqual("55");
        expect(res(65)).not.toEqual("65");
        expect(res(70)).not.toEqual("70");
    });

    it('n is multiple of 3 and 5 return fizzbuzz', () => {
        expect(res(15)).toEqual("FizzBuzz");
        expect(res(30)).toEqual("FizzBuzz");
        expect(res(45)).toEqual("FizzBuzz");
        expect(res(60)).toEqual("FizzBuzz");
        expect(res(75)).toEqual("FizzBuzz");
        expect(res(90)).not.toEqual("90");
        expect(res(105)).not.toEqual("105");
        expect(res(120)).not.toEqual("120");
        expect(res(135)).not.toEqual("135");
        expect(res(150)).not.toEqual("150");
    });
});