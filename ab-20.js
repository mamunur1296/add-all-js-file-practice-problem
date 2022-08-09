// ***************************
//     class = 20 - 1
// ***************************

//  1 variable
// var name = "mamun";


//  2 array

// 3 condition

// 4 loop

// 5 function

// 6 Objeckt


// ==================
// // var let const
// =====================

// var  change kora jay
// let  change kora jay
// const kokhono chenge hoy na
// =============== google korta hobe var let ar const neya ============




// ***************************
//     class = 20 - 2
// ***************************


// let myInci = 120;
// let myFIt = myInci / 12;
// console.log(myFIt);




// function incis(number) {
//     let nyInci = number;
//     let myFit = nyInci / 12;
//     myFit = myFit.toFixed(2);
//     myFit = parseFloat(myFit);
//     return myFit;
// }
// const nanafit = 200;
// let rejult = incis(nanafit);
// console.log(rejult);

// const nanufit = 77;
// let naniFIt = incis(nanufit);
// console.log(naniFIt);




// function mailToKm(miles) {
//     const km = miles * 1.609;
//     return km;
// }
// const rodemap = 120;
// const kilomiter = mailToKm(rodemap);
// console.log(kilomiter);





// ***************************
//     class = 20 - 3
// ***************************



// function oddOrEvenNumber(number) {
//     const process = number % 2;
//     if (process == 0) {
//         return "this number is True"
//     } else {
//         return "this number is false"
//     }
// }
// const input = 177;
// const rejult = oddOrEvenNumber(input);
// console.log(rejult);



// ***************************
//     class = 20 - 4
// ***************************

// js lepear lojick to google


// function oddOrEvenNumber(number) {
//     const process = number % 4;
//     if (process == 0) {
//         return "this number is Liper"
//     }
//     return "this number is not liper"

// }
// const input = 2024;
// const rejult = oddOrEvenNumber(input);
// console.log(rejult,);



// ***************************
//     class = 20 - 5
// ***************************


// let numbers = [12, 45, 78, 65, 21, 21, 58, 21, 150];
// function sumArray(number) {
//     let sumation = 0;
//     for (i = 0; i < number.length; i++) {
//         let index = number[i];
//         sumation = sumation + index
//     }
//     return sumation;
// }
// let sumearray = sumArray(numbers);
// console.log(sumearray);


// // get element by index . mathed 1
// var numbers = [45, 68, 78, 89, 98];
// var element = numbers[4]
// console.log(element);



// ***************************
//     class = 20 - 6
// ***************************






// let numbers = [12, 45, 78, 65, 21, 21, 58, 21, 150];
// function sumArray(number) {
//     for (i = 0; i <= number.length; i++) {
//         let index = number[i];
//         sumation = index % 2;
//         if (sumation === 0) {
//             console.log(index, "Even");
//         }
//         else {
//             console.log(index, "odd");
//         }
//     }

// }
// let rejult = sumArray(numbers);
// console.log(rejult);

// ====================================================

// let numbers = [12, 45, 78, 65, 21, 21, 58, 21, 150];
// function sumArray2(number) {
//     const oddNumbers = [];
//     for (i = 0; i < number.length; i++) {
//         let index = number[i];
//         sumation = index % 2;
//         if (sumation !== 0) {
//             oddNumbers.push(index)
//         }

//     }
//     return oddNumbers;
// }
// let rejult2 = sumArray2(numbers);
// console.log(rejult2);


// // coll kora anci ar ki
// let oddNumbersSume = sumArray(rejult2);
// console.log(oddNumbersSume);





// ***************************
//     class = 20 - 7
// ***************************


// function sumOfNambers(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// const rejult = sumOfNambers(5);
// console.log(rejult);



// function multiOfNambers(numbers2) {
//     let multiplain = 1;
//     for (let i = 1; i < numbers2; i++) {
//         multiplain = multiplain * i;
//     }
//     return multiplain;
// }
// const rejult2 = multiOfNambers(7);
// console.log(rejult2);


// ***************************
//     class = 20 - 8
// ***************************



// গুন করাকেই ফেকটরিয়াল বলা হয়;
// জেমোন ৪ এর ফেক্টরিয়াল ৪*৩*২*১ বড় থেকে ছোটোর দিকে;
// function factorial(numbers) {
//     let multiplain = 1;
//     for (let i = numbers; i >= 1; i--) {
//         multiplain = multiplain * i;
//         console.log(i);
//     }
//     return multiplain;
// }
// const number = 50;
// const rejult2 = factorial(number);
// console.log("Factorial of this number  ", number, " =", rejult2,);


// function print(a, b, c) {
//     return a + 2;
//     return a * b;
//     return b * c + a;
// }
// console.log(print(1, 2, 3));



