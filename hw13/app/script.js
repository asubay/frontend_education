function calculateFactorial() {
    // Получаем введенное пользователем число
    let userInput = document.getElementById('numberInput').value;
    
    // Парсим введенное значение в целое число
    let number = parseInt(userInput);

    if (!isNaN(number)) {
        // Вычисляем факториал
        let factorialResult = factorial(number);

        // Создаем элемент для отображения результата
        let resultElement = document.createElement('p');
        resultElement.textContent = `Factorial of ${number} is: ${factorialResult}`;

        // Очищаем результат, если уже что-то было отображено
        document.getElementById('result').innerHTML = '';

        // Добавляем элемент с результатом на страницу
        document.getElementById('result').append(resultElement);
    } else {
        alert('Please enter a valid number.');
    }
}

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

////////////////////////////////////////////////////////////////////////////////////////

function calculatePow() {
  
    let base = parseFloat(document.getElementById('numberInput1').value);
    let exponent = parseInt(document.getElementById('exponentInput').value);

    if (!isNaN(base) && !isNaN(exponent)) {
       
        let result = calculatePower(base, exponent);

       
        document.getElementById('result1').innerHTML = `Result: ${result}`;
    } else {
        alert('Please enter valid numbers.');
    }
}

function calculatePower(base, exponent) {
    let result = 1;

    
    for (let i = 0; i < Math.abs(exponent); i++) {
        result *= base;
    }
   
    return exponent < 0 ? 1 / result : result;
}

///////////////////////////////////////////////////////////////////////////////////////

function findSmallestDivisor() {
    
    let userInput = document.getElementById('numberInput2').value;
    let number = parseInt(userInput);

    
    if (isNaN(number) || number < 2) {
        document.getElementById('result2').innerText = 'Please enter a natural number greater than or equal to 2.';
        return;
    }

  
    let smallestDivisor = 2;
    while (number % smallestDivisor !== 0) {
        smallestDivisor++;
    }

    document.getElementById('result2').innerText = `The smallest natural divisor of ${number} is ${smallestDivisor}.`;
}

/////////////////////////////////////////////////////////////////////////////////////////////

function findAllDivisors() {
    
    let userInput = document.getElementById('numberInput3').value;
    let number = parseInt(userInput);

    
    if (isNaN(number) || number < 2) {
        document.getElementById('result3').innerText = 'Please enter a natural number greater than or equal to 2.';
        return;
    }

    
    let divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

   
    document.getElementById('result3').innerText = `All divisors of ${number}: ${divisors.join(', ')}`;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateSum() {
    
    let userInput = document.getElementById('numberInput4').value;
    let number = parseInt(userInput);

   
    if (isNaN(number) || number < 1) {
        document.getElementById('result4').innerText = 'Please enter a valid natural number.';
        return;
    }

   
    let sum = (number * (number + 1)) / 2;

    
    document.getElementById('result4').innerText = `The sum of natural numbers from 1 to ${number} is ${sum}.`;
}


function calculateSumOfSquares() {
   
    let userInput = document.getElementById('numberInput5').value;
    let number = parseInt(userInput);

   
    if (isNaN(number) || number < 1) {
        document.getElementById('result5').innerText = 'Please enter a valid natural number.';
        return;
    }

    
    let sum = (number * (number + 1) * (2 * number + 1)) / 6;
    
    document.getElementById('result5').innerText = `The sum of squares from 1 to ${number} is ${sum}.`;
}

///////////////////////////////////////////////////////////////////////////

function checkPrime() {
   
    let userInput = document.getElementById('numberInput6').value;
    let number = parseInt(userInput);

   
    if (isNaN(number) || number < 1 || !Number.isInteger(number)) {
        document.getElementById('result6').innerText = 'Please enter a valid positive integer.';
        return;
    }

   
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    
    if (isPrime) {
        document.getElementById('result6').innerText = `${number} is a prime number.`;
    } else {
        document.getElementById('result6').innerText = `${number} is not a prime number.`;
    }
}