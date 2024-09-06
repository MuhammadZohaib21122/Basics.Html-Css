const display = document.getElementById("display");


const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};


function appendToDisplay(input) {
    display.value += input;
}

function cleardisplay(){
display.value ="";
}

function calculate() {
    const input = display.value;  // Get the current value from the display
    let operator;
    let operands;

    for (let op in operators) {
        if (input.includes(op)) {
            operator = op;
            operands = input.split(op);
            break;
        }
    }

    if (operands && operands.length === 2) {
        const a = parseFloat(operands[0]); 
        const b = parseFloat(operands[1]);  

              if (!isNaN(a) && !isNaN(b)) {
            const result = operators[operator](a, b);
            display.value = result;
        } else {
            display.value = "Error";
        }
    } else {
        display.value = "Error";
    }
}