'use strict'
let beggining = +prompt('Введите начало диапазона');
let end = +prompt('Введите конец диапазона');
let sum = 0;
for (let i = beggining; i <= end; i++) {
    if (i % 2 == 1) {
        sum += i;
    }
} 
alert(sum);