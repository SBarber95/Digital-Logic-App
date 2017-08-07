<template>
    <div>
        <div class="user-input-multiplication col-xs-5 col-sm-5 col-md-5 card" id="calc">
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
                <input type="submit" class="btn btn-mdb" value="Calculate">
            </form>
            <p class="well arithmetic-output">{{ calculatorOutput }}</p>
        </div>
        <!-- Quiz -->
        <div class="multiplication-quiz col-xs-5 col-sm-5 col-md-5 card" id="quiz">
            <h2 class="sub-header flex-center">Practice Problems</h2>
            <form @submit="checkAnswer">
                <p id="first_quiz_number" style="margin-left: 5.5%;">{{ firstQuizNumber }}</p>
                <p id="second_quiz_number">* {{ secondQuizNumber }}</p>
                <p id="quiz_border" class="border"></p>
                <input type="text" class="user_answer" v-model="userAnswer" placeholder="Enter Your Answer" required>
                <input class="btn btn-mdb" type="submit" value="Check Answer">
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
            document.getElementById("binary-arith-header").innerHTML = `<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#binaryMultModal">
                Instructions!
                </button>
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
                <button class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
                Binary Multiplication`;

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

                var answer = (firstNumber * secondNumber).toString(2);

                this.calculatorOutput = "Answer: " + answer;

            },
            // Quiz methods
            resetValues: function (e) {

                e.preventDefault();

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

            checkAnswer: function (e) {

                e.preventDefault();

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