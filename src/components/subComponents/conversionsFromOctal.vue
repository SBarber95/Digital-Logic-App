<template>
    <div>
        <div class="user-input-converter col-xs-5 col-sm-5 col-md-5 card">
            <h2 class="sub-header flex-center">Converter</h2>
            <form @submit.prevent="convert">
                <div class="md-form">
                    <input class="form-control" type="text" v-model="octalValue" placeholder="Enter an Octal Value"
                           maxlength="16" required>
                </div>
                <div class="flex-center md-form">
                    Select Desired Base: <select v-model="desiredBase">
                    <option value="2">2</option>
                    <option value="10">10</option>
                    <option value="16">16</option>
                </select>
                </div>
                <div class="flex-center">
                    <input class="btn btn-mdb" value="Convert" type="submit">
                </div>
            </form>
            <p class="well converter-output">{{ convertOutput }}</p>
        </div>
        <div class="conversion-quiz col-xs-5 col-sm-5 col-md-5 card">
            <h2 class="sub-header flex-center">Practice Problems</h2>
            <form @submit.prevent="checkAnswer">
                <p id="quiz_number_placeholder">Convert from this Base 8 Value: {{ quizNumber }}</p>
                <p class="border"></p>
                <div class="md-form">
                    <input class="form-control" type="text" v-model="userAnswer" placeholder="Enter Your Answer"
                           required>
                </div>
                <div class="flex-center md-form">
                    Select Base You Converted To: <select v-model="desiredQuizBase">
                    <option value="2">2</option>
                    <option value="10">10</option>
                    <option value="16">16</option>
                </select>
                </div>
                <div class="flex-center">
                    <input class="btn btn-mdb" type="submit" value="Check Answer">
                    <button class="btn btn-mdb" name="reset" @click.prevent="resetConvertValue">Change Value</button>
                </div>
            </form>
            <p class="well converter-output">{{ quizOutput }}</p>
        </div>
    </div>
</template>

<script>
    var quizNum = [0, 0, 0];
    export default {
        data () {
            return {
                octalValue: null,
                desiredBase: null,
                desiredQuizBase: null,
                convertOutput: 'The Answer Will Appear Here.',
                quizOutput: 'Your Answer Will Be Checked Here.',
                quizNumber: null,
                userAnswer: null
            }
        },
        mounted () {

            document.getElementById("conversions-header").innerHTML = `
                <div class="modal fade" id="conversionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                <button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
                <h4 class="modal-title" id="conversionTitle">Conversion Instructions</h4>
                </div>
                <div class="modal-body">
                <h3 class="sub-header">Calculator</h3>
                Simply enter your octal value and hit convert! Select the desired base
                you wish to convert to in the drop-down box.
                <h3 class="sub-header">Practice Problems</h3>
                This feature generates a random decimal value for you to convert.
                Generate new random values with the Change Values button. Check your
                answer with the Check Answer button. If you are incorrect, the correct answer will show.
                Make sure you select which base you converted to in the drop-down box as you put in your answer.
                </div>
                <div class="modal-footer">
                <button class="btn btn-mdb" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>Conversions from Octal (Base 8)
                <button style="margin-top: 0; float: right;" class="btn btn-info" data-toggle="modal" data-target="#conversionModal">
                Instructions!
                </button>`;

            var quizNumber = '';

            // To place initial random value on first load
            for (var i = 0; i < quizNum.length; i++) {

                quizNum[i] = Math.floor((Math.random() * 8));
                quizNumber += quizNum[i];

            }

            this.quizNumber = quizNumber;

        },
        methods: {
            convert () {
                // TODO: CHANGE TO ACCEPT NEGATIVES

                var octalValue = parseInt(this.octalValue, 8);
                var desiredBaseValue = parseInt(this.desiredBase);

                this.convertOutput = "Converted Value: " + (octalValue).toString(desiredBaseValue);
            },
            resetConvertValue () {

                var quizNumber = '';

                for (var i = 0; i < quizNum.length; i++) {

                    quizNum[i] = Math.floor((Math.random() * 8));
                    quizNumber += quizNum[i];

                }

                this.quizNumber = quizNumber;

            },
            checkAnswer () {

                var selectedBase = parseInt(this.desiredQuizBase);
                var userAnswer = parseInt(this.userAnswer, selectedBase);

                var quizBinary = parseInt(this.quizNumber, 8);

                if (userAnswer == quizBinary) {
                    this.quizOutput = "You are correct.";
                }
                else {
                    this.quizOutput = "You are incorrect. The answer is " + quizBinary.toString(selectedBase);
                }

            }
        }
    }
</script>