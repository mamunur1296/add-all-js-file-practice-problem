// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে ? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।

// const string = "Manum";
// const bullien = true;
// const numbor = 51;
// console.log(typeof (numbor));



// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।

// const numbor = "mamun";
// let numbor = "mamun";
// let name = "mamun";
// name = "roshid";
// numbor = "roshid";

// console.log(numbor);

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।
// let numbor1 = 10;
// let numbor2 = 20;
// let sum = numbor1 + numbor2;

// let less = numbor1 - numbor2;
// let maltiplaid = numbor1 * numbor2;
// let divided = numbor1 / numbor2;
// let modilas = numbor1 % numbor2;
// console.log(sum, less, maltiplaid, divided, modilas);


// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান, ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

// let numbor1 = 50;
// let numbor2 = 60;
// if (numbor1 < numbor2) {
//     console.log("this number is less");
// }
// if (numbor2 > numbor1) {
//     console.log("this is true");
// }
// if (numbor2 == numbor1) {
//     console.log("this is fals");
// }
// if (numbor2 >= numbor1) {
//     console.log("true");
// }
// if (numbor2 != numbor1) {
//     console.log("fals");
// }



// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে ? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

// let numbor1 = 50;
// let numbor2 = 60;

// if (numbor1 < numbor2 || numbor1 > numbor2) {
//     console.log(true);
// }
// if (numbor1 < numbor2 && numbor1 !== numbor2) {
//     console.log(true);
// }

// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো

// let numbor1 = 50;
// let numbor2 = 60;

// if (numbor1 < numbor2 || numbor1 > numbor2) {
//     console.log(true);
// }
// if (numbor1 < numbor2 && numbor1 !== numbor2) {
//     console.log(true);
// }

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে ? পারলে সেই কোড লিখে ফেলো।

// let i = 5;
// while (i < 19) {
//     i += 2;
//     console.log(i);
// }



// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।
// https://www.w3schools.com/jsref/jsref_splice.asp
// const parsial = numbers.slice(2, 6);   জস্ট কপি করে নিয়ে আসে
// let number = [10, 20, 30, 40, 50, 60];
// console.log(number);
// console.log(number.length,);
// number.splice(3, 1, 400);
// console.log(number);
// number.splice(3, 0, 4000, 5000);
// console.log(number);
// number.splice(3, 3, 40);
// console.log(number);

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

// let number = [10, 20, 30, 40, 50, 60];
// for (let i = 0; i < number.length; i++) {
//     let index = number[i];
//     console.log(index);
// }


// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে ? তাহলে তুমি সেই কোড করে ফেলো
// let number = [100, 20, 300, 40, 50, 600];
// let newarray = [];
// for (let i = 0; i < number.length; i++) {
//     let index = number[i];
//     if (index > 80) {
//         newarray.push(index)
//     }
// }
// console.log(newarray);



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

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।

// function maltiplaid(num1, num2, num3) {
//     let rejult = num1 * num2 * num3;
//     return rejult;
// }
// console.log(maltiplaid(10, 20, 30));

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।
// let objeckt = {
//     username: "mamun",
//     roll: 50,
//     number: 80,
// }
// objeckt.username = "roshid";
// objeckt.number = 100;
// console.log(objeckt);


// উপরের ১২টা কাজের মধ্যে তুমি যদি ৯টা থেকে ১০ টা বা তার বেশি কাজ করে ফেলতে পারো। তাহলে তোমার বেসিক কনসেপ্ট ঠিক আছে। যদি ৫টা থেকে ৯টা অর্থাৎ ৫ টা, ৬টা, ৭টা বা ৮টা করতে পারো। তাহলে তোমাকে হার্ডওয়ার্ক করতে হবে। একটু বেশি সময় দিতে হবে। আর তুমি যদি ৫টা এর কম। অর্থাৎ ০, বা ১টা বা ২টা বা ৩টা বা ৪টা পেয়ে থাকো তাহলে তোমাকে ডিফারেন্টভাবে জাভাস্ক্রিপ্ট এ আরো সময় দিতে হবে। সেক্ষেত্রে তুমি আমাদের ইমেইল করে দিতে পারো web @programming-hero.com এ। তোমার ওভারঅল অবস্থা লিখে। আমরা তোমাকে স্পেশালভাবে তোমার সিচুয়েশন অনুসারে গাইডলাইন দিবো।

// .

// প্রব্লেম সলভিং চেকলিস্ট / সেলফ এসেসমেন্ট:



// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

