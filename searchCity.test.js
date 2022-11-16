const { searchCity } = require("./searchCity");

describe('searchCity is a function that allows to find the name of the city', ()=> {
    it('If the search text is fewer than 2 characters, then should return no results.',()=> {
        expect(searchCity("a")).toEqual(Error("Write 2 or more characrters for find the city"));
        expect(searchCity("l")).toEqual(Error("Write 2 or more characrters for find the city"));
        expect(searchCity("e")).toEqual(Error("Write 2 or more characrters for find the city"));
        expect(searchCity("b")).toEqual(Error("Write 2 or more characrters for find the city"));
        expect(searchCity("z")).toEqual(Error("Write 2 or more characrters for find the city"));
        expect(searchCity("as")).not.toEqual(Error("Write 2 or more characrters for find the city"));
        expect(searchCity("as")).not.toEqual(Error("Write 2 or more characrters for find the city"));
    });

    it('If the search text is equal to or more than 2 characters, then it should return all the city names starting with the exact search text', ()=> {
        expect(searchCity("Pa")).toEqual("Paris");
        expect(searchCity("Bu")).toEqual("Budapest");
        expect(searchCity("Ho")).toEqual("Hong Kong");
        expect(searchCity("Ba")).toEqual("Bangkok");
    });
    it('The search functionality should be case insensitive', ()=> {
        expect(searchCity("pa")).toEqual("Paris");
        expect(searchCity("ho")).toEqual("Hong Kong");
        expect(searchCity("ba")).toEqual("Bangkok");
        expect(searchCity("is")).toEqual("Istanbul");
        expect(searchCity("sy")).toEqual("Sydney");
        expect(searchCity("du")).toEqual("Dubai");
    });
});