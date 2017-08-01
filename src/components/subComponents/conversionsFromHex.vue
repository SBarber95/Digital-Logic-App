<template>
    <div>
        <div class="user-input-converter">
            <h2 class="sub-header" style="margin-bottom: 20px;">Converter</h2>
            <form id="hex-converter">
                <input type="text" class="hex-value" name="hexValue" placeholder="Enter a Hexadecimal Value" required><br>
                Select Desired Base: <select name="desiredBase"><option value="2">2</option>
                    <option value="8">8</option>
                    <option value="10">10</option></select><br>
                <input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">
                </form>
            <p id="output" class="well converter-output">The Answer Will Appear Here.</p>
        </div>
        <div class="conversion-quiz">
            <h2 class="sub-header" id="second_header">Practice Problems</h2>
            <form id="converter_quiz">
                <p id="quiz_number_placeholder">Convert from this Base 16 Value: <span id="quiz_number"></span></p>
                <p class="border"></p>
                <input type="text" class="user-answer" name="userAnswer" placeholder="Enter Your Answer" required><br>
                Select Base You Converted To: <select name="selectedBase"><option value="2">2</option>
                    <option value="8">8</option>
                    <option value="10">10</option></select><br>
                <input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">
                <input type="button" class="btn btn-primary" name="reset" value="Change Value" v-on:click="resetConvertValue">
                </form>
            <p id="quiz_output" class="well converter-output">Your Answer Will Be Checked Here.</p>
        </div>
    </div>
</template>

<script>
    var hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var altHexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var quizNum = [0, 0, 0, 0];
    export default {
        mounted () {

            document.getElementById("quiz_output").setAttribute("class", "well converter-output");

            document.getElementById("second_header").innerHTML = "Practice Problems";

            document.getElementById("conversions-header").innerHTML = '<button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#conversionModal">'+
                'Instructions!'+
                '</button>'+
                '<div class="modal fade" id="conversionModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
                '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
                '<h4 class="modal-title" id="conversionTitle">Conversion Instructions</h4>'+
                '</div>'+
                '<div class="modal-body">'+
                '<h3 class="sub-header">Calculator</h3>'+
                'Simply enter your hex value and hit convert! Select the desired base '+
                'you wish to convert to in the drop-down box.'+
                '<h3 class="sub-header">Practice Problems</h3>'+
                'This feature generates a random decimal value for you to convert. '+
                'Generate new random values with the Change Values button. Check your '+
                'answer with the Check Answer button. If you are incorrect, the correct answer will show. '+
                'Make sure you select which base you converted to in the drop-down box as you put in your answer.'+
                '</div>'+
                '<div class="modal-footer">'+
                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>Conversions from Hexadecimal (Base 16)';

            // To place initial random value on first load
            for (var i = 0; i < quizNum.length; i++) {

                quizNum[i] = hexDigits[Math.floor((Math.random() * 16))];

                document.getElementById("quiz_number").innerHTML += quizNum[i];

            }

            document.getElementById("output").setAttribute("style", "margin-top: 62px");
        },
        methods: {
            convert: function(e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var output = document.getElementById("output");

                var form = document.getElementById("hex-converter");

                var hexValue = form.hexValue.value;
                var hexValueArray = Array.from(hexValue);
                var desiredBaseValue = parseInt(form.desiredBase.value);

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

                output.innerHTML = "Converted Value: " + (base10Value).toString(desiredBaseValue);
            },
            resetConvertValue: function(e) {

                e.preventDefault();

                document.getElementById("quiz_number").innerHTML = "";

                for (var i = 0; i < quizNum.length; i++) {

                    quizNum[i] = hexDigits[Math.floor((Math.random() * 16))];

                    document.getElementById("quiz_number").innerHTML += quizNum[i];

                }

            },
            checkAnswer: function(e) {

                e.preventDefault();

                var convertQuizForm = document.getElementById("converter_quiz");

                var selectedBase = parseInt(convertQuizForm.selectedBase.value);
                var userAnswer = parseInt(convertQuizForm.userAnswer.value);

                var answer = Array.from(document.getElementById("quiz_number").innerHTML);

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
                    document.getElementById("quiz_output").innerHTML = "Correct.";
                }
                else {
                    document.getElementById("quiz_output").innerHTML = "You are incorrect. The answer is " +
                        finalAnswer;
                }

            }
        }
    }
</script>