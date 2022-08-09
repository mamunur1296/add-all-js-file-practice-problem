// ****************
// Class = 22 - 1
// ***************
// বিভিন্য ডেটা টাইপ খুজে বের করার জন্য আমরা ব্যাবহার করে থাকি।
// const name = "bangladesh";
// const age = 25;
// const marid = false;
// const samsung = { mame1: "samdunf", age: 25, brand: " i " };
// const numbers = [15, 16, 24, 15, 24, 18, 48];
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof marid);
// console.log(typeof samsung);
// console.log(Array.isArray(numbers)); শুধু মাত্র এরে এর ক্ষেত্রে এই নিয়োম টা ফলো করতে হয়;
// ================================
// কোণোকিছু এরের ভিতরে আছে কিনা সেটা আমরা জানতে পারবো নিছের এই জিনিস টা দিয়ে
// console.log(numbers.includes(48));
// console.log(numbers.includes(20));

// if (numbers.indexOf(252) !== -1) {

// }

// const newNamber = [12, 45];
// const allNumbers = newNamber.concat(numbers);   দুইটা এরে এখানে এড করা জায়
// console.log(allNumbers);




// ****************
// Class = 22 -2
// ***************

// const numbers = [15, 16, 24, 15, 24, 18, 48];

// const parsial = numbers.slice(2, 6);   জস্ট কপি করে নিয়ে আসে
// console.log(parsial);
// console.log(numbers);

// const parsial2 = numbers.splice(2, 4);  একি বারে ডীলীট জরে নিয়ে আসে
// console.log(parsial2);
// console.log(numbers);
// const parsial4 = numbers.splice(2, 4, 444, 5555, 666);  কেটে এড করা জায়
// console.log(parsial4);
// console.log(numbers);



// ****************
// Class = 22 -3
// ***************S

// const names = ["abul", "babul", "kabul", "chabul", "babul", "kabul"];
// function remotveDuplacate(names) {
//     const unick = [];
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i];
//         if (unick.includes(name) === false) {
//             unick.push(name);
//         }
//     }
//     return unick;
// }


// console.log(remotveDuplacate(names));




// const names1 = ["abul", "babul", "kabul", "chabul", "babul", "kabul", "kabul"];

// function removeDuble(names1) {
//     let unickname = [];
//     for (let i = 0; i < names1.length; i++) {
//         const index = names1[i];
//         if (unickname.includes(index) === false) {
//             unickname.push(index);
//         }

//     }
//     return unickname;
// }

// console.log(removeDuble(names1));





// ****************
// Class = 22 -4
// ***************S



// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fuubar");
//     }

//     else if (i % 5 === 0) {
//         console.log("bar");
//     }
//     else if (i % 3 === 0) {
//         console.log("foo");
//     }
//     else {
//         console.log(i);
//     }



// }

// ****************
// Class = 22 -5
// ***************S


// function woodCalculator(chear, table, khat) {
//     const chearWood = 3;
//     const tableWood = 10;
//     const khatWood = 50;

//     const totalchearWood = chear * chearWood;
//     const totaltableWood = table * tableWood;
//     const totalkhatWood = khat * khatWood;

//     const totalWood = totalchearWood + totaltableWood + totalkhatWood;

//     return totalWood;
// }
// console.log(woodCalculator(1, 1, 1));






// ****************
// Class = 22 -6
// ***************S




// const phons = [
//     { name: "samdung", camara: 142, storage: 32, price: 22000, color: "blsck" },
//     { name: "nokia", camara: 182, storage: 32, price: 25000, color: "blsck" },
//     { name: "iPhon", camara: 172, storage: 32, price: 30000, color: "blsck" },
//     { name: "xaomi", camara: 112, storage: 32, price: 35000, color: "blsck" },
//     { name: "oppo", camara: 142, storage: 32, price: 45000, color: "blsck" },
//     { name: "stcasd", camara: 122, storage: 32, price: 2000, color: "blsck" },
// ];


// function cheapestPhon(phons) {
//     let mychoice = phons[0];
//     let mylarjest = phons[0];
//     let mylarjestC = phons[0];
//     for (let i = 0; i < phons.length; i++) {
//         let index = phons[i];
//         if (index.price < mychoice.price) {
//             mychoice = index;
//         }
//         if (index.price > mylarjest.price) {
//             mylarjest = index;
//         }
//         if (index.camara > mylarjestC.camara) {
//             mylarjestC = index;
//         }
//     }
//     return { mychoice, mylarjest, mylarjestC };
// }

// console.log(cheapestPhon(phons));




// ****************
// Class = 22 -7
// ***************


// const shopingCart = [
//     { pridackt: "show", price: 1200 },
//     { pridackt: "shairt", price: 1400 },
//     { pridackt: "pant", price: 3500 },
//     { pridackt: "balt", price: 500 },
// ];



// function shopingCalculator(shopingCart) {
//     let totalShoping = 0;
//     for (let i = 0; i < shopingCart.length; i++) {
//         let shoping = shopingCart[i];
//         totalShoping = totalShoping + shoping.price;
//     }
//     return totalShoping;
// }


// console.log(shopingCalculator(shopingCart));





// const shopingCart = [
//     { pridackt: "show", price: 1200, quentaty: 2 },
//     { pridackt: "shairt", price: 1400, quentaty: 3 },
//     { pridackt: "pant", price: 3500, quentaty: 1 },
//     { pridackt: "balt", price: 500, quentaty: 5 },
// ];



// function shopingCalculator(shopingCart) {
//     let totalShoping = 0;
//     for (let i = 0; i < shopingCart.length; i++) {
//         let shoping = shopingCart[i];
//         totalShoping = totalShoping + (shoping.price * shoping.quentaty);
//     }
//     return totalShoping;
// }


// console.log(shopingCalculator(shopingCart));

















