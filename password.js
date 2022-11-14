function validation (pass) {
    if (pass.length >= 8 && /\d+.*\d/.test(pass) == true) {
        return true;
    } else if (pass.length < 8) {
        return new Error("Password must be at least 8 characters");
    } else if (/\d+.*\d/.test(pass) == false) {
        return new Error("The password must contain at least 2 numbers");
    };
    console.log(pass.length)
};
console.log(validation("12345"))
module.exports.validation = validation;