const { validation } = require('./password.js');

describe ('validator for the password field of a user registration form', () => {

    it ('Password need +8 characters long', () =>{
        expect(validation("12345678")).toBe(true);
        expect(validation("qwerasdf")).not.toBe(true); //don't have 2 numbers, after is true but now is an error
        expect(validation("as45/*rt651fg")).toBe(true);
        expect(validation("/*-+'()%")).not.toBe(true); //don't have 2 numbers, after is true but now is an error
        expect(validation("qweras")).toEqual(Error("Password must be at least 8 characters"));
        expect(validation("12345")).toEqual(Error("Password must be at least 8 characters"));
        expect(validation("/*-+")).toEqual(Error("Password must be at least 8 characters"));
        expect(validation("d5*")).toEqual(Error("Password must be at least 8 characters"));
    })

    it ('Password contain 2 numbers', () =>{
        expect(validation("12345678")).toBe(true);
        expect(validation("qw7rasd2")).toBe(true);
        expect(validation("as45/*rt651fg")).toBe(true);
        expect(validation("46qwerasdf")).toEqual(true);
        expect(validation("qwe5asdk")).toEqual(Error("The password must contain at least 2 numbers"));
        expect(validation("1/*-kldv")).toEqual(Error("The password must contain at least 2 numbers"));
        expect(validation("/*-+*/--/")).toEqual(Error("The password must contain at least 2 numbers"));
        expect(validation("eightdigits")).toEqual(Error("The password must contain at least 2 numbers"));
    })


});