// variable
// &&&&&&&&&&&&&&&&&&&&
// 1 what is javascript
// =============================
// JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.(Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

// 2 how does js work ?
// =============================
//     JavaScript is a client - side scripting language and one of the most efficient, commonly used scripting languages.The term.client - side scripting language means that it runs at the client - side(or on the client machine) inside the web - browsers, but one important thing to remember is that client's web-browser also needs to support the JavaScript or it must be JavaScript enabled. Nowadays, most of the modern web browsers support JavaScript and have their JavaScript engines. For example, Google Chrome has its own JavaScript engine called V8.

// 3 what is variable in js ?
// =============================
//     Variable means anything that can vary.In JavaScript, a variable stores the data value that can be changed later on.Use the reserved keyword var to declare a variable in JavaScript.

// 4 | what is declare a variable in js ?
// =============================
//     Example
//     const pi = 3.14;
//     let person = "John Doe";
//     let answer = 'Yes I am!';

// var number = 1200;
// console.log(number);

// 5 | change a variable value in js
// =============================

// Example
// var name = "mamun";
// names = name;
// console.log(names);
// var number = 100;
// console.log(number + 200);

// 6 | type of variable in js and how can i find out type of a variable in js
// =============================
// 1 = Primitive
// Integer(var number = 50;)
// Booleans {A boolean value(true or false) }
// Floating - point
// Character
// String
// Null
// undefined
// 2 = Non - Primitive Data Types
// Object
// Array
// Function

// var number = 100;                             integer
// var number = "mamun";                           string
// var trues = true;                              booleans
// var number = 1.45685657596;
// number = number.toFixed(3);               Floating - point
// console.log(number);
// var age = null;                                 null
// var number = 100;
// number = undefined;                                  undefined
// console.log(number);
// var obj1 = { a: 5, b: 6 };                                    object
// obj1[a] = 10;
// console.log(obj1);
// var arr1 = [1, 2, 3];                            array
// function a() {
//                                              function
//  }
// 7 | naming convention in js ?
// ========================================
// https://www.syncfusion.com/blogs/post/10-javascript-naming-conventions-every-developer-should-know.aspx
//     camelCase
// var fastName = "mamun"

// 8| Math oparations ?
// ========================================

//     +	Addition
//     - Subtraction
//     * Multiplication
//     ** Exponentiation(ES2016)
//     / Division
//     % Modulus(Remainder)
//     ++Increment
//     --Decrement

// var a = 5;
// var b = 3;
// console.log(a ** b);
// var a = 50;
// var b = 30;
// var x = a / b;
// var x = x.toFixed(4);
// console.log(x);

// 9 | shorthand - javascript
// ========================================
//     https://www.sitepoint.com/shorthand-javascript-techniques/
// ========================================
// 10 | parseInt, parseFloat, toFixed
// ========================================
// var a = 50;
// var b = 30;
// var x = a / b;
// var x = x.toFixed(4);
// var z = parseFloat(x)
// var z = parseInt(x)
// console.log(z);
// =========================================
// Array
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// 11 | what is the purpose of array in js.
// =========================================
//     https://www.geeksforgeeks.org/arrays-in-javascript/#:~:text=In%20JavaScript%2C%20array%20is%20a,them%20by%20a%20single%20variable.
// In JavaScript, array is a single variable that is used to store different elements.It is often used when we want to store list of elements and access them by a single variable.Unlike most languages where array is a reference to the multiple variable, in JavaScript array is a single variable that stores multiple elements.
// var House = []; // method 1
// var House = new Array(); // method 2
//     Eximpole
// var a = [10, 20, 50, 300, 59, 40];

// 12 | array এর মধ্যে কয়টা উপাদান(element) আছে ata bar korta hobe :
// =========================================

// var numbers = [45, 68, 78, 89, 98];
// console.log(numbers.length);


// var a = [10, 20, 50, 300, 59, 40];
// var c = a.indexOf(40);
// console.log(a.indexOf(40));
// a[3] = 40;
// a[4] = 40;
// console.log(a);
// var b = a[4];
// console.log(b);
// 13 | what is index.
// 14 | find the value of and element by index /
// 15 | change in element by index
// 16 | gat the index of an elements by the value;
// =========================================
// index

// var numbers = [45, 68, 78, 89, 98];
// console.log(numbers.length);
// get element by index . mathed 1
// var element = numbers[4]
// console.log(element);
// get element by index . mathed 2
// console.log(numbers[3]);
// set element by index .
// আমরা যদি এরের কোনো মান চেঞ্জ করতে চাই তা হলে জা করতে হবে;
// numbers[1] = 77;
// numbers[2] = 88;
// numbers[3] = 99;
// console.log(numbers);

// find index of an element
// var positionIndex = numbers.indexOf(98);
// console.log(positionIndex);
// 16 | what is undefined index  in javascript
// =========================================

// https://dmitripavlutin.com/7-tips-to-handle-undefined-in-javascript/#:~:text=Undefined%20value%20primitive%20value%20is,existing%20array%20elements%2C%20and%20alike.


