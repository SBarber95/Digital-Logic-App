/**
 * Created by savannah on 12/26/2016.
 */

class KarnaughMapCell {

    constructor(cellNum, cellValue, isGrouped) {

        this.cellNum = cellNum;
        this.cellValue = cellValue;
        this.isGrouped = isGrouped;

    }

}

// Default rendered counter (S-R)
new Vue ({
    el: '#placeholder',
    template: '<div class="container-fluid" id="placeholder">'+
    '<div class="row">'+
    '<div class="col-sm-4 col-md-3 sidebar">'+
    '<ul class="nav nav-sidebar">'+
    '<li class="sub-header">Counter Design</li>'+
    '<li id="select_SR_counter" onclick="showSRCounter()"><a href="#">S-R Counter</a></li>'+
    '<li id="select_JK_counter" onclick="showJKCounter()"><a href="#">J-K Counter</a></li>'+
    '<li id="select_D_counter" onclick="showDCounter()"><a href="#">D Counter</a></li>'+
    '<li id="select_T_counter" onclick="showTCounter()"><a href="#">T Counter</a></li>'+
    '<li class="sub-header">Other Design Problems</li>'+
    '<li id="select_7S_Display" onclick="show7SegDisplay()"><a href="#">7-Segment Display</a></li>'+
    '</ul>'+
    '</div>'+
'<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main" id="canvas">'+
    '<h1 class="page-header">S-R Counter Design</h1>'+
'<div class="table-responsive">'+
    '<form name="sr-counter-design" id="sr_counter_design">'+
    '<table class="table table-striped">'+
    '<thead>'+
    '<tr>'+
    '<th>C</th>'+
    '<th>B</th>'+
    '<th>A</th>'+
    '<th>C+</th>'+
    '<th>B+</th>'+
    '<th>A+</th>'+
    '<th>Sc</th>'+
    '<th>Rc</th>'+
    '<th>Sb</th>'+
    '<th>Rb</th>'+
    '<th>Sa</th>'+
    '<th>Ra</th>'+
    '</tr>'+
    '</thead>'+
    '<tbody>'+
    '<tr>'+
    '<td>0</td>'+
    '<td>0</td>'+
    '<td>0</td>'+
    '<td><select name="c0"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="b0"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="a0"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td id="Sc0"></td>'+
    '<td id="Rc0"></td>'+
    '<td id="Sb0"></td>'+
    '<td id="Rb0"></td>'+
    '<td id="Sa0"></td>'+
    '<td id="Ra0"></td>'+
    '</tr>'+
    '<tr>'+
    '<td>0</td>'+
    '<td>0</td>'+
    '<td>1</td>'+
    '<td><select name="c1"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="b1"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="a1"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td id="Sc1"></td>'+
    '<td id="Rc1"></td>'+
    '<td id="Sb1"></td>'+
    '<td id="Rb1"></td>'+
    '<td id="Sa1"></td>'+
    '<td id="Ra1"></td>'+
    '</tr>'+
    '<tr>'+
    '<td>0</td>'+
    '<td>1</td>'+
    '<td>0</td>'+
    '<td><select name="c2"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="b2"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="a2"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td id="Sc2"></td>'+
    '<td id="Rc2"></td>'+
    '<td id="Sb2"></td>'+
    '<td id="Rb2"></td>'+
    '<td id="Sa2"></td>'+
    '<td id="Ra2"></td>'+
    '</tr>'+
    '<tr>'+
    '<td>0</td>'+
    '<td>1</td>'+
    '<td>1</td>'+
    '<td><select name="c3"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="b3"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="a3"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td id="Sc3"></td>'+
    '<td id="Rc3"></td>'+
    '<td id="Sb3"></td>'+
    '<td id="Rb3"></td>'+
    '<td id="Sa3"></td>'+
    '<td id="Ra3"></td>'+
    '</tr>'+
    '<tr>'+
    '<td>1</td>'+
    '<td>0</td>'+
    '<td>0</td>'+
    '<td><select name="c4"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="b4"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="a4"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td id="Sc4"></td>'+
    '<td id="Rc4"></td>'+
    '<td id="Sb4"></td>'+
    '<td id="Rb4"></td>'+
    '<td id="Sa4"></td>'+
    '<td id="Ra4"></td>'+
    '</tr>'+
    '<tr>'+
    '<td>1</td>'+
    '<td>0</td>'+
    '<td>1</td>'+
    '<td><select name="c5"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="b5"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="a5"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td id="Sc5"></td>'+
    '<td id="Rc5"></td>'+
    '<td id="Sb5"></td>'+
    '<td id="Rb5"></td>'+
    '<td id="Sa5"></td>'+
    '<td id="Ra5"></td>'+
    '</tr>'+
    '<tr>'+
    '<td>1</td>'+
    '<td>1</td>'+
    '<td>0</td>'+
    '<td><select name="c6"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="b6"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="a6"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td id="Sc6"></td>'+
    '<td id="Rc6"></td>'+
    '<td id="Sb6"></td>'+
    '<td id="Rb6"></td>'+
    '<td id="Sa6"></td>'+
    '<td id="Ra6"></td>'+
    '</tr>'+
    '<tr>'+
    '<td>1</td>'+
    '<td>1</td>'+
    '<td>1</td>'+
    '<td><select name="c7"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="b7"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td><select name="a7"><option>0</option>'+
    '<option>1</option>'+
    '<option>X</option></select></td>'+
    '<td id="Sc7"></td>'+
    '<td id="Rc7"></td>'+
    '<td id="Sb7"></td>'+
    '<td id="Rb7"></td>'+
    '<td id="Sa7"></td>'+
    '<td id="Ra7"></td>'+
    '</tr>'+
    '</tbody>'+
    '</table>'+
    '<input class="btn btn-primary" v-on:click="designCounter" type="submit" name="submit" value="Set Up Counter Design">'+
    '</form>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3">'+
'<div class="km-container">'+
    '<p class="km-label">Sc</p>'+
    '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
    '<div class="info-cell"><p class="info-top">0</p></div>'+
    '<div class="info-cell"><p class="info-top">1</p></div>'+
    '<div class="info-cell"><p class="info-side">00</p></div>'+
    '<div class="cell"><p id="SC_cell0">0</p></div>'+
    '<div class="cell"><p id="SC_cell4">0</p></div>'+
    '<div class="info-cell"><p class="info-side">01</p></div>'+
    '<div class="cell"><p id="SC_cell1">0</p></div>'+
    '<div class="cell"><p id="SC_cell5">0</p></div>'+
    '<div class="info-cell"><p class="info-side">11</p></div>'+
    '<div class="cell"><p id="SC_cell3">0</p></div>'+
    '<div class="cell"><p id="SC_cell7">0</p></div>'+
    '<div class="info-cell"><p class="info-side">10</p></div>'+
    '<div class="cell"><p id="SC_cell2">0</p></div>'+
    '<div class="cell"><p id="SC_cell6">0</p></div>'+
    '</div>'+
    '<div class="km-container">'+
    '<p class="km-label">Sb</p>'+
    '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
    '<div class="info-cell"><p class="info-top">0</p></div>'+
    '<div class="info-cell"><p class="info-top">1</p></div>'+
    '<div class="info-cell"><p class="info-side">00</p></div>'+
    '<div class="cell"><p id="SB_cell0">0</p></div>'+
    '<div class="cell"><p id="SB_cell4">0</p></div>'+
    '<div class="info-cell"><p class="info-side">01</p></div>'+
    '<div class="cell"><p id="SB_cell1">0</p></div>'+
    '<div class="cell"><p id="SB_cell5">0</p></div>'+
    '<div class="info-cell"><p class="info-side">11</p></div>'+
    '<div class="cell"><p id="SB_cell3">0</p></div>'+
    '<div class="cell"><p id="SB_cell7">0</p></div>'+
    '<div class="info-cell"><p class="info-side">10</p></div>'+
    '<div class="cell"><p id="SB_cell2">0</p></div>'+
    '<div class="cell"><p id="SB_cell6">0</p></div>'+
    '</div>'+
    '<div class="km-container">'+
    '<p class="km-label">Sa</p>'+
    '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
    '<div class="info-cell"><p class="info-top">0</p></div>'+
    '<div class="info-cell"><p class="info-top">1</p></div>'+
    '<div class="info-cell"><p class="info-side">00</p></div>'+
    '<div class="cell"><p id="SA_cell0">0</p></div>'+
    '<div class="cell"><p id="SA_cell4">0</p></div>'+
    '<div class="info-cell"><p class="info-side">01</p></div>'+
    '<div class="cell"><p id="SA_cell1">0</p></div>'+
    '<div class="cell"><p id="SA_cell5">0</p></div>'+
    '<div class="info-cell"><p class="info-side">11</p></div>'+
    '<div class="cell"><p id="SA_cell3">0</p></div>'+
    '<div class="cell"><p id="SA_cell7">0</p></div>'+
    '<div class="info-cell"><p class="info-side">10</p></div>'+
    '<div class="cell"><p id="SA_cell2">0</p></div>'+
    '<div class="cell"><p id="SA_cell6">0</p></div>'+
    '</div>'+
    '<div class="km-container">'+
    '<p class="km-label">Rc</p>'+
    '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
    '<div class="info-cell"><p class="info-top">0</p></div>'+
    '<div class="info-cell"><p class="info-top">1</p></div>'+
    '<div class="info-cell"><p class="info-side">00</p></div>'+
    '<div class="cell"><p id="RC_cell0">0</p></div>'+
    '<div class="cell"><p id="RC_cell4">0</p></div>'+
    '<div class="info-cell"><p class="info-side">01</p></div>'+
    '<div class="cell"><p id="RC_cell1">0</p></div>'+
    '<div class="cell"><p id="RC_cell5">0</p></div>'+
    '<div class="info-cell"><p class="info-side">11</p></div>'+
    '<div class="cell"><p id="RC_cell3">0</p></div>'+
    '<div class="cell"><p id="RC_cell7">0</p></div>'+
    '<div class="info-cell"><p class="info-side">10</p></div>'+
    '<div class="cell"><p id="RC_cell2">0</p></div>'+
    '<div class="cell"><p id="RC_cell6">0</p></div>'+
    '</div>'+
    '<div class="km-container">'+
    '<p class="km-label">Rb</p>'+
    '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
    '<div class="info-cell"><p class="info-top">0</p></div>'+
    '<div class="info-cell"><p class="info-top">1</p></div>'+
    '<div class="info-cell"><p class="info-side">00</p></div>'+
    '<div class="cell"><p id="RB_cell0">0</p></div>'+
    '<div class="cell"><p id="RB_cell4">0</p></div>'+
    '<div class="info-cell"><p class="info-side">01</p></div>'+
    '<div class="cell"><p id="RB_cell1">0</p></div>'+
    '<div class="cell"><p id="RB_cell5">0</p></div>'+
    '<div class="info-cell"><p class="info-side">11</p></div>'+
    '<div class="cell"><p id="RB_cell3">0</p></div>'+
    '<div class="cell"><p id="RB_cell7">0</p></div>'+
    '<div class="info-cell"><p class="info-side">10</p></div>'+
    '<div class="cell"><p id="RB_cell2">0</p></div>'+
    '<div class="cell"><p id="RB_cell6">0</p></div>'+
    '</div>'+
    '<div class="km-container">'+
    '<p class="km-label">Ra</p>'+
    '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
    '<div class="info-cell"><p class="info-top">0</p></div>'+
    '<div class="info-cell"><p class="info-top">1</p></div>'+
    '<div class="info-cell"><p class="info-side">00</p></div>'+
    '<div class="cell"><p id="RA_cell0">0</p></div>'+
    '<div class="cell"><p id="RA_cell4">0</p></div>'+
    '<div class="info-cell"><p class="info-side">01</p></div>'+
    '<div class="cell"><p id="RA_cell1">0</p></div>'+
    '<div class="cell"><p id="RA_cell5">0</p></div>'+
    '<div class="info-cell"><p class="info-side">11</p></div>'+
    '<div class="cell"><p id="RA_cell3">0</p></div>'+
    '<div class="cell"><p id="RA_cell7">0</p></div>'+
    '<div class="info-cell"><p class="info-side">10</p></div>'+
    '<div class="cell"><p id="RA_cell2">0</p></div>'+
    '<div class="cell"><p id="RA_cell6">0</p></div>'+
    '</div>'+
    '<div class="panel panel-primary" style="margin-top: 40px">'+
    '<div class="panel-heading">'+
    '<h3 class="panel-title">Simplified Boolean Expressions</h3>'+
    '</div>'+
    '<div class="panel-body" id="design_output"></div>'+
    '</div>'+
    '</div>'+
    '</div>',
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
            designOutput.innerHTML += "Sc: " + newBooleanExp + "<br>Groups (Cell #s): ";

            if (groups[0].length == 8) {
                designOutput.innerHTML += "Full Karnaugh Map";
            }

            // Print debugged output of groups in cell numbers separated by a line break
            for (i = 0; i < groupIndex; i++) {

                for (var j = 0; j < groups[i].length; j++) {
                    designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                }

                designOutput.innerHTML += " | "

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
            designOutput.innerHTML += "Sb: " + newBooleanExp + "<br>Groups (Cell #s): ";

            if (groups[0].length == 8) {
                designOutput.innerHTML += "Full Karnaugh Map";
            }

            // Print debugged output of groups in cell numbers separated by a line break
            for (i = 0; i < groupIndex; i++) {

                for (j = 0; j < groups[i].length; j++) {
                    designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                }

                designOutput.innerHTML += " | ";

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
            designOutput.innerHTML += "Sa: " + newBooleanExp + "<br>Groups (Cell #s): ";

            if (groups[0].length == 8) {
                designOutput.innerHTML += "Full Karnaugh Map";
            }

            // Print debugged output of groups in cell numbers separated by a line break
            for (i = 0; i < groupIndex; i++) {

                for (j = 0; j < groups[i].length; j++) {
                    designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                }

                designOutput.innerHTML += " | ";

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
            designOutput.innerHTML += "Rc: " + newBooleanExp + "<br>Groups (Cell #s): ";

            if (groups[0].length == 8) {
                designOutput.innerHTML += "Full Karnaugh Map";
            }

            // Print debugged output of groups in cell numbers separated by a line break
            for (i = 0; i < groupIndex; i++) {

                for (j = 0; j < groups[i].length; j++) {
                    designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                }

                designOutput.innerHTML += " | ";

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
            designOutput.innerHTML += "Rb: " + newBooleanExp + "<br>Groups (Cell #s): ";

            if (groups[0].length == 8) {
                designOutput.innerHTML += "Full Karnaugh Map";
            }

            // Print debugged output of groups in cell numbers separated by a line break
            for (i = 0; i < groupIndex; i++) {

                for (j = 0; j < groups[i].length; j++) {
                    designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                }

                designOutput.innerHTML += " | ";

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
            designOutput.innerHTML += "Ra: " + newBooleanExp + "<br>Groups (Cell #s): ";

            if (groups[0].length == 8) {
                designOutput.innerHTML += "Full Karnaugh Map";
            }

            // Print debugged output of groups in cell numbers separated by a line break
            for (i = 0; i < groupIndex; i++) {

                for (j = 0; j < groups[i].length; j++) {
                    designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                }

                designOutput.innerHTML += " | ";

            }

            designOutput.innerHTML += "<br>";

        }

    }

});

function showSRCounter() {
    new Vue ({
        el: '#placeholder',
        template: '<div class="container-fluid" id="placeholder">'+
        '<div class="row">'+
        '<div class="col-sm-4 col-md-3 sidebar">'+
        '<ul class="nav nav-sidebar">'+
        '<li class="sub-header">Counter Design</li>'+
        '<li id="select_SR_counter" onclick="showSRCounter()"><a href="#">S-R Counter</a></li>'+
        '<li id="select_JK_counter" onclick="showJKCounter()"><a href="#">J-K Counter</a></li>'+
        '<li id="select_D_counter" onclick="showDCounter()"><a href="#">D Counter</a></li>'+
        '<li id="select_T_counter" onclick="showTCounter()"><a href="#">T Counter</a></li>'+
        '<li class="sub-header">Other Design Problems</li>'+
        '<li id="select_7S_Display" onclick="show7SegDisplay()"><a href="#">7-Segment Display</a></li>'+
        '</ul>'+
        '</div>'+
        '<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main" id="canvas">'+
        '<h1 class="page-header">S-R Counter Design</h1>'+
        '<div class="table-responsive">'+
        '<form name="sr-counter-design" id="sr_counter_design">'+
        '<table class="table table-striped">'+
        '<thead>'+
        '<tr>'+
        '<th>C</th>'+
        '<th>B</th>'+
        '<th>A</th>'+
        '<th>C+</th>'+
        '<th>B+</th>'+
        '<th>A+</th>'+
        '<th>Sc</th>'+
        '<th>Rc</th>'+
        '<th>Sb</th>'+
        '<th>Rb</th>'+
        '<th>Sa</th>'+
        '<th>Ra</th>'+
        '</tr>'+
        '</thead>'+
        '<tbody>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td><select name="c0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Sc0"></td>'+
        '<td id="Rc0"></td>'+
        '<td id="Sb0"></td>'+
        '<td id="Rb0"></td>'+
        '<td id="Sa0"></td>'+
        '<td id="Ra0"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td><select name="c1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Sc1"></td>'+
        '<td id="Rc1"></td>'+
        '<td id="Sb1"></td>'+
        '<td id="Rb1"></td>'+
        '<td id="Sa1"></td>'+
        '<td id="Ra1"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td><select name="c2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Sc2"></td>'+
        '<td id="Rc2"></td>'+
        '<td id="Sb2"></td>'+
        '<td id="Rb2"></td>'+
        '<td id="Sa2"></td>'+
        '<td id="Ra2"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td><select name="c3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Sc3"></td>'+
        '<td id="Rc3"></td>'+
        '<td id="Sb3"></td>'+
        '<td id="Rb3"></td>'+
        '<td id="Sa3"></td>'+
        '<td id="Ra3"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td><select name="c4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Sc4"></td>'+
        '<td id="Rc4"></td>'+
        '<td id="Sb4"></td>'+
        '<td id="Rb4"></td>'+
        '<td id="Sa4"></td>'+
        '<td id="Ra4"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td><select name="c5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Sc5"></td>'+
        '<td id="Rc5"></td>'+
        '<td id="Sb5"></td>'+
        '<td id="Rb5"></td>'+
        '<td id="Sa5"></td>'+
        '<td id="Ra5"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td><select name="c6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Sc6"></td>'+
        '<td id="Rc6"></td>'+
        '<td id="Sb6"></td>'+
        '<td id="Rb6"></td>'+
        '<td id="Sa6"></td>'+
        '<td id="Ra6"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td><select name="c7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Sc7"></td>'+
        '<td id="Rc7"></td>'+
        '<td id="Sb7"></td>'+
        '<td id="Rb7"></td>'+
        '<td id="Sa7"></td>'+
        '<td id="Ra7"></td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '<input class="btn btn-primary" v-on:click="designCounter" type="submit" name="submit" value="Set Up Counter Design">'+
        '</form>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3">'+
        '<div class="km-container">'+
        '<p class="km-label">Sc</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="SC_cell0">0</p></div>'+
        '<div class="cell"><p id="SC_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="SC_cell1">0</p></div>'+
        '<div class="cell"><p id="SC_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="SC_cell3">0</p></div>'+
        '<div class="cell"><p id="SC_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="SC_cell2">0</p></div>'+
        '<div class="cell"><p id="SC_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Sb</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="SB_cell0">0</p></div>'+
        '<div class="cell"><p id="SB_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="SB_cell1">0</p></div>'+
        '<div class="cell"><p id="SB_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="SB_cell3">0</p></div>'+
        '<div class="cell"><p id="SB_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="SB_cell2">0</p></div>'+
        '<div class="cell"><p id="SB_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Sa</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="SA_cell0">0</p></div>'+
        '<div class="cell"><p id="SA_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="SA_cell1">0</p></div>'+
        '<div class="cell"><p id="SA_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="SA_cell3">0</p></div>'+
        '<div class="cell"><p id="SA_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="SA_cell2">0</p></div>'+
        '<div class="cell"><p id="SA_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Rc</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="RC_cell0">0</p></div>'+
        '<div class="cell"><p id="RC_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="RC_cell1">0</p></div>'+
        '<div class="cell"><p id="RC_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="RC_cell3">0</p></div>'+
        '<div class="cell"><p id="RC_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="RC_cell2">0</p></div>'+
        '<div class="cell"><p id="RC_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Rb</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="RB_cell0">0</p></div>'+
        '<div class="cell"><p id="RB_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="RB_cell1">0</p></div>'+
        '<div class="cell"><p id="RB_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="RB_cell3">0</p></div>'+
        '<div class="cell"><p id="RB_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="RB_cell2">0</p></div>'+
        '<div class="cell"><p id="RB_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Ra</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="RA_cell0">0</p></div>'+
        '<div class="cell"><p id="RA_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="RA_cell1">0</p></div>'+
        '<div class="cell"><p id="RA_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="RA_cell3">0</p></div>'+
        '<div class="cell"><p id="RA_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="RA_cell2">0</p></div>'+
        '<div class="cell"><p id="RA_cell6">0</p></div>'+
        '</div>'+
        '<div class="panel panel-primary" style="margin-top: 40px">'+
        '<div class="panel-heading">'+
        '<h3 class="panel-title">Simplified Boolean Expressions</h3>'+
        '</div>'+
        '<div class="panel-body" id="design_output"></div>'+
        '</div>'+
        '</div>'+
        '</div>',
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
                designOutput.innerHTML += "Sc: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (var j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | "

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
                designOutput.innerHTML += "Sb: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Sa: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Rc: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Rb: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Ra: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

                }

                designOutput.innerHTML += "<br>";

            }

        }

    });
}

