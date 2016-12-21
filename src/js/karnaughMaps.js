/**
 * Created by savannah on 12/20/2016.
 */

var kmHeader = new Vue ({
    el: '#km-header',
    data: {
        message: '3-Variable Karnaugh Map',
    }
});

class KarnaughMapCell {
    constructor(cellNum, cellValue, isGrouped) {
        this.cellNum = cellNum;
        this.cellValue = cellValue;
        this.isGrouped = isGrouped;
    }
}

var kmOutput = document.getElementById("KM_Output");
var threeVarKMForm = document.getElementById("three_var_KM");

threeVarKMForm.onsubmit = function(e) {

    e.preventDefault();

    // Grab cell value inputs and place in cell objects
    var cell0 = new KarnaughMapCell(0, threeVarKMForm.cell0.value, false);
    var cell1 = new KarnaughMapCell(1, threeVarKMForm.cell1.value, false);
    var cell2 = new KarnaughMapCell(2, threeVarKMForm.cell2.value, false);
    var cell3 = new KarnaughMapCell(3, threeVarKMForm.cell3.value, false);
    var cell4 = new KarnaughMapCell(4, threeVarKMForm.cell4.value, false);
    var cell5 = new KarnaughMapCell(5, threeVarKMForm.cell5.value, false);
    var cell6 = new KarnaughMapCell(6, threeVarKMForm.cell6.value, false);
    var cell7 = new KarnaughMapCell(7, threeVarKMForm.cell7.value, false);

    var groups = [[]];
    var groupIndex = 0;

    // For building the simplified boolean expression
    var newBooleanExp = "";

    // Reset Output
    kmOutput.innerHTML = "";

    // Check for largest group (Group of 8)
    if ((cell0.cellValue == "1" || cell0.cellValue == "X") && (cell1.cellValue == "1" || cell1.cellValue == "X")
        && (cell2.cellValue == "1" || cell2.cellValue == "X") && (cell3.cellValue == "1" || cell3.cellValue == "X")
        && (cell4.cellValue == "1" || cell4.cellValue == "X") && (cell5.cellValue == "1" || cell5.cellValue == "X")
        && (cell6.cellValue == "1" || cell6.cellValue == "X") && (cell7.cellValue == "1" || cell7.cellValue == "X")) {

        groups[0] = [0, 1, 2, 3, 4, 5, 6, 7];

        cell0.isGrouped = true;
        cell1.isGrouped = true;
        cell2.isGrouped = true;
        cell3.isGrouped = true;
        cell4.isGrouped = true;
        cell5.isGrouped = true;
        cell6.isGrouped = true;
        cell7.isGrouped = true;

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
    if ((cell1.cellValue == "1" || cell1.cellValue == "X") && (cell5.cellValue == "1" || cell5.cellValue == "X")
        && (!cell1.isGrouped || !cell5.isGrouped)) {

        cell1.isGrouped = true;
        cell5.isGrouped = true;

        groups[groupIndex] = [cell1, cell5];
        groupIndex++;

        newBooleanExp += "B'C ";

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
            newBooleanExp += isolatedCellMinterms[i];

        }

    }

    // Print debugged output of groups in cell numbers separated by a line break
    // TODO: Change to show simplified boolean expression
    for (i = 0; i < groupIndex; i++) {

        for (var j = 0; j < groups[i].length; j++) {
            kmOutput.innerHTML += "" + groups[i][j].cellNum + " ";
        }
        kmOutput.innerHTML += "<br>"

    }

    // Shows simplified boolean expression
    kmOutput.innerHTML += "" + newBooleanExp;

};