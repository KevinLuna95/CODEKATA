const CityNames = ["Paris", "Budapest", "Skopje", "Rotterdam", "Valencia", "Vancouver", "Amsterdam", 
"Vienna", "Sydney", "New York City", "London", "Bangkok", "Hong Kong", "Dubai", "Rome", "Istanbul"];

function searchCity (text){
    if (text.length < 2){
        return Error("Write 2 or more characrters for find the city");
    }
}

module.exports.searchCity = searchCity;