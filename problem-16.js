// paroblem 1
// Harry’s mom gave him money and asked him to buy some oranges and apples.Write a program to
// help Harry calculate how much money the shopkeeper will return.
var mom = 1000;
var oranges = 500;
var apples = 200;
var sum = oranges + apples;
var back = mom % sum;
console.log(back);


// paroblem 2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
//     Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.
//     Output:
// Print the result in 2 decimal places.

var subjeckt = 5;
var Mathematics = 75.25
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;
var sum = Mathematics + Biology + Chemistry + Physics + Bangla;
var avarage = sum / subjeckt;
avarage = avarage.toFixed(2)
avarage = parseFloat(avarage);
console.log(avarage);



// paroblem 3
// John’s teacher gave him two variables.Each variable contains a string.John’s teacher asked him to
// combine these two strings and print them in one line.Help John write the program.
//     Input:
// The first and the second lines of the input contain the strings.
//     Output:
// Print the result in one line.

var fastLine = "I am going to be";
var secondLine = "an awesome web developer";
var outPut = fastLine + " " + secondLine;
console.log(outPut);

// paroblem 4
// Sarah’s mother is teaching her mathematics.She gave Sarah a number and asked her what the
// remainder would be if she divided the number by 5. Help Sarah write the program.
//     Input:
// The first line of the input contains the number.
//     Output:
// Print the remainder.

var number = 5;
var num2 = 119;
var sum = num2 % number;
console.log(sum);



