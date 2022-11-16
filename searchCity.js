const cityNames = ["Paris", "Budapest", "Skopje", "Rotterdam", "Valencia", "Vancouver", "Amsterdam", 
"Vienna", "Sydney", "New York City", "London", "Bangkok", "Hong Kong", "Dubai", "Rome", "Istanbul"];

function searchCity (text){
    if (text.length < 2){
        return Error("Write 2 or more characrters for find the city");
    }
    var element
    var res = "";
    var myRe = new RegExp( text,'gi');
    for (let i = 0; i < cityNames.length; i++) {
        element = cityNames[i];
        if ((myArray = myRe.exec(element)) !== null) {
            res = `${element}`
        };
    };
    return res;
};

module.exports.searchCity = searchCity;