// J-K Counter -----------------------------------------------------------------------------

function showJKCounter() {

    new Vue ({
        el: '#placeholder',
        template: '<div class="container-fluid" id="placeholder">'+
        '<div class="row">'+
        '<div class="col-sm-4 col-md-3 sidebar">'+
        '<ul class="nav nav-sidebar">'+
        '<li class="sub-header">Counter Design</li>'+
        '<li id="select_SR_counter" onclick="showSRCounter()"><a href="#">S-R Counter</a></li>'+
        '<li id="select_JK_counter" onclick="showJKCounter()"><a href="#">J-K Counter</a></li>'+
        '<li id="select_D_counter" onclick="showDCounter()"><a href="#">D Counter</a></li>'+
        '<li id="select_T_counter" onclick="showTCounter()"><a href="#">T Counter</a></li>'+
        '<li class="sub-header">Other Design Problems</li>'+
        '<li id="select_7S_Display" onclick="show7SegDisplay()"><a href="#">7-Segment Display</a></li>'+
        '</ul>'+
        '</div>'+
        '<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main" id="canvas">'+
        '<h1 class="page-header">J-K Counter Design</h1>'+
        '<div class="table-responsive">'+
        '<form name="jk-counter-design" id="jk_counter_design">'+
        '<table class="table table-striped">'+
        '<thead>'+
        '<tr>'+
        '<th>C</th>'+
        '<th>B</th>'+
        '<th>A</th>'+
        '<th>C+</th>'+
        '<th>B+</th>'+
        '<th>A+</th>'+
        '<th>Jc</th>'+
        '<th>Kc</th>'+
        '<th>Jb</th>'+
        '<th>Kb</th>'+
        '<th>Ja</th>'+
        '<th>Ka</th>'+
        '</tr>'+
        '</thead>'+
        '<tbody>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td><select name="c0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Jc0"></td>'+
        '<td id="Kc0"></td>'+
        '<td id="Jb0"></td>'+
        '<td id="Kb0"></td>'+
        '<td id="Ja0"></td>'+
        '<td id="Ka0"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td><select name="c1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Jc1"></td>'+
        '<td id="Kc1"></td>'+
        '<td id="Jb1"></td>'+
        '<td id="Kb1"></td>'+
        '<td id="Ja1"></td>'+
        '<td id="Ka1"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td><select name="c2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Jc2"></td>'+
        '<td id="Kc2"></td>'+
        '<td id="Jb2"></td>'+
        '<td id="Kb2"></td>'+
        '<td id="Ja2"></td>'+
        '<td id="Ka2"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td><select name="c3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Jc3"></td>'+
        '<td id="Kc3"></td>'+
        '<td id="Jb3"></td>'+
        '<td id="Kb3"></td>'+
        '<td id="Ja3"></td>'+
        '<td id="Ka3"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td><select name="c4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Jc4"></td>'+
        '<td id="Kc4"></td>'+
        '<td id="Jb4"></td>'+
        '<td id="Kb4"></td>'+
        '<td id="Ja4"></td>'+
        '<td id="Ka4"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td><select name="c5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Jc5"></td>'+
        '<td id="Kc5"></td>'+
        '<td id="Jb5"></td>'+
        '<td id="Kb5"></td>'+
        '<td id="Ja5"></td>'+
        '<td id="Ka5"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td><select name="c6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Jc6"></td>'+
        '<td id="Kc6"></td>'+
        '<td id="Jb6"></td>'+
        '<td id="Kb6"></td>'+
        '<td id="Ja6"></td>'+
        '<td id="Ka6"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td><select name="c7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Jc7"></td>'+
        '<td id="Kc7"></td>'+
        '<td id="Jb7"></td>'+
        '<td id="Kb7"></td>'+
        '<td id="Ja7"></td>'+
        '<td id="Ka7"></td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '<input class="btn btn-primary" v-on:click="designCounter" type="submit" name="submit" value="Set Up Counter Design">'+
        '</form>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3">'+
        '<div class="km-container">'+
        '<p class="km-label">Jc</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="JC_cell0">0</p></div>'+
        '<div class="cell"><p id="JC_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="JC_cell1">0</p></div>'+
        '<div class="cell"><p id="JC_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="JC_cell3">0</p></div>'+
        '<div class="cell"><p id="JC_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="JC_cell2">0</p></div>'+
        '<div class="cell"><p id="JC_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Jb</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="JB_cell0">0</p></div>'+
        '<div class="cell"><p id="JB_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="JB_cell1">0</p></div>'+
        '<div class="cell"><p id="JB_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="JB_cell3">0</p></div>'+
        '<div class="cell"><p id="JB_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="JB_cell2">0</p></div>'+
        '<div class="cell"><p id="JB_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Ja</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="JA_cell0">0</p></div>'+
        '<div class="cell"><p id="JA_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="JA_cell1">0</p></div>'+
        '<div class="cell"><p id="JA_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="JA_cell3">0</p></div>'+
        '<div class="cell"><p id="JA_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="JA_cell2">0</p></div>'+
        '<div class="cell"><p id="JA_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Kc</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="KC_cell0">0</p></div>'+
        '<div class="cell"><p id="KC_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="KC_cell1">0</p></div>'+
        '<div class="cell"><p id="KC_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="KC_cell3">0</p></div>'+
        '<div class="cell"><p id="KC_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="KC_cell2">0</p></div>'+
        '<div class="cell"><p id="KC_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Kb</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="KB_cell0">0</p></div>'+
        '<div class="cell"><p id="KB_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="KB_cell1">0</p></div>'+
        '<div class="cell"><p id="KB_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="KB_cell3">0</p></div>'+
        '<div class="cell"><p id="KB_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="KB_cell2">0</p></div>'+
        '<div class="cell"><p id="KB_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Ka</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="KA_cell0">0</p></div>'+
        '<div class="cell"><p id="KA_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="KA_cell1">0</p></div>'+
        '<div class="cell"><p id="KA_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="KA_cell3">0</p></div>'+
        '<div class="cell"><p id="KA_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="KA_cell2">0</p></div>'+
        '<div class="cell"><p id="KA_cell6">0</p></div>'+
        '</div>'+
        '<div class="panel panel-primary" style="margin-top: 40px">'+
        '<div class="panel-heading">'+
        '<h3 class="panel-title">Simplified Boolean Expressions</h3>'+
        '</div>'+
        '<div class="panel-body" id="design_output"></div>'+
        '</div>'+
        '</div>'+
        '</div>',
        methods: {
            designCounter: function(e) {

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
                designOutput.innerHTML += "Jc: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (var j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | "

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
                designOutput.innerHTML += "Jb: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Ja: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Kc: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Kb: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Ka: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

                }

                designOutput.innerHTML += "<br>";

            }

        }

    });

}

