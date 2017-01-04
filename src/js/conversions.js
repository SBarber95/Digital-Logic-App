/**
 * Created by savannah on 11/6/2016.
 * Last Modified 1/2/2017.
 */

// From Decimal Converter Component ------------------------------
var decConverter = new Vue({
    el: '#convert-component',
    template: '<div id="convert-component">' +
        '<form id="dec-converter">' +
        '<input type="text" class="decimal-value" name="decimalValue" placeholder="Enter a Decimal Value" required><br>' +
        'Select Desired Base: <select name="desiredBase"><option value="2">2</option>' +
        '<option value="8">8</option>' +
        '<option value="16">16</option></select><br>' +
        '<input type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
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
    '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
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

    document.getElementById("conversions-header").innerHTML = "Conversions from Decimal (Base 10)";

    // From Decimal Converter Component ------------------------------
    var decConverter = new Vue({
        el: '#convert-component',
        template: '<div id="convert-component">' +
        '<form id="dec-converter">' +
        '<input type="text" class="decimal-value" name="decimalValue" placeholder="Enter a Decimal Value" required><br>' +
        'Select Desired Base: <select name="desiredBase"><option value="2">2</option>' +
        '<option value="8">8</option>' +
        '<option value="16">16</option></select><br>' +
        '<input type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
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
        '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
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

    document.getElementById("conversions-header").innerHTML = "Conversions from Binary (Base 2)";

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
        '<input type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '</form>' +
        '</div>',
        methods: {
            convert: function(e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var output = document.getElementById("output");

                var form = document.getElementById("bin-converter");

                var binaryValue = parseInt(form.binaryValue.value);
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
        '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
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

    document.getElementById("conversions-header").innerHTML = "Conversions from Octal (Base 8)";

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
        '<input type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '</form>' +
        '</div>',
        methods: {
            convert: function(e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var output = document.getElementById("output");

                var form = document.getElementById("oct-converter");

                var octalValue = parseInt(form.octalValue.value);
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
        '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
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

    // TODO: IMPLEMENT HEX CONVERSIONS

    document.getElementById("conversions-header").innerHTML = "Conversions from Hexadecimal (Base 16)";

    var quizNum = [0, 0, 0];

    // From Hexadecimal Converter Component ------------------------------
    var hexConverter = new Vue({
        el: '#convert-component',
        template: '<div id="convert-component">' +
        '<form id="hex-converter">' +
        '<input type="text" class="hex-value" name="hexValue" placeholder="Enter a Hexadecimal Value" required><br>' +
        'Select Desired Base: <select name="desiredBase"><option value="2">2</option>' +
        '<option value="8">8</option>' +
        '<option value="10">10</option></select><br>' +
        '<input type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '</form>' +
        '</div>',
        methods: {
            convert: function(e) {

                // TODO: CHANGE TO ACCEPT NEGATIVES
                e.preventDefault();

                var output = document.getElementById("output");

                var form = document.getElementById("hex-converter");

                var hexValue = parseInt(form.hexValue.value);
                var desiredBaseValue = parseInt(form.desiredBase.value);

                output.innerHTML = "Converted Value: " + (hexValue).toString(desiredBaseValue);
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
        '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
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