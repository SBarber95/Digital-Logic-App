<template>
    <div>
        <div class="table-responsive">
            <form name="t-counter-design" id="t_counter_design">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>C</th>
                        <th>B</th>
                        <th>A</th>
                        <th>C+</th>
                        <th>B+</th>
                        <th>A+</th>
                        <th>Tc</th>
                        <th>Tb</th>
                        <th>Ta</th>
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
                        <td id="Tc0"></td>
                        <td id="Tb0"></td>
                        <td id="Ta0"></td>
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
                        <td id="Tc1"></td>
                        <td id="Tb1"></td>
                        <td id="Ta1"></td>
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
                        <td id="Tc2"></td>
                        <td id="Tb2"></td>
                        <td id="Ta2"></td>
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
                        <td id="Tc3"></td>
                        <td id="Tb3"></td>
                        <td id="Ta3"></td>
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
                        <td id="Tc4"></td>
                        <td id="Tb4"></td>
                        <td id="Ta4"></td>
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
                        <td id="Tc5"></td>
                        <td id="Tb5"></td>
                        <td id="Ta5"></td>
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
                        <td id="Tc6"></td>
                        <td id="Tb6"></td>
                        <td id="Ta6"></td>
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
                        <td id="Tc7"></td>
                        <td id="Tb7"></td>
                        <td id="Ta7"></td>
                    </tr>
                    </tbody>
                </table>
                <button class="btn btn-mdb" v-on:click="designCounter" name="submit">Set Up Counter Design</button>
            </form>
        </div>
        <div class="col-sm-8 col-md-9">
            <div class="km-container">
                <p class="km-label">Tc</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="TC_cell0">0</p></div>
                <div class="cell"><p id="TC_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="TC_cell1">0</p></div>
                <div class="cell"><p id="TC_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="TC_cell3">0</p></div>
                <div class="cell"><p id="TC_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="TC_cell2">0</p></div>
                <div class="cell"><p id="TC_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Tb</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="TB_cell0">0</p></div>
                <div class="cell"><p id="TB_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="TB_cell1">0</p></div>
                <div class="cell"><p id="TB_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="TB_cell3">0</p></div>
                <div class="cell"><p id="TB_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="TB_cell2">0</p></div>
                <div class="cell"><p id="TB_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Ta</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="TA_cell0">0</p></div>
                <div class="cell"><p id="TA_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="TA_cell1">0</p></div>
                <div class="cell"><p id="TA_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="TA_cell3">0</p></div>
                <div class="cell"><p id="TA_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="TA_cell2">0</p></div>
                <div class="cell"><p id="TA_cell6">0</p></div>
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
            document.getElementById("design-header").innerHTML = '<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#counterModal">' +
                'Instructions!' +
                '</button>' +
                '<div class="modal fade" id="counterModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>' +
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
                '<button class="btn btn-default" data-dismiss="modal">Close</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                'T Counter Design'
        },
        methods: {
            designCounter: function(e) {

                e.preventDefault();

                var tForm = document.getElementById("t_counter_design");

                // TODO: CONVERT TO T-COUNTER TRUTH TABLE OUTPUTS

                // Initialize array to be used to populate the 6 Karnaugh Maps
                var outputValues = [["0"], ["0"], ["0"],
                    ["0"], ["0"], ["0"],
                    ["0"], ["0"], ["0"],
                    ["0"], ["0"], ["0"],
                    ["0"], ["0"], ["0"],
                    ["0"], ["0"], ["0"],
                    ["0"], ["0"], ["0"],
                    ["0"], ["0"], ["0"]];

                var tableInputs = [["0", tForm.c0.value], ["0", tForm.b0.value], ["0", tForm.a0.value],
                    ["0", tForm.c1.value], ["0", tForm.b1.value], ["1", tForm.a1.value],
                    ["0", tForm.c2.value], ["1", tForm.b2.value], ["0", tForm.a2.value],
                    ["0", tForm.c3.value], ["1", tForm.b3.value], ["1", tForm.a3.value],
                    ["1", tForm.c4.value], ["0", tForm.b4.value], ["0", tForm.a4.value],
                    ["1", tForm.c5.value], ["0", tForm.b5.value], ["1", tForm.a5.value],
                    ["1", tForm.c6.value], ["1", tForm.b6.value], ["0", tForm.a6.value],
                    ["1", tForm.c7.value], ["1", tForm.b7.value], ["1", tForm.a7.value]];

                var tableOutputIds = ["Tc0", "Tb0", "Ta0",
                    "Tc1", "Tb1", "Ta1",
                    "Tc2", "Tb2", "Ta2",
                    "Tc3", "Tb3", "Ta3",
                    "Tc4", "Tb4", "Ta4",
                    "Tc5", "Tb5", "Ta5",
                    "Tc6", "Tb6", "Ta6",
                    "Tc7", "Tb7", "Ta7"];

                // Determine proper outputs and display them in the table
                for (var i = 0; i < tableInputs.length; i++) {

                    if (tableInputs[i][0] == "0" && tableInputs[i][1] == "0") {

                        document.getElementById(tableOutputIds[i]).innerHTML = "0";

                        outputValues[i][0] = "0";

                    }
                    else if (tableInputs[i][0] == "0" && tableInputs[i][1] == "1") {

                        document.getElementById(tableOutputIds[i]).innerHTML = "1";

                        outputValues[i][0] = "1";

                    }
                    else if (tableInputs[i][0] == "1" && tableInputs[i][1] == "0") {

                        document.getElementById(tableOutputIds[i]).innerHTML = "1";

                        outputValues[i][0] = "1";

                    }
                    else if ((tableInputs[i][0] == "1" && tableInputs[i][1] == "X") ||
                        (tableInputs[i][0] == "0" && tableInputs[i][1] == "X")) {

                        document.getElementById(tableOutputIds[i]).innerHTML = "X";

                        outputValues[i][0] = "X";

                    }
                    else {

                        document.getElementById(tableOutputIds[i]).innerHTML = "0";

                        outputValues[i][0] = "0";

                    }

                }

                var TcOutputs = [0, 0, 0, 0, 0, 0, 0, 0];
                var TbOutputs = [0, 0, 0, 0, 0, 0, 0, 0];
                var TaOutputs = [0, 0, 0, 0, 0, 0, 0, 0];

                var index = 0;

                // Grab Tc outputs and set up in array
                for (i = 0; i < outputValues.length; i += 3) {

                    TcOutputs[index] = outputValues[i][0];
                    index++;

                }

                // Grab Tb outputs and set up in array
                index = 0;
                for (i = 1; i < outputValues.length; i += 3) {

                    TbOutputs[index] = outputValues[i][0];
                    index++;

                }

                // Grab Ta outputs and set up in array
                index = 0;
                for (i = 2; i < outputValues.length; i += 3) {

                    TaOutputs[index] = outputValues[i][0];
                    index++;

                }

                // Display corresponding outputs in the appropriate cells of the Karnaugh Map
                var karnaughMapIDs = [["TC_cell0", "TC_cell1", "TC_cell2", "TC_cell3", "TC_cell4", "TC_cell5", "TC_cell6", "TC_cell7"],
                    ["TB_cell0", "TB_cell1", "TB_cell2", "TB_cell3", "TB_cell4", "TB_cell5", "TB_cell6", "TB_cell7"],
                    ["TA_cell0", "TA_cell1", "TA_cell2", "TA_cell3", "TA_cell4", "TA_cell5", "TA_cell6", "TA_cell7"]];

                for (i = 0; i < karnaughMapIDs[0].length; i++) {

                    document.getElementById(karnaughMapIDs[0][i]).innerHTML = "" + TcOutputs[i];
                    document.getElementById(karnaughMapIDs[1][i]).innerHTML = "" + TbOutputs[i];
                    document.getElementById(karnaughMapIDs[2][i]).innerHTML = "" + TaOutputs[i];

                }

                var designOutput = document.getElementById("design_output");

                // KARNAUGH MAP SOLVERS (6 DIFFERENT MAPS) ---------------------------------------------

                // Grab cell value outputs and place in cell objects
                var cell0 = new KarnaughMapCell(0, TcOutputs[0], false);
                var cell1 = new KarnaughMapCell(1, TcOutputs[1], false);
                var cell2 = new KarnaughMapCell(2, TcOutputs[2], false);
                var cell3 = new KarnaughMapCell(3, TcOutputs[3], false);
                var cell4 = new KarnaughMapCell(4, TcOutputs[4], false);
                var cell5 = new KarnaughMapCell(5, TcOutputs[5], false);
                var cell6 = new KarnaughMapCell(6, TcOutputs[6], false);
                var cell7 = new KarnaughMapCell(7, TcOutputs[7], false);

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
                designOutput.innerHTML += "Tc: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Tb Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, TbOutputs[0], false);
                cell1 = new KarnaughMapCell(1, TbOutputs[1], false);
                cell2 = new KarnaughMapCell(2, TbOutputs[2], false);
                cell3 = new KarnaughMapCell(3, TbOutputs[3], false);
                cell4 = new KarnaughMapCell(4, TbOutputs[4], false);
                cell5 = new KarnaughMapCell(5, TbOutputs[5], false);
                cell6 = new KarnaughMapCell(6, TbOutputs[6], false);
                cell7 = new KarnaughMapCell(7, TbOutputs[7], false);

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
                designOutput.innerHTML += "<br>Tb: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Ta Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, TaOutputs[0], false);
                cell1 = new KarnaughMapCell(1, TaOutputs[1], false);
                cell2 = new KarnaughMapCell(2, TaOutputs[2], false);
                cell3 = new KarnaughMapCell(3, TaOutputs[3], false);
                cell4 = new KarnaughMapCell(4, TaOutputs[4], false);
                cell5 = new KarnaughMapCell(5, TaOutputs[5], false);
                cell6 = new KarnaughMapCell(6, TaOutputs[6], false);
                cell7 = new KarnaughMapCell(7, TaOutputs[7], false);

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
                designOutput.innerHTML += "<br>Ta: " + newBooleanExp + "<br>Groups (Cell #s): ";

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