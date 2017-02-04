/**
 * Created by savannah on 12/20/2016.
 */

$(function () {
    $('[data-toggle="tooltip"]').tooltip({container: 'body'})
})

class KarnaughMapCell3Var {
    constructor(cellNum, cellValue, isGrouped) {
        this.cellNum = cellNum;
        this.cellValue = cellValue;
        this.isGrouped = isGrouped;
    }
}

var threeVarKarnaughMap = new Vue ({
    el: ".km-container",
    template: '<div class="km-container" id="km_placeholder">'+
    '<form id="three_var_KM" name="three_var_KM">'+
    '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
    '<div class="info-cell"><p class="info-top">0</p></div>'+
    '<div class="info-cell"><p class="info-top">1</p></div>'+
    '<div class="info-cell"><p class="info-side">00</p></div>'+
    '<div class="cell"><select name="cell0">'+
    '<option value="0">0</option>'+
    '<option value="1">1</option>'+
    '<option value="X">X</option>'+
    '</select></div>'+
    '<div class="cell"><select name="cell4">'+
    '<option value="0">0</option>'+
    '<option value="1">1</option>'+
    '<option value="X">X</option>'+
    '</select></div>'+
    '<div class="info-cell"><p class="info-side">01</p></div>'+
    '<div class="cell"><select name="cell1">'+
    '<option value="0">0</option>'+
    '<option value="1">1</option>'+
    '<option value="X">X</option>'+
    '</select></div>'+
    '<div class="cell"><select name="cell5">'+
    '<option value="0">0</option>'+
    '<option value="1">1</option>'+
    '<option value="X">X</option>'+
    '</select></div>'+
    '<div class="info-cell"><p class="info-side">11</p></div>'+
    '<div class="cell"><select name="cell3">'+
    '<option value="0">0</option>'+
    '<option value="1">1</option>'+
    '<option value="X">X</option>'+
    '</select></div>'+
    '<div class="cell"><select name="cell7">'+
    '<option value="0">0</option>'+
    '<option value="1">1</option>'+
    '<option value="X">X</option>'+
    '</select></div>'+
    '<div class="info-cell"><p class="info-side">10</p></div>'+
    '<div class="cell"><select name="cell2">'+
    '<option value="0">0</option>'+
    '<option value="1">1</option>'+
    '<option value="X">X</option>'+
    '</select></div>'+
    '<div class="cell"><select name="cell6">'+
    '<option value="0">0</option>'+
    '<option value="1">1</option>'+
    '<option value="X">X</option>'+
    '</select></div>'+
    '<input type="submit" v-on:click="simplifyMinterms" class="btn btn-primary" name="submit" value="Simplify (Minterms)">'+
    '<input type="submit" v-on:click="simplifyMaxterms" class="btn btn-primary second-input" name="submit" value="Simplify (Maxterms)">'+
    '</form>'+
    '</div>',
    methods: {
        simplifyMinterms: function(e) {

            e.preventDefault();

            var kmOutput = document.getElementById("KM_Output");
            var threeVarKMForm = document.getElementById("three_var_KM");

            // Grab cell value inputs and place in cell objects
            var cell0 = new KarnaughMapCell3Var(0, threeVarKMForm.cell0.value, false);
            var cell1 = new KarnaughMapCell3Var(1, threeVarKMForm.cell1.value, false);
            var cell2 = new KarnaughMapCell3Var(2, threeVarKMForm.cell2.value, false);
            var cell3 = new KarnaughMapCell3Var(3, threeVarKMForm.cell3.value, false);
            var cell4 = new KarnaughMapCell3Var(4, threeVarKMForm.cell4.value, false);
            var cell5 = new KarnaughMapCell3Var(5, threeVarKMForm.cell5.value, false);
            var cell6 = new KarnaughMapCell3Var(6, threeVarKMForm.cell6.value, false);
            var cell7 = new KarnaughMapCell3Var(7, threeVarKMForm.cell7.value, false);

            var groups = [[]];
            var groupIndex = 0;

            // Set potential groups of 4 and their corresponding simplified minterms
            var potential4Groups = [[cell0, cell1, cell2, cell3],[cell0, cell2, cell4, cell6],
                                    [cell0, cell1, cell4, cell5],[cell1, cell3, cell5, cell7],
                                    [cell2, cell3, cell6, cell7],[cell4, cell5, cell6, cell7]];
            var simpleMins4Group = ["A' ", "C' ", "B' ", "C ", "B ", "A "];
            var minsIndex = 0;

            // Set potential groups of 2 and their corresponding simplified minterms
            var potential2Groups = [[cell0, cell1], [cell0, cell2], [cell0, cell4], [cell1, cell3],
                                    [cell1, cell5], [cell2, cell3], [cell2, cell6], [cell3, cell7],
                                    [cell4, cell5], [cell4, cell6], [cell5, cell7], [cell6, cell7]];
            var simpleMins2Group = ["A'B' ", "A'C' ", "B'C' ", "A'C ", "B'C ", "A'B ", "BC' ",
                                    "BC ", "AB' ", "AC' ", "AC ", "AB "];

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

            else {

                for (var i = 0; i < potential4Groups.length; i++) {

                    // TODO: Fix redundant groups made with don't cares
                    if ((potential4Groups[i][0].cellValue == "1" || potential4Groups[i][0].cellValue == "X") && (potential4Groups[i][1].cellValue == "1" || potential4Groups[i][1].cellValue == "X")
                        && (potential4Groups[i][2].cellValue == "1" || potential4Groups[i][2].cellValue == "X") && (potential4Groups[i][3].cellValue == "1" || potential4Groups[i][3].cellValue == "X")
                        && (!potential4Groups[i][0].isGrouped || !potential4Groups[i][1].isGrouped || !potential4Groups[i][2].isGrouped || !potential4Groups[i][3].isGrouped)) {

                        potential4Groups[i][0].isGrouped = true;
                        potential4Groups[i][1].isGrouped = true;
                        potential4Groups[i][2].isGrouped = true;
                        potential4Groups[i][3].isGrouped = true;

                        groups[groupIndex] = potential4Groups[i];
                        groupIndex++;

                        newBooleanExp += simpleMins4Group[minsIndex];
                        minsIndex++;

                    }
                    else {
                        minsIndex++;
                    }

                }

                minsIndex = 0;

                for (i = 0; i < potential2Groups.length; i++) {

                    if ((potential2Groups[i][0].cellValue == "1" || potential2Groups[i][0].cellValue == "X") &&
                        (potential2Groups[i][1].cellValue == "1" || potential2Groups[i][1].cellValue == "X") &&
                        (!potential2Groups[i][0].isGrouped || !potential2Groups[i][1].isGrouped)) {

                        if ((potential2Groups[i][0].cellValue == "X" && potential2Groups[i][1].cellValue == "X") ||
                            ((potential2Groups[i][0].isGrouped && potential2Groups[i][0].cellValue == "1") &&
                              potential2Groups[i][1].cellValue == "X") || ((potential2Groups[i][1].isGrouped &&
                              potential2Groups[i][1].cellValue == "1") && potential2Groups[i][0].cellValue == "X")) {
                            // Do nothing as a group here would be unnecessary
                            minsIndex++;
                        }
                        else {

                            potential2Groups[i][0].isGrouped = true;
                            potential2Groups[i][1].isGrouped = true;

                            groups[groupIndex] = potential2Groups[i];
                            groupIndex++;

                            newBooleanExp += simpleMins2Group[minsIndex];
                            minsIndex++;

                        }

                    }
                    else {
                        minsIndex++;
                    }

                }

            }

            // Accounts for isolated cells (Groups of 1)
            var cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7];
            var isolatedCellMinterms = ["A'B'C'", "A'B'C", "A'BC'", "A'BC", "AB'C'", "AB'C", "ABC'", "ABC"];

            for (i = 0; i < cells.length; i++) {

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

            if (groups[0].length != 8) {

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groups.length; i++) {

                    kmOutput.innerHTML += "[ ";

                    for (var j = 0; j < groups[i].length; j++) {
                        kmOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }
                    kmOutput.innerHTML += "] "

                }

            }

        },
        simplifyMaxterms: function(e) {

            e.preventDefault();

            var kmOutput = document.getElementById("KM_Output");
            var threeVarKMForm = document.getElementById("three_var_KM");

            // Grab cell value inputs and place in cell objects
            var cell0 = new KarnaughMapCell3Var(0, threeVarKMForm.cell0.value, false);
            var cell1 = new KarnaughMapCell3Var(1, threeVarKMForm.cell1.value, false);
            var cell2 = new KarnaughMapCell3Var(2, threeVarKMForm.cell2.value, false);
            var cell3 = new KarnaughMapCell3Var(3, threeVarKMForm.cell3.value, false);
            var cell4 = new KarnaughMapCell3Var(4, threeVarKMForm.cell4.value, false);
            var cell5 = new KarnaughMapCell3Var(5, threeVarKMForm.cell5.value, false);
            var cell6 = new KarnaughMapCell3Var(6, threeVarKMForm.cell6.value, false);
            var cell7 = new KarnaughMapCell3Var(7, threeVarKMForm.cell7.value, false);

            var groups = [[]];
            var groupIndex = 0;

            // Set potential groups of 4 and their corresponding simplified maxterms
            var potential4Groups = [[cell0, cell1, cell2, cell3],[cell0, cell2, cell4, cell6],
                [cell0, cell1, cell4, cell5],[cell1, cell3, cell5, cell7],
                [cell2, cell3, cell6, cell7],[cell4, cell5, cell6, cell7]];
            var simpleMax4Group = ["A ", "C ", "B ", "C' ", "B' ", "A' "];
            var maxIndex = 0;

            // Set potential groups of 2 and their corresponding simplified maxterms
            var potential2Groups = [[cell0, cell1], [cell0, cell2], [cell0, cell4], [cell1, cell3],
                [cell1, cell5], [cell2, cell3], [cell2, cell6], [cell3, cell7],
                [cell4, cell5], [cell4, cell6], [cell5, cell7], [cell6, cell7]];
            var simpleMax2Group = ["(A + B) ", "(A + C) ", "(B + C) ", "(A + C') ", "(B + C') ", "(A + B') ", "(B' + C) ",
                "(B' + C') ", "(A' + B) ", "(A' + C) ", "(A' + C') ", "(A' + B') "];

            // For building the simplified boolean expression
            var newBooleanExp = "";

            // Reset Output
            kmOutput.innerHTML = "";

            // Check for largest group (Group of 8)
            if ((cell0.cellValue == "0" || cell0.cellValue == "X") && (cell1.cellValue == "0" || cell1.cellValue == "X")
                && (cell2.cellValue == "0" || cell2.cellValue == "X") && (cell3.cellValue == "0" || cell3.cellValue == "X")
                && (cell4.cellValue == "0" || cell4.cellValue == "X") && (cell5.cellValue == "0" || cell5.cellValue == "X")
                && (cell6.cellValue == "0" || cell6.cellValue == "X") && (cell7.cellValue == "0" || cell7.cellValue == "X")) {

                groups[0] = [0, 1, 2, 3, 4, 5, 6, 7];

                cell0.isGrouped = true;
                cell1.isGrouped = true;
                cell2.isGrouped = true;
                cell3.isGrouped = true;
                cell4.isGrouped = true;
                cell5.isGrouped = true;
                cell6.isGrouped = true;
                cell7.isGrouped = true;

                newBooleanExp += "0";

            }

            else {

                for (var i = 0; i < potential4Groups.length; i++) {

                    if ((potential4Groups[i][0].cellValue == "0" || potential4Groups[i][0].cellValue == "X") && (potential4Groups[i][1].cellValue == "0" || potential4Groups[i][1].cellValue == "X")
                        && (potential4Groups[i][2].cellValue == "0" || potential4Groups[i][2].cellValue == "X") && (potential4Groups[i][3].cellValue == "0" || potential4Groups[i][3].cellValue == "X")
                        && (!potential4Groups[i][0].isGrouped || !potential4Groups[i][1].isGrouped || !potential4Groups[i][2].isGrouped || !potential4Groups[i][3].isGrouped)) {

                        potential4Groups[i][0].isGrouped = true;
                        potential4Groups[i][1].isGrouped = true;
                        potential4Groups[i][2].isGrouped = true;
                        potential4Groups[i][3].isGrouped = true;

                        groups[groupIndex] = potential4Groups[i];
                        groupIndex++;

                        newBooleanExp += simpleMax4Group[maxIndex];
                        maxIndex++;

                    }
                    else {
                        maxIndex++;
                    }

                }

                maxIndex = 0;

                for (i = 0; i < potential2Groups.length; i++) {

                    // TODO: IT SEEMS TO WORK BUT STILL NOT FOR EVERY CASE
                    if ((potential2Groups[i][0].cellValue == "0" || potential2Groups[i][0].cellValue == "X") &&
                        (potential2Groups[i][1].cellValue == "0" || potential2Groups[i][1].cellValue == "X") &&
                        (!potential2Groups[i][0].isGrouped || !potential2Groups[i][1].isGrouped)) {

                        if ((potential2Groups[i][0].cellValue == "X" && potential2Groups[i][1].cellValue == "X") ||
                            ((potential2Groups[i][0].isGrouped && potential2Groups[i][0].cellValue == "0") &&
                            potential2Groups[i][1].cellValue == "X") || ((potential2Groups[i][1].isGrouped &&
                            potential2Groups[i][1].cellValue == "0") && potential2Groups[i][0].cellValue == "X")) {
                            // Do nothing as a group here would be unnecessary
                        }
                        else {

                            potential2Groups[i][0].isGrouped = true;
                            potential2Groups[i][1].isGrouped = true;

                            groups[groupIndex] = potential2Groups[i];
                            groupIndex++;

                            newBooleanExp += simpleMax2Group[maxIndex];
                            maxIndex++;

                        }

                    }
                    else {
                        maxIndex++;
                    }

                }

            }

            // Accounts for isolated cells (Groups of 1)
            var cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7];
            var isolatedCellMinterms = ["(A + B + C)", "(A + B + C')", "(A + B' + C)", "(A + B' + C')", "(A' + B + C)", "(A' + B + C')",
                "(A' + B' + C)", "(A' + B' + C')"];

            for (i = 0; i < cells.length; i++) {

                if (!cells[i].isGrouped && (cells[i].cellValue == "0")) {

                    groups[groupIndex] = [cells[i]];
                    groupIndex++;
                    newBooleanExp += isolatedCellMinterms[i] + " ";

                }

            }

            // Shows simplified boolean expression
            kmOutput.innerHTML += "" + newBooleanExp + "<br>Groups(Cell #s): ";

            if (newBooleanExp == "0") {
                kmOutput.innerHTML += "All cells"
            }

            if (groups[0].length != 8) {

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groups.length; i++) {

                    kmOutput.innerHTML += "[ ";

                    for (var j = 0; j < groups[i].length; j++) {
                        kmOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }
                    kmOutput.innerHTML += "] "

                }

            }

        }

    }
});

