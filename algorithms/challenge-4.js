function findSmallest(num1, num2, num3) {
    small = Math.min(num1, num2, num3);
    return small;
}
console.log(findSmallest(10, 12, 15));
module.exports = findSmallest;

/*
# Challenge 4

Implement a function that takes three numbers as arguments and returns the smallest one.

# Example

findSmallest(10, 5, 8) should return 5.
findSmallest(-3, -1, 0) should return -3.
findSmallest(7, 7, 7) should return 7.
*/