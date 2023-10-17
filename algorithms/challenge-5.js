function classifyTemperature(temp) {
    if (temp <= 0) {
        return "Freezing";        
    } else if (temp >= 0 && temp <=10 ) {
        return "Cold";
    } else if (temp > 10 && temp <= 20 ) {
        return "Mild";
    } else if (temp > 20 && temp <= 30 ) {
        return "Warm";
    } else if (temp > 30) {
        return "Hot";
    }
}
console.log(classifyTemperature(5));
module.exports = classifyTemperature;

/*
# Challenge 5

Implement a function that classifies a temperature as "Freezing ( below 0) ," 
"Cold (between 0 and 10)," "Mild (between 10 and 20)," "Warm (between 20 and 30)," 
or "Hot (above 30)" based on a given temperature value.

# Example

classifyTemperature(0) should return "Freezing"
classifyTemperature(7) should return "Cold".
classifyTemperature(12) should return "Mild".
classifyTemperature(23) should return "Warm"
classifyTemperature(83) should return "Hot"

*/