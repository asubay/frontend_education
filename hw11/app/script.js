function getAvarage() {
    let num1 = document.getElementById('input1').value || 0;
    let num2 = document.getElementById('input2').value || 0;
    let res = document.getElementById('result1');
    res.textContent  = 'result is: ' + (parseInt(num1) + parseInt(num2))/2;
    res.style.display = 'block';
}

function getDividend() {
    let num1 = parseInt(document.getElementById('input3').value) || 0;
    let num2 = parseInt(document.getElementById('input4').value) || 0;
    let res = document.getElementById('result2');

    if(num1 % num2 == 0)
    {        
        res.textContent  = 'result is: OK';
        res.style.display = 'block';
        
    }
    
    else {
        let divident = num1 % num2;        
        let needNum = num2-divident;        
        res.textContent  = 'result is: ' + divident + ' and ' + needNum;
        res.style.display = 'block';
    }
}

function convertTimeTo24HourFormat() {
    let hours = parseInt(document.getElementById('input5').value) || 0;
    let minutes = parseInt(document.getElementById('input6').value) || 0;
    let select = document.getElementById('ampm').value;
    let res = document.getElementById('result3'); 

    if(hours<12 && minutes<60) {
        if (select === "PM" && hours < 12) {
        
            hours += 12;
            
        } else if (select === "AM" && hours === 12) {
            hours = 0;
        }
        
        let formattedHours = hours < 10 ? "0" + hours : hours;
        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    
        // Возвращаем строку в формате 24 часа
        res.textContent = formattedHours + "-" + formattedMinutes;
        res.style.display = 'block';
    }
    else {
        alert("wrong format!")
    }    
}

function getMax() {
    let num1 = parseInt(document.getElementById('input7').value) || 0;
    let num2 = parseInt(document.getElementById('input8').value) || 0;
    let res = document.getElementById('result4');

    if (num1>num2) {
        res.textContent  = 'result is: ' + num1;
        res.style.display = 'block';
    }
    else {
        res.textContent  = 'result is: ' + num2;
        res.style.display = 'block';
    }
}

function isLeapYear() {
    let res = document.getElementById('result5');
    let year = parseInt(document.getElementById('input9').value) || 0;
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    {
        res.textContent  = 'result is: yes';
        res.style.display = 'block';
    }
    else {
        res.textContent  = 'result is: no';
        res.style.display = 'block';
    }
    
}

function solveEquation() {
    let a = parseInt(document.getElementById('input10').value) || 0;
    let b = parseInt(document.getElementById('input11').value) || 0;
    let res = document.getElementById('result6');

    // Решение уравнения ax + b = 0
    let x = -b / a;

    // Проверка условий
    if (x >= 0 && x <= 1) {
        res.textContent  = 'result is:  -1  (' + x + ')';
        res.style.display = 'block';
       
    } else if (x > 1) {
        res.textContent  = 'result is:  1  (' + x + ')';
        res.style.display = 'block';
    } else {        
        res.textContent  = 'result is: ' + x;
        res.style.display = 'block';
    }
}

function calculateChange() {
    let itemPriceRub = parseInt(document.getElementById('input12').value) || 0;
    let itemPriceKop = parseInt(document.getElementById('input13').value) || 0;
    let res = document.getElementById('result7');
    let paymentRub = parseInt(document.getElementById('input14').value) || 0;
    let paymentKop = parseInt(document.getElementById('input15').value) || 0;

    let itemPriceInKop = itemPriceRub * 100 + itemPriceKop;
    
    let changeInKop = (paymentRub * 100 + paymentKop) - itemPriceInKop;
    
    let changeRub = Math.floor(changeInKop / 100);
    let changeKop = changeInKop % 100;

    res.textContent  = 'сдача : ' + changeRub + ' рубликов и ' + changeKop + ' копеек';
    res.style.display = 'block';
}

function calculateIceCreame() {
    let iceCreame = parseInt(document.getElementById('input16').value) || 0;
    let res = document.getElementById('result8');

    if (iceCreame%3==0 || iceCreame%5==0){
        res.textContent  = 'да';
        res.style.display = 'block';
    }
    else {
        res.textContent  = 'нет';
        res.style.display = 'block';
    }
}

function calculateKotletka() {
    let k = parseInt(document.getElementById('count').value) || 0;
    let m = parseInt(document.getElementById('minut').value) || 0;
    let n = parseInt(document.getElementById('countAll').value) || 0;
    let res = document.getElementById('result9');

    let totalTimeOneKotletka = m * 2;

    let totalTimeAll = Math.ceil(n / k) * totalTimeOneKotletka;
    res.textContent  = 'все котлетки за ' + totalTimeOneKotletka + ' минут пожаришь ты...';
    res.style.display = 'block';
}

function calcMinMax() {
    let k = parseInt(document.getElementById('num1').value) || 0;
    let m = parseInt(document.getElementById('num2').value) || 0;
    let n = parseInt(document.getElementById('num3').value) || 0;
    let minres = document.getElementById('min');
    let maxres = document.getElementById('max');

    if (!isNaN(m) && !isNaN(n) && !isNaN(k)) {
       
        const max = Math.max(k, m, n);
        const min = Math.min(k, m, n);
      
        // Выводим результаты
        minres.textContent = 'Самое маленькое число: ' + min;
        minres.style.display = 'block';

        maxres.textContent = 'Самое большое число: ' + max;
        maxres.style.display = 'block';

      } else {
        alert("Пожалуйста, введите корректные числа.");
      }
}