const { validation } = require('./password.js');

describe ('validator for the password field of a user registration form', () => {

    it ('Password need +8 characters long', () => {
        expect(validation("12345678")).not.toBe(true);
        expect(validation("qwerasdf")).not.toBe(true); //don't have 2 numbers, after is true but now is an error
        expect(validation("As45/*rt651fg")).toBe(true);
        expect(validation("/*-+'()%")).not.toBe(true); //don't have 2 numbers, after is true but now is an error
        expect(validation("1234Q")).toEqual(Error("Password must be at least 8 characters"));
        expect(validation("12W45")).toEqual(Error("Password must be at least 8 characters"));
    })
    
    it ('Password contain 2 numbers', () => {
        expect(validation("A12345678")).toBe(true);
        expect(validation("qw7raSd2")).toBe(true);
        expect(validation("as45/*rT651fg")).toBe(true);
        expect(validation("46qweraTdf")).toEqual(true);
        expect(validation("qwe5aSdK")).toEqual(Error("The password must contain at least 2 numbers"));
        expect(validation("1/*-Kldv")).toEqual(Error("The password must contain at least 2 numbers"));
        expect(validation("/*-+*/--W/")).toEqual(Error("The password must contain at least 2 numbers"));
        expect(validation("eightDigits")).toEqual(Error("The password must contain at least 2 numbers"));
    })

    it('Password contain one capital letter', () => {
        expect(validation("Hello199")).toBe(true);
        expect(validation("mR5l39lK")).toBe(true);
        expect(validation("osp85-KL")).toBe(true);
        expect(validation("4A4524663")).toBe(true);
        expect(validation("/=sd09JS")).toBe(true);
        expect(validation("6ello199")).toEqual(Error("Password must contain at least one capital letter"));
        expect(validation("sdadfjh52")).toEqual(Error("Password must contain at least one capital letter"));
        expect(validation("sdfdf89df")).toEqual(Error("Password must contain at least one capital letter"));
        expect(validation("/*dfd54df")).toEqual(Error("Password must contain at least one capital letter"));
        expect(validation("fghfvbn59")).toEqual(Error("Password must contain at least one capital letter"));
    });
    
    it('If pasword not have all requires return explicit error', () => {
        expect(validation("qWeras")).toEqual(Error("Password must be at least 8 characters and must contain at least 2 numbers"));
        expect(validation("/*A+")).toEqual(Error("Password must be at least 8 characters and must contain at least 2 numbers"));
        expect(validation("D5*")).toEqual(Error("Password must be at least 8 characters and must contain at least 2 numbers"));
        expect(validation("6eKl*/")).toEqual(Error("Password must be at least 8 characters and must contain at least 2 numbers"));
        expect(validation("D/*")).toEqual(Error("Password must be at least 8 characters and must contain at least 2 numbers"));
        expect(validation("/red66")).toEqual(Error("Password must be at least 8 characters and must contain at least 1 capital letter"));
        expect(validation("8ed6d")).toEqual(Error("Password must be at least 8 characters and must contain at least 1 capital letter"));
        expect(validation("sdgdfgghf")).toEqual(Error("Password must contain at least 2 numbers and must contain at least 1 capital letter"));
        expect(validation("9dghnkms")).toEqual(Error("Password must contain at least 2 numbers and must contain at least 1 capital letter"));
        expect(validation("/fgjd")).toEqual(Error("Password must be at least 8 characters, must contain at least 2 numbers and must contain at least 1 capital letter"));
        expect(validation("9dfg*d")).toEqual(Error("Password must be at least 8 characters, must contain at least 2 numbers and must contain at least 1 capital letter"));
    });

});