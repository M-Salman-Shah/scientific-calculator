const display = document.getElementById('display');
const buttons = document.querySelectorAll(".btn");

let currentInput = '';
let previousInput = '';
let operator = '';
let result = 0;

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btnValue = button.value;
        //console.log(btnValue);
        //Handle clear 
        if (button.classList.contains('clear')) {
            currentInput = '';
            previousInput = '';
            operator = '';
            result = 0;
            display.value = 0;
            return;
        }
        else if (button.classList.contains('equals')) {     //Handle equals 

            if (currentInput && operator && previousInput) {
                console.log(previousInput, operator, currentInput);
                result = calculate(previousInput, currentInput, operator);
                display.value = `${previousInput} ${operator} ${currentInput} = ${result}`;
                previousInput = result.toString(); //Do not know what does it mean.
                currentInput = '';
                operator = '';
            }
            return;
        }
        else if (button.classList.contains('operator')) {   //Handles Operator
            operator = btnValue; 
            display.value = `${currentInput} ${operator}`;
            previousInput = currentInput;
            currentInput = '';
            return;
        }
        else if (button.classList.contains('number') || button.classList.contains('symbol')) { //Handle numbers and symbols
            currentInput += btnValue;
            display.value = `${previousInput} ${operator} ${currentInput}`;
            return;
        }
    });

});

//Helper function to Calculate

function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;

        default:
            return 0;
    }
}