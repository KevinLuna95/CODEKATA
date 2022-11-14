function validation (pass) {
    if (pass.length >= 8 && /\d+.*\d/.test(pass) == true && /[A-Z]/.test(pass) == true) {
        return true;

    } else if (pass.length < 8 && /\d+.*\d/.test(pass) == false && /[A-Z]/.test(pass) == false) {
        return new Error("Password must be at least 8 characters, must contain at least 2 numbers and must contain at least 1 capital letter");

    } else if (pass.length < 8 && /\d+.*\d/.test(pass) == false) {
        return new Error("Password must be at least 8 characters and must contain at least 2 numbers");

    } else if (pass.length < 8 && /[A-Z]/.test(pass) == false) {
        return new Error("Password must be at least 8 characters and must contain at least 1 capital letter");

    } else if (/[A-Z]/.test(pass) == false && /\d+.*\d/.test(pass) == false) {
        return new Error("Password must contain at least 2 numbers and must contain at least 1 capital letter");

    } else if (pass.length < 8) {
        return new Error("Password must be at least 8 characters");

    } else if (/\d+.*\d/.test(pass) == false) {
        return new Error("The password must contain at least 2 numbers");

    } else if (/[A-Z]/.test(pass) == false) {
        return new Error("Password must contain at least one capital letter");
    }
};

module.exports.validation = validation;