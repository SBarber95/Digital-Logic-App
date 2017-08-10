<template>
    <div>
        <div class="table-responsive">
            <form name="jk-counter-design" id="jk_counter_design">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>C</th>
                        <th>B</th>
                        <th>A</th>
                        <th>C+</th>
                        <th>B+</th>
                        <th>A+</th>
                        <th>Jc</th>
                        <th>Kc</th>
                        <th>Jb</th>
                        <th>Kb</th>
                        <th>Ja</th>
                        <th>Ka</th>
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
                        <td id="Jc0"></td>
                        <td id="Kc0"></td>
                        <td id="Jb0"></td>
                        <td id="Kb0"></td>
                        <td id="Ja0"></td>
                        <td id="Ka0"></td>
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
                        <td id="Jc1"></td>
                        <td id="Kc1"></td>
                        <td id="Jb1"></td>
                        <td id="Kb1"></td>
                        <td id="Ja1"></td>
                        <td id="Ka1"></td>
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
                        <td id="Jc2"></td>
                        <td id="Kc2"></td>
                        <td id="Jb2"></td>
                        <td id="Kb2"></td>
                        <td id="Ja2"></td>
                        <td id="Ka2"></td>
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
                        <td id="Jc3"></td>
                        <td id="Kc3"></td>
                        <td id="Jb3"></td>
                        <td id="Kb3"></td>
                        <td id="Ja3"></td>
                        <td id="Ka3"></td>
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
                        <td id="Jc4"></td>
                        <td id="Kc4"></td>
                        <td id="Jb4"></td>
                        <td id="Kb4"></td>
                        <td id="Ja4"></td>
                        <td id="Ka4"></td>
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
                        <td id="Jc5"></td>
                        <td id="Kc5"></td>
                        <td id="Jb5"></td>
                        <td id="Kb5"></td>
                        <td id="Ja5"></td>
                        <td id="Ka5"></td>
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
                        <td id="Jc6"></td>
                        <td id="Kc6"></td>
                        <td id="Jb6"></td>
                        <td id="Kb6"></td>
                        <td id="Ja6"></td>
                        <td id="Ka6"></td>
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
                        <td id="Jc7"></td>
                        <td id="Kc7"></td>
                        <td id="Jb7"></td>
                        <td id="Kb7"></td>
                        <td id="Ja7"></td>
                        <td id="Ka7"></td>
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
                <p class="km-label">Jc</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="JC_cell0">0</p></div>
                <div class="cell"><p id="JC_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="JC_cell1">0</p></div>
                <div class="cell"><p id="JC_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="JC_cell3">0</p></div>
                <div class="cell"><p id="JC_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="JC_cell2">0</p></div>
                <div class="cell"><p id="JC_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Jb</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="JB_cell0">0</p></div>
                <div class="cell"><p id="JB_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="JB_cell1">0</p></div>
                <div class="cell"><p id="JB_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="JB_cell3">0</p></div>
                <div class="cell"><p id="JB_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="JB_cell2">0</p></div>
                <div class="cell"><p id="JB_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Ja</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="JA_cell0">0</p></div>
                <div class="cell"><p id="JA_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="JA_cell1">0</p></div>
                <div class="cell"><p id="JA_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="JA_cell3">0</p></div>
                <div class="cell"><p id="JA_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="JA_cell2">0</p></div>
                <div class="cell"><p id="JA_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Kc</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="KC_cell0">0</p></div>
                <div class="cell"><p id="KC_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="KC_cell1">0</p></div>
                <div class="cell"><p id="KC_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="KC_cell3">0</p></div>
                <div class="cell"><p id="KC_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="KC_cell2">0</p></div>
                <div class="cell"><p id="KC_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Kb</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="KB_cell0">0</p></div>
                <div class="cell"><p id="KB_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="KB_cell1">0</p></div>
                <div class="cell"><p id="KB_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="KB_cell3">0</p></div>
                <div class="cell"><p id="KB_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="KB_cell2">0</p></div>
                <div class="cell"><p id="KB_cell6">0</p></div>
            </div>
            <div class="km-container">
                <p class="km-label">Ka</p>
                <div class="info-cell"><img src="../../images/counterKMLogo.png"></div>
                <div class="info-cell"><p class="info-top">0</p></div>
                <div class="info-cell"><p class="info-top">1</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><p id="KA_cell0">0</p></div>
                <div class="cell"><p id="KA_cell4">0</p></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><p id="KA_cell1">0</p></div>
                <div class="cell"><p id="KA_cell5">0</p></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><p id="KA_cell3">0</p></div>
                <div class="cell"><p id="KA_cell7">0</p></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><p id="KA_cell2">0</p></div>
                <div class="cell"><p id="KA_cell6">0</p></div>
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
        mounted() {
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
                J-K Counter Design
                <button style="margin-top: 0; float: right" class="btn btn-info" data-toggle="modal" data-target="#counterModal">
                Instructions!
                </button>`;

        },
        methods: {
            designCounter: function (e) {

                e.preventDefault();

                var jkForm = document.getElementById("jk_counter_design");

                // Initialize array to be used to populate the 6 Karnaugh Maps
                var outputValues = [["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"],
                    ["0", "0"], ["0", "0"], ["0", "0"]];

                var tableInputs = [["0", jkForm.c0.value], ["0", jkForm.b0.value], ["0", jkForm.a0.value],
                    ["0", jkForm.c1.value], ["0", jkForm.b1.value], ["1", jkForm.a1.value],
                    ["0", jkForm.c2.value], ["1", jkForm.b2.value], ["0", jkForm.a2.value],
                    ["0", jkForm.c3.value], ["1", jkForm.b3.value], ["1", jkForm.a3.value],
                    ["1", jkForm.c4.value], ["0", jkForm.b4.value], ["0", jkForm.a4.value],
                    ["1", jkForm.c5.value], ["0", jkForm.b5.value], ["1", jkForm.a5.value],
                    ["1", jkForm.c6.value], ["1", jkForm.b6.value], ["0", jkForm.a6.value],
                    ["1", jkForm.c7.value], ["1", jkForm.b7.value], ["1", jkForm.a7.value]];

                var tableOutputIds = [["Jc0", "Kc0"], ["Jb0", "Kb0"], ["Ja0", "Ka0"],
                    ["Jc1", "Kc1"], ["Jb1", "Kb1"], ["Ja1", "Ka1"],
                    ["Jc2", "Kc2"], ["Jb2", "Kb2"], ["Ja2", "Ka2"],
                    ["Jc3", "Kc3"], ["Jb3", "Kb3"], ["Ja3", "Ka3"],
                    ["Jc4", "Kc4"], ["Jb4", "Kb4"], ["Ja4", "Ka4"],
                    ["Jc5", "Kc5"], ["Jb5", "Kb5"], ["Ja5", "Ka5"],
                    ["Jc6", "Kc6"], ["Jb6", "Kb6"], ["Ja6", "Ka6"],
                    ["Jc7", "Kc7"], ["Jb7", "Kb7"], ["Ja7", "Ka7"]];

                // Determine proper J-K Outputs and display them in the table
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

                var JcOutputs = [0, 0, 0, 0, 0, 0, 0, 0];
                var KcOutputs = [0, 0, 0, 0, 0, 0, 0, 0];

                var JbOutputs = [0, 0, 0, 0, 0, 0, 0, 0];
                var KbOutputs = [0, 0, 0, 0, 0, 0, 0, 0];

                var JaOutputs = [0, 0, 0, 0, 0, 0, 0, 0];
                var KaOutputs = [0, 0, 0, 0, 0, 0, 0, 0];

                var index = 0;

                // Grab Jc and Kc outputs and set up in array
                for (i = 0; i < outputValues.length; i += 3) {

                    JcOutputs[index] = outputValues[i][0];
                    KcOutputs[index] = outputValues[i][1];
                    index++;

                }

                // Grab Jb and Kb outputs and set up in array
                index = 0;
                for (i = 1; i < outputValues.length; i += 3) {

                    JbOutputs[index] = outputValues[i][0];
                    KbOutputs[index] = outputValues[i][1];
                    index++;

                }

                // Grab Ja and Ka outputs and set up in array
                index = 0;
                for (i = 2; i < outputValues.length; i += 3) {

                    JaOutputs[index] = outputValues[i][0];
                    KaOutputs[index] = outputValues[i][1];
                    index++;

                }

                // Display corresponding outputs in the appropriate cells of the Karnaugh Map
                var karnaughMapIDs = [["JC_cell0", "JC_cell1", "JC_cell2", "JC_cell3", "JC_cell4", "JC_cell5", "JC_cell6", "JC_cell7"],
                    ["KC_cell0", "KC_cell1", "KC_cell2", "KC_cell3", "KC_cell4", "KC_cell5", "KC_cell6", "KC_cell7"],
                    ["JB_cell0", "JB_cell1", "JB_cell2", "JB_cell3", "JB_cell4", "JB_cell5", "JB_cell6", "JB_cell7"],
                    ["KB_cell0", "KB_cell1", "KB_cell2", "KB_cell3", "KB_cell4", "KB_cell5", "KB_cell6", "KB_cell7"],
                    ["JA_cell0", "JA_cell1", "JA_cell2", "JA_cell3", "JA_cell4", "JA_cell5", "JA_cell6", "JA_cell7"],
                    ["KA_cell0", "KA_cell1", "KA_cell2", "KA_cell3", "KA_cell4", "KA_cell5", "KA_cell6", "KA_cell7"]];

                for (i = 0; i < karnaughMapIDs[0].length; i++) {

                    document.getElementById(karnaughMapIDs[0][i]).innerHTML = "" + JcOutputs[i];
                    document.getElementById(karnaughMapIDs[1][i]).innerHTML = "" + KcOutputs[i];
                    document.getElementById(karnaughMapIDs[2][i]).innerHTML = "" + JbOutputs[i];
                    document.getElementById(karnaughMapIDs[3][i]).innerHTML = "" + KbOutputs[i];
                    document.getElementById(karnaughMapIDs[4][i]).innerHTML = "" + JaOutputs[i];
                    document.getElementById(karnaughMapIDs[5][i]).innerHTML = "" + KaOutputs[i];

                }

                var designOutput = document.getElementById("design_output");

                // KARNAUGH MAP SOLVERS (6 DIFFERENT MAPS) ---------------------------------------------

                // Grab cell value outputs and place in cell objects
                var cell0 = new KarnaughMapCell(0, JcOutputs[0], false);
                var cell1 = new KarnaughMapCell(1, JcOutputs[1], false);
                var cell2 = new KarnaughMapCell(2, JcOutputs[2], false);
                var cell3 = new KarnaughMapCell(3, JcOutputs[3], false);
                var cell4 = new KarnaughMapCell(4, JcOutputs[4], false);
                var cell5 = new KarnaughMapCell(5, JcOutputs[5], false);
                var cell6 = new KarnaughMapCell(6, JcOutputs[6], false);
                var cell7 = new KarnaughMapCell(7, JcOutputs[7], false);

                var groups = [[]];
                var groupIndex = 0;

                // Set potential groups of 4 and their corresponding simplified minterms
                var potential4Groups = [[cell0, cell1, cell2, cell3], [cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5], [cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7], [cell4, cell5, cell6, cell7]];
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
                designOutput.innerHTML += "Jc: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Jb Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, JbOutputs[0], false);
                cell1 = new KarnaughMapCell(1, JbOutputs[1], false);
                cell2 = new KarnaughMapCell(2, JbOutputs[2], false);
                cell3 = new KarnaughMapCell(3, JbOutputs[3], false);
                cell4 = new KarnaughMapCell(4, JbOutputs[4], false);
                cell5 = new KarnaughMapCell(5, JbOutputs[5], false);
                cell6 = new KarnaughMapCell(6, JbOutputs[6], false);
                cell7 = new KarnaughMapCell(7, JbOutputs[7], false);

                potential4Groups = [[cell0, cell1, cell2, cell3], [cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5], [cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7], [cell4, cell5, cell6, cell7]];

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
                designOutput.innerHTML += "<br>Jb: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Ja Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, JaOutputs[0], false);
                cell1 = new KarnaughMapCell(1, JaOutputs[1], false);
                cell2 = new KarnaughMapCell(2, JaOutputs[2], false);
                cell3 = new KarnaughMapCell(3, JaOutputs[3], false);
                cell4 = new KarnaughMapCell(4, JaOutputs[4], false);
                cell5 = new KarnaughMapCell(5, JaOutputs[5], false);
                cell6 = new KarnaughMapCell(6, JaOutputs[6], false);
                cell7 = new KarnaughMapCell(7, JaOutputs[7], false);

                potential4Groups = [[cell0, cell1, cell2, cell3], [cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5], [cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7], [cell4, cell5, cell6, cell7]];

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
                designOutput.innerHTML += "<br>Ja: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Kc Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, KcOutputs[0], false);
                cell1 = new KarnaughMapCell(1, KcOutputs[1], false);
                cell2 = new KarnaughMapCell(2, KcOutputs[2], false);
                cell3 = new KarnaughMapCell(3, KcOutputs[3], false);
                cell4 = new KarnaughMapCell(4, KcOutputs[4], false);
                cell5 = new KarnaughMapCell(5, KcOutputs[5], false);
                cell6 = new KarnaughMapCell(6, KcOutputs[6], false);
                cell7 = new KarnaughMapCell(7, KcOutputs[7], false);

                potential4Groups = [[cell0, cell1, cell2, cell3], [cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5], [cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7], [cell4, cell5, cell6, cell7]];

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
                designOutput.innerHTML += "<br>Kc: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Kb Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, KbOutputs[0], false);
                cell1 = new KarnaughMapCell(1, KbOutputs[1], false);
                cell2 = new KarnaughMapCell(2, KbOutputs[2], false);
                cell3 = new KarnaughMapCell(3, KbOutputs[3], false);
                cell4 = new KarnaughMapCell(4, KbOutputs[4], false);
                cell5 = new KarnaughMapCell(5, KbOutputs[5], false);
                cell6 = new KarnaughMapCell(6, KbOutputs[6], false);
                cell7 = new KarnaughMapCell(7, KbOutputs[7], false);

                potential4Groups = [[cell0, cell1, cell2, cell3], [cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5], [cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7], [cell4, cell5, cell6, cell7]];

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
                designOutput.innerHTML += "<br>Kb: " + newBooleanExp + "<br>Groups (Cell #s): ";

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

                // Ka Karnaugh Map Simplifier --------------------------------------------------------

                // Grab cell value outputs and place in cell objects
                cell0 = new KarnaughMapCell(0, KaOutputs[0], false);
                cell1 = new KarnaughMapCell(1, KaOutputs[1], false);
                cell2 = new KarnaughMapCell(2, KaOutputs[2], false);
                cell3 = new KarnaughMapCell(3, KaOutputs[3], false);
                cell4 = new KarnaughMapCell(4, KaOutputs[4], false);
                cell5 = new KarnaughMapCell(5, KaOutputs[5], false);
                cell6 = new KarnaughMapCell(6, KaOutputs[6], false);
                cell7 = new KarnaughMapCell(7, KaOutputs[7], false);

                potential4Groups = [[cell0, cell1, cell2, cell3], [cell0, cell2, cell4, cell6],
                    [cell0, cell1, cell4, cell5], [cell1, cell3, cell5, cell7],
                    [cell2, cell3, cell6, cell7], [cell4, cell5, cell6, cell7]];

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
                designOutput.innerHTML += "<br>Ka: " + newBooleanExp + "<br>Groups (Cell #s): ";

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