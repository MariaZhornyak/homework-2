'use strict'
let sum = 0;
let number = 255;
while (number > 0) {
    let n = number % 10;
    if (n % 2 !== 0) {
        sum += n;
    }
    number = (number - n)/10;
} 
alert(sum);