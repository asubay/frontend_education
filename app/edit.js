function sumValues() {
    let num1 = parseFloat(document.getElementById('num_1').value) || 0;
    let num2 = parseFloat(document.getElementById('num_2').value) || 0;

    let resultElement = document.getElementById('result_1');
    let sum = num1+num2;

    resultElement.textContent = 'Sum: ' + sum;
    resultElement.style.display = 'block';
}

function checkNumber() {
    let num = parseInt(document.getElementById('num_3').value);
    let resultElement = document.getElementById('result_2');

    if (!Number.isInteger(num)){
        alert("Please enter a valid integer");
        return;
    }

    if (num > 0) {
        resultElement.textContent = 'The number is a positive integer.';
        resultElement.style.display = 'block';
    } else if (num < 0) {
        resultElement.textContent = 'The number is a negative integer.';
        resultElement.style.display = 'block';
    } else {
        resultElement.textContent = 'The number is zero.';
        resultElement.style.display = 'block';
    }
}

function checkEven()
{
    let num = parseInt(document.getElementById('num_4').value);
    let resultElement = document.getElementById('result_3');

    if (Number.isInteger(num)) {
        if (num%2==0) {
            resultElement.textContent = 'Yes';
            resultElement.style.display = 'block';
        }
        else {
            resultElement.textContent = 'No';
            resultElement.style.display = 'block';
        }
    }
    else {
        alert("Please enter a valid integer");
        return;
    }
}

function calculate() { 
    let num1 = parseFloat(document.getElementById('num_6').value) || 0;
    let num2 = parseFloat(document.getElementById('num_7').value) || 0;

    let resultElement1 = document.getElementById('result_4');
    let resultElement2 = document.getElementById('result_5');
    let resultElement3 = document.getElementById('result_6');
    let resultElement4 = document.getElementById('result_7');

    resultElement1.textContent = 'sum: ' + (num1+num2);
    resultElement1.style.display = 'block';
    resultElement2.textContent = 'diff: ' + (num1-num2);
    resultElement2.style.display = 'block';
    resultElement3.textContent = 'multiplication: ' + (num1*num2);
    resultElement3.style.display = 'block';
    resultElement4.textContent = 'division: ' + (num1/num2);
    resultElement4.style.display = 'block';
}

function calculateParameter() {
    let height = parseFloat(document.getElementById('height').value) || 0;
    let weight = parseFloat(document.getElementById('weight').value) || 0;
    let genderSelect = document.getElementById('genderSelect');
    let result = document.getElementById('result_fat');

    let selectedGender = genderSelect.value;

    if (selectedGender === 'women') {
        // Calculation for women
        result.textContent = 'Result for Women: ' + (76 - (20*height/weight));
        result.style.display = 'block';
    } else if (selectedGender === 'men') {
        // Calculation for men
        result.textContent = 'Result for Men: ' + (64 - (20*height/weight));
        result.style.display = 'block';
    }

}