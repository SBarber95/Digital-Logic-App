/**
 * Created by savannah on 1/3/2017.
 */

// Binary Addition Calculator --------------------------------
var binaryAdditionCalc = new Vue ({
    el: '#calc',
    template: '<div class="user-input-addition" id="calc">'+
    '<h2 class="sub-header">Calculator</h2>'+
    '<form id="addition_calculator">'+
    '<input type="text" class="first-value" name="firstNumber" placeholder="Enter First Binary Value" required><br>'+
    '+ <input type="text" class="second-value" name="secondNumber" placeholder="Enter Second Binary Value" required><br>'+
    '<p class="border"></p>'+
    '<input type="submit" class="btn btn-primary" name="submit" value="Calculate" v-on:click="calculate">'+
    '</form>'+
    '<p id="calculator_output_add" class="well arithmetic-output">The Answer Will Appear Here.</p>'+
    '</div>',
    methods: {

        calculate: function(e) {

            /**
             * Created by savannah on 12/19/2016.
             * TODO: Add error-checking for user entering both binary values
             */

            e.preventDefault();

            var calculatorOutput = document.getElementById("calculator_output_add");
            var calculatorForm = document.getElementById("addition_calculator");

            var firstNumber = calculatorForm.firstNumber.value;
            var secondNumber = calculatorForm.secondNumber.value;

            // Convert string input to arrays to prepare for arithmetic
            var firstNumberDigits = Array.from(firstNumber);
            var secondNumberDigits = Array.from(secondNumber);

            // The following loops prepend 0's to simulate a zero-extension
            // of the shorter binary value to the matched size of the longer
            // binary value to facilitate easier arithmetic
            if (firstNumberDigits.length > secondNumberDigits.length) {
                for (var i = secondNumberDigits.length; i < firstNumberDigits.length; i++) {

                    secondNumberDigits.unshift('0');

                }
            }
            else if (secondNumberDigits.length > firstNumberDigits.length) {
                for (i = firstNumberDigits.length; i < secondNumberDigits.length; i++) {

                    firstNumberDigits.unshift('0');

                }
            }

            var carryIn = 0;

            var answer = [];

            // Clear previous output
            calculatorOutput.innerHTML = "Answer: ";

            for (i = firstNumberDigits.length - 1; i >= 0; i--) {

                if (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '0' && carryIn == 0) {
                    answer.unshift('0');
                    carryIn = 0;
                }
                else if ((firstNumberDigits[i] == '1' && secondNumberDigits[i] == '0' && carryIn == 0) ||
                    (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '1' && carryIn == 0) ||
                    (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '0' && carryIn == 1)) {
                    answer.unshift('1');
                    carryIn = 0;
                }
                else if ((firstNumberDigits[i] == '1' && secondNumberDigits[i] == '1' && carryIn == 0) ||
                    (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '1' && carryIn == 1) ||
                    (firstNumberDigits[i] == '1' && secondNumberDigits[i] == '0' && carryIn == 1)) {
                    answer.unshift('0');
                    carryIn = 1;
                    if (i == 0) {
                        answer.unshift('1');
                    }
                }
                else if (firstNumberDigits[i] == '1' && secondNumberDigits[i] == '1' && carryIn == 1) {
                    answer.unshift('1');
                    carryIn = 1;
                    if (i == 0) {
                        answer.unshift('1');
                    }
                }

            }

            for (i = 0; i < answer.length; i++) {

                calculatorOutput.innerHTML += "" + answer[i];

            }

        }

    }
});

