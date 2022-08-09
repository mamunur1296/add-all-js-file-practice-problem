var money = 10;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money) {
    console.log("danis khabo");
}
else if (butterBread < money) {
    console.log("butter khabo");
}
else if (toastBiscuit < money) {
    console.log("tost khabo");
}
else {
    console.log("cha khabo ");
}
var money = 30;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money) {
    console.log("danis khabo");
}
else if (butterBread < money) {
    console.log("butter khabo");
}
else if (toastBiscuit < money) {
    console.log("tost khabo");
}
else {
    console.log("cha khabo ");
}
// ============================================================
// var isGradiated = true;
// var salary = 25000;
// var cars = 1;
// if (isGradiated === true) {
//     console.log('saao beya kora fali');
// }
// else {
//     console.log('kopala beya nai');
// }
// if (isGradiated === true && salary > 5000) {
//     console.log('saao beya kora fali');
// }
// else {
//     console.log('kopala beya nai');
// }
// if (isGradiated === true && salary > 5000 && cars >= 2) {
//     console.log('saao beya kora fali');
// }
// else {
//     console.log('kopala beya nai');
// }


// var isGradiated = false;
// var salary = 25000;
// var cars = 1;

// if (isGradiated === true || salary > 50000 || cars >= 1) {
//     console.log('saao beya kora fali');
// }
// else {
//     console.log('kopala beya nai');
// }
var isGradiated = false;
var salary = 25000;
var cars = 1;

if (isGradiated === true || salary > 50000 && cars >= 1) {
    console.log('saao beya kora fali');
}
else {
    console.log('kopala beya nai');
}
// =================================================================================
var math = true;
var banga = true;
var english = false;
if (math == true) {
    if (banga == true) {
        if (english == true) {

        }
        else {

        }
    }
    else {

    }
}
else {

}
// ekTar por ekta if amora use korta pari;
// ===========================================================================================

// 1 Array
var nayikas = ["mahi", "apu", "sabnur", "sabana"];
// এরে আর ইন্ডেস্ক শুরু হয় ০ থেকে তার পরে ১ তার পরে ২
nayikas.length(3)

/**
 * comparison operators are used to test for true or false
 * the if statement executes if the the condition is true
 * the else statement executes if the condition is false
 * logicsl operator && returns true if both statements are true and logical operator . || . returns true if one of the statements is true
 * a nested conditional statement is an if or if else statement inside another if elsr statement.
*/

// variable 
// number type variable 
var sunglassPrice = 120;
// string type varibale 
var specialOneNamer = "ariana frande";
// boolien type variable 
var isSingle = true;
// two typwe of number :
// 1 integer = 230.00 ,
var price = 120;
// 2 float , decimal: = 230.154,
var parice = 120.50;
// variable naming convention : ruler or best priactice
/**
 * 1. single word
 * no fap or space
 * no quoretion
 * no keyword
 * can not contain dash
 * can not start with a number
 * shoule usr camelCase
*/

// math Oprarstions: + , - ,* ,/  ;
// ahorthsnd: += , -=, ++ , -- :

// convert: parseInt , parseFloate ; কোনো কিছুকে চেঞ্জ করার জন্য কাজে লাগে

// toFixed

// remainder: vagses: %



// ===========================================================================================


// // javascript keyword https://www.w3schools.com/js/js_reserved.asp  এই গুলা সম্প্ররকে হাকলা ধারোনা নিতে হবে /
// // ভেরিএবল এর নাম গুলা বা কি ওয়ার্ড গুলা কোনো জায়গা ইয় ব্যবহার করা জাবেনা ।


// // good variable
// var age = 12; s

// // 1 variable name can not be any keywords
// var false = 29;
// var return = true;

// // 2 variable name has to be in one work . no space
// var my home address = "new bogura";


// // 3 variable name can not have quotation
// var "name" = "tom hanks";

// // 4 variable name can not starts with a number but can ends weaith a number
// var 12name = 12;
// var age12 = 25;

// // how to used long name
// // cna not used deash
// var usherName = "mamun"; //camal cash
// var Usher_Name = "mamun"; //snack cash
// var UsherName = "mamun";//pascal cash
// var UsherName = "mamun";
// var Usher-Name = "mamun";
// var Usher-Name = "mamun";
// var Usher-Name = "mamun";
// var Usher-Name = "mamun";



// ===========================================================================================

// used push to add element to an array as the last element of the array 
var numbers = [45, 68, 78, 89, 98];
// এই ভেরিয়েবলের ভিতরে যদি কোনো কিছু এড করতে চাই তাহলে ... 
numbers.push(55, 77)
console.log(numbers);

var friend = ["rakib", "robi", "jehad"];
friend.push("mamun", "arif");
console.log(friend);
// use pop to gerlost the last element 
numbers.pop();
console.log(numbers);
friend.pop();
console.log(friend);

// ফাস্ট এলিমেন্ট কি করে বের বা এড করা জায় তার একটি ভিডিও দেখতে হবে । এবং এটা বারির কাজ
// ===========================================================================================

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




// ===========================================================================================
var numbers = [45, 68, 78, 89, 98];
// get element by index . mathed 1
var element = numbers[4]
console.log(element);
// get element by index . mathed 2
console.log(numbers[3]);
// set element by index . 
// আমরা যদি এরের কোনো মান চেঞ্জ করতে চাই তা হলে জা করতে হবে;
numbers[1] = 77;
numbers[2] = 88;
numbers[3] = 99;
console.log(numbers);

// find index of an element 
var positionIndex = numbers.indexOf(98);
console.log(positionIndex);

// ===========================================================================================


var iphonPrice = 79000;
var myBudget = 9500;
//if iphon price is less than my budger, i will buy the iphone
/**
 * if iphone price is less than my budger
 *          i will buy the iphone
 * 
 * if (condition){
 *      // will execute if the condition is trur
 * }
// */
if (iphonPrice < myBudget) {
    console.log("i phon kinbo ");
}
if (iphonPrice > myBudget) {
    console.log("i phon kinbo na ");
}



var iphonPrice = 79000;
var myBudget = 9500;

if (iphonPrice > myBudget) {
    console.log("i phon kinbo ");
}
else {
    console.log("i phon kinbo na ");
}

// ===========================================================================================
// console.log(5 < 6);
// console.log(5 > 6 - 2);
// console.log(5 + 1 == 6);
// console.log(5 + 1 !== 6);
// console.log(5 !== 6);
// console.log(5 <= 6);
// console.log(6 <= 6);
// console.log(16 <= 6);
console.log(16 >= 6);
console.log(16 >= 66);


// multiple conditions
// mast
// mony1 > mony2 && result1> resutl2
// 1 mast
// mony1 > mony2 ||  result1> resutl2


