// variable
// ভেরিয়েবল বলতে এমন কিছুকে বোঝানো হয়ে থাকে যার মান সময়ের সাথে সাথে বদলানো যায়। যার মান সময়ের সাথে সাথে বিভিন্ন ভাবে প্রভাবিত হতে পারে

// ভেরিয়েবল হচ্ছে কম্পিউটার মেমোরি একটি নির্দিষ্ট জায়গা যেখানে বিভিন্ন মান সংরক্ষণ করে রাখা যায়

// ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন

// 1. Letter(A-z)
// 2. Number {0-9}
// 3. UnderScore (_)
// 4. Doller ($)

// ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন না

// 1. কি  ওয়ার্ড  ব্যবহার  করা  যাবে  না

// 2. নম্বর  শুরুতেই  ব্যবহার  করা  যাবে  না
// 3. স্পেস  দেওয়া  যাবে  না

// 4. কেস  সেনসিটিভ  হওয়ায়  সেইম  টু  সেইম  হতে  হবে

// note :  CamelCase

var name = "gias uddin";

// Key Words

// জাভাস্ক্রিপ্ট  আপনার  জন্য  কিছু  জিনিস  (ফাঙ্কশন ) অলরেডি  তৈরী  করে  রাখছে  এইগুলাই  রিজার্ভ ওয়ার্ড  অথবা  কি  ওয়ার্ড

if (true) {
    console.log("yesssssss");
}

// এই  গুলা মুখুস্থ  করার   কোনো  জিনিস  না  তাই  চিন্তা   করার  দরকার  নাই  আস্তে  আস্তে  সব  এমনেই মনের  মধ্যে  বসে  যাবে  ব্যাবহার  করতে  করতে

// DAta Types

// আমরা  মূলত  এখানে  স্ট্রিং  এবং  নম্বর  এবং  বুলিয়েন  ডাটা  টাইপ   আলোচনা  করবো

// 1. string

var name1 = "hero Alom";

console.log(typeof name1);

// number data types
var roll = 71;

console.log(typeof roll);

// boolean data types
var statement = true;
console.log(typeof statement);

// *parseFloat parseInt

var num1 = 70.78;
var num2 = 70;

var sum = num1 + num2;
console.log(parseInt(sum));
// console.log(parseFloat(sum));

// ## If else statement

if (4 > 5) {
    console.log("4 is bigger than 5");
} else {
    console.log("5 is bigger than 4");
}

// 2nd examaple with condition
var number = 50;
if (number % 2 == 0) {
    console.log(" wow its even number");
} else if (number % 2 == 1) {
    console.log("wow its Oddd number");
} else {
    console.log("dont knwo whats that ");
}

// 3rd examaple

// nested condition

var number2 = 30;

if (number2 > 20) {
    if (typeof number2 == "number") {
        console.log("number 2 is a number");
    } else if (typeof number2 == "string") {
        console.log("wow number 2 is string");
    } else {
        console.log("maybe number 2 is boleen");
    }
} else {
    console.log(" number 2 is very small number please try  bigger then 20");
}

// Grade countunting

var result = -39;
if (result > 0) {
    if (result < 33) {
        console.log("wow  tumi fail korco !! Now  Breakup dont call me again");
    } else if (result >= 33 && result < 40) {
        console.log("You just passed this exam (kono moto)");
    } else if (result >= 40 && result < 50) {
        console.log("your grade is D");
    } else if (result >= 50 && result < 60) {
        console.log("your grade is C");
    } else if (result >= 60 && result < 70) {
        console.log("your grade is B");
    } else if (result >= 70 && result < 80) {
        console.log("your grade is A-");
    } else if (result >= 80 && result < 90) {
        console.log("your grade is A+ ");
    } else if (result > 90 && result <= 100) {
        console.log("your grade is  excillent ");
    } else {
        console.log("cant not found please try again yoru grade range is 0-100");
    }
} else {
    console.log("please try with positive number ");
}

// ** Switch statement  with condition

var num5 = 10;

switch (num5) {
    case 1:
        console.log("hello");
    case 5:
        console.log("hoiceee");
}

