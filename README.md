Hi! I'm Kevin Luna and this is my code Kata, here I want to show you + 20 test proposed for https://tddmanifesto.com/exercises/

1- First Kata FizzBuzz: /fizzbuzz.js and /fizzbuzz.test.js
    Requirements
    1. Write a “fizzBuzz” method that accepts a number as input and returns it as a String.

    Notes:

    start with the minimal failing solution
    keep the three rules in mind and always write just sufficient enough code
    do not forget to refactor your code after each passing test
    write your assertions relating to the exact requirements
    2. For multiples of three return “Fizz” instead of the number

    3. For the multiples of five return “Buzz”

    4. For numbers that are multiples of both three and five return “FizzBuzz”.

-------------------------------------------------------------------------------------------------

2- Second Kata String calculator /stringCalculator.js and /stringCalculator.test.js
    Create a simple calculator that takes a String and returns a integer

    Signature (pseudo code):
    int Add(string numbers)

    Requirements
    1. The method can take up to two numbers, separated by commas, and will return their sum as a result. So the inputs can be: “”, “1”, “1,2”. For an empty string, it will return 0.

    Notes:

    start with the simplest case (empty string) and extend it with the more advanced cases (“1” and “1,2”) step by step
    keep the three rules in mind and always write just sufficient enough code
    do not forget to refactor your code after each passing test
    2. Allow the add method to handle an unknown number of arguments

    3. Allow the add method to handle newlines as separators, instead of comas

    “1,2\n3” should return “6”
    “2,\n3” is invalid, but no need to clarify it with the program
    4. Add validation to not to allow a separator at the end

    For example “1,2,” should return an error (or throw an exception)
    5. Allow the add method to handle different delimiters

    To change the delimiter, the beginning of the input will contain a separate line that looks like this:
    //[delimiter]\n[numbers]
    “//;\n1;3” should return “4”
    “//|\n1|2|3” should return “6”
    “//sep\n2sep5” should return “7”
    “//|\n1|2,3” is invalid and should return an error (or throw an exception) with the message “‘|’ expected but ‘,’ found at position 3.”

Kata 3 – Password input field validation /password.js and /password.test.js
    Create a function that can be used as a validator for the password field of a user registration form. The validation function takes a string as an input and returns a validation result. The validation result should contain a boolean indicating if the password is valid or not, and also a field with the possible validation errors.

    Requirements
    1. The password must be at least 8 characters long. If it is not met, then the following error message should be returned: “Password must be at least 8 characters”

    2. The password must contain at least 2 numbers. If it is not met, then the following error message should be returned: “The password must contain at least 2 numbers”

    3. The validation function should handle multiple validation errors.

    For example, “somepassword” should an error message: “Password must be at least 8 characters\nThe password must contain at least 2 numbers”
    4. The password must contain at least one capital letter. If it is not met, then the following error message should be returned: “password must contain at least one capital letter”

    5. The password must contain at least one special character. If it is not met, then the following error message should be returned: “password must contain at least one special character”

Kata 4 – Search functionality /searchCity.js and searchCity.test.js
    Implement a city search functionality. The function takes a string (search text) as input and returns the found cities which corresponds to the search text.

    Prerequisites
    Create a collection of strings that will act as a database for the city names.

    City names: Paris, Budapest, Skopje, Rotterdam, Valencia, Vancouver, Amsterdam, Vienna, Sydney, New York City, London, Bangkok, Hong Kong, Dubai, Rome, Istanbul

    Requirements
    1. If the search text is fewer than 2 characters, then should return no results. (It is an optimization feature of the search functionality.)

    2. If the search text is equal to or more than 2 characters, then it should return all the city names starting with the exact search text.

    For example for search text “Va”, the function should return Valencia and Vancouver
    3. The search functionality should be case insensitive

    4. The search functionality should work also when the search text is just a part of a city name

    For example “ape” should return “Budapest” city
    5. If the search text is a “*” (asterisk), then it should return all the city names.