/**
 * Created by savannah on 12/19/2016.
 * TODO: Add error-checking for user entering both binary values
 */

var calculatorOutput = document.getElementById("calculator_output_add");
var calculatorForm = document.getElementById("addition_calculator");

calculatorForm.onsubmit = function (e) {

    e.preventDefault();

    var firstNumber = calculatorForm.firstNumber.value;
    var secondNumber = calculatorForm.secondNumber.value;

    // Convert string input to arrays to prepare for arithmetic
    var firstNumberDigits = Array.from(firstNumber);
    var secondNumberDigits = Array.from(secondNumber);

    // The following loops prepend 0's to simulate a zero-extension
    // of the shorter binary value to the matched size of the longer
    // binary value to facilitate easier arithmetic
    if (firstNumberDigits.length > secondNumberDigits.length) {
        for (var i = secondNumberDigits.length; i < firstNumberDigits.length; i++) {

            secondNumberDigits.unshift('0');

        }
    }
    else if (secondNumberDigits.length > firstNumberDigits.length) {
        for (i = firstNumberDigits.length; i < secondNumberDigits.length; i++) {

            firstNumberDigits.unshift('0');

        }
    }

    var carryIn = 0;

    var answer = [];

    // Clear previous output
    calculatorOutput.innerHTML = "Answer: ";

    for (i = firstNumberDigits.length - 1; i >= 0; i--) {

        if (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '0' && carryIn == 0) {
            answer.unshift('0');
            carryIn = 0;
        }
        else if ((firstNumberDigits[i] == '1' && secondNumberDigits[i] == '0' && carryIn == 0) ||
            (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '1' && carryIn == 0) ||
            (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '0' && carryIn == 1)) {
            answer.unshift('1');
            carryIn = 0;
        }
        else if ((firstNumberDigits[i] == '1' && secondNumberDigits[i] == '1' && carryIn == 0) ||
            (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '1' && carryIn == 1) ||
            (firstNumberDigits[i] == '1' && secondNumberDigits[i] == '0' && carryIn == 1)) {
            answer.unshift('0');
            carryIn = 1;
            if (i == 0) {
                answer.unshift('1');
            }
        }
        else if (firstNumberDigits[i] == '1' && secondNumberDigits[i] == '1' && carryIn == 1) {
            answer.unshift('1');
            carryIn = 1;
            if (i == 0) {
                answer.unshift('1');
            }
        }

    }

    for (i = 0; i < answer.length; i++) {

        calculatorOutput.innerHTML += "" + answer[i];

    }
};