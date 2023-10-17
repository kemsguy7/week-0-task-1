function countCharOccurrences(str, char) {
    
    let occurrences = 0;

    for (let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            occurrences++;
        }
    } 
    return occurrences;
}
module.exports = countCharOccurrences;

console.log(countCharOccurrences("hello", "l"));
/*

Implement a JavaScript function to count the occurrences of a specific character in a string.

*/