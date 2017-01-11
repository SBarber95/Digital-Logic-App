/**
 * Created by savannah on 11/6/2016.
 * Last Modified 1/2/2017.
 */

$(function () {
    $('[data-toggle="tooltip"]').tooltip({container: 'body'})
});

// From Decimal Converter Component ------------------------------
var decConverter = new Vue({
    el: '#convert-component',
    template: '<div id="convert-component">' +
        '<form id="dec-converter">' +
        '<input type="text" class="decimal-value" name="decimalValue" placeholder="Enter a Decimal Value" required><br>' +
        'Select Desired Base: <select name="desiredBase"><option value="2">2</option>' +
        '<option value="8">8</option>' +
        '<option value="16">16</option></select><br>' +
        '<input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '</form>' +
        '</div>',
    methods: {
        convert: function(e) {

            // TODO: CHANGE TO ACCEPT NEGATIVES
            e.preventDefault();

            var output = document.getElementById("output");

            var form = document.getElementById("dec-converter");

            var decimalValue = parseInt(form.decimalValue.value);
            var desiredBaseValue = parseInt(form.desiredBase.value);

            output.innerHTML = "Converted Value: " + (decimalValue).toString(desiredBaseValue);
        }
    }
});

// Decimal Conversion Practice Problems -----------------------------
var decConvertQuiz = new Vue({
    el: '#convert-quiz-component',
    template: '<div id="convert-quiz-component">'+
    '<form id="converter_quiz">'+
    '<p id="quiz_number_placeholder">Convert from this Base 10 Value: <span id="quiz_number"></span></p>'+
    '<p class="border"></p>'+
    '<input type="text" class="user-answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
    'Select Base You Converted To: <select name="selectedBase"><option value="2">2</option>' +
    '<option value="8">8</option>' +
    '<option value="16">16</option></select><br>' +
    '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
    '<input type="button" class="btn btn-primary" name="reset" value="Change Value" v-on:click="resetConvertValue">'+
    '</form>'+
    '</div>',
    methods: {
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

});

// To place initial random value on first load
document.getElementById("quiz_number").innerHTML = "" + Math.floor((Math.random() * 200));

$("#decimal_conversions").click(function () {

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
        'Simply enter your decimal value and hit convert! You can also select the desired base '+
        'you wish to convert to in the drop-down box under the text box.'+
        '<h3 class="sub-header">Practice Problems</h3>'+
        'This feature generates a random decimal value for you to convert and provide the answer for. '+
        'You can generate new random values with the Change Values button. You can also check your '+
        'answer with the Check Answer button. If you are incorrect, the correct answer will be displayed. '+
        'You can convert this given value to any base offered in the drop-down box, but make sure you '+
        'select which base you converted to as you put in your answer.'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>Conversions from Decimal (Base 10)';

    // From Decimal Converter Component ------------------------------
    var decConverter = new Vue({
        el: '#convert-component',
        template: '<div id="convert-component">' +
        '<form id="dec-converter">' +
        '<input type="text" class="decimal-value" name="decimalValue" placeholder="Enter a Decimal Value" required><br>' +
        'Select Desired Base: <select name="desiredBase"><option value="2">2</option>' +
        '<option value="8">8</option>' +
        '<option value="16">16</option></select><br>' +
        '<input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '</form>' +
        '</div>',
        methods: {
            convert: function(e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var output = document.getElementById("output");

                var form = document.getElementById("dec-converter");

                var decimalValue = parseInt(form.decimalValue.value);
                var desiredBaseValue = parseInt(form.desiredBase.value);

                output.innerHTML = "Converted Value: " + (decimalValue).toString(desiredBaseValue);
            }
        }
    });

    // Decimal Conversion Practice Problems -----------------------------
    var decConvertQuiz = new Vue({
        el: '#convert-quiz-component',
        template: '<div id="convert-quiz-component">'+
        '<form id="converter_quiz">'+
        '<p id="quiz_number_placeholder">Convert from this Base 10 Value: <span id="quiz_number"></span></p>'+
        '<p class="border"></p>'+
        '<input type="text" class="user-answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
        'Select Base You Converted To: <select name="selectedBase"><option value="2">2</option>' +
        '<option value="8">8</option>' +
        '<option value="16">16</option></select><br>' +
        '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
        '<input type="button" class="btn btn-primary" name="reset" value="Change Value" v-on:click="resetConvertValue">'+
        '</form>'+
        '</div>',
        methods: {
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

    });

    // To place initial random value on first load
    document.getElementById("quiz_number").innerHTML = "" + Math.floor((Math.random() * 200));

});

$("#binary_conversions").click(function () {

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
        'Simply enter your decimal value and hit convert! You can also select the desired base '+
        'you wish to convert to in the drop-down box under the text box.'+
        '<h3 class="sub-header">Practice Problems</h3>'+
        'This feature generates a random decimal value for you to convert and provide the answer for. '+
        'You can generate new random values with the Change Values button. You can also check your '+
        'answer with the Check Answer button. If you are incorrect, the correct answer will be displayed. '+
        'You can convert this given value to any base offered in the drop-down box, but make sure you '+
        'select which base you converted to as you put in your answer.'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>Conversions from Binary (Base 2)';

    var quizNum = [0, 0, 0, 0, 0, 0, 0, 0];

    // From Binary Converter Component ------------------------------
    var binConverter = new Vue({
        el: '#convert-component',
        template: '<div id="convert-component">' +
        '<form id="bin-converter">' +
        '<input type="text" class="binary-value" name="binaryValue" placeholder="Enter a Binary Value" required><br>' +
        'Select Desired Base: <select name="desiredBase"><option value="8">8</option>' +
        '<option value="10">10</option>' +
        '<option value="16">16</option></select><br>' +
        '<input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '</form>' +
        '</div>',
        methods: {
            convert: function(e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var output = document.getElementById("output");

                var form = document.getElementById("bin-converter");

                var binaryValue = parseInt(form.binaryValue.value, 2);
                var desiredBaseValue = parseInt(form.desiredBase.value);

                output.innerHTML = "Converted Value: " + (binaryValue).toString(desiredBaseValue);
            }
        }
    });

    // Binary Conversion Practice Problems -----------------------------
    var binConvertQuiz = new Vue({
        el: '#convert-quiz-component',
        template: '<div id="convert-quiz-component">'+
        '<form id="converter_quiz">'+
        '<p id="quiz_number_placeholder">Convert from this Base 2 Value: <span id="quiz_number"></span></p>'+
        '<p class="border"></p>'+
        '<input type="text" class="user-answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
        'Select Base You Converted To: <select name="selectedBase"><option value="8">8</option>' +
        '<option value="10">10</option>' +
        '<option value="16">16</option></select><br>' +
        '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
        '<input type="button" class="btn btn-primary" name="reset" value="Change Value" v-on:click="resetConvertValue">'+
        '</form>'+
        '</div>',
        methods: {
            resetConvertValue: function(e) {

                e.preventDefault();

                document.getElementById("quiz_number").innerHTML = "";

                for (var i = 0; i < quizNum.length; i++) {

                    quizNum[i] = Math.floor((Math.random() * 2));

                    document.getElementById("quiz_number").innerHTML += quizNum[i];

                }

            },
            checkAnswer: function(e) {

                e.preventDefault();

                var convertQuizForm = document.getElementById("converter_quiz");

                var selectedBase = parseInt(convertQuizForm.selectedBase.value);
                var userAnswer = parseInt(convertQuizForm.userAnswer.value, selectedBase);

                var quizBinary = parseInt(document.getElementById("quiz_number").innerHTML, 2);

                if (userAnswer == quizBinary) {
                    document.getElementById("quiz_output").innerHTML = "Correct.";
                }
                else {
                    document.getElementById("quiz_output").innerHTML = "You are incorrect. The answer is " +
                        quizBinary.toString(selectedBase);
                }

            }

        }

    });

    // To place initial random value on first load
    for (var i = 0; i < quizNum.length; i++) {

        quizNum[i] = Math.floor((Math.random() * 2));

        document.getElementById("quiz_number").innerHTML += quizNum[i];

    }

});

$("#octal_conversions").click(function () {

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
        'Simply enter your decimal value and hit convert! You can also select the desired base '+
        'you wish to convert to in the drop-down box under the text box.'+
        '<h3 class="sub-header">Practice Problems</h3>'+
        'This feature generates a random decimal value for you to convert and provide the answer for. '+
        'You can generate new random values with the Change Values button. You can also check your '+
        'answer with the Check Answer button. If you are incorrect, the correct answer will be displayed. '+
        'You can convert this given value to any base offered in the drop-down box, but make sure you '+
        'select which base you converted to as you put in your answer.'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>Conversions from Octal (Base 8)';

    var quizNum = [0, 0, 0];

    // From Octal Converter Component ------------------------------
    var octConverter = new Vue({
        el: '#convert-component',
        template: '<div id="convert-component">' +
        '<form id="oct-converter">' +
        '<input type="text" class="octal-value" name="octalValue" placeholder="Enter a Octal Value" required><br>' +
        'Select Desired Base: <select name="desiredBase"><option value="2">2</option>' +
        '<option value="10">10</option>' +
        '<option value="16">16</option></select><br>' +
        '<input type="submit" id="converter_submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '</form>' +
        '</div>',
        methods: {
            convert: function(e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var output = document.getElementById("output");

                var form = document.getElementById("oct-converter");

                var octalValue = parseInt(form.octalValue.value, 8);
                var desiredBaseValue = parseInt(form.desiredBase.value);

                output.innerHTML = "Converted Value: " + (octalValue).toString(desiredBaseValue);
            }
        }
    });

    // Octal Conversion Practice Problems -----------------------------
    var octConvertQuiz = new Vue({
        el: '#convert-quiz-component',
        template: '<div id="convert-quiz-component">'+
        '<form id="converter_quiz">'+
        '<p id="quiz_number_placeholder">Convert from this Base 8 Value: <span id="quiz_number"></span></p>'+
        '<p class="border"></p>'+
        '<input type="text" class="user-answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
        'Select Base You Converted To: <select name="selectedBase"><option value="2">2</option>' +
        '<option value="10">10</option>' +
        '<option value="16">16</option></select><br>' +
        '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
        '<input type="button" class="btn btn-primary" name="reset" value="Change Value" v-on:click="resetConvertValue">'+
        '</form>'+
        '</div>',
        methods: {
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

    });

    // To place initial random value on first load
    for (var i = 0; i < quizNum.length; i++) {

        quizNum[i] = Math.floor((Math.random() * 8));

        document.getElementById("quiz_number").innerHTML += quizNum[i];

    }

});

$("#hex_conversions").click(function () {

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
        'Simply enter your decimal value and hit convert! You can also select the desired base '+
        'you wish to convert to in the drop-down box under the text box.'+
        '<h3 class="sub-header">Practice Problems</h3>'+
        'This feature generates a random decimal value for you to convert and provide the answer for. '+
        'You can generate new random values with the Change Values button. You can also check your '+
        'answer with the Check Answer button. If you are incorrect, the correct answer will be displayed. '+
        'You can convert this given value to any base offered in the drop-down box, but make sure you '+
        'select which base you converted to as you put in your answer.'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>Conversions from Hexadecimal (Base 16)';

    var hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var quizNum = [0, 0, 0, 0];

    // From Hexadecimal Converter Component ------------------------------
    var hexConverter = new Vue({
        el: '#convert-component',
        template: '<div id="convert-component">' +
        '<form id="hex-converter">' +
        '<input type="text" class="hex-value" name="hexValue" placeholder="Enter a Hexadecimal Value" required><br>' +
        'Select Desired Base: <select name="desiredBase"><option value="2">2</option>' +
        '<option value="8">8</option>' +
        '<option value="10">10</option></select><br>' +
        '<input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '</form>' +
        '</div>',
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

                        if (hexValueArray[i] == hexDigits[j]) {
                            hexDigitValue = j;
                        }

                    }

                    base10Value += hexDigitValue * Math.pow(16, exponent);
                    exponent++;

                }

                output.innerHTML = "Converted Value: " + (base10Value).toString(desiredBaseValue);
            }
        }
    });

    // Hexadecimal Conversion Practice Problems -----------------------------
    var hexConvertQuiz = new Vue({
        el: '#convert-quiz-component',
        template: '<div id="convert-quiz-component">'+
        '<form id="converter_quiz">'+
        '<p id="quiz_number_placeholder">Convert from this Base 16 Value: <span id="quiz_number"></span></p>'+
        '<p class="border"></p>'+
        '<input type="text" class="user-answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
        'Select Base You Converted To: <select name="selectedBase"><option value="2">2</option>' +
        '<option value="8">8</option>' +
        '<option value="10">10</option></select><br>' +
        '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
        '<input type="button" class="btn btn-primary" name="reset" value="Change Value" v-on:click="resetConvertValue">'+
        '</form>'+
        '</div>',
        methods: {
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

                        if (answer[i] == hexDigits[j]) {
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

    });

    // To place initial random value on first load
    for (var i = 0; i < quizNum.length; i++) {

        quizNum[i] = hexDigits[Math.floor((Math.random() * 16))];

        document.getElementById("quiz_number").innerHTML += quizNum[i];

    }


});