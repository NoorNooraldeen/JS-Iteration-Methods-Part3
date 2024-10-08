// You are given an array representing the daily average temperatures (in Celsius) of a month.
const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

/*****************************************************************
Part 1: Temperature Analysis

Task 1) Create a new array containing temperatures greater than or equal to 25 degrees Celsius.
       Output 1) [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 28, 29, 27, 26]
       

Task 2) Create a new array containing temperatures less than 20 degrees Celsius.
       Output 2) [19, 18, 19, 19]

******************************************************************/
const greaterOrEqual = temperatures.filter(
  (temperature) => (temperature) => 25
);
console.log(greaterOrEqual);

const tempLess20 = temperatures.filter((temperature) => temperature <= 20);
console.log(tempLess20);

/*****************************************************************
Part 2: Temperature Transformation

Task 3) Convert the entire list of temperatures to Fahrenheit. Use the formula (Celsius * 9/5) + 32.
       Output 3) [
       71.6, 77, 66.2, 75.2,
       82.4, 86, 69.8, 68,
       80.6, 84.2, 73.4, 78.8,
       75.2, 71.6, 64.4, 66.2, 
       69.8, 82.4, 86, 80.6, 
       78.8, 77, 71.6, 73.4, 
       66.2, 68, 82.4, 84.2,
       80.6, 78.8 
]
       

Task 4) Create a new array that labels each temperature as either "Warm" for temperatures >=25, "Mild" for temperatures between 20 and 24, and "Cool" for temperatures <20.
       Output 4) [
  'Mild', 'Warm', 'Cool', 'Mild',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Warm', 'Warm', 'Mild', 'Warm',
  'Mild', 'Mild', 'Cool', 'Cool',
  'Mild', 'Warm', 'Warm', 'Warm',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Cool', 'Mild', 'Warm', 'Warm',
  'Warm', 'Warm'
]

******************************************************************/
// we can use a filter also
const FahTemp = temperatures.map((temperature) => (temperature * 9) / 5 + 32);

console.log(FahTemp);

// map is saving the constance
// used some help from chat gbt for line 62
const typOfTemp = temperatures.map((temperature) => {
  if (temperature >= 25) return "wsrm";
  else if (temperature >= 20) return " mild";
  else return "cool";
});
console.log(typOfTemp);

/*****************************************************************
Part 3: Summary Statistics

Task 5) Calculate and return the highest temperature of the month.
       Output 5) 30

Task 6) Calculate and return the lowest temperature of the month.
       Output 6) 18

******************************************************************/
// using ? if true return temp
// if false return max
// it will update max to temp
const highestTemp = temperatures.reduce(
  (max, temp) => (temp > max ? temp : max),
  temperatures[0]
);
console.log(highestTemp);

const lowTem = temperatures.reduce(
  (low, temp) => (temp < low ? temp : low),
  temperatures[0]
);
console.log(lowTem);

// Note: Use appropriate JavaScript array iteration methods such as filter, map, reduce, etc., to achieve the desired output for each task.
