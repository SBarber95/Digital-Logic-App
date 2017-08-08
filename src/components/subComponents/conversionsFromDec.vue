<template>
    <div>
        <div class="user-input-converter col-xs-5 col-sm-5 col-md-5 card">
            <h2 class="sub-header flex-center">Converter</h2>
            <form @submit="convert">
                <div class="md-form">
                    <input class="form-control" type="text" v-model="decimalValue" placeholder="Enter a Decimal Value"
                           required>
                </div>
                <div class="flex-center md-form">
                    Select Desired Base: <select v-model="desiredBase">
                    <option value="2">2</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                </select>
                </div>
                <div class="flex-center">
                    <input class="btn btn-mdb" type="submit" value="Convert">
                </div>
            </form>
            <p class="well converter-output">{{ convertOutput }}</p>
        </div>
        <div class="conversion-quiz col-xs-5 col-sm-5 col-md-5 card">
            <h2 class="sub-header flex-center" id="second_header">Practice Problems</h2>
            <form @submit="checkAnswer">
                <p id="quiz_number_placeholder">Convert from this Base 10 Value: {{ quizNumber }}</p>
                <p class="border"></p>
                <div class="md-form">
                    <input type="text" placeholder="Enter Your Answer" v-model="userAnswer" required>
                </div>
                <div class="flex-center md-form">
                    Select Base You Converted To: <select v-model="desiredQuizBase">
                    <option value="2">2</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                </select></div>
                <div class="flex-center">
                    <input class="btn btn-mdb" type="submit" value="Check Answer">
                    <button class="btn btn-mdb" v-on:click="resetConvertValue">Change Value</button>
                </div>
            </form>
            <p class="well converter-output">{{ quizOutput }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                decimalValue: null,
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
                'Simply enter your decimal value and hit convert! Select the desired base ' +
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
                '</div>Conversions from Decimal (Base 10)';

            // To place initial random value on first load
            this.quizNumber = Math.floor((Math.random() * 200));

        },
        methods: {
            convert: function (e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var decimalValue = parseInt(this.decimalValue);
                var desiredBaseValue = parseInt(this.desiredBase);

                this.convertOutput = "Converted Value: " + (decimalValue).toString(desiredBaseValue);

            },
            resetConvertValue: function (e) {

                e.preventDefault();
                this.quizNumber = Math.floor((Math.random() * 200));

            },
            checkAnswer: function (e) {

                e.preventDefault();

                var selectedBase = parseInt(this.desiredQuizBase);
                var userAnswer = parseInt(this.userAnswer, this.desiredQuizBase);

                var quizDecimal = parseInt(this.quizNumber);

                if (userAnswer == quizDecimal) {
                    this.quizOutput = "You are correct.";
                }
                else {
                    this.quizOutput = "You are incorrect. The answer is " + quizDecimal.toString(selectedBase);
                }

            }
        }
    }
</script>