// function feetToInch(feet) {
//     const inch = 12;
//     return feet * inch;
// }
// let feet = 1;
// let rejult = feetToInch(feet);
// console.log(feet, "Feet = ", rejult, " Inch . ");





// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

// function centimeterToMeter(centimeter) {
//     const meter = 0.01;
//     return centimeter * meter;
// }
// let centimeter = 500;
// let rejult = centimeterToMeter(centimeter);
// console.log(centimeter, "Centimeter = ", rejult, " Meter . ");


// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা



// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।


// function paperRequirements(firstBook, secondBook, thirdBook) {
//     const firstBookPapers = 100;
//     const secondBookPapers = 200;
//     const thirdBookPapers = 300;
//     let firstPaper = firstBook * firstBookPapers;
//     let secondpaper = secondBook * secondBookPapers;
//     let thirdpaper = thirdBook * thirdBookPapers;
//     let total = firstPaper + secondpaper + thirdpaper;
//     return total;
// }

// const rejult = paperRequirements(5, 5, 2);
// console.log(rejult);



// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম(স্ট্রিং) রিটার্ন করতে হবে।



// let friends = ["Mamun", "Rab", "Hassib khanna ", "Robtttttttttttti", "Hazrli"]
// function bestFriend(friends) {
//     let bigFriend = friends[0];
//     let smolestFriend = friends[0];
//     for (let i = 0; i < friends.length; i++) {
//         let indexOfFriend = friends[i];
//         if (indexOfFriend.length > bigFriend.length) {
//             bigFriend = indexOfFriend;
//         }
//         if (indexOfFriend.length < smolestFriend.length) {
//             smolestFriend = indexOfFriend;
//         }
//     }
//     return { bigFriend, smolestFriend };
// }

// let rejult = bestFriend(friends);
// console.log(rejult);

// let friends = ["Mamun", "Rab", "Ha", "Rotti", "Hazrli"]
// let big = friends[0];
// let smol = friends[0];
// for (let i = 0; i < friends.length; i++) {
//     let index = friends[i];
//     if (index.length > big.length) {
//         big = index;
//     }
//     if (index.length < smol.length) {
//         smol = index;
//     }
// }
// console.log(smol);













// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।


// let number = [152, 36, 21, 45, 24, 58, 45, 125, -58, 654, 965, 21];
// let newarry = [];
// for (let i = 0; i < number.length; i++) {
//     let index = number[i];
//     if (index > 0) {
//         newarry.push(index);
//     }
//     else if (index < -1) {
//         break
//     }

// }
// console.log(newarry);










// চেষ্টা করবে আমাদের ভিডিও না দেখে প্রব্লেমগুলো করতে। দরকার হলে গুগলে সার্চ দিতে পারবে। আর একান্তই দরকার হলে প্রব্লেম সলভিং এর জন্য আমাদের ভিডিও দেখতে পারবে। তারপর উপরের ৫টা প্রব্লেম সলভিং চ্যালেঞ্জ এর মধ্যে তুমি যদি ৪টা বা ৫টা করে ফেলতে পারো। তাহলে আর তোমার কোন টেনশন নাই। তুমি সামনে এগুতে পারবে। আর তুমি যদি ২টা বা ৩ টা করতে পারো। তাহলে কিছুটা হার্ডওয়ার্ক করতে হবে। আরেকটু ভালো করে বুঝার চেষ্টা করবে। তবে চেষ্টা করতে করতে সামনে এগুতে পারবে। আর যদি একটাও না পারো বা মাত্র একটা পারো। তাহলে আমাদের ইমেইল করে দাও web @programming-hero.com এ । আমরা তোমাকে বিস্তারিত ইমেইলে জানিয়ে দিবো।



// .



// এসাইনমেন্ট ৪:

// আগামীকাল আরেকটা প্রাকটিস ডে আসবে। সেদিন কোন ভিডিও আসবে না। তারপরদিন আসবে এসাইনমেন্ট ৪। আজকের সেলফ এসেসমেন্ট ভালো করে করো। তাহলেই আগামিকাল ভালো করে প্রাকটিস করো। আর তারপরেও সময় থাকলে এই মাইলস্টোন এর সিম্পল প্রবলেম সলভিংগুলা(recursive বাদে বাকি প্রব্লেমগুলো) ভালো করে দেখো। সেগুলা রিলেটেড সহজ কিছু প্রবলেম এসাইনমেন্ট এ থাকবে।



// আজকে প্যারা নিলে, আগামীকাল আরাম পাবে।