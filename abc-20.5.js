// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে
function cToF(c) {
    let f = (c * 1.8) + 32;
    let massage = c + "\xB0C is " + f + "\xB0F";
    return massage;
}
console.log(cToF(60));


// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।

function fToc(f) {
    let c = (f - 32) / 1.8;
    let massage = f + "\xB0F is " + c + "\xB0C";
    return massage;
}
console.log(fToc(140));



// ৩.কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ + পাবে নাকি অন্য কোন গ্রেড পাবে।


function numberToGrade(number) {
    if (number >= 80 && number <= 100) {
        return "GPA = A+"
    }
    else if (number >= 70 && number <= 79) {
        return "GPA = A"
    }
    else if (number >= 60 && number <= 69) {
        return "GPA = A-"
    }
    else if (number >= 50 && number <= 59) {
        return "GPA = B"
    }
    else if (number >= 40 && number <= 49) {
        return "GPA = c"
    }
    else if (number >= 33 && number <= 39) {
        return "GPA = D"
    }
    else {
        return "GPA = F"
    }
}

console.log(numberToGrade(500));

// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।
// Simple interest = (P x N x R) /100
// P: Principle amount
// N: Number of years
// R: Rate of interest

function simpleInterest(principal, years, rate) {
    let interest = (principal * years * rate) / 100;
    return {
        amount: principal,
        years: years,
        rate: rate,
        interest: interest
    }
}
console.log(simpleInterest(1000, 1, 4));


// CI = P * (1 + R / n)(nt) – P
// Here,

// P is the principal amount.
// R is the annual interest rate.
// t is the time the money is invested or borrowed for.
// n is the number of times that interest is compounded per unit t, for example if interest is compounded monthly and t is in years then the value of n would be 12. If interest is compounded quarterly and t is in years then the value of n would be 4.



function compoundedInterest(p, t, r, n) {
    let amount = p * (Math.pow((1 + (r / n)), (n * t)));
    let interest = amount - p;
    return interest;
}
console.log(compoundedInterest(2000, 5, .08, 12));



