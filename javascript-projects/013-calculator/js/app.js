/* Variables */
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
};

const keys = document.querySelector(".calculator-keys");


/* Functions */

// Updates calculator screen
function updateDisplay() {
    const display = document.querySelector(".calculator-screen");

    display.value = calculator.displayValue;
}

// Adjusts displayValue in calculator operator with digits that are pressed
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

// For adding decimals and making sure no more that one decimal is added per operand
function inputDecimal(dot) {
    if(calculator.waitingForSecondOperand) {
        calculator.displayValue = '0.';
        calculator.waitingForSecondOperand = false;
    }

    if(!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

// Updates calculator object with input data when operator button is clicked
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    // if a consecutive operator is clicked, it will change to the last selected operator
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

// Used when operator is pressed for a second time
function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand; 
    }
}

// Used when AC is pressed
function resetCalculator() {
    calculator.displayValue = '0',
    calculator.firstOperand = null,
    calculator.waitingForSecondOperand = false,
    calculator.operator = null
}

/* Event Listeners */

keys.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches('button')) return;

    switch (target.value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(target.value);
            break;
        case '.':
            inputDecimal(target.value);
            break;
        case 'all-clear':
            resetCalculator();
            break;
        default:
            if (Number.isInteger(parseFloat(target.value))) {
                inputDigit(target.value);
            }
    }
    updateDisplay();

});

