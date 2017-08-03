<template>
    <div>
        <div class="user-input-multiplication" id="calc">
            <h2 class="sub-header">Calculator</h2>
            <form id="multiplication_calculator">
                <input type="text" class="first-value" name="firstNumber" placeholder="Enter First Binary Value" required><br>
                * <input type="text" style="margin-left: 4px" class="second-value" name="secondNumber" placeholder="Enter Second Binary Value" required><br>
                <p class="border"></p>
                <button class="btn btn-primary" name="submit" v-on:click="calculate">Calculate</button>
                </form>
            <p id="calculator_output_mult" class="well arithmetic-output">The Answer Will Appear Here.</p>
        </div>
        <!-- Quiz -->
        <div class="multiplication-quiz" id="quiz">
            <h2 class="sub-header">Practice Problems</h2>
            <form id="multiplication_quiz_form">
                <p id="first_quiz_number" style="margin-left: 5.5%;"></p>
                <p id="second_quiz_number"></p>
                <p id="quiz_border" class="border"></p>
                <input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required>
                <button class="btn btn-mdb" name="submit" v-on:click="checkAnswer">Check Answer</button>
                <button class="btn btn-mdb" name="reset" v-on:click="resetValues">Change Values</button>
                </form>
            <p id="quiz_output_mult" class="well arithmetic-output">Your answer will be checked here.</p>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {
            document.getElementById("binary-arith-header").innerHTML = '<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#binaryMultModal">'+
                'Instructions!'+
                '</button>'+
                '<div class="modal fade" id="binaryMultModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
                '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
                '<h4 class="modal-title" id="binaryMultTitle">Binary Multiplication Instructions</h4>'+
                '</div>'+
                '<div class="modal-body">'+
                '<h3 class="sub-header">Calculator</h3>'+
                'Simply enter two binary numbers and hit calculate! The multiplier works with any positive '+
                'whole binary number.'+
                '<h3 class="sub-header">Practice Problems</h3>'+
                'This section generates two random binary values for you to multiply. Enter your '+
                'answer in the text box and click "Check Answer". If you are incorrect, the correct '+
                'value will show. Generate more random values with the Change Values button.'+
                '</div>'+
                '<div class="modal-footer">'+
                '<button class="btn btn-default" data-dismiss="modal">Close</button>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                'Binary Multiplication';

            var firstQuizNumPlaceholder = document.getElementById("first_quiz_number");
            var secondQuizNumPlaceholder = document.getElementById("second_quiz_number");

            // Initialize quiz numbers to be randomized
            var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
            var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

            firstQuizNumPlaceholder.innerHTML = "";
            secondQuizNumPlaceholder.innerHTML = "* ";

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

                var calculatorOutput = document.getElementById("calculator_output_mult");
                var calculatorForm = document.getElementById("multiplication_calculator");

                var firstNumber = parseInt(calculatorForm.firstNumber.value, 2);
                var secondNumber = parseInt(calculatorForm.secondNumber.value, 2);

                var answer = (firstNumber*secondNumber).toString(2);

                calculatorOutput.innerHTML = "Answer: " + answer;

            },
            // Quiz methods
            resetValues: function(e) {

                e.preventDefault();

                firstQuizNumPlaceholder.innerHTML = "";
                secondQuizNumPlaceholder.innerHTML = "* ";

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
                var multiplicationQuizForm = document.getElementById("multiplication_quiz_form");
                var quizOutput = document.getElementById("quiz_output_mult");

                var firstNumber = parseInt(document.getElementById("first_quiz_number").innerHTML, 2);
                var secondNumber = parseInt((document.getElementById("second_quiz_number").innerHTML.substring(1)), 2);
                var userAnswer = multiplicationQuizForm.userAnswer.value;

                var actualAnswer = (firstNumber*secondNumber).toString(2);

                // Clear previous output and set up again
                quizOutput.innerHTML = "You are ";

                // Compare user answer to algorithm's answer and display result
                if (userAnswer == actualAnswer) {
                    quizOutput.innerHTML += "correct."
                }
                else {
                    quizOutput.innerHTML += "incorrect. The answer is " + actualAnswer;
                }

            }
        }
    }
</script>