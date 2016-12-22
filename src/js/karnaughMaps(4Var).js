/**
 * Created by savannah on 12/21/2016.
 */

// TODO: Translate algorithm to a 4-Variable KM compatible function.

class KarnaughMapCell4Var {
    constructor(cellNum, cellValue, isGrouped) {
        this.cellNum = cellNum;
        this.cellValue = cellValue;
        this.isGrouped = isGrouped;
    }
}

// Display a 4 Variable Karnaugh Map from the Menu
$("#display_four_var_km").click(function() {

    var header = document.getElementById("km_header");
    header.innerHTML = "4-Variable Karnaugh Map";

    new Vue({
        el: "#km_placeholder",
        template: '<div class="km-container-4var" id="km_placeholder">' +
        '<form id="four_var_KM" name="four_var_KM">' +
        '<div class="info-cell"><img src="../images/4VarKMLogo.png"></div>' +
        '<div class="info-cell"><p class="info-top" style="left: 33%">00</p></div>' +
        '<div class="info-cell"><p class="info-top" style="left: 33%">01</p></div>' +
        '<div class="info-cell"><p class="info-top" style="left: 33%">11</p></div>' +
        '<div class="info-cell"><p class="info-top" style="left: 33%">10</p></div>' +
        '<div class="info-cell"><p class="info-side">00</p></div>' +
        '<div class="cell"><select name="cell0">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell4">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell12">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell8">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="info-cell"><p class="info-side">01</p></div>' +
        '<div class="cell"><select name="cell1">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell5">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell13">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell9">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="info-cell"><p class="info-side">11</p></div>' +
        '<div class="cell"><select name="cell3">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell7">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell15">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell11">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="info-cell"><p class="info-side">10</p></div>' +
        '<div class="cell"><select name="cell2">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell6">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell14">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<div class="cell"><select name="cell10">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="X">X</option>' +
        '</select></div>' +
        '<input type="submit" class="btn btn-primary first-input-4-var" name="submit" value="Simplify (Minterms)">' +
        '<input type="submit" class="btn btn-primary second-input-4-var" name="submit" value="Simplify (Maxterms)">' +
        '</form>' +
        '</div>'
    });

});

var kmOutput = document.getElementById("KM_Output");
var fourVarKMForm = document.getElementById("four_var_KM");