var additionQuiz = new Vue ({
    el: '#quiz',
    template: '<div class="addition-quiz" id="quiz">'+
    '<h2 class="sub-header">Practice Problems</h2>'+
    '<form id="addition_quiz_form">'+
    '<p id="first_quiz_number"></p>'+
    '<p id="second_quiz_number"></p>'+
    '<p class="border"></p>'+
    '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required>'+
    '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
    '<input type="button" class="btn btn-primary" name="reset" value="Change Values" v-on:click="resetValues">'+
    '</form>'+
    '<p id="quiz_output_add" class="well arithmetic-output">Your answer will be checked here.</p>'+
    '</div>',
    methods: {

        resetValues: function(e) {

            e.preventDefault();

            firstQuizNumPlaceholder.innerHTML = "";
            secondQuizNumPlaceholder.innerHTML = "";

            for (var i = 0; i < firstQuizNum.length; i++) {

                firstQuizNum[i] = Math.floor((Math.random() * 2));
                secondQuizNum[i] = Math.floor((Math.random() * 2));

                firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
                secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

            }

        },

        checkAnswer: function(e) {

            e.preventDefault();

            // Grab references to necessary HTML elements
            var additionQuizForm = document.getElementById("addition_quiz_form");
            var quizOutput = document.getElementById("quiz_output_add");

            var firstNumber = parseInt(document.getElementById("first_quiz_number").innerHTML, 2);
            var secondNumber = parseInt(document.getElementById("second_quiz_number").innerHTML, 2);
            var userAnswer = additionQuizForm.userAnswer.value;

            var actualAnswer = (firstNumber+secondNumber).toString(2);

            // Clear previous output and set up again
            quizOutput.innerHTML = "You are ";


            // Compare user answer to algorithm's answer and display result
            if (userAnswer == actualAnswer) {
                quizOutput.innerHTML += "correct."
            }
            else {
                quizOutput.innerHTML += "incorrect. The answer (normal form) is " + actualAnswer;
            }

        }

    }

});

var firstQuizNumPlaceholder = document.getElementById("first_quiz_number");
var secondQuizNumPlaceholder = document.getElementById("second_quiz_number");

// Initialize quiz numbers to be randomized
var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

firstQuizNumPlaceholder.innerHTML = "";
secondQuizNumPlaceholder.innerHTML = "";

// Sets random binary digits to each quiz number
// and injects generated values into HTML for user viewing
// INITIAL SET UP
for (var i = 0; i < firstQuizNum.length; i++) {

    firstQuizNum[i] = Math.floor((Math.random() * 2));
    secondQuizNum[i] = Math.floor((Math.random() * 2));

    firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
    secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

}