// D Counter -------------------------------------------------------------------------------

function showDCounter() {

    new Vue ({
        el: '#placeholder',
        template: '<div class="container-fluid" id="placeholder">'+
        '<div class="row">'+
        '<div class="col-sm-4 col-md-3 sidebar">'+
        '<ul class="nav nav-sidebar">'+
        '<li class="sub-header">Counter Design</li>'+
        '<li id="select_SR_counter" onclick="showSRCounter()"><a href="#">S-R Counter</a></li>'+
        '<li id="select_JK_counter" onclick="showJKCounter()"><a href="#">J-K Counter</a></li>'+
        '<li id="select_D_counter" onclick="showDCounter()"><a href="#">D Counter</a></li>'+
        '<li id="select_T_counter" onclick="showTCounter()"><a href="#">T Counter</a></li>'+
        '<li class="sub-header">Other Design Problems</li>'+
        '<li id="select_7S_Display" onclick="show7SegDisplay()"><a href="#">7-Segment Display</a></li>'+
        '</ul>'+
        '</div>'+
        '<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main" id="canvas">'+
        '<h1 class="page-header">D Counter Design</h1>'+
        '<div class="table-responsive">'+
        '<form name="d-counter-design" id="d_counter_design">'+
        '<table class="table table-striped">'+
        '<thead>'+
        '<tr>'+
        '<th>C</th>'+
        '<th>B</th>'+
        '<th>A</th>'+
        '<th>C+</th>'+
        '<th>B+</th>'+
        '<th>A+</th>'+
        '</tr>'+
        '</thead>'+
        '<tbody>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td><select name="c0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td><select name="c1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td><select name="c2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td><select name="c3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td><select name="c4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td><select name="c5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td><select name="c6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td><select name="c7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '<input class="btn btn-primary" v-on:click="designCounter" type="submit" name="submit" value="Set Up Counter Design">'+
        '</form>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3">'+
        '<div class="km-container">'+
        '<p class="km-label">C+</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="DC_cell0">0</p></div>'+
        '<div class="cell"><p id="DC_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="DC_cell1">0</p></div>'+
        '<div class="cell"><p id="DC_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="DC_cell3">0</p></div>'+
        '<div class="cell"><p id="DC_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="DC_cell2">0</p></div>'+
        '<div class="cell"><p id="DC_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">B+</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="DB_cell0">0</p></div>'+
        '<div class="cell"><p id="DB_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="DB_cell1">0</p></div>'+
        '<div class="cell"><p id="DB_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="DB_cell3">0</p></div>'+
        '<div class="cell"><p id="DB_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="DB_cell2">0</p></div>'+
        '<div class="cell"><p id="DB_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">A+</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="DA_cell0">0</p></div>'+
        '<div class="cell"><p id="DA_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="DA_cell1">0</p></div>'+
        '<div class="cell"><p id="DA_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="DA_cell3">0</p></div>'+
        '<div class="cell"><p id="DA_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="DA_cell2">0</p></div>'+
        '<div class="cell"><p id="DA_cell6">0</p></div>'+
        '</div>'+
        '<div class="panel panel-primary" style="margin-top: 40px">'+
        '<div class="panel-heading">'+
        '<h3 class="panel-title">Simplified Boolean Expressions</h3>'+
        '</div>'+
        '<div class="panel-body" id="design_output"></div>'+
        '</div>'+
        '</div>'+
        '</div>',
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
                designOutput.innerHTML += "Dc: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (var j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | "

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
                designOutput.innerHTML += "Db: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Da: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

                }

                designOutput.innerHTML += "<br>";

            }

        }

    });

}

