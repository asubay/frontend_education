let result = "";
let entry = "";
let currentInput = '';


function clearValue() {
    currentInput = '';
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    console.log(currentInput);
    updateDisplay();
}

function updateDisplay() {
    let curent = document.getElementById('curent');
    curent.textContent  = currentInput;
}

function appendSymbol(symbol) {
    currentInput += symbol;
    updateDisplay();
}

function calculate() {
    let result = document.getElementById('result');
    try {
        let result = eval(currentInput);
        result.textContent  = result.toString();
        console.log(result);
    } catch (error) {        
        result.textContent = 'Error';
    }
}