





// class 19/2




// topic . 1
// decleair a function
// function numbers() {
//     console.log("hi mamun . ki koro ");
//     console.log("koy ta khaba . tara tari bolo . ");
// }
// numbers();








// topic . 2
// function para meter
// function myName(nomy) {
//     console.log("mamun");
//     console.log("kola khaba ");
//     console.log(nomy);
// }
// myName(100);





// class 19/3


// parameter

// function kolaKhabo(mony) {
//     console.log("kolar dam koto ? ");
//     console.log("konta neben");
//     console.log("boro goula ");
//     console.log("boro goula ", kolarDam);
//     console.log("ai nan taka  ", mony);
// }
// var kolarDam = 100;
// var taka = 150;

// kolaKhabo(taka);






// function num(dd, mm, yy) {
//     console.log("this is my birth day", dd, mm, yy);
// }
// num(15, 12, 96);


// এক সাথে এত্তো গুলা পেরা মিটার ও নেওয়া জায়


// function sum(a, b, c, d, e, f, g) {
//     console.log(a, b, c, d, e, f, g);
//     var add = a + b + c + d + e + f + g;
//     console.log(add);
// }

// sum(12, 13, 14, 15, 16, 17, 18);





// class 19/4

// how  to use return

// function add(number1, number2) {
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
// }
// var total = add(20, 80);
// console.log("this many=", total);



// function shop(giveMony) {
//     var apples = 15;
//     var giveApple = giveMony / apples;
//     return giveApple;
// }
// var payTk = shop(500);
// payTk = payTk.toFixed(2);
// payTk = parseFloat(payTk);
// console.log("your apple is ", payTk, "kg");




// class 19/5

// function stracture ============

// function functionName(parameter/argument){
// function body
//         return
// }
// functionName(parameter name );


// function gerAvarage(assigment1, assigment2, assigment3) {
//     const total = assigment1 + assigment2 + assigment3;
//     const avarage = total / 3;
//     return avarage;
// }
// const assigment1Marks = 60;
// const assigment2Marks = 59;
// const assigment3Marks = 59;
// const myMarks = gerAvarage(assigment1Marks, assigment2Marks, assigment3Marks);
// console.log(myMarks);





// js square function
// function commenation
//     no return & no parameter
//     has return & no parameter
//     no return & has parameter
//     has return & has parameter


// class 19/6

// objeckt
// var objecktName = {
//     proparty/ kiss : Value,
// }

// var myComputer = {
//     brand: "lanevo",
//     color: "gray",
//     price: 20000,
//     ram: "8gb"
// }
// const mobile = {
//     brand: "Samsung",
//     color: "danger",
//     ram: "2.5gb",
//     processor: "1gh",
// }

// console.log(mobile);
// mobile.color = "black";
// console.log(mobile);
// console.log(mobile.ram);
// console.log(mobile.brand);


// console.log(myComputer);
// console.log(myComputer.ram);
// myComputer.color = "danger";
// console.log(myComputer);




// class 19/7



// var shopingCar = {
//     books: 2,
//     pen: 34,
//     rabar: 20,
//     catar: 3,
//     khata: 5,
// }
// console.log(shopingCar);
// gait proparty
// কোনো প্রপার্টির উপাদান গুলা খুজে পাবার জন্য জা জা করতে হয়
// we know the pbjeckt proparty name
// console.log(shopingCar.pen);
// console.log(shopingCar["pen"]);
// another method
// var propartyName = "books";
// console.log(shopingCar[propartyName]);


// we dont know the Object property and value
// const probartis = Object.keys(shopingCar);
// console.log(probartis);
// const value = Object.values(shopingCar);
// console.log(value);

// shati probarty and value

// shopingCar.pen = 50;
// console.log(shopingCar);

// shopingCar["pen"] = 500;
// console.log(shopingCar);

// const items = "pen";
// shopingCar[items] = 1000;
// console.log(shopingCar);





// class 19/8



// var shopingCar = {
//     books: 2,
//     pen: 34,
//     rabar: 20,
//     catar: 3,
//     khata: 5,
// }
// const keys = Object.keys(shopingCar);
// const probarty = Object.values(shopingCar);
// for (var i = 0; i < keys.length; i++) {
//     var propertyName = keys[i];
//     var propertyValue = shopingCar[propertyName]
//     console.log(propertyName, propertyValue);
// }


