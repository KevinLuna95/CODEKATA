function validation (pass) {
    
    var errors = "";
    
    if (pass.length < 8) {
        errors = `${errors} \nPassword must be at least 8 characters`;
    };
    
    if (/\d+.*\d/.test(pass) == false) {
        errors =`${errors} \nThe password must contain at least 2 numbers`;
    };
    
    if (/[A-Z]/.test(pass) == false) {
        errors = `${errors} \nPassword must contain at least 1 capital letter`;
    };

    if (/\W/.test(pass) == false){
        errors = `${errors} \nPassword must contain at least 1 special character`;
    };
    
    /*if (pass.length >= 8 && /\d+.*\d/.test(pass) == true && /[A-Z]/.test(pass) == true && /\W/.test(pass) == false) {
        This is a most secure use, but is more difficult to write
    */
    if (errors == "") {
        return true;
    };
    
    return errors;
};

module.exports.validation = validation;