$("#binary_addition").click(function() {

    document.getElementById("binary-arith-header").innerHTML = '<button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#binaryAddModal">'+
        'Instructions!'+
        '</button>'+
        '<div class="modal fade" id="binaryAddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
        '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
        '<h4 class="modal-title" id="binaryAddTitle">Binary Addition Instructions</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<h3 class="sub-header">Calculator</h3>'+
        'Simply enter your two binary values and hit calculate! If you have negative binary values, '+
        'it is recommended to use the binary subtraction feature as binary addition only works with '+
        'positive binary numbers as of now; however, please read the instructions on that page first.'+
        '<h3 class="sub-header">Practice Problems</h3>'+
        'This feature generates two random binary values for you to add and provide the answer for. '+
        'You can generate new random values with the Change Values button. You can also check your '+
        'answer with the Check Answer button. If you are incorrect, the correct answer will be displayed.'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        'Binary Addition';

    // Binary Addition Calculator --------------------------------
    var binaryAdditionCalc = new Vue ({
        el: '#calc',
        template: '<div class="user-input-addition" id="calc">'+
        '<h2 class="sub-header">Calculator</h2>'+
        '<form id="addition_calculator">'+
        '<input type="text" class="first-value" name="firstNumber" placeholder="Enter First Binary Value" required><br>'+
        '+ <input type="text" class="second-value" name="secondNumber" placeholder="Enter Second Binary Value" required><br>'+
        '<p class="border"></p>'+
        '<input type="submit" class="btn btn-primary" name="submit" value="Calculate" v-on:click="calculate">'+
        '</form>'+
        '<p id="calculator_output_add" class="well arithmetic-output">The Answer Will Appear Here.</p>'+
        '</div>',
        methods: {

            calculate: function(e) {

                /**
                 * Created by savannah on 12/19/2016.
                 * TODO: Add error-checking for user entering both binary values
                 */

                e.preventDefault();

                var calculatorOutput = document.getElementById("calculator_output_add");
                var calculatorForm = document.getElementById("addition_calculator");

                var firstNumber = calculatorForm.firstNumber.value;
                var secondNumber = calculatorForm.secondNumber.value;

                // Convert string input to arrays to prepare for arithmetic
                var firstNumberDigits = Array.from(firstNumber);
                var secondNumberDigits = Array.from(secondNumber);

                // The following loops prepend 0's to simulate a zero-extension
                // of the shorter binary value to the matched size of the longer
                // binary value to facilitate easier arithmetic
                if (firstNumberDigits.length > secondNumberDigits.length) {
                    for (var i = secondNumberDigits.length; i < firstNumberDigits.length; i++) {

                        secondNumberDigits.unshift('0');

                    }
                }
                else if (secondNumberDigits.length > firstNumberDigits.length) {
                    for (i = firstNumberDigits.length; i < secondNumberDigits.length; i++) {

                        firstNumberDigits.unshift('0');

                    }
                }

                var carryIn = 0;

                var answer = [];

                // Clear previous output
                calculatorOutput.innerHTML = "Answer: ";

                for (i = firstNumberDigits.length - 1; i >= 0; i--) {

                    if (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '0' && carryIn == 0) {
                        answer.unshift('0');
                        carryIn = 0;
                    }
                    else if ((firstNumberDigits[i] == '1' && secondNumberDigits[i] == '0' && carryIn == 0) ||
                        (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '1' && carryIn == 0) ||
                        (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '0' && carryIn == 1)) {
                        answer.unshift('1');
                        carryIn = 0;
                    }
                    else if ((firstNumberDigits[i] == '1' && secondNumberDigits[i] == '1' && carryIn == 0) ||
                        (firstNumberDigits[i] == '0' && secondNumberDigits[i] == '1' && carryIn == 1) ||
                        (firstNumberDigits[i] == '1' && secondNumberDigits[i] == '0' && carryIn == 1)) {
                        answer.unshift('0');
                        carryIn = 1;
                        if (i == 0) {
                            answer.unshift('1');
                        }
                    }
                    else if (firstNumberDigits[i] == '1' && secondNumberDigits[i] == '1' && carryIn == 1) {
                        answer.unshift('1');
                        carryIn = 1;
                        if (i == 0) {
                            answer.unshift('1');
                        }
                    }

                }

                for (i = 0; i < answer.length; i++) {

                    calculatorOutput.innerHTML += "" + answer[i];

                }

            }

        }
    });

    var additionQuiz = new Vue ({
        el: '#quiz',
        template: '<div class="addition-quiz" id="quiz">'+
        '<h2 class="sub-header">Practice Problems</h2>'+
        '<form id="addition_quiz_form">'+
        '<p id="first_quiz_number"></p>'+
        '<p id="second_quiz_number"></p>'+
        '<p class="border"></p>'+
        '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required>'+
        '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
        '<input type="button" class="btn btn-primary" name="reset" value="Change Values" v-on:click="resetValues">'+
        '</form>'+
        '<p id="quiz_output_add" class="well arithmetic-output">Your answer will be checked here.</p>'+
        '</div>',
        methods: {

            resetValues: function(e) {

                e.preventDefault();

                firstQuizNumPlaceholder.innerHTML = "";
                secondQuizNumPlaceholder.innerHTML = "";

                for (var i = 0; i < firstQuizNum.length; i++) {

                    firstQuizNum[i] = Math.floor((Math.random() * 2));
                    secondQuizNum[i] = Math.floor((Math.random() * 2));

                    firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
                    secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

                }

            },

            checkAnswer: function(e) {

                e.preventDefault();

                // Grab references to necessary HTML elements
                var additionQuizForm = document.getElementById("addition_quiz_form");
                var quizOutput = document.getElementById("quiz_output_add");

                var firstNumber = parseInt(document.getElementById("first_quiz_number").innerHTML, 2);
                var secondNumber = parseInt(document.getElementById("second_quiz_number").innerHTML, 2);
                var userAnswer = additionQuizForm.userAnswer.value;

                var actualAnswer = (firstNumber+secondNumber).toString(2);

                // Clear previous output and set up again
                quizOutput.innerHTML = "You are ";


                // Compare user answer to algorithm's answer and display result
                if (userAnswer == actualAnswer) {
                    quizOutput.innerHTML += "correct."
                }
                else {
                    quizOutput.innerHTML += "incorrect. The answer (normal form) is " + actualAnswer;
                }

            }

        }

    });

    var firstQuizNumPlaceholder = document.getElementById("first_quiz_number");
    var secondQuizNumPlaceholder = document.getElementById("second_quiz_number");

    firstQuizNumPlaceholder.innerHTML = "";
    secondQuizNumPlaceholder.innerHTML = "";

    // Initialize quiz numbers to be randomized
    var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
    var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

    // Sets random binary digits to each quiz number
    // and injects generated values into HTML for user viewing
    // INITIAL SET UP
    for (var i = 0; i < firstQuizNum.length; i++) {

        firstQuizNum[i] = Math.floor((Math.random() * 2));
        secondQuizNum[i] = Math.floor((Math.random() * 2));

        firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
        secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

    }

});

