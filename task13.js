'use strict'
let number = +prompt('Введите число'),
    tmp = 1;
for (let i = 1; i <= number; i++) {
    tmp *= i;
}
alert(tmp);