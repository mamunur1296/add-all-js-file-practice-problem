var numbers = ["mamun", "rakib", "robi", "hasan", 49, 58, 168, 68, 58, 68, 68, "rakib", "robi", "hasan"];
for (var i = 0; i <= numbers.length; i++) {
    number = numbers[i];
    if (number > 60) {
        continue;
    }
    console.log(number);
}