// 17 | HOw can you add an element to an  array ?
// =========================================
// https://www.freecodecamp.org/bengali/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

// var a = [39, 69, 59, 38, 49, 45, 64, 23, 13, 35];
// a.push(100);
// a.pop();
// a.unshift(500);
// a.shift();
// console.log(a);


// ==============================
// conditional
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&



// 18 | mining of >, <, ==, !=, <=, >=, ===, !==, &&, ।। ?
// ============================================================

// 19 | তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে, ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।



// var a = 55000;

// if (a >= 80000 && a <= 150000) {
//     console.log("I will by the mac");
// }
// else if (a >= 60000 && a <= 80000) {
//     console.log("I will by the laptop");
// }
// else if (a >= 40000 && a <= 60000) {
//     console.log("I will by the lenovo yoga ");
// }
// else if (a >= 20000 && a <= 40000) {
//     console.log("I will by the used laptop");
// }
// else {
//     console.log("i wile by the mobile");
// }


// 20 | dispaly "ajka amar moin valo nai " to 39 times ?

// var a = "ajka amar moin valo nai";
// for (let i = 1; i < 29; i++) {
//     console.log(i, a);
// }


// 21| display 58 to 98
// =================================

// for (var i = 58; i <= 98; i++) {
//     console.log(i);
// }

// 22| show all even numbers 412 to 456 ?
// =============================================

// for (var i = 412; i <= 456; i += 2) {
//     console.log(i);
// }

// 23| show all odd numbers 581 to 623 ?
// =============================================
// for (var i = 581; i <= 623; i += 2) {
//     console.log(i);
// }
// var i = 579;
// while (i < 623) {
//     i += 2;
//     console.log(i);
// }
// var i = 0;
// while (i < 10) {
//     i++;
//     console.log(i);
// }

// 24 | difference berween ehile loop and for loop ?

// 25| problem
// var corceName = ["html", "css", "bootstrap", "taillwine", "git hab", "natlefy", "js"];
// for (var i = 0; i <= corceName.length; i++) {
//     var corces = corceName[i];
//     console.log(corces);
// }

// var corceName = ["0", "html", "css", "bootstrap", "taillwine", "git hab", "natlefy", "js"];
// var i = 0;
// while (i < corceName.length) {
//     i++;
//     var corces = corceName[i];
//     console.log(corces);
// }

// 25| problem ?
// =============================================

// var phoneName = ["samsung", "nokia", "samphoni", "opppo", "reyalme", "shaome"]
// for (var i = 0; i < phoneName.length; i++) {
//     var phone = phoneName[i];
//     console.log(phone);
// }
// var phoneName = ["samsung", "nokia", "samphoni", "opppo", "reyalme", "shaome"]
// var i = 0;
// while (i < phoneName.length) {
//     i++;
//     var phone = phoneName[i];
//     console.log(phone);
// }

// 26|
// for (var i = 30; i <= 86; i++) {
//     if (i === 44) {
//         break
//     }
//     console.log(i);
// }
// 27|
// var bookPrice = [100, 150, 300, 780, 450, 10, 60, 90, 60,];
// for (var i = 0; i < bookPrice.length; i++) {
//     var book = bookPrice[i];
//     if (book >= 200) {
//         continue
//     }
//     console.log(book);
// }


//  এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড়



// var number = 4654;
// var remainder = number % 2;
// if (remainder == 0) {
//     console.log(number + " Even");
// }
// else {
//     console.log(number + " odd");
// }


// 1.গ্রেড  মেকিং  এর  বাকি  অংশটুকু  করে  ফেলতে  হবে  নিজে  নিজে
// 0-32 = F grade
// 33-39 = D
// 40-49 = C
// 50-59 = B
// 60-69 = A-
// 70-79 =A
// 80-95 = A+
// 96-100= Golden +

// var named = "kanon";
// var marks = 81;
// if (marks > 0 && marks < 32) {
//     console.log(named, " youar GPA = 'F'");
// }
// else if (marks >= 33 && marks < 39) {
//     console.log(named, " youar GPA = 'D'");
// }
// else if (marks >= 40 && marks < 49) {
//     console.log(named, " youar GPA = 'C'");
// }
// else if (marks >= 50 && marks < 59) {
//     console.log(named, " youar GPA = 'B'");
// }
// else if (marks >= 60 && marks < 69) {
//     console.log(named, " youar GPA = 'A-'");
// }
// else if (marks >= 70 && marks < 79) {
//     console.log(named, " youar GPA = 'A'");
// }
// else if (marks >= 80 && marks < 95) {
//     console.log(named, " youar GPA = 'A+'");
// }
// else if (marks >= 96 && marks < 100) {
//     console.log(named, " youar GPA = 'GOLD - A+'");
// }

// var number = [1, 3, 5, 6, 7, 8, 9, 9,];
// number.slice(2, 4);==================
// console.log(number);
var b = "my name is mamun";
b.includes("my");
console.log(b); ==============
    b.substring;
immutable