// Display a 3 Variable Karnaugh Map from the Menu
$("#display_three_var_km").click(function() {

    var header = document.getElementById("km_header");
    header.innerHTML = '<button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#KMModal">'+
        'Instructions!'+
        '</button>'+
        '<div class="modal fade" id="KMModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
        '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
        '<h4 class="modal-title" id="KMTitle">Karnaugh Map Instructions</h4>'+
        '</div>'+
        '<div class="modal-body">'+
        'Each cell in the Karnaugh Map diagram contains a selection box where you can fill '+
        'in your desired values (0, 1, X). The maps in this feature correspond to the conventional '+
        'cell numbering and orientation of a vertical Karnaugh Map. Once you fill in all of your values, '+
        'you have the option to simplify the Karnaugh Map through its minterms or maxterms. Keep in mind '+
        'that minterms correspond to grouping 1s and maxterms correspond to grouping 0s. When the simplify '+
        'button is clicked, the output box will show its generated simplified expression, as well as a '+
        'list of cell groups it has captured. These groups are made up of the cell numbers (in decimal).'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>3-Variable Karnaugh Map';

    var table = document.getElementById("km_placeholder");
    table.setAttribute("class", "km-container");

    new Vue ({
        el: ".km-container",
        template: '<div class="km-container" id="km_placeholder">'+
        '<form id="three_var_KM" name="three_var_KM">'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><select name="cell0">'+
        '<option value="0">0</option>'+
        '<option value="1">1</option>'+
        '<option value="X">X</option>'+
        '</select></div>'+
        '<div class="cell"><select name="cell4">'+
        '<option value="0">0</option>'+
        '<option value="1">1</option>'+
        '<option value="X">X</option>'+
        '</select></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><select name="cell1">'+
        '<option value="0">0</option>'+
        '<option value="1">1</option>'+
        '<option value="X">X</option>'+
        '</select></div>'+
        '<div class="cell"><select name="cell5">'+
        '<option value="0">0</option>'+
        '<option value="1">1</option>'+
        '<option value="X">X</option>'+
        '</select></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><select name="cell3">'+
        '<option value="0">0</option>'+
        '<option value="1">1</option>'+
        '<option value="X">X</option>'+
        '</select></div>'+
        '<div class="cell"><select name="cell7">'+
        '<option value="0">0</option>'+
        '<option value="1">1</option>'+
        '<option value="X">X</option>'+
        '</select></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><select name="cell2">'+
        '<option value="0">0</option>'+
        '<option value="1">1</option>'+
        '<option value="X">X</option>'+
        '</select></div>'+
        '<div class="cell"><select name="cell6">'+
        '<option value="0">0</option>'+
        '<option value="1">1</option>'+
        '<option value="X">X</option>'+
        '</select></div>'+
        '<input type="submit" v-on:click="simplifyMinterms" class="btn btn-primary" name="submit" value="Simplify (Minterms)">'+
        '<input type="submit" v-on:click="simplifyMaxterms" class="btn btn-primary second-input" name="submit" value="Simplify (Maxterms)">'+
        '</form>'+
        '</div>',
        methods: {
            simplifyMinterms: function(e) {

                e.preventDefault();

                var kmOutput = document.getElementById("KM_Output");
                var threeVarKMForm = document.getElementById("three_var_KM");

                // Grab cell value inputs and place in cell objects
                var cell0 = new KarnaughMapCell3Var(0, threeVarKMForm.cell0.value, false);
                var cell1 = new KarnaughMapCell3Var(1, threeVarKMForm.cell1.value, false);
                var cell2 = new KarnaughMapCell3Var(2, threeVarKMForm.cell2.value, false);
                var cell3 = new KarnaughMapCell3Var(3, threeVarKMForm.cell3.value, false);
                var cell4 = new KarnaughMapCell3Var(4, threeVarKMForm.cell4.value, false);
                var cell5 = new KarnaughMapCell3Var(5, threeVarKMForm.cell5.value, false);
                var cell6 = new KarnaughMapCell3Var(6, threeVarKMForm.cell6.value, false);
                var cell7 = new KarnaughMapCell3Var(7, threeVarKMForm.cell7.value, false);

                var groups = [[]];
                var groupIndex = 0;

                // Set potential groups of 4 and their corresponding simplified minterms
                var potential4Groups = [[cell0, cell1, cell2, cell3],[cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5],[cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7],[cell4, cell5, cell6, cell7]];
                var simpleMins4Group = ["A' ", "C' ", "B' ", "C ", "B ", "A "];
                var minsIndex = 0;

                // Set potential groups of 2 and their corresponding simplified minterms
                var potential2Groups = [[cell0, cell1], [cell0, cell2], [cell0, cell4], [cell1, cell3],
                    [cell1, cell5], [cell2, cell3], [cell2, cell6], [cell3, cell7],
                    [cell4, cell5], [cell4, cell6], [cell5, cell7], [cell6, cell7]];
                var simpleMins2Group = ["A'B' ", "A'C' ", "B'C' ", "A'C ", "B'C ", "A'B ", "BC' ",
                    "BC ", "AB' ", "AC' ", "AC ", "AB "];

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

                else {

                    for (var i = 0; i < potential4Groups.length; i++) {

                        if ((potential4Groups[i][0].cellValue == "1" || potential4Groups[i][0].cellValue == "X") && (potential4Groups[i][1].cellValue == "1" || potential4Groups[i][1].cellValue == "X")
                            && (potential4Groups[i][2].cellValue == "1" || potential4Groups[i][2].cellValue == "X") && (potential4Groups[i][3].cellValue == "1" || potential4Groups[i][3].cellValue == "X")
                            && (!potential4Groups[i][0].isGrouped || !potential4Groups[i][1].isGrouped || !potential4Groups[i][2].isGrouped || !potential4Groups[i][3].isGrouped)) {

                            if (potential4Groups[i][0] == "X" && potential4Groups[i][1] == "X" &&
                                potential4Groups[i][2] == "X" && potential4Groups[i][3] == "X") {
                                minsIndex++;
                            }

                            potential4Groups[i][0].isGrouped = true;
                            potential4Groups[i][1].isGrouped = true;
                            potential4Groups[i][2].isGrouped = true;
                            potential4Groups[i][3].isGrouped = true;

                            groups[groupIndex] = potential4Groups[i];
                            groupIndex++;

                            newBooleanExp += simpleMins4Group[minsIndex];
                            minsIndex++;

                        }
                        else {
                            minsIndex++;
                        }

                    }

                    minsIndex = 0;

                    for (i = 0; i < potential2Groups.length; i++) {

                        // TODO: IT SEEMS TO WORK BUT STILL NOT FOR EVERY CASE
                        if ((potential2Groups[i][0].cellValue == "1" || potential2Groups[i][0].cellValue == "X") &&
                            (potential2Groups[i][1].cellValue == "1" || potential2Groups[i][1].cellValue == "X") &&
                            (!potential2Groups[i][0].isGrouped || !potential2Groups[i][1].isGrouped)) {

                            if ((potential2Groups[i][0].cellValue == "X" && potential2Groups[i][1].cellValue == "X") ||
                                ((potential2Groups[i][0].isGrouped && potential2Groups[i][0].cellValue == "1") &&
                                potential2Groups[i][1].cellValue == "X") || ((potential2Groups[i][1].isGrouped &&
                                potential2Groups[i][1].cellValue == "1") && potential2Groups[i][0].cellValue == "X")) {
                                // Do nothing as a group here would be unnecessary
                            }
                            else {

                                potential2Groups[i][0].isGrouped = true;
                                potential2Groups[i][1].isGrouped = true;

                                groups[groupIndex] = potential2Groups[i];
                                groupIndex++;

                                newBooleanExp += simpleMins2Group[minsIndex];
                                minsIndex++;

                            }

                        }
                        else {
                            minsIndex++;
                        }

                    }

                }

                // Accounts for isolated cells (Groups of 1)
                var cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7];
                var isolatedCellMinterms = ["A'B'C'", "A'B'C", "A'BC'", "A'BC", "AB'C'", "AB'C", "ABC'", "ABC"];

                for (i = 0; i < cells.length; i++) {

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

                if (groups[0].length != 8) {

                    // Print debugged output of groups in cell numbers separated by a line break
                    for (i = 0; i < groups.length; i++) {

                        kmOutput.innerHTML += "[ ";

                        for (var j = 0; j < groups[i].length; j++) {
                            kmOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                        }
                        kmOutput.innerHTML += "] "

                    }

                }

            },
            simplifyMaxterms: function(e) {

                e.preventDefault();

                var kmOutput = document.getElementById("KM_Output");
                var threeVarKMForm = document.getElementById("three_var_KM");

                // Grab cell value inputs and place in cell objects
                var cell0 = new KarnaughMapCell3Var(0, threeVarKMForm.cell0.value, false);
                var cell1 = new KarnaughMapCell3Var(1, threeVarKMForm.cell1.value, false);
                var cell2 = new KarnaughMapCell3Var(2, threeVarKMForm.cell2.value, false);
                var cell3 = new KarnaughMapCell3Var(3, threeVarKMForm.cell3.value, false);
                var cell4 = new KarnaughMapCell3Var(4, threeVarKMForm.cell4.value, false);
                var cell5 = new KarnaughMapCell3Var(5, threeVarKMForm.cell5.value, false);
                var cell6 = new KarnaughMapCell3Var(6, threeVarKMForm.cell6.value, false);
                var cell7 = new KarnaughMapCell3Var(7, threeVarKMForm.cell7.value, false);

                var groups = [[]];
                var groupIndex = 0;

                // Set potential groups of 4 and their corresponding simplified maxterms
                var potential4Groups = [[cell0, cell1, cell2, cell3],[cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5],[cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7],[cell4, cell5, cell6, cell7]];
                var simpleMax4Group = ["A ", "C ", "B ", "C' ", "B' ", "A' "];
                var maxIndex = 0;

                // Set potential groups of 2 and their corresponding simplified maxterms
                var potential2Groups = [[cell0, cell1], [cell0, cell2], [cell0, cell4], [cell1, cell3],
                    [cell1, cell5], [cell2, cell3], [cell2, cell6], [cell3, cell7],
                    [cell4, cell5], [cell4, cell6], [cell5, cell7], [cell6, cell7]];
                var simpleMax2Group = ["(A + B) ", "(A + C) ", "(B + C) ", "(A + C') ", "(B + C') ", "(A + B') ", "(B' + C) ",
                    "(B' + C') ", "(A' + B) ", "(A' + C) ", "(A' + C') ", "(A' + B') "];

                // For building the simplified boolean expression
                var newBooleanExp = "";

                // Reset Output
                kmOutput.innerHTML = "";

                // Check for largest group (Group of 8)
                if ((cell0.cellValue == "0" || cell0.cellValue == "X") && (cell1.cellValue == "0" || cell1.cellValue == "X")
                    && (cell2.cellValue == "0" || cell2.cellValue == "X") && (cell3.cellValue == "0" || cell3.cellValue == "X")
                    && (cell4.cellValue == "0" || cell4.cellValue == "X") && (cell5.cellValue == "0" || cell5.cellValue == "X")
                    && (cell6.cellValue == "0" || cell6.cellValue == "X") && (cell7.cellValue == "0" || cell7.cellValue == "X")) {

                    groups[0] = [0, 1, 2, 3, 4, 5, 6, 7];

                    cell0.isGrouped = true;
                    cell1.isGrouped = true;
                    cell2.isGrouped = true;
                    cell3.isGrouped = true;
                    cell4.isGrouped = true;
                    cell5.isGrouped = true;
                    cell6.isGrouped = true;
                    cell7.isGrouped = true;

                    newBooleanExp += "0";

                }

                else {

                    for (var i = 0; i < potential4Groups.length; i++) {

                        if ((potential4Groups[i][0].cellValue == "0" || potential4Groups[i][0].cellValue == "X") && (potential4Groups[i][1].cellValue == "0" || potential4Groups[i][1].cellValue == "X")
                            && (potential4Groups[i][2].cellValue == "0" || potential4Groups[i][2].cellValue == "X") && (potential4Groups[i][3].cellValue == "0" || potential4Groups[i][3].cellValue == "X")
                            && (!potential4Groups[i][0].isGrouped || !potential4Groups[i][1].isGrouped || !potential4Groups[i][2].isGrouped || !potential4Groups[i][3].isGrouped)) {

                            if (potential4Groups[i][0] == "X" && potential4Groups[i][1] == "X" &&
                                potential4Groups[i][2] == "X" && potential4Groups[i][3] == "X") {
                                maxIndex++;
                            }

                            potential4Groups[i][0].isGrouped = true;
                            potential4Groups[i][1].isGrouped = true;
                            potential4Groups[i][2].isGrouped = true;
                            potential4Groups[i][3].isGrouped = true;

                            groups[groupIndex] = potential4Groups[i];
                            groupIndex++;

                            newBooleanExp += simpleMax4Group[maxIndex];
                            maxIndex++;

                        }
                        else {
                            maxIndex++;
                        }

                    }

                    maxIndex = 0;

                    for (i = 0; i < potential2Groups.length; i++) {

                        if ((potential2Groups[i][0].cellValue == "0" || potential2Groups[i][0].cellValue == "X") &&
                            (potential2Groups[i][1].cellValue == "0" || potential2Groups[i][1].cellValue == "X") &&
                            (!potential2Groups[i][0].isGrouped || !potential2Groups[i][1].isGrouped)) {

                            if ((potential2Groups[i][0].cellValue == "X" && potential2Groups[i][1].cellValue == "X") ||
                                ((potential2Groups[i][0].isGrouped && potential2Groups[i][0].cellValue == "0") &&
                                potential2Groups[i][1].cellValue == "X") || ((potential2Groups[i][1].isGrouped &&
                                potential2Groups[i][1].cellValue == "0") && potential2Groups[i][0].cellValue == "X")) {
                                // Do nothing as a group here would be unnecessary
                            }
                            else {

                                potential2Groups[i][0].isGrouped = true;
                                potential2Groups[i][1].isGrouped = true;

                                groups[groupIndex] = potential2Groups[i];
                                groupIndex++;

                                newBooleanExp += simpleMax2Group[maxIndex];
                                maxIndex++;

                            }

                        }
                        else {
                            maxIndex++;
                        }

                    }

                }

                // Accounts for isolated cells (Groups of 1)
                var cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7];
                var isolatedCellMinterms = ["(A + B + C)", "(A + B + C')", "(A + B' + C)", "(A + B' + C')", "(A' + B + C)", "(A' + B + C')",
                    "(A' + B' + C)", "(A' + B' + C')"];

                for (i = 0; i < cells.length; i++) {

                    if (!cells[i].isGrouped && (cells[i].cellValue == "0")) {

                        groups[groupIndex] = [cells[i]];
                        groupIndex++;
                        newBooleanExp += isolatedCellMinterms[i] + " ";

                    }

                }

                // Shows simplified boolean expression
                kmOutput.innerHTML += "" + newBooleanExp + "<br>Groups(Cell #s): ";

                if (newBooleanExp == "0") {
                    kmOutput.innerHTML += "All cells";
                }

                if (groups.length != 8) {

                    // Print debugged output of groups in cell numbers separated by a line break
                    for (i = 0; i < groups.length; i++) {

                        kmOutput.innerHTML += "[ ";

                        for (var j = 0; j < groups[i].length; j++) {
                            kmOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                        }
                        kmOutput.innerHTML += "] "

                    }

                }

            }

        }
    });

});