/**
 * Created by iluvj on 11/4/2016.
 */
var output = document.getElementById("Output");

// Pull needed form into a variable for easy manipulation
var form = document.getElementById("3_var_TT");

// Sets up corresponding minterm values if that row is marked with a 0
// Ex) Row 0 is 0 0 0, so its minterm if output is 1 would be A'B'C'
var minterms = ["A'B'C'", "A'B'C", "A'BC'", "A'BC", "AB'C'", "AB'C", "ABC'", "ABC"];

// Sets up corresponding maxterm values if that row is marked with a 0
// Ex) Row 0 is 0 0 0, so its maxterm if output is 0 would be (A + B + C)
var maxterms = ["(A + B + C)", "(A + B + C')", "(A + B' + C)", "(A + B' + C')", "(A' + B + C)", "(A' + B + C')",
    "(A' + B' + C)", "(A' + B' + C')"];

form.onsubmit = function (e) {
    e.preventDefault();

    // Grab user input values and store them
    var inputArray = [form.binary0.value,
        form.binary1.value,
        form.binary2.value,
        form.binary3.value,
        form.binary4.value,
        form.binary5.value,
        form.binary6.value,
        form.binary7.value];

    // Clear output from previous submission
    output.innerHTML = "";

    output.innerHTML += "Minterms: ";

    // Find minterm input and display output
    for (i = 0; i < inputArray.length; i++) {

        if (inputArray[i] == 1) {
            output.innerHTML += minterms[i] + " ";
        }

    }

    output.innerHTML += "<br>Maxterms: ";

    // Find maxterm input and display output
    for (var i = 0; i < inputArray.length; i++) {

        if (inputArray[i] == 0) {
            output.innerHTML += maxterms[i] + " ";
        }

    }

};