fourVarKMForm.onsubmit = function(e) {

    e.preventDefault();

    // Grab cell value inputs and place in cell objects
    var cell0 = new KarnaughMapCell4Var(0, fourVarKMForm.cell0.value, false);
    var cell1 = new KarnaughMapCell4Var(1, fourVarKMForm.cell1.value, false);
    var cell2 = new KarnaughMapCell4Var(2, fourVarKMForm.cell2.value, false);
    var cell3 = new KarnaughMapCell4Var(3, fourVarKMForm.cell3.value, false);
    var cell4 = new KarnaughMapCell4Var(4, fourVarKMForm.cell4.value, false);
    var cell5 = new KarnaughMapCell4Var(5, fourVarKMForm.cell5.value, false);
    var cell6 = new KarnaughMapCell4Var(6, fourVarKMForm.cell6.value, false);
    var cell7 = new KarnaughMapCell4Var(7, fourVarKMForm.cell7.value, false);
    var cell8 = new KarnaughMapCell4Var(7, fourVarKMForm.cell8.value, false);
    var cell9 = new KarnaughMapCell4Var(7, fourVarKMForm.cell9.value, false);
    var cell10 = new KarnaughMapCell4Var(7, fourVarKMForm.cell10.value, false);
    var cell11 = new KarnaughMapCell4Var(7, fourVarKMForm.cell11.value, false);
    var cell12 = new KarnaughMapCell4Var(7, fourVarKMForm.cell12.value, false);
    var cell13 = new KarnaughMapCell4Var(7, fourVarKMForm.cell13.value, false);
    var cell14 = new KarnaughMapCell4Var(7, fourVarKMForm.cell14.value, false);
    var cell15 = new KarnaughMapCell4Var(7, fourVarKMForm.cell15.value, false);

    var groups = [[]];
    var groupIndex = 0;

    // For building the simplified boolean expression
    var newBooleanExp = "";

    // Reset Output
    kmOutput.innerHTML = "";

    // TODO: BEGIN HERE

    // Check for largest group (Group of 8)
    if ((cell0.cellValue == "1" || cell0.cellValue == "X") && (cell1.cellValue == "1" || cell1.cellValue == "X")
        && (cell2.cellValue == "1" || cell2.cellValue == "X") && (cell3.cellValue == "1" || cell3.cellValue == "X")
        && (cell4.cellValue == "1" || cell4.cellValue == "X") && (cell5.cellValue == "1" || cell5.cellValue == "X")
        && (cell6.cellValue == "1" || cell6.cellValue == "X") && (cell7.cellValue == "1" || cell7.cellValue == "X")) {

        groups[0] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

        cell0.isGrouped = true;
        cell1.isGrouped = true;
        cell2.isGrouped = true;
        cell3.isGrouped = true;
        cell4.isGrouped = true;
        cell5.isGrouped = true;
        cell6.isGrouped = true;
        cell7.isGrouped = true;
        cell8.isGrouped = true;
        cell9.isGrouped = true;
        cell10.isGrouped = true;
        cell11.isGrouped = true;
        cell12.isGrouped = true;
        cell13.isGrouped = true;
        cell14.isGrouped = true;
        cell15.isGrouped = true;

        newBooleanExp += "1";

    }

    // Check for groups of 4 (6 possible groups)
    if ((cell0.cellValue == "1" || cell0.cellValue == "X") && (cell1.cellValue == "1" || cell1.cellValue == "X")
        && (cell4.cellValue == "1" || cell4.cellValue == "X") && (cell5.cellValue == "1" || cell5.cellValue == "X")
        && (!cell0.isGrouped || !cell1.isGrouped || !cell4.isGrouped || !cell5.isGrouped)) {

        cell0.isGrouped = true;
        cell1.isGrouped = true;
        cell4.isGrouped = true;
        cell5.isGrouped = true;

        groups[groupIndex] = [cell0, cell1, cell4, cell5];
        groupIndex++;

        newBooleanExp += "B' ";

    }
    if ((cell0.cellValue == "1" || cell0.cellValue == "X") && (cell2.cellValue == "1" || cell2.cellValue == "X")
        && (cell4.cellValue == "1" || cell4.cellValue == "X") && (cell6.cellValue == "1" || cell6.cellValue == "X")
        && (!cell0.isGrouped || !cell2.isGrouped || !cell4.isGrouped || !cell6.isGrouped)) {

        cell0.isGrouped = true;
        cell2.isGrouped = true;
        cell4.isGrouped = true;
        cell6.isGrouped = true;

        groups[groupIndex] = [cell0, cell2, cell4, cell6];
        groupIndex++;

        newBooleanExp += "C' ";

    }
    if ((cell3.cellValue == "1" || cell3.cellValue == "X") && (cell1.cellValue == "1" || cell1.cellValue == "X")
        && (cell7.cellValue == "1" || cell7.cellValue == "X") && (cell5.cellValue == "1" || cell5.cellValue == "X")
        && (!cell3.isGrouped || !cell1.isGrouped || !cell7.isGrouped || !cell5.isGrouped)) {

        cell3.isGrouped = true;
        cell1.isGrouped = true;
        cell7.isGrouped = true;
        cell5.isGrouped = true;

        groups[groupIndex] = [cell3, cell1, cell7, cell5];
        groupIndex++;

        newBooleanExp += "C ";

    }
    if ((cell3.cellValue == "1" || cell3.cellValue == "X") && (cell7.cellValue == "1" || cell7.cellValue == "X")
        && (cell2.cellValue == "1" || cell2.cellValue == "X") && (cell6.cellValue == "1" || cell6.cellValue == "X")
        && (!cell3.isGrouped || !cell7.isGrouped || !cell2.isGrouped || !cell6.isGrouped)) {

        cell3.isGrouped = true;
        cell7.isGrouped = true;
        cell2.isGrouped = true;
        cell6.isGrouped = true;

        groups[groupIndex] = [cell3, cell7, cell2, cell6];
        groupIndex++;

        newBooleanExp += "B ";

    }
    if ((cell3.cellValue == "1" || cell3.cellValue == "X") && (cell0.cellValue == "1" || cell0.cellValue == "X")
        && (cell2.cellValue == "1" || cell2.cellValue == "X") && (cell1.cellValue == "1" || cell1.cellValue == "X")
        && (!cell3.isGrouped || !cell0.isGrouped || !cell2.isGrouped || !cell1.isGrouped)) {

        cell3.isGrouped = true;
        cell1.isGrouped = true;
        cell2.isGrouped = true;
        cell0.isGrouped = true;

        groups[groupIndex] = [cell3, cell0, cell2, cell1];
        groupIndex++;

        newBooleanExp += "A' ";

    }
    if ((cell4.cellValue == "1" || cell4.cellValue == "X") && (cell7.cellValue == "1" || cell7.cellValue == "X")
        && (cell5.cellValue == "1" || cell5.cellValue == "X") && (cell6.cellValue == "1" || cell6.cellValue == "X")
        && (!cell4.isGrouped || !cell7.isGrouped || !cell5.isGrouped || !cell6.isGrouped)) {

        cell4.isGrouped = true;
        cell7.isGrouped = true;
        cell5.isGrouped = true;
        cell6.isGrouped = true;

        groups[groupIndex] = [cell4, cell7, cell5, cell6];
        groupIndex++;

        newBooleanExp += "A ";

    }

    // Check for groups of 2 (12 possible groups)
    if ((cell3.cellValue == "1" || cell3.cellValue == "X") && (cell7.cellValue == "1" || cell7.cellValue == "X")
        && (!cell3.isGrouped || !cell7.isGrouped)) {

        cell3.isGrouped = true;
        cell7.isGrouped = true;

        groups[groupIndex] = [cell3, cell7];
        groupIndex++;

        newBooleanExp += "BC ";

    }
    if ((cell5.cellValue == "1" || cell5.cellValue == "X") && (cell7.cellValue == "1" || cell7.cellValue == "X")
        && (!cell5.isGrouped || !cell7.isGrouped)) {

        cell5.isGrouped = true;
        cell7.isGrouped = true;

        groups[groupIndex] = [cell5, cell7];
        groupIndex++;

        newBooleanExp += "AC ";

    }
    if ((cell6.cellValue == "1" || cell6.cellValue == "X") && (cell7.cellValue == "1" || cell7.cellValue == "X")
        && (!cell6.isGrouped || !cell7.isGrouped)) {

        cell6.isGrouped = true;
        cell7.isGrouped = true;

        groups[groupIndex] = [cell6, cell7];
        groupIndex++;

        newBooleanExp += "AB ";

    }
    if ((cell3.cellValue == "1" || cell3.cellValue == "X") && (cell1.cellValue == "1" || cell1.cellValue == "X")
        && (!cell3.isGrouped || !cell1.isGrouped)) {

        cell3.isGrouped = true;
        cell1.isGrouped = true;

        groups[groupIndex] = [cell3, cell1];
        groupIndex++;

        newBooleanExp += "A'C ";

    }
    if ((cell3.cellValue == "1" || cell3.cellValue == "X") && (cell2.cellValue == "1" || cell2.cellValue == "X")
        && (!cell3.isGrouped || !cell2.isGrouped)) {

        cell3.isGrouped = true;
        cell2.isGrouped = true;

        groups[groupIndex] = [cell3, cell2];
        groupIndex++;

        newBooleanExp += "A'B ";

    }
    if ((cell0.cellValue == "1" || cell0.cellValue == "X") && (cell4.cellValue == "1" || cell4.cellValue == "X")
        && (!cell0.isGrouped || !cell4.isGrouped)) {

        cell0.isGrouped = true;
        cell4.isGrouped = true;

        groups[groupIndex] = [cell0, cell4];
        groupIndex++;

        newBooleanExp += "B'C' ";

    }
    // TODO: TEST CONDITIONAL FOR DON'T CARE GROUPING FIX
    if ((cell1.cellValue == "1" || cell1.cellValue == "X") && (cell5.cellValue == "1" || cell5.cellValue == "X")
        && (!cell1.isGrouped || !cell5.isGrouped)) {

        if ((cell1.cellValue == "X" && cell5.cellValue == "X") || (!cell1.isGrouped && cell1.cellValue == "X")
            || (!cell5.isGrouped && cell5.cellValue == "X")) {
            // Do nothing as a group here would be unnecessary
        }
        else {

            cell1.isGrouped = true;
            cell5.isGrouped = true;

            groups[groupIndex] = [cell1, cell5];
            groupIndex++;

            newBooleanExp += "B'C ";

        }

    }
    if ((cell2.cellValue == "1" || cell2.cellValue == "X") && (cell6.cellValue == "1" || cell6.cellValue == "X")
        && (!cell2.isGrouped || !cell6.isGrouped)) {

        cell2.isGrouped = true;
        cell6.isGrouped = true;

        groups[groupIndex] = [cell2, cell6];
        groupIndex++;

        newBooleanExp += "BC' ";

    }
    if ((cell0.cellValue == "1" || cell0.cellValue == "X") && (cell1.cellValue == "1" || cell1.cellValue == "X")
        && (!cell0.isGrouped || !cell1.isGrouped)) {

        cell0.isGrouped = true;
        cell1.isGrouped = true;

        groups[groupIndex] = [cell0, cell1];
        groupIndex++;

        newBooleanExp += "A'B' ";

    }
    if ((cell4.cellValue == "1" || cell4.cellValue == "X") && (cell5.cellValue == "1" || cell5.cellValue == "X")
        && (!cell4.isGrouped || !cell5.isGrouped)) {

        cell4.isGrouped = true;
        cell5.isGrouped = true;

        groups[groupIndex] = [cell4, cell5];
        groupIndex++;

        newBooleanExp += "AB' ";


    }
    if ((cell0.cellValue == "1" || cell0.cellValue == "X") && (cell2.cellValue == "1" || cell2.cellValue == "X")
        && (!cell0.isGrouped || !cell2.isGrouped)) {

        cell0.isGrouped = true;
        cell2.isGrouped = true;

        groups[groupIndex] = [cell0, cell2];
        groupIndex++;

        newBooleanExp += "A'C' ";

    }
    if ((cell4.cellValue == "1" || cell4.cellValue == "X") && (cell6.cellValue == "1" || cell6.cellValue == "X")
        && (!cell4.isGrouped || !cell6.isGrouped)) {

        cell4.isGrouped = true;
        cell6.isGrouped = true;

        groups[groupIndex] = [cell4, cell6];
        groupIndex++;

        newBooleanExp += "AC' ";

    }

    // Accounts for isolated cells (Groups of 1)
    var cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7];
    var isolatedCellMinterms = ["A'B'C'", "A'B'C", "A'BC'", "A'BC", "AB'C'", "AB'C", "ABC'", "ABC"];

    for (var i = 0; i < cells.length; i++) {

        if (!cells[i].isGrouped && (cells[i].cellValue == "1")) {

            groups[groupIndex] = [cells[i]];
            groupIndex++;
            newBooleanExp += isolatedCellMinterms[i] + " ";

        }

    }

    // Format output for decent user readability
    newBooleanExp = newBooleanExp.replace(/\s/g, " + ");
    newBooleanExp = newBooleanExp.substring(0, newBooleanExp.length - 2);

    // Shows simplified boolean expression
    kmOutput.innerHTML += "" + newBooleanExp + "<br>Groups (Cell #s): ";

    // Print debugged output of groups in cell numbers separated by a line break
    for (i = 0; i < groupIndex; i++) {

        for (var j = 0; j < groups[i].length; j++) {
            kmOutput.innerHTML += "" + groups[i][j].cellNum + " ";
        }
        kmOutput.innerHTML += " | "

    }

};