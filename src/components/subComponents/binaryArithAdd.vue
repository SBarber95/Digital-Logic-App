<template>
    <div>
        <div class="user-input-addition" id="calc">
        <h2 class="sub-header">Calculator</h2>
        <form id="addition_calculator">
            <input type="text" class="first-value" name="firstNumber" placeholder="Enter First Binary Value" required><br>
            + <input type="text" class="second-value" name="secondNumber" placeholder="Enter Second Binary Value" required><br>
            <p class="border"></p>
            <button class="btn btn-primary" name="submit" v-on:click="calculate">Calculate</button>
            </form>
        <p id="calculator_output_add" class="well arithmetic-output">The Answer Will Appear Here.</p>
        </div>
        <!--Quiz -->
        <div class="addition-quiz" id="quiz">
            <h2 class="sub-header">Practice Problems</h2>
            <form id="addition_quiz_form">
                <p id="first_quiz_number" style="margin-left: 6.5%;"></p>
                <p id="second_quiz_number"></p>
                <p id="quiz_border" class="border"></p>
                <input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required>
                <button class="btn btn-mdb" name="submit" v-on:click="checkAnswer">Check Answer</button>
                <button class="btn btn-mdb" name="reset" v-on:click="resetValues">Change Values</button>
                </form>
            <p id="quiz_output_add" class="well arithmetic-output">Your answer will be checked here.</p>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {

            document.getElementById("binary-arith-header").innerHTML = '<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#binaryAddModal">'+
                'Instructions!'+
                '</button>'+
                '<div class="modal fade" id="binaryAddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
                '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
                '<h4 class="modal-title" id="binaryAddTitle">Binary Addition Instructions</h4>'+
                '</div>'+
                '<div class="modal-body">'+
                '<h3 class="sub-header">Calculator</h3>'+
                'Simply enter your two binary values and hit calculate! If you have negative binary values, '+
                'it is recommended to use the binary subtraction feature as binary addition only works with '+
                'positive binary numbers as of now. Please read the instructions on that page.'+
                '<h3 class="sub-header">Practice Problems</h3>'+
                'This feature generates two random binary values for you to add and provide the answer for. '+
                'You can generate new random values with the Change Values button. You can also check your '+
                'answer with the Check Answer button. If you are incorrect, the correct answer will be displayed.'+
                '</div>'+
                '<div class="modal-footer">'+
                '<button class="btn btn-default" data-dismiss="modal">Close</button>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                'Binary Addition';

            var firstQuizNumPlaceholder = document.getElementById("first_quiz_number");
            var secondQuizNumPlaceholder = document.getElementById("second_quiz_number");

            // Initialize quiz numbers to be randomized
            var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
            var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

            firstQuizNumPlaceholder.innerHTML = "";
            secondQuizNumPlaceholder.innerHTML = "+ ";

            // Sets random binary digits to each quiz number
            // and injects generated values into HTML for user viewing
            // INITIAL SET UP
            for (var i = 0; i < firstQuizNum.length; i++) {

                firstQuizNum[i] = Math.floor((Math.random() * 2));
                secondQuizNum[i] = Math.floor((Math.random() * 2));

                firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
                secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

            }
        },
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

            },
            // Quiz Methods --------------------
            resetValues: function(e) {

                e.preventDefault();

                firstQuizNumPlaceholder.innerHTML = "";
                secondQuizNumPlaceholder.innerHTML = "+ ";

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

                var firstNumber = parseInt(document.getElementById("first_quiz_number").innerHTML, 2);
                var secondNumber = parseInt((document.getElementById("second_quiz_number").innerHTML.substring(1)), 2);
                var userAnswer = additionQuizForm.userAnswer.value;

                var actualAnswer = (firstNumber+secondNumber).toString(2);

                // Clear previous output and set up again
                quizOutput.innerHTML = "You are ";


                // Compare user answer to algorithm's answer and display result
                if (userAnswer == actualAnswer) {
                    quizOutput.innerHTML += "correct."
                }
                else {
                    quizOutput.innerHTML += "incorrect. The answer (normal form) is " + actualAnswer;
                }

            }
        }
    }
</script>