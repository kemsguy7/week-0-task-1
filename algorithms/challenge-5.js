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

