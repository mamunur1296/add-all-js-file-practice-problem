// problem 1


// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ["apple", "banana", "Orange"];
var pogationOfBanana = fruits.indexOf("banana");
console.log(pogationOfBanana);
fruits[pogationOfBanana] = "mango";
console.log(fruits);
fruits[1] = "banana";
fruits.pop(2);
fruits.push("watermelon");
console.log(fruits);


// problem 2

// You and your friends Tom, Jane, Peter and John got their final exam results.Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else.
var me = 85;
var tom = 66;
var Jane = 95;
var Peter = 56;
var John = 40;

if (me >= 80) {
    console.log("my grade is = A");
}
else if (me >= 60) {
    console.log("my grade is = B");
}
else if (me >= 50) {
    console.log("my grade is = C");
}
else if (me >= 40) {
    console.log("my grade is = D");
}
else if (me <= 39) {
    console.log("my grade is = F");
}

if (tom >= 80) {
    console.log("tom grade is = A");
}
else if (tom >= 60) {
    console.log("tom grade is = B");
}
else if (tom >= 50) {
    console.log("tom grade is = C");
}
else if (tom >= 40) {
    console.log("tom grade is = D");
}
else if (tom <= 39) {
    console.log("tom grade is = F");
}

if (Jane >= 80) {
    console.log("Jane grade is = A");
}
else if (Jane >= 60) {
    console.log("Jane grade is = B");
}
else if (Jane >= 50) {
    console.log("Jane grade is = C");
}
else if (Jane >= 40) {
    console.log("Jane grade is = D");
}
else if (Jane <= 39) {
    console.log("Jane grade is = F");
}

if (Peter >= 80) {
    console.log("Peter grade is = A");
}
else if (Peter >= 60) {
    console.log("Peter grade is = B");
}
else if (Peter >= 50) {
    console.log("Peter grade is = C");
}
else if (Peter >= 40) {
    console.log("Peter grade is = D");
}
else if (Peter <= 39) {
    console.log("Peter grade is = F");
}

if (John >= 80) {
    console.log("John grade is = A");
}
else if (John >= 60) {
    console.log("John grade is = B");
}
else if (John >= 50) {
    console.log("John grade is = C");
}
else if (John >= 40) {
    console.log("John grade is = D");
}
else if (John <= 39) {
    console.log("John grade is = F");
}



// problem 3
// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.
//     Isosceles => two sides are equal

var number = 13;
var number1 = 79;
var number2 = 45;
if (number >= 79 || number1 >= 79 || number2 >= 79) {
    console.log("begest number is = 79");
}

var sides = 9;
var sides1 = 8;
var sides2 = 9;
if (sides >= 9 && sides1 >= 9 || sides >= 9 && sides2 >= 9 || sides >= 9 && sides3 >= 9) {
    console.log("this Traingle two sides are Equile...");
}



var number = 13;
var number1 = 79;
var number2 = 45;
if (number > number1) {
    if (number > number2) {
        console.log(number);
    }
    else {
        console.log(number2);
    }

}
else {
    if (number1 > number2) {
        console.log(number1);
    }
    else {
        console.log(number2);
    }
}