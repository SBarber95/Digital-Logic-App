<template>
    <div>
        <div class="user-input-converter col-xs-5 col-sm-5 col-md-5 card">
            <h2 class="sub-header flex-center">Converter</h2>
            <form @submit="convert">
                <input type="text" v-model="hexValue" placeholder="Enter a Hexadecimal Value"
                       required><br>
                Select Desired Base: <select v-model="desiredBase">
                <option value="2">2</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select><br>
                <input class="btn btn-mdb" value="Convert" type="submit">
            </form>
            <p class="well converter-output">{{ convertOutput }}</p>
        </div>
        <div class="conversion-quiz col-xs-5 col-sm-5 col-md-5 card">
            <h2 class="sub-header flex-center">Practice Problems</h2>
            <form @submit="checkAnswer">
                <p id="quiz_number_placeholder">Convert from this Base 16 Value: {{ quizNumber }}</p>
                <p class="border"></p>
                <input type="text" v-model="userAnswer" placeholder="Enter Your Answer" required><br>
                Select Base You Converted To: <select v-model="desiredQuizBase">
                <option value="2">2</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select><br>
                <input class="btn btn-mdb" type="submit" value="Check Answer">
                <button class="btn btn-mdb" v-on:click="resetConvertValue">Change Value</button>
            </form>
            <p class="well converter-output">{{ quizOutput }}</p>
        </div>
    </div>
</template>

<script>
    var hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var altHexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var quizNum = [0, 0, 0, 0];
    export default {
        data () {
            return {
                hexValue: null,
                desiredBase: null,
                desiredQuizBase: null,
                convertOutput: 'The Answer Will Appear Here.',
                quizOutput: 'Your Answer Will Be Checked Here.',
                quizNumber: null,
                userAnswer: null
            }
        },
        mounted() {

            document.getElementById("conversions-header").innerHTML = '<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#conversionModal">' +
                'Instructions!' +
                '</button>' +
                '<div class="modal fade" id="conversionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>' +
                '<h4 class="modal-title" id="conversionTitle">Conversion Instructions</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                '<h3 class="sub-header">Calculator</h3>' +
                'Simply enter your hex value and hit convert! Select the desired base ' +
                'you wish to convert to in the drop-down box.' +
                '<h3 class="sub-header">Practice Problems</h3>' +
                'This feature generates a random decimal value for you to convert. ' +
                'Generate new random values with the Change Values button. Check your ' +
                'answer with the Check Answer button. If you are incorrect, the correct answer will show. ' +
                'Make sure you select which base you converted to in the drop-down box as you put in your answer.' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button class="btn btn-default" data-dismiss="modal">Close</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>Conversions from Hexadecimal (Base 16)';

            var quizNumber = '';

            // To place initial random value on first load
            for (var i = 0; i < quizNum.length; i++) {

                quizNum[i] = hexDigits[Math.floor((Math.random() * 16))];
                quizNumber += quizNum[i];

            }

            this.quizNumber = quizNumber;

        },
        methods: {
            convert: function (e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var hexValue = this.hexValue;
                var hexValueArray = Array.from(hexValue);
                var desiredBaseValue = parseInt(this.desiredBase);

                var exponent = 0;
                var hexDigitValue = null;
                var base10Value = 0;

                for (var i = hexValueArray.length - 1; i >= 0; i--) {

                    for (var j = 0; j < hexDigits.length; j++) {

                        // Double equals is intentional and needed for correct comparison
                        if (hexValueArray[i] == hexDigits[j] || hexValueArray[i] == altHexDigits[j]) {
                            hexDigitValue = j;
                        }

                    }
                    base10Value += hexDigitValue * Math.pow(16, exponent);
                    exponent++;

                }

                this.convertOutput = "Converted Value: " + (base10Value).toString(desiredBaseValue);
            },
            resetConvertValue: function (e) {

                e.preventDefault();

                var quizNumber = '';

                for (var i = 0; i < quizNum.length; i++) {

                    quizNum[i] = hexDigits[Math.floor((Math.random() * 16))];
                    quizNumber += quizNum[i];

                }

                this.quizNumber = quizNumber;

            },
            checkAnswer: function (e) {

                e.preventDefault();

                var selectedBase = parseInt(this.desiredQuizBase);
                var userAnswer = parseInt(this.userAnswer);

                var answer = Array.from(this.quizNumber);

                var exponent = 0;
                var hexDigitValue = null;
                var base10Value = 0;

                for (var i = answer.length - 1; i >= 0; i--) {

                    for (var j = 0; j < hexDigits.length; j++) {

                        if (answer[i] == hexDigits[j] || answer[i] == altHexDigits[j]) {
                            hexDigitValue = j;
                        }

                    }

                    base10Value += hexDigitValue * Math.pow(16, exponent);
                    exponent++;

                }

                var finalAnswer = base10Value.toString(selectedBase);

                if (userAnswer == finalAnswer) {
                    this.quizOutput = "You are correct.";
                }
                else {
                    this.quizOutput = "You are incorrect. The answer is " + finalAnswer;
                }

            }
        }
    }
</script>