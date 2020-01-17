
    'use strict'
    let num = +prompt('Введите число от 1 до 4');
    switch (num) {
        case 1:
            var result = 'зима';
            break;
        case 2:
            result = 'лето';
            break;
        case 3:
            result = 'осень';
            break;
        case 4:
            result = 'весна';
            break;
        default:
            alert('Вы ввели число не от 1 до 4. Перезаргузите страницу и повторите попытку)');
            break;
    } alert(result);