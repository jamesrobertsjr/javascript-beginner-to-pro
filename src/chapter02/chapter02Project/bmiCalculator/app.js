let heightInInches = prompt("Enter your height in inches:\n");
let weightInPounds = prompt("Enter your weight in pounds:\n");
let heightInCentimeters = heightInInches * 2.54;
let weightInKilograms = weightInPounds / 2.2046;
let bmi = weightInKilograms / ((heightInCentimeters / 100) ** 2);
console.log(`Your BMI: ${bmi}.`);
