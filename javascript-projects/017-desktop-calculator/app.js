const calcScreen = document.querySelector(".calculator_display");
const calcButtons = document.querySelector(".calculator_buttons");

const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForSecondOperator: false,
    operator: null
};

function updateScreen() {
    calcScreen.value = calculator.displayValue;
}

function updateDigit(number) {
    const { displayValue, waitingForSecondOperator, } = calculator;

    if (waitingForSecondOperator) {
        calculator.displayValue = number;
        calculator.waitingForSecondOperator = false;
    } else {
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    }
    
    
}

function handleOperator(NextOperator) {
    const {firstOperand, displayValue, operator} = calculator;
    const inputNumber = parseFloat(displayValue);

    if(!firstOperand && !isNaN(inputNumber)) {
        calculator.firstOperand = inputNumber;
    } else if (operator) {
        let results = calculate(firstOperand, inputNumber, operator);

        calculator.displayValue = results;
        calculator.firstOperand = results;
    }

    calculator.waitingForSecondOperator = true;
    calculator.operator = NextOperator;
    
}

function calculate(firstNumber, secondNumber, symbol) {
    switch (symbol) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case 'x':
            return firstNumber * secondNumber;
        case '&#247': //Divide symbol
            return firstNumber / secondNumber;
        default: 
            return secondNumber;
    }
}

function clear() {
    calculator.displayValue = "0",
    calculator.firstOperand = null,
    calculator.waitingForSecondOperator = false,
    calculator.secondOperand = null,
    calculator.operator = null
}

calcButtons.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches('input')) return;

    switch (target.value) {
        case '+':
        case '-':
        case 'x':
        case '&#247': //Divide symbol
        case '=':
            handleOperator(target.value);
            break;
        case 'C':
            clear();
            break;
        default: 
            updateDigit(target.value);
    }
    updateScreen();
})
