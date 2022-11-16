const { searchCity } = require("./searchCity");

describe('searchCity is a function that allows to find the name of the city', ()=> {
    it('If the search text is fewer than 2 characters, then should return no results.',()=> {
        expect(searchCity("a")).toBe(/write 2 or more characrters for find the city/);
        expect(searchCity("l")).toBe(/write 2 or more characrters for find the city/);
        expect(searchCity("e")).toBe(/write 2 or more characrters for find the city/);
        expect(searchCity("b")).toBe(/write 2 or more characrters for find the city/);
        expect(searchCity("z")).toBe(/write 2 or more characrters for find the city/);
    });
});