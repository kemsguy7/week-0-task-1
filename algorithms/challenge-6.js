function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0)  {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0)  {
        return "buzz";
    } else if (num % 3 !== 0 || num % 5 !== 0){
        return num;
    }
}
console.log(fizzBuzz(15));
module.exports = fizzBuzz;

/*

# Challenge 6

Implement a function fizzBuzz(input) that takes a number and retuns:
"fizz": if the number is divisible by 3
"buzz": if the number is divisible by 5
"fizzbuzz": if the number is both divisible by 3 and 5
number: if it is not divisible by 3 or 5

# Example

    fizzBuzz(3) to return "fizz"
    fizzBuzz(5) to return "buzz"
    fizzBuzz(15) to return "fizz"
    fizzBuzz(7) to return 7

*/