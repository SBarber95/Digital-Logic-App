<template>
    <div>
        <div class="user-input-subtraction" id="calc">
            <h2 class="sub-header">Calculator</h2>
            <form id="subtraction_calculator">
                <input type="text" class="first-value" name="firstNumber" placeholder="Enter First Binary Value" required><br>
                - <input type="text" style="margin-left: 4px" class="second-value" name="secondNumber" placeholder="Enter Second Binary Value" required><br>
                <p class="border"></p>
                <button class="btn btn-primary" name="submit" v-on:click="calculate">Calculate</button>
                </form>
            <p id="calculator_output_sub" class="well arithmetic-output">The Answer Will Appear Here.</p>
        </div>
        <!-- Quiz -->
        <div class="subtraction-quiz" id="quiz">
            <h2 class="sub-header">Practice Problems</h2>
            <form id="subtraction_quiz_form">
                <p id="first_quiz_number" style="margin-left: 5.5%;"></p>
                <p id="second_quiz_number"></p>
                <p id="quiz_border" class="border"></p>
                <input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required>
                <button class="btn btn-primary" name="submit" v-on:click="checkAnswer">Check Answer</button>
                <button class="btn btn-primary" name="reset" v-on:click="resetValues">Change Values</button>
                </form>
            <p id="quiz_output_sub" class="well arithmetic-output">Your answer will be checked here.</p>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {
            document.getElementById("binary-arith-header").innerHTML = `<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#binarySubModal">
                Instructions!
                </button>
                <div class="modal fade" id="binarySubModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                <button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
                <h4 class="modal-title" id="binarySubTitle">Binary Subtraction Instructions</h4>
                </div>
                <div class="modal-body">
                <h3 class="sub-header">Calculator</h3>
                When entering your binary values, make sure they are in normal form; that is, each number entered
                should not be in 1s or 2s complement. You will get both the normal form result and the 2s complement result for convenience.
                The 2s complement answer is the answer you would receive if both values were originally in 2s complement form.
                <h3 class="sub-header">Practice Problems</h3>
                This section presents two random binary values in NORMAL form. Change the values
                presented to you with the Change Values button. You can enter the answer in normal form
                or in 2s complement form. When you are finished, click "Check Answer". If you are incorrect, the
                output will display the correct answer in both normal and 2s complement forms.<br>
                NOTE: If answering in 2s complement form, please enter the sign-extended value (16 bits long)<br>
                Example) If the answer was 2s complement 101, enter 1111111111111101.
                </div>
                <div class="modal-footer">
                <button class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
                Binary Subtraction`;

            var firstQuizNumPlaceholder = document.getElementById("first_quiz_number");
            var secondQuizNumPlaceholder = document.getElementById("second_quiz_number");

            // Initialize quiz numbers to be randomized
            var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
            var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

            firstQuizNumPlaceholder.innerHTML = "";
            secondQuizNumPlaceholder.innerHTML = "- ";

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
                 * Created by savannah on 1/3/2017.
                 * TODO: Add error-checking for user entering both binary values
                 */

                e.preventDefault();

                var calculatorOutput = document.getElementById("calculator_output_sub");
                var calculatorForm = document.getElementById("subtraction_calculator");

                calculatorOutput.innerHTML = "";

                var firstNumber = parseInt(calculatorForm.firstNumber.value, 2);
                var secondNumber = parseInt(calculatorForm.secondNumber.value, 2);

                var answer = (firstNumber-secondNumber).toString(2);
                var twosCompAnswer = ((firstNumber-secondNumber) >>> 0).toString(2);

                if (twosCompAnswer.length == 32) {
                    twosCompAnswer = "" + twosCompAnswer.substring(16);
                }

                calculatorOutput.innerHTML += "Answer (Normal Form): " + answer + "<br>";
                calculatorOutput.innerHTML += "Answer (2s Complement): " + twosCompAnswer;

            },
            // Quiz method(s)
            resetValues: function(e) {

                e.preventDefault();

                firstQuizNumPlaceholder.innerHTML = "";
                secondQuizNumPlaceholder.innerHTML = "- ";

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
                var subtractionQuizForm = document.getElementById("subtraction_quiz_form");
                var quizOutput = document.getElementById("quiz_output_sub");

                var firstNumber = parseInt(document.getElementById("first_quiz_number").innerHTML, 2);
                var secondNumber = parseInt((document.getElementById("second_quiz_number").innerHTML.substring(1)), 2);
                var userAnswer = subtractionQuizForm.userAnswer.value;

                var actualAnswer1 = (firstNumber-secondNumber).toString(2);
                var actualAnswer2 = ((firstNumber-secondNumber) >>> 0).toString(2);

                // Clear previous output and set up again
                quizOutput.innerHTML = "You are ";

                if (actualAnswer2.length == 32) {
                    actualAnswer2 = "" + actualAnswer2.substring(16);
                }

                // Compare user answer to algorithm's answer and display result
                if (userAnswer == actualAnswer1 || userAnswer == actualAnswer2) {
                    quizOutput.innerHTML += "correct."
                }
                else {
                    quizOutput.innerHTML += "incorrect.<br> The answer in normal form is " + actualAnswer1 + "<br>" +
                        "The 2s complement answer is " + actualAnswer2;
                }

            }
        }
    }
</script>