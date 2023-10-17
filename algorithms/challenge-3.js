function isLeapYear(year) {
    if(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)  {
        return true;        
    } else {
        return false;
    }
    
}
console.log(isLeapYear(2000));
module.exports = isLeapYear;


/*
# Challenge 3

Implement a function that checks if a given year is a leap year and returns a boolean.

# Example

isLeapYear(2020) should return true.
isLeapYear(2021) should return false.
isLeapYear(2000) should return true.

*/