// for in / for of

// functiom.js
// class 19/9

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// problem and soluition
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা(multiplication table) আউটপুট হিসেবে দেখাবে।

// function multiplaint(number) {
//     for (var n = number; n <= number; n++) {
//         for (var m = 1; m <= 10; m++) {
//             var result = n * m;
//             console.log(n, "*", m, "=", result);
//         }
//     }

// }

// multiplaint(5);

// ================================================================


// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।



// function loyerCash(input) {
//     var artical = input;
//     return artical;
// }

// var reselt = loyerCash("    HI I AM MAMUN IN THE WOULD;");
// // console.log(reselt.toUpperCase());
// console.log(reselt.toLowerCase());

// ================================================================

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।




// function fullName(serealNO, fastName, lastName) {
//     console.log(serealNO, fastName, lastName);
// }
// var no = 1;
// var name1 = "Mamunur";
// var name2 = "Roushid";
// fullName(no, name1, name2);



// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।

// ================================================================


// function squareResult(number11) {
//     console.log(Math.pow(number11, 2));
//     console.log(number11 ** 2);
// }
// squareResult(50);

// 1. JS Math PI
// 2. JS Math abs
// 3. JS Math pow
// 4. JS Math sqrt
// 5. JS Math max
// 6. JS Math min
// 7. JS Math floor
// 8. JS Math ceil
// 9. JS Math round
// 10. JS Math random
// 11. How to create a random number in javascript




// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা: // এবং pepperoni প্রিন্ট করবা।
// ================================================================



// const pizza = {

//     toppings: ['cheese', 'sauce', 'pepperoni'],

//     crust: 'deep dish',

//     serves: 2,
// }
// console.log(pizza.toppings[2]);


// 1) Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing.What will be the output ? Now call
// the foo() to see the output.
// ================================================================






// function foo(valus) {
//     console.log(valus);
//     function bar() {
//         console.log(bar());
//     }
//     bar();
//     var value = bar();
// }
// foo(value);




// 2) Write a function called make_avg() which will take an three integers and return the
//  average of those values.
// ================================================================



// function make_avg(int1, int2, int3) {
//     const sum = int1 + int2 + int3;
//     const avg = sum / 3;
//     console.log(int1, int2, int3);
//     return avg;
// }
// const rejult = make_avg(50, 60, 100);
// console.log("Your avarage number is = ", rejult);



// 3) Challenging: Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.
// ================================================================




// const numbers = [150, 220, 350, 500,];

// function avg(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(avg(numbers));

// avarage an array to the function in js


// 4) Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd.You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter


// function add_even(number) {
//     const even = number % 2;

//     if (even === 0) {
//         console.log("even");
//     }
//     else {
//         console.log("odd");
//     }
// }
// const rejult = add_even(5);
// console.log(rejult);



// function add_even(number) {
//     const even = number % 2;

//     if (even === 0) {
//         return "even";
//     }
//     else {
//         return "odd";
//     }
// }
// const rejult = add_even(13);
// console.log(rejult);





// 5) You are in a hurry to go to your school on time.But when you are crossing the road, the
// traffic signal is red coloured.In this situation, if you try to cross the road, you may be in
//     danger.If you notice a yellow coloured traffic signal, you should stop.If you notice a green
// coloured traffic signal, you should cross the road.So write a JS code, where there is a
// variable called signal.Its value can be green, yellow or red & we will get different activities as
//     output depending on the variable.So, hurry up.

// ====================================================================================================



// function traficSignal(light) {
//     if (light === "red") {
//         return " Stope this is danger color ";
//     } else if (light === "yellow") {
//         return " Stope this is yellow color ";
//     } else if (light === "green") {
//         return " Stope this is green color ";
//     }
// }

// const input = traficSignal("green");
// console.log(input);









































































































































// 5) You are in a hurry to go to your school on time.But when you are crossing the road, the
// traffic signal is red coloured.In this situation, if you try to cross the road, you may be in
//     danger.If you notice a yellow coloured traffic signal, you should stop.If you notice a green
// coloured traffic signal, you should cross the road.So write a JS code, where there is a
// variable called signal.Its value can be green, yellow or red & we will get different activities as
//     output depending on the variable.So, hurry up.