$("#binary_subtraction").click(function() {

    document.getElementById("binary-arith-header").innerHTML = '<button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#binarySubModal">'+
        'Instructions!'+
        '</button>'+
        '<div class="modal fade" id="binarySubModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
        '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
        '<h4 class="modal-title" id="binarySubTitle">Binary Subtraction Instructions</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<h3 class="sub-header">Calculator</h3>'+
        'When entering your binary values, make sure they are in normal form; that is, each number entered '+
        'should not be in 1s or 2s complement. When the application calculates the subtracted result of your '+
        'entered values, you will get both the normal form result and the 2s complement result for convenience. '+
        'The 2s complement answer is the answer you would receive if both values were originally in 2s complement form.'+
        '<h3 class="sub-header">Practice Problems</h3>'+
        'The practice problem section presents two random binary values in NORMAL form. You can change the values '+
        'presented to you with the Change Values button whenever you like. You can enter the answer in normal form '+
        'or in 2s complement form if you wish to convert the shown values to 2s complement yourself and work out '+
        'the problem that way. When you are finished, hit the Check Your Answer button. If you are incorrect, the '+
        'output will also display the correct answer in both normal and 2s complement forms.<br>'+
        'NOTE: If answering in 2s complement form, please enter the sign-extended value (16 bits long)<br>'+
        'Example) If the answer was 2s complement 101, enter 1111111111111101.'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        'Binary Subtraction';

    // Binary Subtraction Calculator --------------------------------
    var binarySubtractionCalc = new Vue ({
        el: '#calc',
        template: '<div class="user-input-subtraction" id="calc">'+
        '<h2 class="sub-header">Calculator</h2>'+
        '<form id="subtraction_calculator">'+
        '<input type="text" class="first-value" name="firstNumber" placeholder="Enter First Binary Value" required><br>'+
        '- <input type="text" style="margin-left: 4px" class="second-value" name="secondNumber" placeholder="Enter Second Binary Value" required><br>'+
        '<p class="border"></p>'+
        '<input type="submit" class="btn btn-primary" name="submit" value="Calculate" v-on:click="calculate">'+
        '</form>'+
        '<p id="calculator_output_sub" class="well arithmetic-output">The Answer Will Appear Here.</p>'+
        '</div>',
        methods: {

            calculate: function(e) {

                /**
                 * Created by savannah on 1/3/2017.
                 * TODO: Add error-checking for user entering both binary values
                 */

                e.preventDefault();

                var calculatorOutput = document.getElementById("calculator_output_sub");
                var calculatorForm = document.getElementById("subtraction_calculator");

                calculatorOutput.innerHTML = "";

                var firstNumber = parseInt(calculatorForm.firstNumber.value, 2);
                var secondNumber = parseInt(calculatorForm.secondNumber.value, 2);

                var answer = (firstNumber-secondNumber).toString(2);
                var twosCompAnswer = ((firstNumber-secondNumber) >>> 0).toString(2);

                if (twosCompAnswer.length == 32) {
                    twosCompAnswer = "" + twosCompAnswer.substring(16);
                }

                calculatorOutput.innerHTML += "Answer (Normal Form): " + answer + "<br>";
                calculatorOutput.innerHTML += "Answer (2s Complement): " + twosCompAnswer;

            }

        }

    });

    var subtractionQuiz = new Vue ({
        el: '#quiz',
        template: '<div class="subtraction-quiz" id="quiz">'+
        '<h2 class="sub-header">Practice Problems</h2>'+
        '<form id="subtraction_quiz_form">'+
        '<p id="first_quiz_number"></p>'+
        '<p id="second_quiz_number"></p>'+
        '<p class="border"></p>'+
        '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required>'+
        '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
        '<input type="button" class="btn btn-primary" name="reset" value="Change Values" v-on:click="resetValues">'+
        '</form>'+
        '<p id="quiz_output_sub" class="well arithmetic-output">Your answer will be checked here.</p>'+
        '</div>',
        methods: {

            resetValues: function(e) {

                e.preventDefault();

                firstQuizNumPlaceholder.innerHTML = "";
                secondQuizNumPlaceholder.innerHTML = "";

                for (var i = 0; i < firstQuizNum.length; i++) {

                    firstQuizNum[i] = Math.floor((Math.random() * 2));
                    secondQuizNum[i] = Math.floor((Math.random() * 2));

                    firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
                    secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

                }

            },

            checkAnswer: function(e) {

                e.preventDefault();

                // Grab references to necessary HTML elements
                var subtractionQuizForm = document.getElementById("subtraction_quiz_form");
                var quizOutput = document.getElementById("quiz_output_sub");

                var firstNumber = parseInt(document.getElementById("first_quiz_number").innerHTML, 2);
                var secondNumber = parseInt(document.getElementById("second_quiz_number").innerHTML, 2);
                var userAnswer = subtractionQuizForm.userAnswer.value;

                var actualAnswer1 = (firstNumber-secondNumber).toString(2);
                var actualAnswer2 = ((firstNumber-secondNumber) >>> 0).toString(2);

                // Clear previous output and set up again
                quizOutput.innerHTML = "You are ";

                if (actualAnswer2.length == 32) {
                    actualAnswer2 = "" + actualAnswer2.substring(16);
                }

                // Compare user answer to algorithm's answer and display result
                if (userAnswer == actualAnswer1 || userAnswer == actualAnswer2) {
                    quizOutput.innerHTML += "correct."
                }
                else {
                    quizOutput.innerHTML += "incorrect.<br> The answer in normal form is " + actualAnswer1 + "<br>" +
                                            "The 2s complement answer is " + actualAnswer2;
                }

            }

        }

    });

    var firstQuizNumPlaceholder = document.getElementById("first_quiz_number");
    var secondQuizNumPlaceholder = document.getElementById("second_quiz_number");

    // Initialize quiz numbers to be randomized
    var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
    var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

    firstQuizNumPlaceholder.innerHTML = "";
    secondQuizNumPlaceholder.innerHTML = "";

    // Sets random binary digits to each quiz number
    // and injects generated values into HTML for user viewing
    // INITIAL SET UP
    for (var i = 0; i < firstQuizNum.length; i++) {

        firstQuizNum[i] = Math.floor((Math.random() * 2));
        secondQuizNum[i] = Math.floor((Math.random() * 2));

        firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
        secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

    }

});

