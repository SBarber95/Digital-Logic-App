/**
 * Created by savannah on 1/3/2017.
 */

// Binary Addition Calculator --------------------------------
var binaryAdditionCalc = new Vue ({
    el: '#addition_calc',
    template: '<div class="user-input-addition" id="addition_calc">'+
    '<h2 class="sub-header">Calculator</h2>'+
    '<form id="addition_calculator">'+
    '<input type="text" class="first-value" name="firstNumber" placeholder="Enter First Binary Value" required><br>'+
    '+ <input type="text" class="second-value" name="secondNumber" placeholder="Enter Second Binary Value" required><br>'+
    '<p class="border"></p>'+
    '<input type="submit" class="btn btn-primary" name="submit" value="Calculate" v-on:click="calculate">'+
    '</form>'+
    '<p id="calculator_output_add" class="well arithmetic-output">The Answer Will Appear Here.</p>'+
    '</div>',
    methods: {

        calculate: function(e) {

            /**
             * Created by savannah on 12/19/2016.
             * TODO: Add error-checking for user entering both binary values
             */

            e.preventDefault();

            var calculatorOutput = document.getElementById("calculator_output_add");
            var calculatorForm = document.getElementById("addition_calculator");

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

        }

    }
});

var additionQuiz = new Vue ({
    el: '#addition_quiz',
    template: '<div class="addition-quiz" id="addition_quiz">'+
    '<h2 class="sub-header">Practice Problems</h2>'+
    '<form id="addition_quiz_form">'+
    '<p id="first_quiz_number"></p>'+
    '<p id="second_quiz_number"></p>'+
    '<p class="border"></p>'+
    '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required>'+
    '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
    '<input type="button" class="btn btn-primary" name="reset" value="Change Values" v-on:click="resetValues">'+
    '</form>'+
    '<p id="quiz_output_add" class="well arithmetic-output">Enter your answer with leading 0s if necessary.</p>'+
    '</div>',
    methods: {

        resetValues: function(e) {

            e.preventDefault();

            firstQuizNumPlaceholder.innerHTML = "";
            secondQuizNumPlaceholder.innerHTML = "";

            for (var i = 0; i < firstQuizNum.length; i++) {

                firstQuizNum[i] = Math.floor((Math.random() * 2));
                secondQuizNum[i] = Math.floor((Math.random() * 2));

                firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
                secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

            }

        },

        checkAnswer: function(e) {

            e.preventDefault();

            // Grab references to necessary HTML elements
            var additionQuizForm = document.getElementById("addition_quiz_form");
            var quizOutput = document.getElementById("quiz_output_add");

            var userAnswer = additionQuizForm.userAnswer.value;
            var userAnswerDigits = Array.from(userAnswer);
            var carryIn = 0;
            var answer = [];

            // Clear previous output and set up again
            quizOutput.innerHTML = "You are ";

            // Run binary addition algorithm to find correct answer
            for (i = firstQuizNum.length - 1; i >= 0; i--) {

                if (firstQuizNum[i] == '0' && secondQuizNum[i] == '0' && carryIn == 0) {
                    answer.unshift('0');
                    carryIn = 0;
                }
                else if ((firstQuizNum[i] == '1' && secondQuizNum[i] == '0' && carryIn == 0) ||
                    (firstQuizNum[i] == '0' && secondQuizNum[i] == '1' && carryIn == 0) ||
                    (firstQuizNum[i] == '0' && secondQuizNum[i] == '0' && carryIn == 1)) {
                    answer.unshift('1');
                    carryIn = 0;
                }
                else if ((firstQuizNum[i] == '1' && secondQuizNum[i] == '1' && carryIn == 0) ||
                    (firstQuizNum[i] == '0' && secondQuizNum[i] == '1' && carryIn == 1) ||
                    (firstQuizNum[i] == '1' && secondQuizNum[i] == '0' && carryIn == 1)) {
                    answer.unshift('0');
                    carryIn = 1;
                    if (i == 0) {
                        answer.unshift('1');
                    }
                }
                else if (firstQuizNum[i] == '1' && secondQuizNum[i] == '1' && carryIn == 1) {
                    answer.unshift('1');
                    carryIn = 1;
                    if (i == 0) {
                        answer.unshift('1');
                    }
                }

            }

            // Compare user answer to algorithm's answer and display result
            if (userAnswerDigits.toString() == answer.toString()) {
                quizOutput.innerHTML += "correct."
            }
            else {
                quizOutput.innerHTML += "incorrect. The answer is ";
                for (i = 0; i < answer.length; i++) {
                    quizOutput.innerHTML += "" + answer[i];
                }
            }

        }

    }

});

var firstQuizNumPlaceholder = document.getElementById("first_quiz_number");
var secondQuizNumPlaceholder = document.getElementById("second_quiz_number");

// Initialize quiz numbers to be randomized
var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

// Sets random binary digits to each quiz number
// and injects generated values into HTML for user viewing
// INITIAL SET UP
for (var i = 0; i < firstQuizNum.length; i++) {

    firstQuizNum[i] = Math.floor((Math.random() * 2));
    secondQuizNum[i] = Math.floor((Math.random() * 2));

    firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
    secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

}