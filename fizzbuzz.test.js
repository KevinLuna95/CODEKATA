const { res } = require('./fizzbuzz.js');

describe('FizzBuzz test resolve',() => {

    it('expected return a string', () => {
        expect(res(1)).toEqual("1");
        expect(res(2)).toEqual("2");
        expect(res(3)).toEqual("3");
        expect(res(6)).toEqual("6");
        expect(res(10)).toEqual("10");
    });

});