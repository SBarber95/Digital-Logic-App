<template>
    <div>
        <div class="user-input-addition col-xs-5 col-sm-5 col-md-5 card" id="calc">
            <h2 class="sub-header flex-center">Calculator</h2>
            <form @submit="calculate">
                <div class="md-form">
                    <input type="text" class="first-value form-control" v-model="firstBinaryValue" placeholder="Enter First Binary Value" required>
                </div>
                <div class="md-form">
                    <input type="text" class="second-value form-control" v-model="secondBinaryValue" placeholder="Enter Second Binary Value" required>
                </div>
                <p class="border"></p>
                <input type="submit" class="btn btn-mdb" value="Calculate">
            </form>
            <p class="well arithmetic-output">{{ calculatorOutput }}</p>
        </div>
        <!-- Quiz -->
        <div class="addition-quiz col-xs-5 col-sm-5 col-md-5 card" id="quiz">
            <h2 class="sub-header flex-center">Practice Problems</h2>
            <form @submit="checkAnswer">
                <p id="first_quiz_number" style="margin-left: 6.5%;">{{ firstQuizNumber }}</p>
                <p id="second_quiz_number">+ {{ secondQuizNumber }}</p>
                <p id="quiz_border" class="border"></p>
                <input type="text" class="user_answer" v-model="userAnswer" placeholder="Enter Your Answer" required>
                <input type="submit" class="btn btn-mdb" value="Check Answer">
                <button class="btn btn-mdb" v-on:click="resetValues">Change Values</button>
            </form>
            <p class="well arithmetic-output">{{ quizOutput }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
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

            document.getElementById("binary-arith-header").innerHTML = '<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#binaryAddModal">' +
                'Instructions!' +
                '</button>' +
                '<div class="modal fade" id="binaryAddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>' +
                '<h4 class="modal-title" id="binaryAddTitle">Binary Addition Instructions</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                '<h3 class="sub-header">Calculator</h3>' +
                'Simply enter your two binary values and hit calculate! If you have negative binary values, ' +
                'it is recommended to use the binary subtraction feature as binary addition only works with ' +
                'positive binary numbers as of now. Please read the instructions on that page.' +
                '<h3 class="sub-header">Practice Problems</h3>' +
                'This feature generates two random binary values for you to add and provide the answer for. ' +
                'You can generate new random values with the Change Values button. You can also check your ' +
                'answer with the Check Answer button. If you are incorrect, the correct answer will be displayed.' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button class="btn btn-default" data-dismiss="modal">Close</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                'Binary Addition';

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
                 * Created by savannah on 12/19/2016.
                 * TODO: Add error-checking for user entering both binary values
                 */
                e.preventDefault();

                // Convert string input to arrays to prepare for arithmetic
                var firstNumberDigits = Array.from(this.firstBinaryValue);
                var secondNumberDigits = Array.from(this.secondBinaryValue);

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

                var output = '';

                for (i = 0; i < answer.length; i++) {
                    output += "" + answer[i];
                }

                this.calculatorOutput = 'Answer: ' + output;

            },
            // Quiz Methods --------------------
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
                var userAnswer = this.userAnswer;

                var actualAnswer = (firstNumber + secondNumber).toString(2);

                // Compare user answer to algorithm's answer and display result
                if (userAnswer == actualAnswer) {
                    this.quizOutput = "You are correct."
                }
                else {
                    this.quizOutput = "You are incorrect. The answer is " + actualAnswer;
                }

            }
        }
    }
</script>