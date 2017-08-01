<template>
<div>
    <div class="user-input-converter">
        <h2 class="sub-header" style="margin-bottom: 20px;">Converter</h2>
        <form id="dec-converter">
            <input type="text" class="decimal-value" name="decimalValue" placeholder="Enter a Decimal Value" required><br>
            Select Desired Base: <select name="desiredBase"><option value="2">2</option>
                <option value="8">8</option>
                <option value="16">16</option></select><br>
            <input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">
        </form>
        <p id="output" class="well converter-output">The Answer Will Appear Here.</p>
    </div>
    <div class="conversion-quiz">
        <h2 class="sub-header" id="second_header">Practice Problems</h2>
        <form id="converter_quiz">
            <p id="quiz_number_placeholder">Convert from this Base 10 Value: <span id="quiz_number"></span></p>
            <p class="border"></p>
            <input type="text" class="user-answer" name="userAnswer" placeholder="Enter Your Answer" required><br>
            Select Base You Converted To: <select name="selectedBase"><option value="2">2</option>
                <option value="8">8</option>
                <option value="16">16</option></select><br>
            <input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">
            <input type="button" class="btn btn-primary" name="reset" value="Change Value" v-on:click="resetConvertValue">
            </form>
        <p id="quiz_output" class="well converter-output">Your Answer Will Be Checked Here.</p>
    </div>
</div>
</template>

<script>
    export default {
        mounted () {
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
                'Simply enter your decimal value and hit convert! Select the desired base '+
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
                '</div>Conversions from Decimal (Base 10)';
            // To place initial random value on first load
            document.getElementById("quiz_number").innerHTML = "" + Math.floor((Math.random() * 200));
            // TODO: Terrible Style design obviously
            document.getElementById("output").setAttribute("style", "margin-top: 60px");
        },
        methods: {
            convert: function(e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var output = document.getElementById("output");

                var form = document.getElementById("dec-converter");

                var decimalValue = parseInt(form.decimalValue.value);
                var desiredBaseValue = parseInt(form.desiredBase.value);

                output.innerHTML = "Converted Value: " + (decimalValue).toString(desiredBaseValue);

            },
            resetConvertValue: function(e) {

                e.preventDefault();
                document.getElementById("quiz_number").innerHTML = "" + Math.floor((Math.random() * 200));

            },
            checkAnswer: function(e) {

                e.preventDefault();

                var convertQuizForm = document.getElementById("converter_quiz");

                var selectedBase = parseInt(convertQuizForm.selectedBase.value);
                var userAnswer = parseInt(convertQuizForm.userAnswer.value, selectedBase);

                var quizDecimal = parseInt(document.getElementById("quiz_number").innerHTML);

                if (userAnswer == quizDecimal) {
                    document.getElementById("quiz_output").innerHTML = "Correct.";
                }
                else {
                    document.getElementById("quiz_output").innerHTML = "You are incorrect. The answer is " +
                        quizDecimal.toString(selectedBase);
                }

            }
        }
    }
</script>