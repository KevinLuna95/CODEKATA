const { validation } = require('./password.js');

describe ('validator for the password field of a user registration form', () => {

    it ('Password need +8 characters long', () =>{
        expect(validation("12345678")).toBe(true);
        expect(validation("qwerasdf")).toBe(true);
        expect(validation("as45/*rt651fg")).toBe(true);
        expect(validation("/*-+'()%")).toEqual(true);
        expect(validation("qweras")).toEqual(Error("Password must be at least 8 characters"));
        expect(validation("12345")).toEqual(Error("Password must be at least 8 characters"));
        expect(validation("/*-+")).toEqual(Error("Password must be at least 8 characters"));
        expect(validation("d5*")).toEqual(Error("Password must be at least 8 characters"));
    })




});