// data structure
// Array

var box = ["heroalom", 10, "bangladesh", "dhaka", 71];

// ** অ্যারের প্রতিটি মানকে এলিমেন্ট বলে অর্থ্যাৎ উপরের box অ্যারেতে 5 টি এলিমেন্ট আছে। প্রত্যেকটি এলিমেন্ট যেকোন কিছু হতে পারে, একটা স্ট্রিং কিংবা একটা পূর্নসংখ্যা এমনকি একটা অবজেক্ট।

// ** প্রথম মানের জন্য ০ শূন্য দিয়ে শুরু করে এভাবে ক্রমানুসারে পরেরগুলির জন্য জাভাস্ক্রিপ্ট index নাম্বার দেয়। একসেস নেয়ার সময় প্রথমে ভেরিয়েবলের নাম এরপর তৃতীয় বন্ধনীর (square bracket []) এর ভিতর index নাম্বারটি। যেমন ২য় মানটি একসেস করতে চাইলে box[1] এভাবে।

// ** অ্যারে বানাতে হয় প্রথম উদাহরনের মত, তৃতীয় বন্ধনীর ভিতর single বা double কোটেশনের ভিতর মান দিতে হয় এবং প্রতিটি মান কমা (,) দিয়ে আলাদা রাখতে হবে। এভাবে অ্যারে তৈরীর প্রক্রিয়ার টেকনিকাল নাম হচ্ছে "অ্যারে লিটারেল"।

// এছাড়া new কিওয়ার্ড Array() ফাংশন (এটার নাম আসলে কনস্ট্রাক্টর) ব্যবহার করে অ্যারে বানানো যায় যেমন উপরের অ্যারেটি চাইলে নিচের মত করে তৈরী করতে পারেন।
var box2 = new Array("HTML", "CSS", "JavaScript", "PHP");

// Array fucntion
let stuff = ["A", "B", "C", "D", "E", "F"]; // test array

// Useful array methods
stuff.pop(); // removes the last item in the array (returns what was removed)
//stuff = ['A', 'B', 'C', 'D', 'E']
//return: ['F']
stuff.shift(); // removes the first item in the array (returns what was removed)
//stuff = ['B', 'C', 'D', 'E', 'F']
//return: ['A']
stuff.push("G"); // adds an item to the end of the array (returns the new length of the array)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
//return: 7
stuff.unshift("Z"); // adds an item to the beginning of the array (returns the new length of the array)
//stuff = ['Z', 'A', 'B', 'C', 'D', 'E', 'F']
//return: 7
stuff.indexOf("C"); // returns the index number of the item in the array
//return: 2
stuff.splice(2); // gets rid of the index item and after it (returns what was removed)
//stuff = ['A', 'B']
//return: ['C', 'D', 'E', 'F']
stuff.splice(2, 2); // second argument determines how many items are removed in total (including index) (returns what was removed)
//stuff = ['A', 'B', 'E', 'F']
//return: ['C', 'D']
stuff.splice(2, 0, "Hello"); // inserts item "hello" into index number 2 and shifts other items ahead (removing 0 items) (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'C', 'D', 'E', 'F']
//return: []
stuff.splice(2, 3, "Hello"); // removes 3 items (including index number 2 and after) and inserts "hello" into index number 2 (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'F']
//return: ['C', 'D', 'E']
stuff.slice(2); // same as splice but doesn't modify the original array (returns what would be removed)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F']
//return: ['C', 'D', 'E', 'F']
stuff.concat(["G", "H", "I"]); // returns the combination of array "stuff" with the array argument
//return: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
stuff.toString(); // returns the combination of elements of the array into a string
//return: "A,B,C,D,E,F"
stuff.join("-"); // works the same as toString() but the argument determines what is between each element in the string
//return: "A-B-C-D-E-F"
stuff.reverse(); // reverses an array's elements (returns same thing)
//stuff = ['F', 'E', 'D', 'C', 'B', 'A']

var numbers = [1, 2, 3, 4, 5, 6, 7];

// push
numbers.push(8);
console.log(numbers);

