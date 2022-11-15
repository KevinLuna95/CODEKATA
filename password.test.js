const { validation } = require('./password.js');

describe ('validator for the password field of a user registration form', () => {
    
    it ('Password contain +8 characters long', () => {
        expect(validation("/45Dlfod")).toBe(true);
        expect(validation("qwer4*6R6df")).toBe(true);
        expect(validation("As45/*rt651fg")).toBe(true);
        expect(validation("6/*-+'5()%P")).toBe(true);
    })
    
    it ('Password contain 2 numbers', () => {
        expect(validation("A123*5678")).toBe(true);
        expect(validation("qw7r*aSd2")).toBe(true);
        expect(validation("as45/*rT651fg")).toBe(true);
        expect(validation("46qwer¡aTdf")).toEqual(true);
    })

    it('Password contain one capital letter', () => {
        expect(validation("Hello199/_")).toBe(true);
        expect(validation("mR5l39lK/")).toBe(true);
        expect(validation("osp85-KL")).toBe(true);
        expect(validation("4A4524*663")).toBe(true);
        expect(validation("/=sd09JS")).toBe(true);
    });

    it('Password contain one special character', () => {
        expect(validation("Hello/199")).toBe(true);
        expect(validation("mR5l39-lK")).toBe(true);
        expect(validation("osp85-KL")).toBe(true);
        expect(validation("4A452?4663")).toBe(true);
        expect(validation("/=sd09JS")).toBe(true);
    });
    
    it('If pasword not have all requires return explicit error', () => {
        expect(validation("*99A")).toMatch(/(8 characters)/);
        expect(validation("%F5l0")).toMatch(/(8 characters)/);

        expect(validation("!Ks0dlof+")).toMatch(/(2 numbers)/);
        expect(validation("0=edfFaefdc")).toMatch(/(2 numbers)/);

        expect(validation("9dw@sd0s")).toMatch(/(1 capital)/);
        expect(validation("fds`c59dfv")).toMatch(/(1 capital)/);

        expect(validation("Hsodl8xcf9")).toMatch(/(1 special character)/);
        expect(validation("dF6g66dgx")).toMatch(/(1 special character)/);

        expect(validation("qWeras")).toMatch(/(8 characters).*\n.*(2 numbers)/);
        expect(validation("/*A+")).toMatch(/(8 characters).*\n.*(2 numbers)/);

        expect(validation("/re*d66")).toMatch(/(8 characters).*\n.*(1 capital)/);
        expect(validation("8ed6d")).toMatch(/(8 characters).*\n.*(1 capital)/);

        expect(validation("sdgdfgghf")).toMatch(/(2 numbers).*\n.*(1 capital)/);
        expect(validation("9dghnkms")).toMatch(/(2 numbers).*\n.*(1 capital)/);

        expect(validation("/fgjd")).toMatch(/(8 characters).*\n.*(2 numbers).*\n.*(1 capital)/);
        expect(validation("9dfg*d")).toMatch(/(8 characters).*\n.*(2 numbers).*\n.*(1 capital)/);

        expect(validation("9dfgd6")).toMatch(/(8 characters).*\n.*(1 capital).*\n.*(1 special character)/);
        expect(validation("sd6f5vc")).toMatch(/(8 characters).*\n.*(1 capital).*\n.*(1 special character)/);

        expect(validation("9dfHd")).toMatch(/(8 characters).*\n.*(2 numbers).*\n.*(1 special character)/);
        expect(validation("ADF5gp")).toMatch(/(8 characters).*\n.*(2 numbers).*\n.*(1 special character)/);

        expect(validation("9dfdggd")).toMatch(/(2 numbers).*\n.*(1 capital).*\n.*(1 special character)/);
        expect(validation("mcturtylk")).toMatch(/(2 numbers).*\n.*(1 capital).*\n.*(1 special character)/);

        expect(validation("ytryt5vxcv9")).toMatch(/(1 capital).*\n.*(1 special character)/);
        expect(validation("eynrhnfg95")).toMatch(/(1 capital).*\n.*(1 special character)/);

        expect(validation("45GHFs")).toMatch(/(8 characters).*\n.*(1 special character)/);
        expect(validation("sf8FG29")).toMatch(/(8 characters).*\n.*(1 special character)/);

        expect(validation("9dfgdDFSf")).toMatch(/(2 numbers).*\n.*(1 special character)/);
        expect(validation("GD5gegTYP")).toMatch(/(2 numbers).*\n.*(1 special character)/);
        
        expect(validation("fgjd")).toMatch(/(8 characters).*\n.*(2 numbers).*\n.*(1 capital).*\n.*(1 special character)/);
        expect(validation("9dfgd")).toMatch(/(8 characters).*\n.*(2 numbers).*\n.*(1 capital).*\n.*(1 special character)/);
    });
});