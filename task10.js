'use strict'
let number = +prompt('Введите число');
let sum = 0;
for (let i = 1; i <= number; i++){
    sum += i;
}
console.log(sum);