// ***************************
//     class = 20 - 9
// ***************************

// ১.leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

// function leapYear(years) {
//     let year = years % 4;
//     if (year === 0) {
//         return true;
//     }
//     return false;
// }
// let year = leapYear(2024);
// console.log(year);


// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।



// function evenOdd(age) {
//     let myAge = age % 2;
//     if (myAge === 0) {
//         return true;
//     }
//     return false;
// }
// let age = evenOdd(26);
// console.log(age);


// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.


// function hourToMinits(hour) {
//     let minits = hour * 60;
//     return minits;
// }
// let hour = hourToMinits(1000);
// console.log(hour);


// ৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।


// function hourtoSegent(hour) {
//     let segent = (hour * 60) * 60;
//     return segent;
// }
// let hour = hourtoSegent(4);
// console.log(hour, "segend");



// problem 2
// Write a function findLeapYear() that will take the array
// [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if
// each year is a leap year.If a year is a leap year insert that year in a
// new array, return the new array and print the result.


// let years = [2023, 2024, 2025, 2028, 2030];
// function fundLeapYear(params) {
//     let leapYearArray = [];
//     for (let i = 0; i < params.length; i++) {
//         let index = params[i];
//         let leapYear = index % 4;
//         if (leapYear === 0) {
//             leapYearArray.push(index)
//         }
//     }
//     return leapYearArray;
// }
// let rejult = fundLeapYear(years);
// console.log(rejult);



// Write a function findOddSum() that will take the array[5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.


// let numbers = [5, 7, 8, 10, 45, 30, 100, 409, 300];
// function findOddSum(parameter) {
//     let oddArray = [];
//     let evenArray = [];
//     let sumeOddArray = 0;
//     let sumeEvenArray = 0;
//     for (let i = 0; i < parameter.length; i++) {
//         let index = parameter[i];
//         let oddNumber = index % 2;
//         if (oddNumber !== 0) {
//             oddArray.push(index);
//         }
//         else {
//             evenArray.push(index);
//         }
//     }
//     for (let i = 0; i < oddArray.length; i++) {
//         let indexOddArray = oddArray[i];
//         sumeOddArray = sumeOddArray + indexOddArray;
//     }
//     for (let i = 0; i < evenArray.length; i++) {
//         let indexEvenArray = evenArray[i];
//         sumeEvenArray = sumeEvenArray + indexEvenArray;
//     }
//     return { "this is a Even": sumeEvenArray, "this id a odd": sumeOddArray };
// }
// let rejult = findOddSum(numbers);
// console.log(rejult);

// https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript



// ৩. একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো
// In descending order
// let arra = ["Banana", "Orange", "Apple", "Mango"];
// arra.sort();
// // arra.reverse();
// console.log(arra);

// let arra = [1, 9, 2, 8, 3, 7, 4, 6, 5, 11, 19, 16, 13, 18, 17, 15, 16, 14, 20];
// arra.sort(
//     function (a, b) {
//         return a - b;
//     }
// );
// console.log(arra);

// let arra = [5, 7, 8, 10, 45, 30];
// arra.sort(
//     function (a, b) {
//         return b - a;
//     }
// );
// console.log(arra);


// let arr = [1, 9, 2, 8, 3, 7, 4, 6, 5, 11, 19, 16, 13, 18, 17, 15, 16, 14, 20];
// function myArrayMin(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while (len--) {
//         if (arr[len] < min) {
//             min = arr[len];
//         }
//     }
//     return min;
// }

// let rejult = myArrayMin(arr);
// console.log(rejult);

// https://www.w3schools.com/js/js_array_sort.asp


// ৫. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো



// for (let i = 1; i <= 50; i++) {
//     let division = i % 3;
//     let division5 = i % 5;
//     if (division === 0) {
//         console.log("this number multiplaid by 3 =", i);
//     }

//     if (division5 === 0) {
//         console.log("this number multiplaid by 5 =", i);
//     }

// }

// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
// ৬.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা


// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
// function bigFriendsName(name) {
//     var longFrins = " ";
//     name.forEach(function (friends) {
//         if (friends.length > longFrins.length) {
//             longFrins = friends;
//         }
//     });

//     console.log(longFrins);
// }

// bigFriendsName(friends);



// function findLongestWord(array) {
//     var longestWord = "";

//     array.forEach(function (word) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     });

//     return longestWord;
// }

// var word = findLongestWord(["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
// console.log(word);





// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// ৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে



// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// const unicNumbor = [...new Set(numbers)];
// console.log(unicNumbor);



// https://appdividend.com/2022/06/04/how-to-get-distinct-values-from-array-in-javascript/#:~:text=To%20find%20a%20unique%20array,the%20array%20with%20unique%20values.




// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// 8. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো










































































































































































































































































































































































