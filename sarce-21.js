// *******************
// Class 21 - 1
// *******************

// স্ট্রিং

// প্রথমেই আছে স্ট্রিং রিলেটেড কয়েকটা জিনিস। সেই জিনিসগুলো তোমাকে জানতেই হবে।

// ১. স্ট্রিং immutable

// ২. স্ট্রিং এর length আছে

// ৩. index অনুসারে string এর ভিতরের সব letter কে একসেস করা যায়।

// ৪.for লুপ বা for of লুপ দিয়ে স্ট্রিং এর সব ক্যারেক্টার এর উপরে লুপ চালানো যায়।

// ৫. toLowerCase এবং toUpperCase দিয়ে কোন স্ট্রিং কে সব ছোট হাতের বা সব বড় হাতের অক্ষর বানিয়ে ফেলা যায়

// ৬. স্ট্রিং এর মধ্যে কোন এক বা একাধিক অক্ষর খুঁজতে চাইলে তুমি array এর মতো করে indexOf দিয়ে index চেক করতে পারো

// ৭. স্ট্রিং এর মধ্যে এক বা একাধিক অক্ষর আছে কিনা সেটা includes দিয়েও চেক করতে পারো

// ৮. এছাড়াও স্ট্রিং এর ছোট একটা অংশ বের করার জন্য split, slice, substring ইউজ করতে পারো

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ***********
// string
// *****************
// string পরিবর্তন করা জায় না ।

// const userName = 'bkackPink'
// const userInput = 'bkackPinK'
// console.log(userName.toLowerCase());
// console.log(userInput.toUpperCase());
// console.log(userName.toLocaleUpperCase());
// তুলোনা করার সময় সব গুলা লয়ারকেচ করে দিবো । আর সেনসেটিভ ইসুতে করা জাবেনা ।
// if (userName.toLowerCase() === userInput.toLowerCase()) {
//     console.log("valid user");

// }
// else {
//     console.log('invalide user');
// }



// *******************
// Class 21 - 2
// *******************



// *******************
// Class 21 - 3
// *******************



// *******************
// Class 21 - 4
// *******************
// Math
// let num1 = 25;
// let num2 = 45;
// const gap = Math.abs(num1 - num2);
// console.log(gap);
// if (gap < 5) {
//     console.log("stay here");
// } else {
//     console.log("not stay ");
// }

// const number = 2.400110;
// let fullname = Math.round(number);
// console.log(fullname);
// const number1 = Math.ceil(2.400110);
// const number2 = Math.floor(2.400110);
// console.log(number2);

// Random
// let Random = Math.random();
// let Random = Math.random() * 100;
// let Random = Math.round(Math.random() * 100);
// console.log(Random);

// for (let i = 1; i < 20; i++) {
//     let Random = Math.round(Math.random() * 6);
//     console.log(Random);
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math



// *******************
// Class 21 - 5
// *******************
// swap.js

// let fast = 5;
// let last = 7;
// console.log(fast, last);

// rong approise

// fast = last;
// last = fast;
// console.log(fast, last);

// changa the value approse 1
// let tamp = fast;
// fast = last;
// last = tamp;

// console.log(fast, last);



// changa the value approse 2

// [fast, last] = [last, fast];
// console.log(fast, last);


// *******************
// Class 21 - 6
// *******************

// problem 1

// let gim = 84;
// let dela = 75;
// if (gim > dela) {
//     console.log("gim");
// }
// else if (dela > gim) {
//     console.log("dela");
// }


// problem 1

// let gim = 69;
// let dela = 97;
// let chinku = 99;
// if (gim > dela && gim > chinku) {
//     console.log("gim");
// }
// else if (dela > gim && dela > chinku) {
//     console.log("dela");
// }
// else {
//     console.log("chinku");
// }

// function gatRejult(gim, dela, chinku) {
//     if (gim > dela && gim > chinku) {
//         return "gim";
//     }
//     else if (dela > gim && dela > chinku) {
//         return "dela";
//     }
//     else {
//         return "chinku";
//     }
// }

// console.log(gatRejult(gim, dela, chinku));

// Olter native

// let olter = Math.max(gim, dela, chinku);
// console.log(olter);

// function gatRejult(gim, dela, chinku) {
//     let olter = Math.max(gim, dela, chinku);
//     return olter;
// }