// T Counter -------------------------------------------------------------------------------

function showTCounter() {

    new Vue ({
        el: '#placeholder',
        template: '<div class="container-fluid" id="placeholder">'+
        '<div class="row">'+
        '<div class="col-sm-4 col-md-3 sidebar">'+
        '<ul class="nav nav-sidebar">'+
        '<li class="sub-header">Counter Design</li>'+
        '<li id="select_SR_counter" onclick="showSRCounter()"><a href="#">S-R Counter</a></li>'+
        '<li id="select_JK_counter" onclick="showJKCounter()"><a href="#">J-K Counter</a></li>'+
        '<li id="select_D_counter" onclick="showDCounter()"><a href="#">D Counter</a></li>'+
        '<li id="select_T_counter" onclick="showTCounter()"><a href="#">T Counter</a></li>'+
        '<li class="sub-header">Other Design Problems</li>'+
        '<li id="select_7S_Display" onclick="show7SegDisplay()"><a href="#">7-Segment Display</a></li>'+
        '</ul>'+
        '</div>'+
        '<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main" id="canvas">'+
        '<h1 class="page-header">T Counter Design</h1>'+
        '<div class="table-responsive">'+
        '<form name="t-counter-design" id="t_counter_design">'+
        '<table class="table table-striped">'+
        '<thead>'+
        '<tr>'+
        '<th>C</th>'+
        '<th>B</th>'+
        '<th>A</th>'+
        '<th>C+</th>'+
        '<th>B+</th>'+
        '<th>A+</th>'+
        '<th>Tc</th>'+
        '<th>Tb</th>'+
        '<th>Ta</th>'+
        '</tr>'+
        '</thead>'+
        '<tbody>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td><select name="c0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a0"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Tc0"></td>'+
        '<td id="Tb0"></td>'+
        '<td id="Ta0"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td><select name="c1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a1"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Tc1"></td>'+
        '<td id="Tb1"></td>'+
        '<td id="Ta1"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td><select name="c2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a2"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Tc2"></td>'+
        '<td id="Tb2"></td>'+
        '<td id="Ta2"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td><select name="c3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a3"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Tc3"></td>'+
        '<td id="Tb3"></td>'+
        '<td id="Ta3"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td>0</td>'+
        '<td><select name="c4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a4"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Tc4"></td>'+
        '<td id="Tb4"></td>'+
        '<td id="Ta4"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td>1</td>'+
        '<td><select name="c5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a5"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Tc5"></td>'+
        '<td id="Tb5"></td>'+
        '<td id="Ta5"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td>0</td>'+
        '<td><select name="c6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a6"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Tc6"></td>'+
        '<td id="Tb6"></td>'+
        '<td id="Ta6"></td>'+
        '</tr>'+
        '<tr>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td>1</td>'+
        '<td><select name="c7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="b7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td><select name="a7"><option>0</option>'+
        '<option>1</option>'+
        '<option>X</option></select></td>'+
        '<td id="Tc7"></td>'+
        '<td id="Tb7"></td>'+
        '<td id="Ta7"></td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '<input class="btn btn-primary" v-on:click="designCounter" type="submit" name="submit" value="Set Up Counter Design">'+
        '</form>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3">'+
        '<div class="km-container">'+
        '<p class="km-label">Tc</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="TC_cell0">0</p></div>'+
        '<div class="cell"><p id="TC_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="TC_cell1">0</p></div>'+
        '<div class="cell"><p id="TC_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="TC_cell3">0</p></div>'+
        '<div class="cell"><p id="TC_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="TC_cell2">0</p></div>'+
        '<div class="cell"><p id="TC_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Tb</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="TB_cell0">0</p></div>'+
        '<div class="cell"><p id="TB_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="TB_cell1">0</p></div>'+
        '<div class="cell"><p id="TB_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="TB_cell3">0</p></div>'+
        '<div class="cell"><p id="TB_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="TB_cell2">0</p></div>'+
        '<div class="cell"><p id="TB_cell6">0</p></div>'+
        '</div>'+
        '<div class="km-container">'+
        '<p class="km-label">Ta</p>'+
        '<div class="info-cell"><img src="../images/KMLabel3Var.png"></div>'+
        '<div class="info-cell"><p class="info-top">0</p></div>'+
        '<div class="info-cell"><p class="info-top">1</p></div>'+
        '<div class="info-cell"><p class="info-side">00</p></div>'+
        '<div class="cell"><p id="TA_cell0">0</p></div>'+
        '<div class="cell"><p id="TA_cell4">0</p></div>'+
        '<div class="info-cell"><p class="info-side">01</p></div>'+
        '<div class="cell"><p id="TA_cell1">0</p></div>'+
        '<div class="cell"><p id="TA_cell5">0</p></div>'+
        '<div class="info-cell"><p class="info-side">11</p></div>'+
        '<div class="cell"><p id="TA_cell3">0</p></div>'+
        '<div class="cell"><p id="TA_cell7">0</p></div>'+
        '<div class="info-cell"><p class="info-side">10</p></div>'+
        '<div class="cell"><p id="TA_cell2">0</p></div>'+
        '<div class="cell"><p id="TA_cell6">0</p></div>'+
        '</div>'+
        '<div class="panel panel-primary" style="margin-top: 40px">'+
        '<div class="panel-heading">'+
        '<h3 class="panel-title">Simplified Boolean Expressions</h3>'+
        '</div>'+
        '<div class="panel-body" id="design_output"></div>'+
        '</div>'+
        '</div>'+
        '</div>',
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
                designOutput.innerHTML += "Tc: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (var j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | "

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
                designOutput.innerHTML += "Tb: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

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
                designOutput.innerHTML += "Ta: " + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 8) {
                    designOutput.innerHTML += "Full Karnaugh Map";
                }

                // Print debugged output of groups in cell numbers separated by a line break
                for (i = 0; i < groupIndex; i++) {

                    for (j = 0; j < groups[i].length; j++) {
                        designOutput.innerHTML += "" + groups[i][j].cellNum + " ";
                    }

                    designOutput.innerHTML += " | ";

                }

                designOutput.innerHTML += "<br>";

            }

        }

    });

}