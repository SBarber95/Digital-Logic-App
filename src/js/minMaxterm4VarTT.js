/**
 * Created by iluvj on 11/4/2016.
 */
var output = document.getElementById("Output");

// Pull needed form into a variable for easy manipulation
var form = document.getElementById("4_var_TT");

// Sets up corresponding minterm values if that row is marked with a 0
// Ex) Row 0 is 0 0 0 0, so its minterm if output is 1 would be A'B'C'D'
var minterms = ["A'B'C'D'", "A'B'C'D", "A'B'CD'", "A'B'CD", "A'BC'D'", "A'BC'D", "A'BCD'", "A'BCD", "AB'C'D'",
    "AB'C'D", "AB'CD'", "AB'CD", "ABC'D'", "ABC'D", "ABCD'", "ABCD"];

// Sets up corresponding maxterm values if that row is marked with a 0
// Ex) Row 0 is 0 0 0 ), so its maxterm if output is 0 would be (A + B + C + D)
var maxterms = ["(A + B + C + D)", "(A + B + C + D')", "(A + B' + C' + D)", "(A + B + C' + D')",
    "(A + B' + C + D)", "(A + B' + C + D')", "(A + B' + C' + D)", "(A + B' + C' + D')",
    "(A' + B + C + D)", "(A' + B + C + D')", "(A' + B + C' + D)", "(A' + B + C' + D')",
    "(A' + B' + C + D)", "(A' + B' + C + D')", "(A' + B' + C' + D)", "(A' + B' + C' + D')"];

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
        form.binary7.value,
        form.binary8.value,
        form.binary9.value,
        form.binary10.value,
        form.binary11.value,
        form.binary12.value,
        form.binary13.value,
        form.binary14.value,
        form.binary15.value,];

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