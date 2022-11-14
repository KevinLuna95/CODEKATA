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
    
    it('add all the values ​​unknown the number of numbers', () =>{
        expect(calculator("1,1,3,6")).toEqual(11);
        expect(calculator("1,6,66")).toEqual(73);
        expect(calculator("31,61,6,8,10,33")).toEqual(149);
        expect(calculator("0,0,0,0,0")).toEqual(0);
    });

    it('use "\n" as a separator', () =>{
        expect(calculator("1,2\n3")).toEqual(6);
        expect(calculator("2,8\n4")).toEqual(14);
        expect(calculator("9,21\n36")).toEqual(66);
        expect(calculator("50,21,5\n1")).toEqual(77);
        expect(calculator("5,3\n7\n2")).toEqual(17);
        expect(calculator("7,6\n9\n1\n4")).toEqual(27);
        expect(calculator("9,1,6,8\n5\n8\n3\n6\n1")).toEqual(47);
    });

    it('use other separators', () =>{
        expect(calculator("1,2|3")).toEqual(6);
        expect(calculator("2,8sep4")).toEqual(14);
        expect(calculator("9,21;36")).toEqual(66);
        expect(calculator("50,21sep5;1")).toEqual(77);
        expect(calculator("5,3|7\n2")).toEqual(17);
        expect(calculator("7,6;9sep1;4")).toEqual(27);
        expect(calculator("9,1;6|8\n5sep8,3sep6;1")).toEqual(47);
    });


});
