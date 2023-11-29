let result = "";
let entry = "";
let currentInput = '';


function clearValue() {
    let res = document.getElementById('result');
    currentInput = '';
    res.textContent  = 0;
    updateDisplay();    
}

function appendNumber(number) {
    currentInput += number; 
    if (currentInput.length <= 10) {
        updateDisplay();
    }
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
    let res = document.getElementById('result');
    try {
        parseValues(currentInput.toString());
        let result = eval(currentInput);
        if(result.length > 10)
        {
            res.textContent  = "too many digits";  
        }
        else {
            res.textContent  = result; 
        } 
               
    } catch (error) {        
        result.textContent = 'Error';
    }
}

function parseValues(currentInput) {
    if(currentInput.includes('*')) {
        let val = currentInput.split('*');
    }

}

