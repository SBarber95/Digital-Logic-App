<template>
    <div>
        <div class="user-input-multiplication col-xs-5 col-sm-5 col-md-5 card" id="calc">
            <h2 class="sub-header flex-center">Calculator</h2>
            <form @submit.prevent="calculate">
                <div class="md-form">
                    <input type="text" class="first-value form-control" v-model="firstBinaryValue"
                           placeholder="Enter First Binary Value" maxlength="16" required>
                </div>
                <div class="md-form">
                    <input type="text" class="second-value form-control" v-model="secondBinaryValue"
                           placeholder="Enter Second Binary Value" maxlength="16" required>
                </div>
                <div class="flex-center">
                    <input type="submit" class="btn btn-mdb" value="Calculate">
                </div>
            </form>
            <p class="well arithmetic-output">{{ calculatorOutput }}</p>
        </div>
        <!-- Quiz -->
        <div class="multiplication-quiz col-xs-5 col-sm-5 col-md-5 card" id="quiz">
            <h2 class="sub-header flex-center">Practice Problems</h2>
            <form @submit.prevent="checkAnswer">
                <p id="first_quiz_number" style="margin-left: 5.5%;">{{ firstQuizNumber }}</p>
                <p id="second_quiz_number">* {{ secondQuizNumber }}</p>
                <p id="quiz_border" class="border"></p>
                <input type="text" class="user_answer form-control" v-model="userAnswer" placeholder="Enter Your Answer"
                       required>
                <div class="flex-center">
                    <input class="btn btn-mdb" type="submit" value="Check Answer">
                    <button class="btn btn-mdb" @click.prevent="resetValues">Change Values</button>
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
                <div class="modal fade" id="binaryMultModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                <button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
                <h4 class="modal-title" id="binaryMultTitle">Binary Multiplication Instructions</h4>
                </div>
                <div class="modal-body">
                <h3 class="sub-header">Calculator</h3>
                Simply enter two binary numbers and hit calculate! The multiplier works with any positive
                whole binary number.
                <h3 class="sub-header">Practice Problems</h3>
                This section generates two random binary values for you to multiply. Enter your
                answer in the text box and click "Check Answer". If you are incorrect, the correct
                value will show. Generate more random values with the Change Values button.
                </div>
                <div class="modal-footer">
                <button class="btn btn-mdb" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
                Binary Multiplication
                <button class="btn btn-info" data-toggle="modal" style="float: right; margin-top: 0;" data-target="#binaryMultModal">
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
            calculate () {

                for (var i = 0; i < this.firstBinaryValue.length; ++i) {

                    if (this.firstBinaryValue.charAt(i) == 1 || this.firstBinaryValue.charAt(i) == 0) {
                    }
                    else {
                        this.calculatorOutput = "Please enter valid binary values.";
                        return
                    }

                }

                for (i = 0; i < this.secondBinaryValue.length; ++i) {

                    if (this.secondBinaryValue.charAt(i) == 1 || this.secondBinaryValue.charAt(i) == 0) {
                    }
                    else {
                        this.calculatorOutput = "Please enter valid binary values.";
                        return
                    }

                }

                var firstNumber = parseInt(this.firstBinaryValue, 2);
                var secondNumber = parseInt(this.secondBinaryValue, 2);

                var answer = (firstNumber * secondNumber).toString(2);

                this.calculatorOutput = "Answer: " + answer;

            },
            // Quiz methods
            resetValues () {

                // Initialize quiz numbers to be randomized
                var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
                var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

                for (var i = 0; i < firstQuizNum.length; i++) {

                    firstQuizNum[i] = Math.floor((Math.random() * 2));
                    secondQuizNum[i] = Math.floor((Math.random() * 2));

                }

                this.firstQuizNumber = firstQuizNum.toString().replace(/,/g, '');
                this.secondQuizNumber = secondQuizNum.toString().replace(/,/g, '');

            },

            checkAnswer () {

                var firstNumber = parseInt(this.firstQuizNumber, 2);
                var secondNumber = parseInt(this.secondQuizNumber, 2);

                var actualAnswer = (firstNumber * secondNumber).toString(2);

                // Compare user answer to algorithm's answer and display result
                if (this.userAnswer == actualAnswer) {
                    this.quizOutput = "Your are correct."
                }
                else {
                    this.quizOutput = "You are incorrect. The answer is " + actualAnswer;
                }

            }
        }
    }
</script>