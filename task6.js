<script>
    'use strict';
    let naturalNumber = parseInt(prompt('Введите натуральное число: '));
    let sum = 0;
    if (Number.isNaN(naturalNumber)) {
        alert ('Вы ввели не число(');
    } else {
        while (naturalNumber > 0) {
            let newNumber = naturalNumber % 10;
            if (newNumber % 2 == 0) {
                sum += newNumber;
            }
            naturalNumber = (naturalNumber - newNumber)/10;
        }
    }
    alert(sum);
    
</script>