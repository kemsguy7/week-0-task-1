function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}

console.log(checkNumber(0));
module.exports = checkNumber;


/*

Implement a function that checks if a given number is positive, negative, or zero and returns a corresponding string.

# Example

checkNumber(5) should return "Positive".
checkNumber(-3) should return "Negative".
checkNumber(0) should return "Zero".

*/