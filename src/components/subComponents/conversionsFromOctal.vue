<template>
    <div>
        <div class="user-input-converter col-xs-5 col-sm-5 col-md-5 card">
            <h2 class="sub-header flex-center" style="margin-bottom: 20px;">Converter</h2>
            <form id="oct-converter">
                <input type="text" class="octal-value" name="octalValue" placeholder="Enter an Octal Value" required><br>
                Select Desired Base: <select name="desiredBase"><option value="2">2</option>
                    <option value="10">10</option>
                    <option value="16">16</option></select><br>
                <button id="converter_submit" class="btn btn-mdb" v-on:click="convert" name="submit">Convert</button>
            </form>
            <p id="output" class="well converter-output">The Answer Will Appear Here.</p>
        </div>
        <div class="conversion-quiz col-xs-5 col-sm-5 col-md-5 card">
            <h2 class="sub-header flex-center" id="second_header">Practice Problems</h2>
            <form id="converter_quiz">
                <p id="quiz_number_placeholder">Convert from this Base 8 Value: <span id="quiz_number"></span></p>
                <p class="border"></p>
                <input type="text" class="user-answer" name="userAnswer" placeholder="Enter Your Answer" required><br>
                Select Base You Converted To: <select name="selectedBase"><option value="2">2</option>
                    <option value="10">10</option>
                    <option value="16">16</option></select><br>
                <button class="btn btn-mdb" name="submit" v-on:click="checkAnswer">Check Answer</button>
                <button class="btn btn-mdb" name="reset" v-on:click="resetConvertValue">Change Value</button>
            </form>
            <p id="quiz_output" class="well converter-output">Your Answer Will Be Checked Here.</p>
        </div>
    </div>
</template>

<script>
    var quizNum = [0, 0, 0];
    export default {
        mounted () {
            document.getElementById("quiz_output").setAttribute("class", "well converter-output");

            document.getElementById("second_header").innerHTML = "Practice Problems";

            document.getElementById("conversions-header").innerHTML = '<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#conversionModal">'+
                'Instructions!'+
                '</button>'+
                '<div class="modal fade" id="conversionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
                '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
                '<h4 class="modal-title" id="conversionTitle">Conversion Instructions</h4>'+
                '</div>'+
                '<div class="modal-body">'+
                '<h3 class="sub-header">Calculator</h3>'+
                'Simply enter your octal value and hit convert! Select the desired base '+
                'you wish to convert to in the drop-down box.'+
                '<h3 class="sub-header">Practice Problems</h3>'+
                'This feature generates a random decimal value for you to convert. '+
                'Generate new random values with the Change Values button. Check your '+
                'answer with the Check Answer button. If you are incorrect, the correct answer will show. '+
                'Make sure you select which base you converted to in the drop-down box as you put in your answer.'+
                '</div>'+
                '<div class="modal-footer">'+
                '<button class="btn btn-default" data-dismiss="modal">Close</button>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>Conversions from Octal (Base 8)';

            // To place initial random value on first load
            for (var i = 0; i < quizNum.length; i++) {

                quizNum[i] = Math.floor((Math.random() * 8));

                document.getElementById("quiz_number").innerHTML += quizNum[i];

            }

            document.getElementById("output").setAttribute("style", "margin-top: 62px");
        },
        methods: {
            convert: function(e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var output = document.getElementById("output");

                var form = document.getElementById("oct-converter");

                var octalValue = parseInt(form.octalValue.value, 8);
                var desiredBaseValue = parseInt(form.desiredBase.value);

                output.innerHTML = "Converted Value: " + (octalValue).toString(desiredBaseValue);
            },
            resetConvertValue: function(e) {

                e.preventDefault();

                document.getElementById("quiz_number").innerHTML = "";

                for (var i = 0; i < quizNum.length; i++) {

                    quizNum[i] = Math.floor((Math.random() * 8));

                    document.getElementById("quiz_number").innerHTML += quizNum[i];

                }

            },
            checkAnswer: function(e) {

                e.preventDefault();

                var convertQuizForm = document.getElementById("converter_quiz");

                var selectedBase = parseInt(convertQuizForm.selectedBase.value);
                var userAnswer = parseInt(convertQuizForm.userAnswer.value, selectedBase);

                var quizBinary = parseInt(document.getElementById("quiz_number").innerHTML, 8);

                if (userAnswer == quizBinary) {
                    document.getElementById("quiz_output").innerHTML = "Correct.";
                }
                else {
                    document.getElementById("quiz_output").innerHTML = "You are incorrect. The answer is " +
                        quizBinary.toString(selectedBase);
                }

            }
        }
    }
</script>