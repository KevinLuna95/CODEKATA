function validation (pass) {
    if (pass.length >= 8) {
        return true;
    } else {
        return new Error("Password must be at least 8 characters")
    };
};
console.log(validation("/*-+'()***"));

module.exports.validation = validation;