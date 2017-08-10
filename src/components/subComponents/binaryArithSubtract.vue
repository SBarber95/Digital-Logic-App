<template>
    <div>
        <div class="user-input-subtraction col-xs-5 col-sm-5 col-md-5 card" id="calc">
            <h2 class="sub-header flex-center">Calculator</h2>
            <form @submit="calculate">
                <div class="md-form">
                    <input type="text" class="first-value form-control" v-model="firstBinaryValue"
                           placeholder="Enter First Binary Value" required>
                </div>
                <div class="md-form">
                    <input type="text" class="second-value form-control" v-model="secondBinaryValue"
                           placeholder="Enter Second Binary Value" required>
                </div>
                <p class="border"></p>
                <div class="flex-center">
                    <input type="submit" class="btn btn-mdb" value="Calculate">
                </div>
            </form>
            <p class="well arithmetic-output">{{ calculatorOutput }}</p>
        </div>
        <!-- Quiz -->
        <div class="subtraction-quiz col-xs-5 col-sm-5 col-md-5 card" id="quiz">
            <h2 class="sub-header flex-center">Practice Problems</h2>
            <form @submit="checkAnswer">
                <p id="first_quiz_number" style="margin-left: 5.5%;">{{ firstQuizNumber }}</p>
                <p id="second_quiz_number">- {{ secondQuizNumber }}</p>
                <p id="quiz_border" class="border"></p>
                <input type="text" class="user_answer form-control" v-model="userAnswer" placeholder="Enter Your Answer"
                       required>
                <div class="flex-center">
                    <input class="btn btn-mdb" type="submit" value="Check Answer">
                    <button class="btn btn-mdb" v-on:click="resetValues">Change Values</button>
                </div>
            </form>
            <p class="well arithmetic-output">{{ quizOutput }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstBinaryValue: null,
                secondBinaryValue: null,
                firstQuizNumber: null,
                secondQuizNumber: null,
                userAnswer: null,
                calculatorOutput: 'The answer will appear here.',
                quizOutput: 'Your answer will be checked here.'
            }
        },
        mounted() {
            document.getElementById("binary-arith-header").innerHTML = `
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
                <button class="btn btn-mdb" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
                Binary Subtraction
                <button class="btn btn-info" data-toggle="modal" style="float: right; margin-top: 0;" data-target="#binarySubModal">
                Instructions!
                </button>`;

            // Initialize quiz numbers to be randomized
            var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
            var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

            // Sets random binary digits to each quiz number
            // and injects generated values into HTML for user viewing
            // INITIAL SET UP
            for (var i = 0; i < firstQuizNum.length; i++) {

                firstQuizNum[i] = Math.floor((Math.random() * 2));
                secondQuizNum[i] = Math.floor((Math.random() * 2));

            }

            this.firstQuizNumber = firstQuizNum.toString().replace(/,/g, '');
            this.secondQuizNumber = secondQuizNum.toString().replace(/,/g, '');

        },
        methods: {
            calculate: function (e) {

                /**
                 * Created by savannah on 1/3/2017.
                 * TODO: Add error-checking for user entering both binary values
                 */

                e.preventDefault();

                var firstNumber = parseInt(this.firstBinaryValue, 2);
                var secondNumber = parseInt(this.secondBinaryValue, 2);

                var answer = (firstNumber - secondNumber).toString(2);
                var twosCompAnswer = ((firstNumber - secondNumber) >>> 0).toString(2);

                if (twosCompAnswer.length == 32) {
                    twosCompAnswer = "" + twosCompAnswer.substring(16);
                }

                this.calculatorOutput = "Answer (Normal Form): " + answer + ". Answer (2s Complement): " + twosCompAnswer;

            },
            // Quiz method(s)
            resetValues: function (e) {

                // Initialize quiz numbers to be randomized
                var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
                var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

                e.preventDefault();

                for (var i = 0; i < firstQuizNum.length; i++) {

                    firstQuizNum[i] = Math.floor((Math.random() * 2));
                    secondQuizNum[i] = Math.floor((Math.random() * 2));

                }

                this.firstQuizNumber = firstQuizNum.toString().replace(/,/g, '');
                this.secondQuizNumber = secondQuizNum.toString().replace(/,/g, '');

            },

            checkAnswer: function (e) {

                e.preventDefault();

                var firstNumber = parseInt(this.firstQuizNumber, 2);
                var secondNumber = parseInt(this.secondQuizNumber, 2);

                var actualAnswer1 = (firstNumber - secondNumber).toString(2);
                var actualAnswer2 = ((firstNumber - secondNumber) >>> 0).toString(2);

                if (actualAnswer2.length == 32) {
                    actualAnswer2 = "" + actualAnswer2.substring(16);
                }

                // Compare user answer to algorithm's answer and display result
                if (this.userAnswer == actualAnswer1 || this.userAnswer == actualAnswer2) {
                    this.quizOutput = "You are correct."
                }
                else {
                    this.quizOutput = "You are incorrect. The answer in normal form is " + actualAnswer1 + ". " +
                        "The 2s complement answer is " + actualAnswer2;
                }

            }
        }
    }
</script>