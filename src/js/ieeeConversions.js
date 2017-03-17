/**
 * Created by savannah on 2/22/2017.
 */

var toggled = false;

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
        'Enter the IEEE hex or decimal value in the input box and click "Calculate".  You may enter '+
        'the hex value without the 4 trailing zeroes (3F88; C7F0) or enter it with them (C7F00000).'+
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

        el: "#convert-component",
        template: '<div id="convert-component">' +
        '<form id="ieee-hex-converter">' +
        '<input type="text" class="ieee-hex-value" name="ieeeHexValue" placeholder="Enter an 8-digit IEEE Hex #" required><br>' +
        '<input id="toggle_direction" type="button" class="btn btn-primary" onclick="toggleDirection()" value="Toggle Direction">' +
        '<input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
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
                                    "<br>placing the last 7 bits at the end, you get 1." + last7bits;

                steps.innerHTML += "<br>Adding the x 2<sup>" + biasCalculation + "</sup>: 1."
                                    + last7bits + " x 2<sup>" + biasCalculation + "</sup>";

                // Set up expanded binary number for easy decimal conversion
                if (biasCalculation > 0) {

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
                else if (biasCalculation == 0) {

                    // Begin with leading 1
                    var finalAnswer = 1;

                    var exponent = -1;
                    for (i = 0; i < last7bits.length; ++i) {

                        finalAnswer += Number(last7bits.charAt(i)) * Math.pow(2, exponent);
                        exponent--;

                    }

                    if (binaryArray[0] == 1) {
                        output.innerHTML = "The final answer is -" + finalAnswer;
                    }
                    else {
                        output.innerHTML = "The final answer is " + finalAnswer;
                    }

                }
                else {

                    // Begin with leading 1
                    finalAnswer = Math.pow(2, biasCalculation + 1);

                    exponent = biasCalculation;
                    for (i = 0; i < last7bits.length; ++i) {

                        finalAnswer += Number(last7bits.charAt(i)) * Math.pow(2, exponent);
                        exponent--;

                    }

                    if (binaryArray[0] == 1) {
                        output.innerHTML = "The final answer is -" + finalAnswer;
                    }
                    else {
                        output.innerHTML = "The final answer is " + finalAnswer;
                    }

                }

                document.getElementById("quiz_output").innerHTML = "Remember that you can view any conversion from " +
                                                                    "the opposite direction as well.";

            }

        }

    });

    document.getElementById("second_header").innerHTML = "Conversion Steps";
    document.getElementById("quiz_output").innerHTML = "The conversion steps will appear in this section.";

    // IEEE Hex Conversion Steps -----------------------------
    var converterSteps = new Vue({

        el: '#convert-quiz-component',
        template: '<div id="convert-quiz-component"><div id="convert_steps"></div></div>'

    });

});

