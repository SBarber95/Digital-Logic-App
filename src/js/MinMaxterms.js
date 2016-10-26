/**
 * Created by iluvj on 10/23/2016.
 */
/**
 * For implementing form data retrieval for truth table,
 * then using it to display proper output of minterms
 * and maxterms in the output area etc.
 */

function findMinMaxterms() {

    // Sets up corresponding minterm values if that row is marked with a 0
    // Ex) Row 0 is 0 0 0, so its minterm if output is 1 would be A'B'C'
    var minterms = ["A'B'C'", "A'B'C", "A'BC'", "A'BC", "AB'C'", "AB'C", "ABC'", "ABC"];

    // Sets up corresponding maxterm values if that row is marked with a 0
    // Ex) Row 0 is 0 0 0, so its maxterm if output is 0 would be (A + B + C)
    var maxterms = ["(A + B + C)", "(A + B + C')", "(A + B' + C)", "(A + B' + C')", "(A' + B + C)", "(A' + B + C')",
        "(A' + B' + C)", "(A' + B' + C')"];

    // Grab user input values and store them
    var inputArray = [document.forms["3_var_TT"]["binary0"].value,
        document.forms["3_var_TT"]["binary1"].value,
        document.forms["3_var_TT"]["binary2"].value,
        document.forms["3_var_TT"]["binary3"].value,
        document.forms["3_var_TT"]["binary4"].value,
        document.forms["3_var_TT"]["binary5"].value,
        document.forms["3_var_TT"]["binary6"].value,
        document.forms["3_var_TT"]["binary7"].value];

    document.getElementById("Output").innerHTML = "<p>" + inputArray[0] + "</p>";

}