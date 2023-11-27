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
    
    let number = parseInt(document.getElementById('num').value); 

    //массивы цифр в текстовой интерпретации
    let ones = [''      , 'один',        'два',        'три',        'четыре',       'пять',       'шесть',       'семь',       'восемь',       'девять'];
    let sub =  ['', 'одиннадцать', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let tens = ['',        'десять',           'двадцать',   'тридцать',   'сорок',        'пятьдесят',  'шестьдесят',  'семьдесят',  'восемьдесят',  'девяносто'];
    let hund = ['',        'сто',        'двести',     'триста',     'четыреста',  'пятьсот',      'шестьсот',   'семьсот',     'восемьсот',  'девятьсот']

    let res = '';    

    //если 0, то 0
    if (number === 0) {
        res = 'ноль';
        setResult(res);  
        return; 
    }

    //если меньше 10, то вытащи по номеру элемента в массиве ones
    if (number < 10) {         
        res = ones[number];
        setResult(res);  
        return; 
    }

    //если между 10 и 20
    if (number > 10 && number < 20) {  
                         
        res = sub[number-10];
        setResult(res);  
        return; 
    }

    //между 20 и 99
    if(number >= 20 && number <= 99) { 
        let firstDigit = Math.floor(number / 10); // возвращает наиближайшее целое число, если 6,9 то 6. 
                                                // не путать с округлением, таким образом берем эемент массива для первого текста

        let second = number % 10; // остаток здесь это номер элемента массива  второго текста  tens

        res = tens[firstDigit] + (second !== 0 ? ' ' + ones[second] : ''); // берем элемент массива из tens, добавляем второй эемент из массива ones
                                                                           // не забываем проверить что если нет остатака то берем из массива sub
                                                                           // иначе через пробел склеиваем первый и второй элемент массивов ones и tens
        setResult(res);  
        return;
    } 

    else {  
        let firstDigit = Math.floor(number / 100); 
       
        if (number % 100 === 0) {            
            res = hund[firstDigit];
            setResult(res);  
            return;
        }  

        // Разбиваем число на цифры
        let digits = number.toString().split("").map(Number);
        let first = hund[digits[0]];
        let second = tens[digits[1]];
        let third = ones[digits[2]];    
        
        console.log(sub[digits[1]]);
       
        res = first + ' ' + second + ' ' + third;
        setResult(res);  
        return;
    }

}

function setResult(res) {
    let resultElement = document.getElementById('result2');
    resultElement.textContent = res;
    resultElement.style.display = 'block'; 
}