function toggleDirection() {

    if (toggled) {

        hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        altHexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        quizNum = [0, 0, 0, 0];

        // From IEEE Hex Converter Component ------------------------------
        var ieeeConverterFromHex = new Vue({

            el: "#convert-component",
            template: '<div id="convert-component">' +
            '<form id="ieee-hex-converter">' +
            '<input type="text" class="ieee-hex-value" name="ieeeHexValue" placeholder="Enter an 8-digit IEEE Hex #" required><br>' +
            '<input id="toggle_direction" type="button" class="btn btn-primary" onclick="toggleDirection()" value="Toggle Direction">' +
            '<input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
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
                        "<br>placing the last 7 bits at the end, you get 1." + last7bits;

                    steps.innerHTML += "<br>Adding the x 2<sup>" + biasCalculation + "</sup>: 1."
                        + last7bits + " x 2<sup>" + biasCalculation + "</sup>";

                    // Set up expanded binary number for easy decimal conversion
                    if (biasCalculation > 0) {

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
                    else if (biasCalculation == 0) {

                        // Begin with leading 1
                        var finalAnswer = 1;

                        var exponent = -1;
                        for (i = 0; i < last7bits.length; ++i) {

                            finalAnswer += Number(last7bits.charAt(i)) * Math.pow(2, exponent);
                            exponent--;

                        }

                        if (binaryArray[0] == 1) {
                            output.innerHTML = "The final answer is -" + finalAnswer;
                        }
                        else {
                            output.innerHTML = "The final answer is " + finalAnswer;
                        }

                    }
                    else {

                        // Begin with leading 1
                        finalAnswer = Math.pow(2, biasCalculation + 1);

                        exponent = biasCalculation;
                        for (i = 0; i < last7bits.length; ++i) {

                            finalAnswer += Number(last7bits.charAt(i)) * Math.pow(2, exponent);
                            exponent--;

                        }

                        if (binaryArray[0] == 1) {
                            output.innerHTML = "The final answer is -" + finalAnswer;
                        }
                        else {
                            output.innerHTML = "The final answer is " + finalAnswer;
                        }

                    }

                    document.getElementById("quiz_output").innerHTML = "Remember that you can view any conversion from " +
                        "the opposite direction as well.";

                }

            }

        });

        toggled = false;

    }
    else {

        toggled = true;

        var hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        var altHexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        var quizNum = [0, 0, 0, 0];

        // From IEEE Decimal Converter Component ------------------------------
        var ieeeConverterFromDec = new Vue({

            el: '#convert-component',
            template: '<div id="convert-component">' +
            '<form id="ieee-dec-converter">' +
            '<input type="text" class="ieee-dec-value" name="ieeeDecValue" placeholder="Enter a Decimal Value" required><br>' +
            '<input id="toggle_direction" type="button" onclick="toggleDirection()" class="btn btn-primary" value="Toggle Direction">' +
            '<input id="converter_submit" type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
            '</form>' +
            '</div>',
            methods: {
                convert: function (e) {

                    e.preventDefault();

                    document.getElementById("output").setAttribute("style", "margin-top: 20px");

                    var output = document.getElementById("output");
                    var steps = document.getElementById("convert_steps");
                    steps.innerHTML = "";

                    var form = document.getElementById("ieee-dec-converter");

                    var binaryValue = Number(form.ieeeDecValue.value).toString(2);
                    var binaryArray = Array.from(binaryValue);

                    steps.innerHTML += "Binary conversion: " + binaryValue;

                    if (Number(form.ieeeDecValue.value) >= 1 || Number(form.ieeeDecValue.value) <= -1) {

                        // Variables for positive/negative management
                        var signBit = 0;
                        var exponent;
                        var partialBinValue = "";

                        if (binaryArray[0] == "-") {

                            exponent = binaryArray.length - 2;
                            signBit = 1;

                            for (var i = 2; i < binaryArray.length; ++i) {
                                partialBinValue += binaryArray[i];
                            }

                            steps.innerHTML += "<br>After moving the decimal over, you get -1." + partialBinValue +
                                                " x 2<sup>" + exponent + "</sup>";

                        }
                        else {

                            exponent = binaryArray.length - 1;

                            for (i = 1; i < binaryArray.length; ++i) {
                                partialBinValue += binaryArray[i];
                            }

                            steps.innerHTML += "<br>After moving the decimal over, you get 1." + partialBinValue +
                                                " x 2<sup>" + exponent + "</sup>";

                        }

                        var bias = 127 + exponent;
                        steps.innerHTML += "<br>Add bias of 127 to the exponent: " + bias;

                        bias = bias.toString(2);

                        if (bias.length != 8) {
                            bias = "0" + bias;
                        }

                        steps.innerHTML += "<br>Then convert it to binary: " + bias;
                        steps.innerHTML += "<br>Now build the full binary string, beginning with the sign bit, followed " +
                                            "by the bias, and finally the value found to the right of the decimal place in the binary value above: " +
                                            signBit + bias + partialBinValue;

                        output.innerHTML = "The final value is " + signBit + bias + partialBinValue;

                    }
                    else {

                        // Variables for positive/negative management
                        var startingIndex = 2;
                        signBit = 0;

                        if (binaryArray[0] == "-") {
                            startingIndex = 3;
                            signBit = 1;
                        }

                        exponent = 0;
                        partialBinValue = "";

                        for (startingIndex; startingIndex < binaryArray.length; ++startingIndex) {

                            exponent--;
                            if (binaryArray[startingIndex] == "1") {

                                startingIndex++;
                                for (startingIndex; startingIndex < binaryArray.length; ++startingIndex) {
                                    partialBinValue += binaryArray[startingIndex];
                                }
                                if (partialBinValue.length == 0) {
                                    partialBinValue += 0;
                                }
                                break;

                            }

                        }

                        steps.innerHTML += "<br>After moving the decimal over, you get 1." + partialBinValue +
                            " x 2<sup>" + exponent + "</sup>";

                        bias = 127 + exponent;
                        steps.innerHTML += "<br>Add bias of 127 to the exponent: " + bias;

                        bias = bias.toString(2);

                        if (bias.length != 8) {
                            bias = "0" + bias;
                        }

                        steps.innerHTML += "<br>Then convert it to binary: " + bias;
                        steps.innerHTML += "<br>Now build the full binary string, beginning with the sign bit, followed " +
                            "by the bias, and finally the value found to the right of the decimal place in the binary value above: " +
                            signBit + bias + partialBinValue;

                        output.innerHTML = "The final value is " + signBit + bias + partialBinValue;

                    }

                    document.getElementById("quiz_output").innerHTML = "Remember that you can view any conversion from " +
                        "the opposite direction as well.";

                }

            }

        });

        document.getElementById("second_header").innerHTML = "Conversion Steps";
        document.getElementById("quiz_output").innerHTML = "The conversion steps will appear in this section.";

        // IEEE Hex Conversion Steps -----------------------------
        var converterSteps = new Vue({

            el: '#convert-quiz-component',
            template: '<div id="convert-quiz-component"><div id="convert_steps"></div></div>'

        });

    }

}