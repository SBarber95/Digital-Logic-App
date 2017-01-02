/**
 * Created by savannah on 12/19/2016.
 */

// Grab references to necessary HTML elements
var additionQuizForm = document.getElementById("addition_quiz");
var firstQuizNumPlaceholder = document.getElementById("first_quiz_number");
var secondQuizNumPlaceholder = document.getElementById("second_quiz_number");
var quizOutput = document.getElementById("quiz_output_add");

// Initialize quiz numbers to be randomized
var firstQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];
var secondQuizNum = [0, 0, 0, 0, 0, 0, 0, 0];

// Sets random binary digits to each quiz number
// and injects generated values into HTML for user viewing
for (var i = 0; i < firstQuizNum.length; i++) {

    firstQuizNum[i] = Math.floor((Math.random() * 2));
    secondQuizNum[i] = Math.floor((Math.random() * 2));

    firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
    secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

}

// Gives the user an option to clear the current quiz numbers
// and generate two new random binary values
function resetValues() {

    firstQuizNumPlaceholder.innerHTML = "";
    secondQuizNumPlaceholder.innerHTML = "";

    for (var i = 0; i < firstQuizNum.length; i++) {

        firstQuizNum[i] = Math.floor((Math.random() * 2));
        secondQuizNum[i] = Math.floor((Math.random() * 2));

        firstQuizNumPlaceholder.innerHTML += firstQuizNum[i];
        secondQuizNumPlaceholder.innerHTML += secondQuizNum[i];

    }

}

additionQuizForm.onsubmit = function(e) {

    e.preventDefault();

    var userAnswer = additionQuizForm.userAnswer.value;
    var userAnswerDigits = Array.from(userAnswer);
    var carryIn = 0;
    var answer = [];

    // Clear previous output and set up again
    quizOutput.innerHTML = "You are ";

    // Run binary addition algorithm to find correct answer
    for (i = firstQuizNum.length - 1; i >= 0; i--) {

        if (firstQuizNum[i] == '0' && secondQuizNum[i] == '0' && carryIn == 0) {
            answer.unshift('0');
            carryIn = 0;
        }
        else if ((firstQuizNum[i] == '1' && secondQuizNum[i] == '0' && carryIn == 0) ||
            (firstQuizNum[i] == '0' && secondQuizNum[i] == '1' && carryIn == 0) ||
            (firstQuizNum[i] == '0' && secondQuizNum[i] == '0' && carryIn == 1)) {
            answer.unshift('1');
            carryIn = 0;
        }
        else if ((firstQuizNum[i] == '1' && secondQuizNum[i] == '1' && carryIn == 0) ||
            (firstQuizNum[i] == '0' && secondQuizNum[i] == '1' && carryIn == 1) ||
            (firstQuizNum[i] == '1' && secondQuizNum[i] == '0' && carryIn == 1)) {
            answer.unshift('0');
            carryIn = 1;
            if (i == 0) {
                answer.unshift('1');
            }
        }
        else if (firstQuizNum[i] == '1' && secondQuizNum[i] == '1' && carryIn == 1) {
            answer.unshift('1');
            carryIn = 1;
            if (i == 0) {
                answer.unshift('1');
            }
        }

    }

    // Compare user answer to algorithm's answer and display result
    if (userAnswerDigits.toString() == answer.toString()) {
        quizOutput.innerHTML += "correct."
    }
    else {
        quizOutput.innerHTML += "incorrect. The answer is ";
        for (i = 0; i < answer.length; i++) {
            quizOutput.innerHTML += "" + answer[i];
        }
    }

};