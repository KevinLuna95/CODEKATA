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
});