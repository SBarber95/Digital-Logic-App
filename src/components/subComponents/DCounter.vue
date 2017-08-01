<template>
    <div>
        <div class="table-responsive">
            <form name="d-counter-design" id="d_counter_design">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>C</th>
                        <th>B</th>
                        <th>A</th>
                        <th>C+</th>
                        <th>B+</th>
                        <th>A+</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td><select name="c0">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="b0">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="a0">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td><select name="c1">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="b1">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="a1">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td><select name="c2">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="b2">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="a2">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td><select name="c3">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="b3">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="a3">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td><select name="c4">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="b4">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="a4">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                        <td><select name="c5">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="b5">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="a5">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td><select name="c6">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="b6">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="a6">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td><select name="c7">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="b7">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                        <td><select name="a7">
                            <option>0</option>
                            <option>1</option>
                            <option>X</option>
                        </select></td>
                    </tr>
                    </tbody>
                </table>
                <input class="btn btn-primary" v-on:click="designCounter" type="submit" name="submit"
                       value="Set Up Counter Design">
            </form>
        </div>
        <div class="col-sm-8 col-md-9">
            <div class="km-container">
                <p class="km-label">C+</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="DC_cell0">0</p></div>
                <div class="cell"><p id="DC_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="DC_cell1">0</p></div>
                <div class="cell"><p id="DC_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="DC_cell3">0</p></div>
                <div class="cell"><p id="DC_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="DC_cell2">0</p></div>
                <div class="cell"><p id="DC_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">B+</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="DB_cell0">0</p></div>
                <div class="cell"><p id="DB_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="DB_cell1">0</p></div>
                <div class="cell"><p id="DB_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="DB_cell3">0</p></div>
                <div class="cell"><p id="DB_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="DB_cell2">0</p></div>
                <div class="cell"><p id="DB_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">A+</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="DA_cell0">0</p></div>
                <div class="cell"><p id="DA_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="DA_cell1">0</p></div>
                <div class="cell"><p id="DA_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="DA_cell3">0</p></div>
                <div class="cell"><p id="DA_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="DA_cell2">0</p></div>
                <div class="cell"><p id="DA_cell6">0</p></div>
            </div>
            <div class="panel panel-primary" style="margin-top: 40px">
                <div class="panel-heading">
                    <h3 class="panel-title">Simplified Boolean Expressions</h3>
                </div>
                <div class="panel-body" id="design_output"></div>
            </div>
        </div>
    </div>
</template>

