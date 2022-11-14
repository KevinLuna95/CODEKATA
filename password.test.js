const { validation } = require('./password.js');

describe ('validator for the password field of a user registration form', () => {

    it ('Password need +8 characters long', () =>{
        expect(validation("12345678")).toBe(true);
        expect(validation("qwerasdf")).toBe(true);
        expect(validation("/*-+'()")).toBe(true);
        expect(validation("as45/*rt651fg")).toBe(true);
        expect(validation("qweras")).toBe(false);
        expect(validation("12345")).toBe(false);
        expect(validation("/*-+")).toBe(false);
        expect(validation("d5*")).toBe(false);
    })

});