// console.log(gatRejult(gim, dela, chinku));

// *******************
// Class 21 - 7
// *******************


// const friends = [120, 166, 182, 495, 2156, 5610];
// function largestFriend(number) {
//     let largestF = number[0];
//     for (let i = 0; i < number.length; i++) {
//         let index = number[i];
//         if (index > largestF) {
//             largestF = index;
//         }
//     }
//     return largestF;
// }
// console.log(largestFriend(friends));




// const friends = [166, 182, 495, 2156, 5610, 120];

// function arrayMin(array) {
//     var min = array[0];
//     for (var i = 0; i < array.length; i++) {
//         if (min < array[i]) {
//             min = min;
//         } else if (min > array[i]) {
//             min = array[i];
//         } else if (min == array[i]) {
//             min = min;
//         }
//     }
//     return min;
// }
// console.log(arrayMin(friends));


// *******************
// Class 21 - 8
// *******************




// *******************
// Class 21 - 9
// *******************

//Fibonacci number



/*
The First 20 Fibonacci numbers are:[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, ]
এটা আগের ২ টার নাম্বারের জোগফল ।
জেমোন
fibi[4]=fibo[3]+fibo[2];
fibi[40]=fibo[39]+fibo[38];
fibo[n]=fibo[n-1]+fibo[n-2];
fibo[i]=fibo[i-1]+fibo[i-2];

*/

// let fibo = [0, 1];
// for (let i = 2; i < 20; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);




// *******************
// Class 21 - 10
// *******************



// Summary

// ফাংশন নিয়ে কনফিউশন ? নো টেনশন:

// ফাংশন নিয়ে না বুঝলে টেনশন করার দরকার নাই। আমাদের নেক্সট মাইলস্টোন এর ফাংশন নিয়ে পাঁচটা ভিডিও আছে। যেগুলার টাইটেল হচ্ছে-- When to use a function. When to return from a function and from where.Callback function and pass different function. Arguments and deal with unknown number of arguments.How to organize code inside a function সো ফাংশন নিয়ে আপাতত, নো টেনশন।


// প্রাকটিস প্রব্লেম - ৫ খানা

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

// let array = [120, 584, 695, 40, 12548, 6452, 12548, 512564, 2415542];
// let min = array[0];
// for (let i = 0; i < array.length; i++) {
//     let index = array[i];
//     if (min < index) {
//         min = min;
//     }
//     else if (min > index) {
//         min = index;
//     }
//     else if (min === index) {
//         min = min;
//     }
// }
// console.log(min);






// // const friends1 = [166, 182, 495, 60, 2156, 5610, 120];

// function arrayMin(array) {
//     var min = array[0];
//     for (var i = 0; i < array.length; i++) {
//         if (min < array[i]) {
//             min = min;
//         } else if (min > array[i]) {
//             min = array[i];
//         } else if (min == array[i]) {
//             min = min;
//         }
//     } return min;
// }
// console.log(arrayMin(friends1));



// const friends = [120, 166, 182, 495, 2156, 5610];
// function largestFriend(number) {
//     let largestF = number[0];
//     let smolestF = number[0];
//     for (let i = 0; i < number.length; i++) {
//         let index = number[i];
//         if (index > largestF) {
//             largestF = index;
//         }
//         if (index < smolestF) {
//             smolestF = index;
//         }
//     }
//     return { largestF, smolestF };
// }
// console.log(largestFriend(friends));



// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

// const number1 = 154580;
// const number2 = 1580;
// const number3 = 15450;
// if (number1 > number2 && number1 > number3) {
//     console.log(number1);
// }
// else if (number2 > number3 && number2 > number1) {
//     console.log(number2);
// }
// else {
//     console.log(number3);
// }




// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

// let array = [10, 20, 30, 40];
// function arrayAvarage(array) {
//     let sume = 0;
//     let avarage = 0;
//     for (let i = 0; i < array.length; i++) {
//         let index = array[i];
//         sume = sume + index;
//         avarage = sume / array.length;
//     }
//     console.log(avarage);
// }
// arrayAvarage(array);



// const numbers = [150, 220, 350, 500,];

// function avg(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(avg(numbers));

// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area(আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

// ৫.(ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 
