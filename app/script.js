
function getBirthday(){
    let resultElement = document.getElementById('result');
    let birthdayInput  = document.getElementById('birthday').value;

    let birthdayDate = new Date(birthdayInput);

    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    resultElement.textContent = 'Your age is: ' + age;
    resultElement.style.display = 'block';
}

function getPrice(){
    let resultElement = document.getElementById('result1');
    let water  = document.getElementById('water').value;
    let bread  = document.getElementById('bread').value;

    let price =parseInt(water) + parseInt(bread);

    resultElement.textContent = 'Total price is: ' + price;
    resultElement.style.display = 'block';
}


function getChar() {
    let resultElement = document.getElementById('result2');
    let number = parseInt(document.getElementById('num').value);
    
    console.log(number);

    //массивы цифр в текстовой интерпретации
    let ones = [''      , 'один',        'два',        'три',        'четыре',       'пять',       'шесть',       'семь',       'восемь',       'девять'];
    let sub =  ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let tens = ['',        '',           'двадцать',   'тридцать',   'сорок',        'пятьдесят',  'шестьдесят',  'семьдесят',  'восемьдесят',  'девяносто'];

    let res = '';    

    //если 0, то 0
    if (number === 0) {
        res = 'ноль';
        resultElement.textContent = res;
        resultElement.style.display = 'block';    
    }

    //если меньше 10, то вытащи по номеру элемента в массиве ones
    else if (number < 10) {        
        res = ones[number];
        resultElement.textContent = res;
        resultElement.style.display = 'block'; 
    }

    //если между 10 и 20
    else if (10 >= number > 20) {             
        res = sub[number - 10];
        resultElement.textContent = res;
        resultElement.style.display = 'block'; 
    }

    //между 20 и 99
    else { 
        let firstDigit = Math.floor(number / 10); // возвращает наиближайшее целое число, если 6,9 то 6. 
                                                // не путать с округлением, таким образом берем эемент массива для первого текста

        let second = number % 10; // остаток здесь это номер элемента массива  второго текста  tens

        res = tens[firstDigit] + (second !== 0 ? ' ' + ones[second] : ''); // берем элемент массива из tens, добавляем второй эемент из массива ones
                                                                           // не забываем проверить что если нет остатака то берем из массива sub
                                                                           // иначе через пробел склеиваем первый и второй элемент массивов ones и tens
        resultElement.textContent = res;
        resultElement.style.display = 'block'; 
    } 

}