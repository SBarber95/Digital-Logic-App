<template>
    <div>
        <div class="table-responsive">
            <form name="sr-counter-design" id="sr_counter_design">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>C</th>
                        <th>B</th>
                        <th>A</th>
                        <th>C+</th>
                        <th>B+</th>
                        <th>A+</th>
                        <th>Sc</th>
                        <th>Rc</th>
                        <th>Sb</th>
                        <th>Rb</th>
                        <th>Sa</th>
                        <th>Ra</th>
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
                        <td id="Sc0"></td>
                        <td id="Rc0"></td>
                        <td id="Sb0"></td>
                        <td id="Rb0"></td>
                        <td id="Sa0"></td>
                        <td id="Ra0"></td>
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
                        <td id="Sc1"></td>
                        <td id="Rc1"></td>
                        <td id="Sb1"></td>
                        <td id="Rb1"></td>
                        <td id="Sa1"></td>
                        <td id="Ra1"></td>
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
                        <td id="Sc2"></td>
                        <td id="Rc2"></td>
                        <td id="Sb2"></td>
                        <td id="Rb2"></td>
                        <td id="Sa2"></td>
                        <td id="Ra2"></td>
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
                        <td id="Sc3"></td>
                        <td id="Rc3"></td>
                        <td id="Sb3"></td>
                        <td id="Rb3"></td>
                        <td id="Sa3"></td>
                        <td id="Ra3"></td>
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
                        <td id="Sc4"></td>
                        <td id="Rc4"></td>
                        <td id="Sb4"></td>
                        <td id="Rb4"></td>
                        <td id="Sa4"></td>
                        <td id="Ra4"></td>
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
                        <td id="Sc5"></td>
                        <td id="Rc5"></td>
                        <td id="Sb5"></td>
                        <td id="Rb5"></td>
                        <td id="Sa5"></td>
                        <td id="Ra5"></td>
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
                        <td id="Sc6"></td>
                        <td id="Rc6"></td>
                        <td id="Sb6"></td>
                        <td id="Rb6"></td>
                        <td id="Sa6"></td>
                        <td id="Ra6"></td>
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
                        <td id="Sc7"></td>
                        <td id="Rc7"></td>
                        <td id="Sb7"></td>
                        <td id="Rb7"></td>
                        <td id="Sa7"></td>
                        <td id="Ra7"></td>
                    </tr>
                    </tbody>
                </table>
                <div class="flex-center">
                    <button class="btn btn-mdb" v-on:click="designCounter" name="submit">Set Up Counter Design</button>
                </div>
            </form>
        </div>
        <div class="col-sm-12 col-md-12">
            <div class="km-container">
                <p class="km-label">Sc</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="SC_cell0">0</p></div>
                <div class="cell"><p id="SC_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="SC_cell1">0</p></div>
                <div class="cell"><p id="SC_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="SC_cell3">0</p></div>
                <div class="cell"><p id="SC_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="SC_cell2">0</p></div>
                <div class="cell"><p id="SC_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Sb</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="SB_cell0">0</p></div>
                <div class="cell"><p id="SB_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="SB_cell1">0</p></div>
                <div class="cell"><p id="SB_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="SB_cell3">0</p></div>
                <div class="cell"><p id="SB_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="SB_cell2">0</p></div>
                <div class="cell"><p id="SB_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Sa</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="SA_cell0">0</p></div>
                <div class="cell"><p id="SA_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="SA_cell1">0</p></div>
                <div class="cell"><p id="SA_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="SA_cell3">0</p></div>
                <div class="cell"><p id="SA_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="SA_cell2">0</p></div>
                <div class="cell"><p id="SA_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Rc</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="RC_cell0">0</p></div>
                <div class="cell"><p id="RC_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="RC_cell1">0</p></div>
                <div class="cell"><p id="RC_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="RC_cell3">0</p></div>
                <div class="cell"><p id="RC_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="RC_cell2">0</p></div>
                <div class="cell"><p id="RC_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Rb</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="RB_cell0">0</p></div>
                <div class="cell"><p id="RB_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="RB_cell1">0</p></div>
                <div class="cell"><p id="RB_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="RB_cell3">0</p></div>
                <div class="cell"><p id="RB_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="RB_cell2">0</p></div>
                <div class="cell"><p id="RB_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Ra</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="RA_cell0">0</p></div>
                <div class="cell"><p id="RA_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="RA_cell1">0</p></div>
                <div class="cell"><p id="RA_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="RA_cell3">0</p></div>
                <div class="cell"><p id="RA_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="RA_cell2">0</p></div>
                <div class="cell"><p id="RA_cell6">0</p></div>
            </div>
        </div>
        <div class="card col-lg-12 col-md-12 col-sm-12">
            <div class="card-header mdb-color white-text">
                Simplified Boolean Expressions
            </div>
            <div class="card-body">
                <p id="design_output" class="card-text">Output will appear here.</p>
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
        mounted () {
            document.getElementById("design-header").innerHTML = `
                <div class="modal fade" id="counterModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                <button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
                <h4 class="modal-title" id="counterTitle">Counter Design Instructions</h4>
                </div>
                <div class="modal-body">
                Fill out the table entries according to the state changes you wish to include in your counter.
                Click "Set Up Counter Design" and the rest of the table will fill in with the proper values.
                Below the table, the Karnaugh Maps associated with each
                input column will be populated with the table info. A
                simplified minterm boolean expression for the counter inputs is shown at the bottom.
                </div>
                <div class="modal-footer">
                <button class="btn btn-mdb" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
                </div>
                S-R Counter Design
                <button style="margin-top: 0; float: right" class="btn btn-info" data-toggle="modal" data-target="#counterModal">
                Instructions!
                </button>`;
        },
        methods: {
            designCounter: function(e) {

                e.preventDefault();

                var srForm = document.getElementById("sr_counter_design");

                // Initialize array to be used to populate the 6 Karnaugh Maps
                var outputValues = [["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"]];

                var tableInputs = [["0", srForm.c0.value], ["0", srForm.b0.value], ["0", srForm.a0.value],
                    ["0", srForm.c1.value], ["0", srForm.b1.value], ["1", srForm.a1.value],
                    ["0", srForm.c2.value], ["1", srForm.b2.value], ["0", srForm.a2.value],
                    ["0", srForm.c3.value], ["1", srForm.b3.value], ["1", srForm.a3.value],
                    ["1", srForm.c4.value], ["0", srForm.b4.value], ["0", srForm.a4.value],
                    ["1", srForm.c5.value], ["0", srForm.b5.value], ["1", srForm.a5.value],
                    ["1", srForm.c6.value], ["1", srForm.b6.value], ["0", srForm.a6.value],
                    ["1", srForm.c7.value], ["1", srForm.b7.value], ["1", srForm.a7.value]];

                var tableOutputIds = [["Sc0", "Rc0"], ["Sb0", "Rb0"], ["Sa0", "Ra0"],
                    ["Sc1", "Rc1"], ["Sb1", "Rb1"], ["Sa1", "Ra1"],
                    ["Sc2", "Rc2"], ["Sb2", "Rb2"], ["Sa2", "Ra2"],
                    ["Sc3", "Rc3"], ["Sb3", "Rb3"], ["Sa3", "Ra3"],
                    ["Sc4", "Rc4"], ["Sb4", "Rb4"], ["Sa4", "Ra4"],
                    ["Sc5", "Rc5"], ["Sb5", "Rb5"], ["Sa5", "Ra5"],
                    ["Sc6", "Rc6"], ["Sb6", "Rb6"], ["Sa6", "Ra6"],
                    ["Sc7", "Rc7"], ["Sb7", "Rb7"], ["Sa7", "Ra7"]];

                // Determine proper S-R Outputs and display them in the table
                for (var i = 0; i < tableInputs.length; i++) {

                    if (tableInputs[i][0] == "0" && tableInputs[i][1] == "0") {

                        document.getElementById(tableOutputIds[i][0]).innerHTML = "0";
                        document.getElementById(tableOutputIds[i][1]).innerHTML = "X";

                        outputValues[i][0] = "0";
                        outputValues[i][1] = "X";

                    }
                    else if (tableInputs[i][0] == "0" && tableInputs[i][1] == "1") {

                        document.getElementById(tableOutputIds[i][0]).innerHTML = "1";
                        document.getElementById(tableOutputIds[i][1]).innerHTML = "0";

                        outputValues[i][0] = "1";
                        outputValues[i][1] = "0";

                    }
                    else if (tableInputs[i][0] == "1" && tableInputs[i][1] == "0") {

                        document.getElementById(tableOutputIds[i][0]).innerHTML = "0";
                        document.getElementById(tableOutputIds[i][1]).innerHTML = "1";

                        outputValues[i][0] = "0";
                        outputValues[i][1] = "1";

                    }
                    else if (tableInputs[i][0] == "1" && tableInputs[i][1] == "1") {

                        document.getElementById(tableOutputIds[i][0]).innerHTML = "X";
                        document.getElementById(tableOutputIds[i][1]).innerHTML = "0";

                        outputValues[i][0] = "X";
                        outputValues[i][1] = "0";

                    }
                    else {

                        document.getElementById(tableOutputIds[i][0]).innerHTML = "X";
                        document.getElementById(tableOutputIds[i][1]).innerHTML = "X";

                        outputValues[i][0] = "X";
                        outputValues[i][1] = "X";

                    }

                }

                var ScOutputs = [0, 0, 0, 0, 0, 0, 0, 0];
                var RcOutputs = [0, 0, 0, 0, 0, 0, 0, 0];

                var SbOutputs = [0, 0, 0, 0, 0, 0, 0, 0];
                var RbOutputs = [0, 0, 0, 0, 0, 0, 0, 0];

                var SaOutputs = [0, 0, 0, 0, 0, 0, 0, 0];
                var RaOutputs = [0, 0, 0, 0, 0, 0, 0, 0];

                var index = 0;

                // Grab Sc and Rc outputs and set up in array
                for (i = 0; i < outputValues.length; i += 3) {

                    ScOutputs[index] = outputValues[i][0];
                    RcOutputs[index] = outputValues[i][1];
                    index++;

                }

                // Grab Sb and Rb outputs and set up in array
                index = 0;
                for (i = 1; i < outputValues.length; i += 3) {

                    SbOutputs[index] = outputValues[i][0];
                    RbOutputs[index] = outputValues[i][1];
                    index++;

                }

                // Grab Sa and Ra outputs and set up in array
                index = 0;
                for (i = 2; i < outputValues.length; i += 3) {

                    SaOutputs[index] = outputValues[i][0];
                    RaOutputs[index] = outputValues[i][1];
                    index++;

                }

                // Display corresponding outputs in the appropriate cells of the Karnaugh Map
                var karnaughMapIDs = [["SC_cell0", "SC_cell1", "SC_cell2", "SC_cell3", "SC_cell4", "SC_cell5", "SC_cell6", "SC_cell7"],
                    ["RC_cell0", "RC_cell1", "RC_cell2", "RC_cell3", "RC_cell4", "RC_cell5", "RC_cell6", "RC_cell7"],
                    ["SB_cell0", "SB_cell1", "SB_cell2", "SB_cell3", "SB_cell4", "SB_cell5", "SB_cell6", "SB_cell7"],
                    ["RB_cell0", "RB_cell1", "RB_cell2", "RB_cell3", "RB_cell4", "RB_cell5", "RB_cell6", "RB_cell7"],
                    ["SA_cell0", "SA_cell1", "SA_cell2", "SA_cell3", "SA_cell4", "SA_cell5", "SA_cell6", "SA_cell7"],
                    ["RA_cell0", "RA_cell1", "RA_cell2", "RA_cell3", "RA_cell4", "RA_cell5", "RA_cell6", "RA_cell7"]];

                for (i = 0; i < karnaughMapIDs[0].length; i++) {

                    document.getElementById(karnaughMapIDs[0][i]).innerHTML = "" + ScOutputs[i];
                    document.getElementById(karnaughMapIDs[1][i]).innerHTML = "" + RcOutputs[i];
                    document.getElementById(karnaughMapIDs[2][i]).innerHTML = "" + SbOutputs[i];
                    document.getElementById(karnaughMapIDs[3][i]).innerHTML = "" + RbOutputs[i];
                    document.getElementById(karnaughMapIDs[4][i]).innerHTML = "" + SaOutputs[i];
                    document.getElementById(karnaughMapIDs[5][i]).innerHTML = "" + RaOutputs[i];

                }

                var designOutput = document.getElementById("design_output");

                // KARNAUGH MAP SOLVERS (6 DIFFERENT MAPS) ---------------------------------------------

                // Grab cell value outputs and place in cell objects
                var cell0 = new KarnaughMapCell(0, ScOutputs[0], false);
                var cell1 = new KarnaughMapCell(1, ScOutputs[1], false);
                var cell2 = new KarnaughMapCell(2, ScOutputs[2], false);
                var cell3 = new KarnaughMapCell(3, ScOutputs[3], false);
                var cell4 = new KarnaughMapCell(4, ScOutputs[4], false);
                var cell5 = new KarnaughMapCell(5, ScOutputs[5], false);
                var cell6 = new KarnaughMapCell(6, ScOutputs[6], false);
                var cell7 = new KarnaughMapCell(7, ScOutputs[7], false);

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
                designOutput.innerHTML += "Sc: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Sb Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, SbOutputs[0], false);
                cell1 = new KarnaughMapCell(1, SbOutputs[1], false);
                cell2 = new KarnaughMapCell(2, SbOutputs[2], false);
                cell3 = new KarnaughMapCell(3, SbOutputs[3], false);
                cell4 = new KarnaughMapCell(4, SbOutputs[4], false);
                cell5 = new KarnaughMapCell(5, SbOutputs[5], false);
                cell6 = new KarnaughMapCell(6, SbOutputs[6], false);
                cell7 = new KarnaughMapCell(7, SbOutputs[7], false);

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
                designOutput.innerHTML += "<br>Sb: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Sa Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, SaOutputs[0], false);
                cell1 = new KarnaughMapCell(1, SaOutputs[1], false);
                cell2 = new KarnaughMapCell(2, SaOutputs[2], false);
                cell3 = new KarnaughMapCell(3, SaOutputs[3], false);
                cell4 = new KarnaughMapCell(4, SaOutputs[4], false);
                cell5 = new KarnaughMapCell(5, SaOutputs[5], false);
                cell6 = new KarnaughMapCell(6, SaOutputs[6], false);
                cell7 = new KarnaughMapCell(7, SaOutputs[7], false);

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
                designOutput.innerHTML += "<br>Sa: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Rc Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, RcOutputs[0], false);
                cell1 = new KarnaughMapCell(1, RcOutputs[1], false);
                cell2 = new KarnaughMapCell(2, RcOutputs[2], false);
                cell3 = new KarnaughMapCell(3, RcOutputs[3], false);
                cell4 = new KarnaughMapCell(4, RcOutputs[4], false);
                cell5 = new KarnaughMapCell(5, RcOutputs[5], false);
                cell6 = new KarnaughMapCell(6, RcOutputs[6], false);
                cell7 = new KarnaughMapCell(7, RcOutputs[7], false);

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
                designOutput.innerHTML += "<br>Rc: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Rb Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, RbOutputs[0], false);
                cell1 = new KarnaughMapCell(1, RbOutputs[1], false);
                cell2 = new KarnaughMapCell(2, RbOutputs[2], false);
                cell3 = new KarnaughMapCell(3, RbOutputs[3], false);
                cell4 = new KarnaughMapCell(4, RbOutputs[4], false);
                cell5 = new KarnaughMapCell(5, RbOutputs[5], false);
                cell6 = new KarnaughMapCell(6, RbOutputs[6], false);
                cell7 = new KarnaughMapCell(7, RbOutputs[7], false);

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
                designOutput.innerHTML += "<br>Rb: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Ra Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, RaOutputs[0], false);
                cell1 = new KarnaughMapCell(1, RaOutputs[1], false);
                cell2 = new KarnaughMapCell(2, RaOutputs[2], false);
                cell3 = new KarnaughMapCell(3, RaOutputs[3], false);
                cell4 = new KarnaughMapCell(4, RaOutputs[4], false);
                cell5 = new KarnaughMapCell(5, RaOutputs[5], false);
                cell6 = new KarnaughMapCell(6, RaOutputs[6], false);
                cell7 = new KarnaughMapCell(7, RaOutputs[7], false);

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
                designOutput.innerHTML += "<br>Ra: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

<style scoped>
    .card {
        padding: 0;
        margin-top: 24px;
    }
    .card-header, .card-text {
        padding: 10px;
    }
</style>