<script>
    class KarnaughMapCell {
        constructor(cellNum, cellValue, isGrouped) {
            this.cellNum = cellNum;
            this.cellValue = cellValue;
            this.isGrouped = isGrouped;
        }
    }

    export default {
        mounted() {
            document.getElementById("design-header").innerHTML = '<button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#counterModal">' +
                'Instructions!' +
                '</button>' +
                '<div class="modal fade" id="counterModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>' +
                '<h4 class="modal-title" id="counterTitle">Binary Addition Instructions</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                'Fill out the table entries according to the state changes you wish to include in your counter. ' +
                'Click "Set Up Counter Design" and the rest of the table will fill in with the proper values. ' +
                'Below the table, the Karnaugh Maps associated with each ' +
                'input column will be populated with the table info. A ' +
                'simplified minterm boolean expression for the counter inputs is shown at the bottom.' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                'D Counter Design'
        },
        methods: {
            designCounter: function(e) {

                e.preventDefault();

                var dForm = document.getElementById("d_counter_design");

                // TODO: CONVERT TO D-COUNTER TRUTH TABLE OUTPUTS

                // Display corresponding outputs in the appropriate cells of the Karnaugh Map
                var karnaughMapIDs = [["DC_cell0", "DC_cell1", "DC_cell2", "DC_cell3", "DC_cell4", "DC_cell5", "DC_cell6", "DC_cell7"],
                    ["DB_cell0", "DB_cell1", "DB_cell2", "DB_cell3", "DB_cell4", "DB_cell5", "DB_cell6", "DB_cell7"],
                    ["DA_cell0", "DA_cell1", "DA_cell2", "DA_cell3", "DA_cell4", "DA_cell5", "DA_cell6", "DA_cell7"]];

                var tableOutputs = [[dForm.c0.value, dForm.c1.value, dForm.c2.value, dForm.c3.value, dForm.c4.value, dForm.c5.value, dForm.c6.value, dForm.c7.value],
                    [dForm.b0.value, dForm.b1.value, dForm.b2.value, dForm.b3.value, dForm.b4.value, dForm.b5.value, dForm.b6.value, dForm.b7.value],
                    [dForm.a0.value, dForm.a1.value, dForm.a2.value, dForm.a3.value, dForm.a4.value, dForm.a5.value, dForm.a6.value, dForm.a7.value]];

                for (var i = 0; i < karnaughMapIDs.length; i++) {

                    document.getElementById(karnaughMapIDs[i][0]).innerHTML = "" + tableOutputs[i][0];
                    document.getElementById(karnaughMapIDs[i][1]).innerHTML = "" + tableOutputs[i][1];
                    document.getElementById(karnaughMapIDs[i][2]).innerHTML = "" + tableOutputs[i][2];
                    document.getElementById(karnaughMapIDs[i][3]).innerHTML = "" + tableOutputs[i][3];
                    document.getElementById(karnaughMapIDs[i][4]).innerHTML = "" + tableOutputs[i][4];
                    document.getElementById(karnaughMapIDs[i][5]).innerHTML = "" + tableOutputs[i][5];
                    document.getElementById(karnaughMapIDs[i][6]).innerHTML = "" + tableOutputs[i][6];
                    document.getElementById(karnaughMapIDs[i][7]).innerHTML = "" + tableOutputs[i][7];

                }

                var designOutput = document.getElementById("design_output");

                // KARNAUGH MAP SOLVERS (6 DIFFERENT MAPS) ---------------------------------------------

                // Grab cell value outputs and place in cell objects
                var cell0 = new KarnaughMapCell(0, tableOutputs[0][0], false);
                var cell1 = new KarnaughMapCell(1, tableOutputs[0][1], false);
                var cell2 = new KarnaughMapCell(2, tableOutputs[0][2], false);
                var cell3 = new KarnaughMapCell(3, tableOutputs[0][3], false);
                var cell4 = new KarnaughMapCell(4, tableOutputs[0][4], false);
                var cell5 = new KarnaughMapCell(5, tableOutputs[0][5], false);
                var cell6 = new KarnaughMapCell(6, tableOutputs[0][6], false);
                var cell7 = new KarnaughMapCell(7, tableOutputs[0][7], false);

                var groups = [[]];
                var groupIndex = 0;

                // Set potential groups of 4 and their corresponding simplified minterms
                var potential4Groups = [[cell0, cell1, cell2, cell3],[cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5],[cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7],[cell4, cell5, cell6, cell7]];
                var simpleMins4Group = ["C' ", "A' ", "B' ", "A ", "B ", "C "];
                var minsIndex = 0;

                // Set potential groups of 2 and their corresponding simplified minterms
                var potential2Groups = [[cell0, cell1], [cell0, cell2], [cell0, cell4], [cell1, cell3],
                    [cell1, cell5], [cell2, cell3], [cell2, cell6], [cell3, cell7],
                    [cell4, cell5], [cell4, cell6], [cell5, cell7], [cell6, cell7]];
                var simpleMins2Group = ["C'B' ", "C'A' ", "B'A' ", "C'A ", "B'A ", "C'B ", "BA' ",
                    "BA ", "CB' ", "CA' ", "CA ", "CB "];

                // For building the simplified boolean expression
                var newBooleanExp = "";

                // Reset Output
                designOutput.innerHTML = "";

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

                    for (i = 0; i < potential4Groups.length; i++) {

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
                var isolatedCellMinterms = ["C'B'A'", "C'B'A", "C'BA'", "C'BA", "CB'A'", "CB'A", "CBA'", "CBA"];

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
                designOutput.innerHTML += "Dc: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                else {

                    // Print debugged output of groups in cell numbers separated by a line break
                    for (i = 0; i < groups.length; i++) {

                        designOutput.innerHTML += "[ ";

                        for (var j = 0; j < groups[i].length; j++) {
                            designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                        }

                        designOutput.innerHTML += "] "

                    }

                }

                designOutput.innerHTML += "<br>";
                minsIndex = 0;

                // Db Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, tableOutputs[1][0], false);
                cell1 = new KarnaughMapCell(1, tableOutputs[1][1], false);
                cell2 = new KarnaughMapCell(2, tableOutputs[1][2], false);
                cell3 = new KarnaughMapCell(3, tableOutputs[1][3], false);
                cell4 = new KarnaughMapCell(4, tableOutputs[1][4], false);
                cell5 = new KarnaughMapCell(5, tableOutputs[1][5], false);
                cell6 = new KarnaughMapCell(6, tableOutputs[1][6], false);
                cell7 = new KarnaughMapCell(7, tableOutputs[1][7], false);

                potential4Groups = [[cell0, cell1, cell2, cell3],[cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5],[cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7],[cell4, cell5, cell6, cell7]];

                potential2Groups = [[cell0, cell1], [cell0, cell2], [cell0, cell4], [cell1, cell3],
                    [cell1, cell5], [cell2, cell3], [cell2, cell6], [cell3, cell7],
                    [cell4, cell5], [cell4, cell6], [cell5, cell7], [cell6, cell7]];

                groups = [[]];
                groupIndex = 0;

                // For building the simplified boolean expression
                newBooleanExp = "";

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

                    for (i = 0; i < potential4Groups.length; i++) {

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
                cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7];

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
                designOutput.innerHTML += "<br>Db: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                else {

                    // Print debugged output of groups in cell numbers separated by a line break
                    for (i = 0; i < groups.length; i++) {

                        designOutput.innerHTML += "[ ";

                        for (j = 0; j < groups[i].length; j++) {
                            designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                        }

                        designOutput.innerHTML += "] "

                    }

                }

                designOutput.innerHTML += "<br>";
                minsIndex = 0;

                // Da Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, tableOutputs[2][0], false);
                cell1 = new KarnaughMapCell(1, tableOutputs[2][1], false);
                cell2 = new KarnaughMapCell(2, tableOutputs[2][2], false);
                cell3 = new KarnaughMapCell(3, tableOutputs[2][3], false);
                cell4 = new KarnaughMapCell(4, tableOutputs[2][4], false);
                cell5 = new KarnaughMapCell(5, tableOutputs[2][5], false);
                cell6 = new KarnaughMapCell(6, tableOutputs[2][6], false);
                cell7 = new KarnaughMapCell(7, tableOutputs[2][7], false);

                potential4Groups = [[cell0, cell1, cell2, cell3],[cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5],[cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7],[cell4, cell5, cell6, cell7]];

                potential2Groups = [[cell0, cell1], [cell0, cell2], [cell0, cell4], [cell1, cell3],
                    [cell1, cell5], [cell2, cell3], [cell2, cell6], [cell3, cell7],
                    [cell4, cell5], [cell4, cell6], [cell5, cell7], [cell6, cell7]];

                groups = [[]];
                groupIndex = 0;

                // For building the simplified boolean expression
                newBooleanExp = "";

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

                    for (i = 0; i < potential4Groups.length; i++) {

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
                cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7];

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
                designOutput.innerHTML += "<br>Da: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                else {

                    // Print debugged output of groups in cell numbers separated by a line break
                    for (i = 0; i < groups.length; i++) {

                        designOutput.innerHTML += "[ ";

                        for (j = 0; j < groups[i].length; j++) {
                            designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                        }

                        designOutput.innerHTML += "] "

                    }

                }

                designOutput.innerHTML += "<br>";

            }
        }
    }
</script>