//**  */ pop

numbers.pop(8);
console.log(numbers);

//** */ shift

numbers.shift();
console.log(numbers);

// ** unshift
numbers.unshift(15);
console.log(numbers);

// console.log(numbers.toString())
// console.log(numbers.reverse())
// console.log(numbers.join("-"))
// console.log(numbers.slice(1,6))

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
// ===============================================================================================================

// ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন

// 1. Letter(A-z)
// 2. Number {0-9}
// 3. UnderScore (_)
// 4. Doller ($)

// ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন না

// 1. কি  ওয়ার্ড  ব্যবহার  করা  যাবে  না

// 2. নম্বর  শুরুতেই  ব্যবহার  করা  যাবে  না
// 3. স্পেস  দেওয়া  যাবে  না

// 4. কেস  সেনসিটিভ  হওয়ায়  সেইম  টু  সেইম  হতে  হবে

// note :  CamelCase

var firstName = 74;

// data type for

// var test = false;

// console.log(typeof test);

// var number = "71.52";
// var number2 = 50;

// console.log(parseInt(number));

// console.log(parseFloat(number));

// if else state ment start

// var nayok = "hero alom";

// if (nayok == "hero alom") {
//   console.log("marbo bugurai lash porbe magurai ");
// } else if (nayok == "anonto") {
//   console.log("ami shob pari");
// } else {
//   console.log("i dont know");
// }

// if (false) {
//   console.log("yes true");
// }
// else {
//     console.log("its false")
// }

// var num = 100;

// if (robin >= 100) {
//   console.log("robin tumi iphone kino");
// } else {
//   console.log("robin tomar tho taka nai i phone ki diye kinba");
// }

// if (num > 100) {
//   console.log("num onek boro");
// } else if (num < 0) {
//   console.log("its negative");
// } else if (num == 100) {
//   console.log(" wow its ok");
// } else {
//   console.log("jani na");
// }

// var tamim = 80;

// if (tamim > 0) {
//   if (tamim == 80) {
//     console.log("yes i am from nested");
//   } else {
//     console.log("its not correct");
//   }
// } else {
//   console.log("mark can not be negative number");
// }

// 0-32 = F grade
// 33-39 = D
// 40-49 = C
// 50-59 = B
// 60-69 = A-
// 70-79 =A
// 80-95 = A+
// 96-100= Golden +

// var result = 4;

// if (result < 33 && result > 0) {
//   console.log(result, " tumi fail marco ricksha chalaw akkhon");
// } else if (result >= 33 && result < 40) {
//   console.log("Tumi D grade paiso ");
// } else if (result >= 40 && result < 50) {
//   console.log("tumi C grade paico ");
// } else {
// }

// switch
// switch, case,break,default,

// var name = "hero";

// switch (name) {
//   case "rahim":
//     console.log("wow its rahim");
//     break;
//   case "abdul":
//     console.log("tumi rahim na abdul");
//     break;
//   case "hero":
//     console.log("wow tumi hero");
//     break;
//   default:
//     console.log("dont know");
//     break;
// }

// var numbers = [1, "rahim", 3, 4, 5, "laili", 7, 8, 9];

// numbers.push("Dhaka");
// numbers.pop();

// numbers.shift();

// numbers.unshift("Bangladesh")

// numbers.reverse();
// numbers.join("-");
// numbers.join("-");

// console.log(numbers)
// for (var i = 1; i < 5; i++) {
//     console.log(i);
//   }

var friends = ["rahim", "adin", "jamila", "komolaaaa"];

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// var temp = friends[0];

// for (var i = 0; i < friends.length; i++) {

//   var element = friends[i];
//   if (element.length > temp.length) {
//     temp = element;
//   }
// }

// console.log(temp);



var named = "tamim"
var marks = 30;
if (marks > 0 && marks == 32) {
    console.log(named + " youar GPA = 'F'");
}
// ===============================================================================================================
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
// var b = "my name is mamun";
// b.includes("my");
// console.log(b); ==============
//     b.substring;
// immutable
// ===============================================================================================================
// ===============================================================================================================