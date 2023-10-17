//BMI Calculator
//1 inch is eqaul to 2.54 cm
//2.2046 pounds is equal to 1 kilo
//BMI is equal to weight (in kilos) divided by squared height (in meters)
let inches = 73;
let pounds = 260;
let height = inches * 2.54;
let weight = pounds / 2.2046;
console.log(weight, height);
let bmi = weight/(height/100*height/100);
console.log("Your BMI is " + bmi + ".");