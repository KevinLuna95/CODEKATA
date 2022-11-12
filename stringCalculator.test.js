const { calculator } = require('./stringCalculator.js');

describe('Calculator string test', () => {

    it('expect "0", "n" and result sum string', () => {
        expect(calculator("")).toEqual(0);
    });

});
