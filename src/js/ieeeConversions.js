/**
 * Created by savannah on 2/22/2017.
 */

$("#ieee_conversions").click(function() {

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
        'This feature generates a random IEEE floating point hex value for you to convert. '+
        'Generate new random values with the Change Values button. Check your '+
        'answer with the Check Answer button. If you are incorrect, the correct answer will show. '+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>IEEE Floating Point Conversions';

    var hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var altHexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var quizNum = [0, 0, 0, 0];

    // From IEEE Hex Converter Component ------------------------------
    var ieeeConverterFromHex = new Vue({

        el: '#convert-component',
        template: '<div id="convert-component">' +
        '<form id="ieee-hex-converter">' +
        '<input type="text" class="ieee-hex-value" name="ieeeHexValue" placeholder="Enter an 8-digit IEEE Hex #" required><br>' +
        '<input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '<div id="convert_steps"></div>'+
        '</form>' +
        '</div>',
        methods: {
            convert: function(e) {

                e.preventDefault();

                document.getElementById("output").setAttribute("style", "margin-top: 20px");

                var output = document.getElementById("output");
                var steps = document.getElementById("convert_steps");
                steps.innerHTML = "";

                var form = document.getElementById("ieee-hex-converter");

                var inputArray = Array.from(form.ieeeHexValue.value);
                var first4Values = [];
                var binaryArray = [];

                for (var i = 0; i < 4; ++i) {

                    for (var j = 0; j < hexDigits.length; ++j) {

                        if (inputArray[i] == hexDigits[j] || inputArray[i] == altHexDigits[j]) {
                            first4Values.push(j);
                        }

                    }

                }

                if (first4Values.length != 4) {
                    steps.innerHTML += "You have entered an invalid IEEE hex value.";
                    return null;
                }

                steps.innerHTML += "Step by Step:<br>";
                steps.innerHTML += "Binary conversion: ";

                var binaryArrayIndex = 0;

                // Convert the decimal values in the first 4 digits to binary
                for (i = 0; i < first4Values.length; ++i) {

                    first4Values[i] = first4Values[i].toString(2);

                    // Ensures each entry is 4 digits long for later steps
                    while (first4Values[i].length != 4) {
                        first4Values[i] = "0" + first4Values[i];
                    }

                    for (j = 0; j < first4Values[i].length; ++j) {

                        binaryArray[binaryArrayIndex] = first4Values[i].charAt(j);
                        binaryArrayIndex++;

                    }

                    steps.innerHTML += first4Values[i];

                }

                // If sign bit is 0, the number will be positive
                if (binaryArray[0] == "0") {
                    steps.innerHTML += "<br>Sign bit of 0 means the number is positive.";
                }
                else {
                    steps.innerHTML += "<br>Sign bit of 1 means the number is negative.";
                }

                // Grab next 8 bits for conversion to decimal
                var next8bits = "";
                for (i = 1; i < 9; ++i) {
                    next8bits += binaryArray[i];
                }

                steps.innerHTML += "<br>Grab the next 8 bits: " + next8bits;

                var decimalValue = parseInt(next8bits, 2);

                steps.innerHTML += "<br>Those 8 bits converted to decimal: " + decimalValue;

                var biasCalculation = decimalValue - 127;

                steps.innerHTML += "<br>Subtract bias of 127: " + biasCalculation + " (becomes the exponent)";

                // Grab last 7 bits for conversion to decimal
                var last7bits = "";
                for (i = 9; i < binaryArray.length; ++i) {
                    last7bits += binaryArray[i];
                }

                steps.innerHTML += "<br>Adding the hidden bit of 1 before the decimal place and" +
                                    "<br>placing the last bits at the end, you get 1." + last7bits;

                steps.innerHTML += "<br>Adding the x 2<sup>" + biasCalculation + "</sup>: 1."
                                    + last7bits + " x 2<sup>" + biasCalculation + "</sup>";

                // Set up expanded binary number for easy decimal conversion
                var expandedBinaryNum = "1" + last7bits;
                for (i = 0; i < (biasCalculation - 7); ++i) {
                    expandedBinaryNum += "0";
                }

                if (binaryArray[0] == 1) {
                    output.innerHTML = "The final answer is -" + parseInt(expandedBinaryNum, 2);
                }
                else {
                    output.innerHTML = "The final answer is " + parseInt(expandedBinaryNum, 2);
                }

            }

        }

    });

    // IEEE Hex Conversion Practice Problems -----------------------------
    var ieeeHexConvertQuiz = new Vue({

        el: '#convert-quiz-component',
        template: '<div id="convert-quiz-component">'+
        '<form id="converter_quiz">'+
        '<p id="quiz_number_placeholder">Convert from <span id="quiz_number"></span></p>'+
        '<p class="border"></p>'+
        '<input type="text" class="user-answer" name="userAnswer" placeholder="Enter Your Answer" required><br>'+
        '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
        '<input type="button" class="btn btn-primary" name="reset" value="Change Value" v-on:click="resetConvertValue">'+
        '</form>'+
        '</div>',
        methods: {
            resetConvertValue: function(e) {

                e.preventDefault();

                document.getElementById("quiz_number").innerHTML = "";

                for (var i = 0; i < quizNum.length; i++) {

                    quizNum[i] = altHexDigits[Math.floor((Math.random() * 16))];

                    document.getElementById("quiz_number").innerHTML += quizNum[i];

                }

                document.getElementById("quiz_number").innerHTML += "0000";

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
    for (var i = 0; i < quizNum.length; i++) {

        quizNum[i] = altHexDigits[Math.floor((Math.random() * 16))];

        document.getElementById("quiz_number").innerHTML += quizNum[i];

    }

    document.getElementById("quiz_number").innerHTML += "0000";

    document.getElementById("output").setAttribute("style", "margin-top: 98px");

});