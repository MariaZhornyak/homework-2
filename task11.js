'use strict'
let i = 0;
while (i < 3){
    let answer = prompt('Введите ответ: ');
     if (answer === 'Троллейбус'){
         alert('Правильно!');
         break;
     }
     else if (answer === 'Сдаюсь'){
         alert('Правильный ответ: троллейбус');
         break;
     }
     else {
         alert('Подумай ещё)))');
     }
     i++;
}