$("#binary_multiplication").click(function() {

    document.getElementById("binary-arith-header").innerHTML = '<button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#binaryMultModal">'+
        'Instructions!'+
        '</button>'+
        '<div class="modal fade" id="binaryMultModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
        '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
        '<h4 class="modal-title" id="binaryMultTitle">Binary Multiplication Instructions</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        '<h3 class="sub-header">Calculator</h3>'+
        'Simply enter two binary numbers and hit calculate! The multiplier works with just about any positive '+
        'whole binary number.'+
        '<h3 class="sub-header">Practice Problems</h3>'+
        'The practice problem feature generates two random binary values for you to multiply. Just enter your final '+
        'answer in the corresponding box and click on the Check Answer button. If you are incorrect, the correct '+
        'value will be displayed. Generate more random values at any time with the Change Values button.'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        'Binary Multiplication';

    // Binary Multiplication Calculator --------------------------------
    var binaryMultiplicationCalc = new Vue ({
        el: '#calc',
        template: '<div class="user-input-multiplication" id="calc">'+
        '<h2 class="sub-header">Calculator</h2>'+
        '<form id="multiplication_calculator">'+
        '<input type="text" class="first-value" name="firstNumber" placeholder="Enter First Binary Value" required><br>'+
        '* <input type="text" style="margin-left: 4px" class="second-value" name="secondNumber" placeholder="Enter Second Binary Value" required><br>'+
        '<p class="border"></p>'+
        '<input type="submit" class="btn btn-primary" name="submit" value="Calculate" v-on:click="calculate">'+
        '</form>'+
        '<p id="calculator_output_mult" class="well arithmetic-output">The Answer Will Appear Here.</p>'+
        '</div>',
        methods: {

            calculate: function(e) {

                /**
                 * Created by savannah on 1/3/2017.
                 * TODO: Add error-checking for user entering both binary values
                 */

                e.preventDefault();

                var calculatorOutput = document.getElementById("calculator_output_mult");
                var calculatorForm = document.getElementById("multiplication_calculator");

                var firstNumber = parseInt(calculatorForm.firstNumber.value, 2);
                var secondNumber = parseInt(calculatorForm.secondNumber.value, 2);

                var answer = (firstNumber*secondNumber).toString(2);

                calculatorOutput.innerHTML = "Answer: " + answer;

            }

        }

    });

    var multiplicationQuiz = new Vue ({
        el: '#quiz',
        template: '<div class="multiplication-quiz" id="quiz">'+
        '<h2 class="sub-header">Practice Problems</h2>'+
        '<form id="multiplication_quiz_form">'+
        '<p id="first_quiz_number"></p>'+
        '<p id="second_quiz_number"></p>'+
        '<p class="border"></p>'+
        '<input type="text" class="user_answer" name="userAnswer" placeholder="Enter Your Answer" required>'+
        '<input type="submit" class="btn btn-primary" name="submit" value="Check Answer" v-on:click="checkAnswer">'+
        '<input type="button" class="btn btn-primary" name="reset" value="Change Values" v-on:click="resetValues">'+
        '</form>'+
        '<p id="quiz_output_mult" class="well arithmetic-output">Your answer will be checked here.</p>'+
        '</div>',
        methods: {

            resetValues: function(e) {

                e.preventDefault();

                firstQuizNumPlaceholder.innerHTML = "";
                secondQuizNumPlaceholder.innerHTML = "";

                for (var i = 0; i < firstQuizNum.length; i++) {

                    firstQuizNum[i] = Math.floor((Math.random() * 2));
                    secondQuizNum[i] = Math.floor((Math.random() * 2));

                    firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
                    secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

                }

            },

            checkAnswer: function(e) {

                e.preventDefault();

                // Grab references to necessary HTML elements
                var multiplicationQuizForm = document.getElementById("multiplication_quiz_form");
                var quizOutput = document.getElementById("quiz_output_mult");

                var firstNumber = parseInt(document.getElementById("first_quiz_number").innerHTML, 2);
                var secondNumber = parseInt(document.getElementById("second_quiz_number").innerHTML, 2);
                var userAnswer = multiplicationQuizForm.userAnswer.value;

                var actualAnswer = (firstNumber*secondNumber).toString(2);

                // Clear previous output and set up again
                quizOutput.innerHTML = "You are ";

                // Compare user answer to algorithm's answer and display result
                if (userAnswer == actualAnswer) {
                    quizOutput.innerHTML += "correct."
                }
                else {
                    quizOutput.innerHTML += "incorrect. The answer is " + actualAnswer;
                }

            }

        }

    });

    var firstQuizNumPlaceholder = document.getElementById("first_quiz_number");
    var secondQuizNumPlaceholder = document.getElementById("second_quiz_number");

    // Initialize quiz numbers to be randomized
    var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
    var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

    firstQuizNumPlaceholder.innerHTML = "";
    secondQuizNumPlaceholder.innerHTML = "";

    // Sets random binary digits to each quiz number
    // and injects generated values into HTML for user viewing
    // INITIAL SET UP
    for (var i = 0; i < firstQuizNum.length; i++) {

        firstQuizNum[i] = Math.floor((Math.random() * 2));
        secondQuizNum[i] = Math.floor((Math.random() * 2));

        firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
        secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

    }

});