let firstValue = '';
let operandValue = '';
let secondValue = '';
let numSwitch = false;
let finalSum = 0;
let count = 0;
let holder = 0;

document.getElementById("display").innerHTML = holder;

let displayArray = [];
let displayNumber = displayArray.join('');

function clicked(buttonPressed) {
    displayArray.push(buttonPressed);
    displayNumber = displayArray.join('');
    document.getElementById("display").innerHTML = displayNumber;
    
    if (operandValue == '÷' && buttonPressed == '0'){
       alert('In our current space-time continuum, this calculator is unable to divide by zero.')
       clear();
    }

    if (isNaN(buttonPressed) == false && numSwitch == false && count == 0){
       firstValue = firstValue + buttonPressed;
    }
    else if (isNaN(buttonPressed) == true && count > 0){ 
       operandValue = buttonPressed;
       numSwitch = !numSwitch;
       count += 1;
       firstValue = finalSum; 
       secondValue = '';
   }
    else if (isNaN(buttonPressed) == true){
       operandValue = buttonPressed;
       numSwitch = !numSwitch;
       count += 1;
       secondValue = '';
    }
    else if (isNaN(buttonPressed) == false && numSwitch == true && count == 1){ 
       secondValue = secondValue + buttonPressed;
   }
   else if (isNaN(buttonPressed) == false  && count > 1){ 
       secondValue = secondValue + buttonPressed;
   }
   finalSum = operate(operandValue, firstValue, secondValue);
}

let button1 = document.querySelector("#button1");
button1.addEventListener('click', (e) => {
   clicked(1);
});
let button2 = document.querySelector("#button2");
button2.addEventListener('click', (e) => {
   clicked(2);
});
let button3 = document.querySelector("#button3");
button3.addEventListener('click', (e) => {
   clicked(3);
});
let button4 = document.querySelector("#button4");
button4.addEventListener('click', (e) => {
   clicked(4);
});
let button5 = document.querySelector("#button5");
button5.addEventListener('click', (e) => {
   clicked(5);
});
let button6 = document.querySelector("#button6");
button6.addEventListener('click', (e) => {
   clicked(6);
});
let button7 = document.querySelector("#button7");
button7.addEventListener('click', (e) => {
   clicked(7);
});
let button8 = document.querySelector("#button8");
button8.addEventListener('click', (e) => {
   clicked(8);
});
let button9 = document.querySelector("#button9");
button9.addEventListener('click', (e) => {
   clicked(9);
});
let button0 = document.querySelector("#button0");
button0.addEventListener('click', (e) => {
   clicked(0);
});
let buttonPLus = document.querySelector("#buttonPlus");
buttonPlus.addEventListener('click', (e) => {
   clicked('+');
});
let buttonMinus = document.querySelector("#buttonMinus");
buttonMinus.addEventListener('click', (e) => {
   clicked('-');
});
let buttonMultiply = document.querySelector("#buttonMultiply");
buttonMultiply.addEventListener('click', (e) => {
   clicked('x');
});
let buttonDivide = document.querySelector("#buttonDivide");
buttonDivide.addEventListener('click', (e) => {
   clicked('÷');
});
let buttonEquals = document.querySelector("#buttonEquals");
buttonEquals.addEventListener('click', (e) => {
   if (finalSum % 1 != 0){
      displayNumber = finalSum.toFixed(2);
      document.getElementById("display").innerHTML = displayNumber;
   }
   else {displayNumber = finalSum;
   document.getElementById("display").innerHTML = displayNumber;
   }
});
let buttonClear = document.querySelector("#clear");
buttonClear.addEventListener('click', (e) => {
    clear();
});

function clear(){
    firstValue = '';
    operandValue = '';
    secondValue = '';
    numSwitch = false;
    finalSum = 0;
    count = 0;
    holder = 0;
    displayArray = [];
    displayNumber = 0;
    document.getElementById("display").innerHTML = displayNumber;
};

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
        else if (operator === 'x') {
        return multiply(a, b);
    }
    else if (operator === '÷') {
        return divide(a, b);
    }
}

