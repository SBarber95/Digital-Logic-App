<template>
    <div>
        <div class="km-container-4var" id="km_placeholder">
            <form id="four_var_KM" name="four_var_KM">
                <div class="info-cell"><img src="../../images/4VarKMLogo.png"></div>
                <div class="info-cell"><p class="info-top" style="left: 33%">00</p></div>
                <div class="info-cell"><p class="info-top" style="left: 33%">01</p></div>
                <div class="info-cell"><p class="info-top" style="left: 33%">11</p></div>
                <div class="info-cell"><p class="info-top" style="left: 33%">10</p></div>
                <div class="info-cell"><p class="info-side">00</p></div>
                <div class="cell"><select name="cell0">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell4">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell12">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell8">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="info-cell"><p class="info-side">01</p></div>
                <div class="cell"><select name="cell1">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell5">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell13">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell9">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="info-cell"><p class="info-side">11</p></div>
                <div class="cell"><select name="cell3">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell7">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell15">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell11">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="info-cell"><p class="info-side">10</p></div>
                <div class="cell"><select name="cell2">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell6">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell14">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                <div class="cell"><select name="cell10">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="X">X</option>
                    </select></div>
                </form>
        </div>
        <div class="inputs">
            <div class="md-form flex-center">
                <button v-on:click="simplifyMinterms4Var" class="btn btn-mdb first-input-4-var"
                        name="submit">Simplify (Minterms)</button>
                <button v-on:click="simplifyMaxterms4Var" class="btn btn-mdb second-input-4-var"
                        name="submit">Simplify (Maxterms)</button>
            </div>
            <div class="card">
                <div class="card-header mdb-color white-text">
                    Simplified Boolean Expression
                </div>
                <div class="card-body">
                    <p id="KM_Output" class="card-text">Output will appear here.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    class KarnaughMapCell4Var {
        constructor(cellNum, cellValue, isGrouped) {
            this.cellNum = cellNum;
            this.cellValue = cellValue;
            this.isGrouped = isGrouped;
        }
    }
    export default {
        mounted () {
            var header = document.getElementById("km_header");
            header.innerHTML = '<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#KMModal">'+
                'Instructions!'+
                '</button>'+
                '<div class="modal fade" id="KMModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
                '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
                '<h4 class="modal-title" id="KMTitle">Karnaugh Map Instructions</h4>'+
                '</div>'+
                '<div class="modal-body">'+
                'Fill in your desired values in the drop-down boxes. Once you fill in your values, '+
                'click "Simplify Minterms" or "Simplify Maxterms". Keep in mind that minterms group '+
                '1s and maxterms group 0s. The output box will show its generated simplified expression '+
                'and a list of the groupings by cell number.'+
                '</div>'+
                '<div class="modal-footer">'+
                '<button class="btn btn-mdb" data-dismiss="modal">Close</button>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>4-Variable Karnaugh Map';
        },
        methods: {
            simplifyMinterms4Var: function (e) {

                e.preventDefault();

                var kmOutput = document.getElementById("KM_Output");
                var fourVarKMForm = document.getElementById("four_var_KM");

                // Grab cell value inputs and place in cell objects
                var cell0 = new KarnaughMapCell4Var(0, fourVarKMForm.cell0.value, false);
                var cell1 = new KarnaughMapCell4Var(1, fourVarKMForm.cell1.value, false);
                var cell2 = new KarnaughMapCell4Var(2, fourVarKMForm.cell2.value, false);
                var cell3 = new KarnaughMapCell4Var(3, fourVarKMForm.cell3.value, false);
                var cell4 = new KarnaughMapCell4Var(4, fourVarKMForm.cell4.value, false);
                var cell5 = new KarnaughMapCell4Var(5, fourVarKMForm.cell5.value, false);
                var cell6 = new KarnaughMapCell4Var(6, fourVarKMForm.cell6.value, false);
                var cell7 = new KarnaughMapCell4Var(7, fourVarKMForm.cell7.value, false);
                var cell8 = new KarnaughMapCell4Var(8, fourVarKMForm.cell8.value, false);
                var cell9 = new KarnaughMapCell4Var(9, fourVarKMForm.cell9.value, false);
                var cell10 = new KarnaughMapCell4Var(10, fourVarKMForm.cell10.value, false);
                var cell11 = new KarnaughMapCell4Var(11, fourVarKMForm.cell11.value, false);
                var cell12 = new KarnaughMapCell4Var(12, fourVarKMForm.cell12.value, false);
                var cell13 = new KarnaughMapCell4Var(13, fourVarKMForm.cell13.value, false);
                var cell14 = new KarnaughMapCell4Var(14, fourVarKMForm.cell14.value, false);
                var cell15 = new KarnaughMapCell4Var(15, fourVarKMForm.cell15.value, false);

                var groups = [[]];
                var groupIndex = 0;

                var potential8Groups = [[cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7],
                    [cell0, cell1, cell4, cell5, cell8, cell9, cell12, cell13],
                    [cell0, cell1, cell2, cell3, cell8, cell9, cell10, cell11],
                    [cell0, cell12, cell2, cell8, cell4, cell14, cell6, cell10],
                    [cell1, cell3, cell5, cell7, cell9, cell11, cell13, cell15],
                    [cell12, cell13, cell14, cell15, cell4, cell5, cell6, cell7],
                    [cell8, cell9, cell10, cell11, cell12, cell13, cell14, cell15],
                    [cell2, cell3, cell6, cell7, cell10, cell11, cell14, cell15]];
                var simpleMins8Group = ["A' ", "C' ", "B' ", "D' ", "D ", "B ", "A ", "C "];

                var potential4Groups = [[cell0, cell2, cell8, cell10], [cell0, cell4, cell12, cell8],
                    [cell1, cell5, cell13, cell9], [cell3, cell7, cell15, cell11],
                    [cell2, cell6, cell14, cell10], [cell0, cell1, cell2, cell3],
                    [cell4, cell5, cell6, cell7], [cell12, cell13, cell14, cell15],
                    [cell8, cell9, cell10, cell11], [cell0, cell2, cell4, cell6],
                    [cell4, cell6, cell12, cell14], [cell8, cell10, cell12, cell14],
                    [cell0, cell1, cell8, cell9], [cell1, cell3, cell9, cell11],
                    [cell2, cell3, cell10, cell11], [cell0, cell1, cell4, cell5],
                    [cell4, cell5, cell12, cell13], [cell8, cell9, cell12, cell13],
                    [cell1, cell3, cell5, cell7], [cell5, cell7, cell13, cell15],
                    [cell9, cell11, cell13, cell15], [cell2, cell3, cell6, cell7],
                    [cell6, cell7, cell14, cell15], [cell10, cell11, cell14, cell15]];
                var simpleMins4Group = ["B'D' ", "C'D' ", "C'D ", "CD ", "CD' ", "A'B' ", "A'B ", "AB ", "AB' ", "A'D' ",
                    "BD' ", "AD' ", "B'C' ", "B'D ", "B'C ", "A'C' ", "BC' ", "AC' ", "A'D ",
                    "BD ", "AD ", "A'C ", "BC ", "AC "];

                var potential2Groups = [[cell0, cell2], [cell4, cell6], [cell12, cell14], [cell8, cell10],
                    [cell0, cell8], [cell1, cell9], [cell3, cell11], [cell2, cell10],
                    [cell0, cell4], [cell4, cell12], [cell12, cell8], [cell1, cell5],
                    [cell5, cell13], [cell13, cell9], [cell8, cell9], [cell9, cell11],
                    [cell3, cell7], [cell7, cell15], [cell15, cell11], [cell2, cell6],
                    [cell6, cell14], [cell14, cell10], [cell0, cell1], [cell1, cell3],
                    [cell3, cell2], [cell4, cell5], [cell5, cell7], [cell7, cell6],
                    [cell12, cell13], [cell13, cell15], [cell15, cell14], [cell11, cell10]];
                var simpleMins2Group = ["A'B'D' ", "A'BD' ", "ABD' ", "AB'D' ", "B'C'D' ", "B'C'D ", "B'CD ",
                    "B'CD' ", "A'C'D' ", "BC'D' ", "AC'D' ", "A'C'D ", "BC'D ", "AC'D ", "AB'C' ",
                    "AB'D ", "A'CD ", "BCD ", "ACD ", "A'CD' ", "BCD' ", "ACD' ", "A'B'C' ",
                    "A'B'D ", "A'B'C ", "A'BC' ", "A'BD ", "A'BC ", "ABC' ", "ABD ",
                    "ABC ", "AB'C "];

                var minsIndex = 0;

                // For building the simplified boolean expression
                var newBooleanExp = "";

                // Reset Output
                kmOutput.innerHTML = "";

                // Check for largest group (Group of 16)
                if ((cell0.cellValue == "1" || cell0.cellValue == "X") && (cell1.cellValue == "1" || cell1.cellValue == "X")
                    && (cell2.cellValue == "1" || cell2.cellValue == "X") && (cell3.cellValue == "1" || cell3.cellValue == "X")
                    && (cell4.cellValue == "1" || cell4.cellValue == "X") && (cell5.cellValue == "1" || cell5.cellValue == "X")
                    && (cell6.cellValue == "1" || cell6.cellValue == "X") && (cell7.cellValue == "1" || cell7.cellValue == "X")
                    && (cell8.cellValue == "1" || cell8.cellValue == "X") && (cell9.cellValue == "1" || cell9.cellValue == "X")
                    && (cell10.cellValue == "1" || cell10.cellValue == "X") && (cell11.cellValue == "1" || cell11.cellValue == "X")
                    && (cell12.cellValue == "1" || cell12.cellValue == "X") && (cell13.cellValue == "1" || cell13.cellValue == "X")
                    && (cell14.cellValue == "1" || cell14.cellValue == "X") && (cell15.cellValue == "1" || cell15.cellValue == "X")) {

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

                else {

                    // Search for Groups of 8
                    for (var i = 0; i < potential8Groups.length; i++) {

                        // TODO: Fix redundant groups made with don't cares (8-Group)
                        if ((potential8Groups[i][0].cellValue == "1" || potential8Groups[i][0].cellValue == "X") &&
                            (potential8Groups[i][1].cellValue == "1" || potential8Groups[i][1].cellValue == "X") &&
                            (potential8Groups[i][2].cellValue == "1" || potential8Groups[i][2].cellValue == "X") &&
                            (potential8Groups[i][3].cellValue == "1" || potential8Groups[i][3].cellValue == "X") &&
                            (potential8Groups[i][4].cellValue == "1" || potential8Groups[i][4].cellValue == "X") &&
                            (potential8Groups[i][5].cellValue == "1" || potential8Groups[i][5].cellValue == "X") &&
                            (potential8Groups[i][6].cellValue == "1" || potential8Groups[i][6].cellValue == "X") &&
                            (potential8Groups[i][7].cellValue == "1" || potential8Groups[i][7].cellValue == "X") &&
                            (!potential8Groups[i][0].isGrouped || !potential8Groups[i][1].isGrouped ||
                                !potential8Groups[i][2].isGrouped || !potential8Groups[i][3].isGrouped ||
                                !potential8Groups[i][4].isGrouped || !potential8Groups[i][5].isGrouped ||
                                !potential8Groups[i][6].isGrouped || !potential8Groups[i][7].isGrouped)) {

                            potential8Groups[i][0].isGrouped = true;
                            potential8Groups[i][1].isGrouped = true;
                            potential8Groups[i][2].isGrouped = true;
                            potential8Groups[i][3].isGrouped = true;
                            potential8Groups[i][4].isGrouped = true;
                            potential8Groups[i][5].isGrouped = true;
                            potential8Groups[i][6].isGrouped = true;
                            potential8Groups[i][7].isGrouped = true;

                            groups[groupIndex] = potential8Groups[i];
                            groupIndex++;

                            newBooleanExp += simpleMins8Group[minsIndex];
                            minsIndex++;

                        }
                        else {
                            minsIndex++;
                        }

                    }

                    minsIndex = 0;

                    // Search for Groups of 4
                    for (i = 0; i < potential4Groups.length; i++) {

                        // TODO: Fix redundant groups made with don't cares
                        if ((potential4Groups[i][0].cellValue == "1" || potential4Groups[i][0].cellValue == "X") &&
                            (potential4Groups[i][1].cellValue == "1" || potential4Groups[i][1].cellValue == "X") &&
                            (potential4Groups[i][2].cellValue == "1" || potential4Groups[i][2].cellValue == "X") &&
                            (potential4Groups[i][3].cellValue == "1" || potential4Groups[i][3].cellValue == "X") &&
                            (!potential4Groups[i][0].isGrouped || !potential4Groups[i][1].isGrouped ||
                                !potential4Groups[i][2].isGrouped || !potential4Groups[i][3].isGrouped)) {

                            if (potential4Groups[i][0] == "X" && potential4Groups[i][1] == "X" &&
                                potential4Groups[i][2] == "X" && potential4Groups[i][3] == "X") {
                                // Do nothing
                                minsIndex++;
                            }
                            else {
                                potential4Groups[i][0].isGrouped = true;
                                potential4Groups[i][1].isGrouped = true;
                                potential4Groups[i][2].isGrouped = true;
                                potential4Groups[i][3].isGrouped = true;

                                groups[groupIndex] = potential4Groups[i];
                                groupIndex++;

                                newBooleanExp += simpleMins4Group[minsIndex];
                                minsIndex++;
                            }

                        }
                        else {
                            minsIndex++;
                        }

                    }

                    minsIndex = 0;

                    // Search for Groups of 2
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
                var cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8,
                    cell9, cell10, cell11, cell12, cell13, cell14, cell15];
                var isolatedCellMinterms = ["A'B'C'D'", "A'B'C'D", "A'B'CD'", "A'B'CD", "A'BC'D'", "A'BC'D", "A'BCD'", "A'BCD", "AB'C'D'",
                    "AB'C'D", "AB'CD'", "AB'CD", "ABC'D'", "ABC'D", "ABCD'", "ABCD"];

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

                if (groups[0].length == 16) {
                    kmOutput.innerHTML += "All cells";
                }

                if (groups[0].length != 16) {

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

            // Simplifies Maxterms for the 4-Variable Karnaugh Map -------------------------
            simplifyMaxterms4Var: function(e) {

                e.preventDefault();

                var kmOutput = document.getElementById("KM_Output");
                var fourVarKMForm = document.getElementById("four_var_KM");

                // Grab cell value inputs and place in cell objects
                var cell0 = new KarnaughMapCell4Var(0, fourVarKMForm.cell0.value, false);
                var cell1 = new KarnaughMapCell4Var(1, fourVarKMForm.cell1.value, false);
                var cell2 = new KarnaughMapCell4Var(2, fourVarKMForm.cell2.value, false);
                var cell3 = new KarnaughMapCell4Var(3, fourVarKMForm.cell3.value, false);
                var cell4 = new KarnaughMapCell4Var(4, fourVarKMForm.cell4.value, false);
                var cell5 = new KarnaughMapCell4Var(5, fourVarKMForm.cell5.value, false);
                var cell6 = new KarnaughMapCell4Var(6, fourVarKMForm.cell6.value, false);
                var cell7 = new KarnaughMapCell4Var(7, fourVarKMForm.cell7.value, false);
                var cell8 = new KarnaughMapCell4Var(8, fourVarKMForm.cell8.value, false);
                var cell9 = new KarnaughMapCell4Var(9, fourVarKMForm.cell9.value, false);
                var cell10 = new KarnaughMapCell4Var(10, fourVarKMForm.cell10.value, false);
                var cell11 = new KarnaughMapCell4Var(11, fourVarKMForm.cell11.value, false);
                var cell12 = new KarnaughMapCell4Var(12, fourVarKMForm.cell12.value, false);
                var cell13 = new KarnaughMapCell4Var(13, fourVarKMForm.cell13.value, false);
                var cell14 = new KarnaughMapCell4Var(14, fourVarKMForm.cell14.value, false);
                var cell15 = new KarnaughMapCell4Var(15, fourVarKMForm.cell15.value, false);

                var groups = [[]];
                var groupIndex = 0;

                var potential8Groups = [[cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7],
                    [cell0, cell1, cell4, cell5, cell8, cell9, cell12, cell13],
                    [cell0, cell1, cell2, cell3, cell8, cell9, cell10, cell11],
                    [cell0, cell12, cell2, cell8, cell4, cell14, cell6, cell10],
                    [cell1, cell3, cell5, cell7, cell9, cell11, cell13, cell15],
                    [cell12, cell13, cell14, cell15, cell4, cell5, cell6, cell7],
                    [cell8, cell9, cell10, cell11, cell12, cell13, cell14, cell15],
                    [cell2, cell3, cell6, cell7, cell10, cell11, cell14, cell15]];
                var simpleMins8Group = ["A ", "C ", "B ", "D ", "D' ", "B' ", "A' ", "C' "];

                var potential4Groups = [[cell0, cell2, cell8, cell10], [cell0, cell4, cell12, cell8],
                    [cell1, cell5, cell13, cell9], [cell3, cell7, cell15, cell11],
                    [cell2, cell6, cell14, cell10], [cell0, cell1, cell2, cell3],
                    [cell4, cell5, cell6, cell7], [cell12, cell13, cell14, cell15],
                    [cell8, cell9, cell10, cell11], [cell0, cell2, cell4, cell6],
                    [cell4, cell6, cell12, cell14], [cell8, cell10, cell12, cell14],
                    [cell0, cell1, cell8, cell9], [cell1, cell3, cell9, cell11],
                    [cell2, cell3, cell10, cell11], [cell0, cell1, cell4, cell5],
                    [cell4, cell5, cell12, cell13], [cell8, cell9, cell12, cell13],
                    [cell1, cell3, cell5, cell7], [cell5, cell7, cell13, cell15],
                    [cell9, cell11, cell13, cell15], [cell2, cell3, cell6, cell7],
                    [cell6, cell7, cell14, cell15], [cell10, cell11, cell14, cell15]];
                var simpleMins4Group = ["(B + D) ", "(C + D) ", "(C + D') ", "(C' + D') ", "(C' + D) ", "(A + B) ",
                    "(A + B') ", "(A' + B') ", "(A' + B) ", "(A + D) ", "(B' + D) ", "(A' + D) ", "(B + C) ",
                    "(B + D') ", "(B + C') ", "(A + C) ", "(B' + C) ", "(A' + C) ", "(A + D') ",
                    "(B' + D') ", "(A' + D') ", "(A + C') ", "(B' + C') ", "(A' + C') "];

                var potential2Groups = [[cell0, cell2], [cell4, cell6], [cell12, cell14], [cell8, cell10],
                    [cell0, cell8], [cell1, cell9], [cell3, cell11], [cell2, cell10],
                    [cell0, cell4], [cell4, cell12], [cell12, cell8], [cell1, cell5],
                    [cell5, cell13], [cell13, cell9], [cell8, cell9], [cell9, cell11],
                    [cell3, cell7], [cell7, cell15], [cell15, cell11], [cell2, cell6],
                    [cell6, cell14], [cell14, cell10], [cell0, cell1], [cell1, cell3],
                    [cell3, cell2], [cell4, cell5], [cell5, cell7], [cell7, cell6],
                    [cell12, cell13], [cell13, cell15], [cell15, cell14], [cell11, cell10]];
                var simpleMins2Group = ["(A + B + D) ", "(A + B' + D) ", "(A' + B' + D) ", "(A' + B + D) ", "(B + C + D) ",
                    "(B + C + D') ", "(B + C' + D') ", "(B + C' + D) ", "(A + C + D) ", "(B' + C + D) ",
                    "(A' + C + D) ", "(A + C + D') ", "(B' + C + D') ", "(A' + C + D') ", "(A' + B + C) ",
                    "(A' + B + D') ", "(A + C' + D') ", "(B' + C' + D') ", "(A' + C' + D') ", "(A + C' + D) ",
                    "(B' + C' + D) ", "(A' + C' + D) ", "(A + B + C) ", "(A + B + D') ", "(A + B + C') ",
                    "(A + B' + C) ", "(A + B' + D') ", "(A + B' + C') ", "(A' + B' + C) ", "(A' + B' + D') ",
                    "(A' + B' + C') ", "(A' + B + C') "];

                var maxIndex = 0;

                // For building the simplified boolean expression
                var newBooleanExp = "";

                // Reset Output
                kmOutput.innerHTML = "";

                // Check for largest group (Group of 16)
                if ((cell0.cellValue == "0" || cell0.cellValue == "X") && (cell1.cellValue == "0" || cell1.cellValue == "X")
                    && (cell2.cellValue == "0" || cell2.cellValue == "X") && (cell3.cellValue == "0" || cell3.cellValue == "X")
                    && (cell4.cellValue == "0" || cell4.cellValue == "X") && (cell5.cellValue == "0" || cell5.cellValue == "X")
                    && (cell6.cellValue == "0" || cell6.cellValue == "X") && (cell7.cellValue == "0" || cell7.cellValue == "X")
                    && (cell8.cellValue == "0" || cell8.cellValue == "X") && (cell9.cellValue == "0" || cell9.cellValue == "X")
                    && (cell10.cellValue == "0" || cell10.cellValue == "X") && (cell11.cellValue == "0" || cell11.cellValue == "X")
                    && (cell12.cellValue == "0" || cell12.cellValue == "X") && (cell13.cellValue == "0" || cell13.cellValue == "X")
                    && (cell14.cellValue == "0" || cell14.cellValue == "X") && (cell15.cellValue == "0" || cell15.cellValue == "X")) {

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

                else {

                    // Search for Groups of 8
                    for (var i = 0; i < potential8Groups.length; i++) {

                        // TODO: Fix redundant groups made with don't cares (8-Group)
                        if ((potential8Groups[i][0].cellValue == "0" || potential8Groups[i][0].cellValue == "X") &&
                            (potential8Groups[i][1].cellValue == "0" || potential8Groups[i][1].cellValue == "X") &&
                            (potential8Groups[i][2].cellValue == "0" || potential8Groups[i][2].cellValue == "X") &&
                            (potential8Groups[i][3].cellValue == "0" || potential8Groups[i][3].cellValue == "X") &&
                            (potential8Groups[i][4].cellValue == "0" || potential8Groups[i][4].cellValue == "X") &&
                            (potential8Groups[i][5].cellValue == "0" || potential8Groups[i][5].cellValue == "X") &&
                            (potential8Groups[i][6].cellValue == "0" || potential8Groups[i][6].cellValue == "X") &&
                            (potential8Groups[i][7].cellValue == "0" || potential8Groups[i][7].cellValue == "X") &&
                            (!potential8Groups[i][0].isGrouped || !potential8Groups[i][1].isGrouped ||
                                !potential8Groups[i][2].isGrouped || !potential8Groups[i][3].isGrouped ||
                                !potential8Groups[i][4].isGrouped || !potential8Groups[i][5].isGrouped ||
                                !potential8Groups[i][6].isGrouped || !potential8Groups[i][7].isGrouped)) {

                            potential8Groups[i][0].isGrouped = true;
                            potential8Groups[i][1].isGrouped = true;
                            potential8Groups[i][2].isGrouped = true;
                            potential8Groups[i][3].isGrouped = true;
                            potential8Groups[i][4].isGrouped = true;
                            potential8Groups[i][5].isGrouped = true;
                            potential8Groups[i][6].isGrouped = true;
                            potential8Groups[i][7].isGrouped = true;

                            groups[groupIndex] = potential8Groups[i];
                            groupIndex++;

                            newBooleanExp += simpleMins8Group[maxIndex];
                            maxIndex++;

                        }
                        else {
                            maxIndex++;
                        }

                    }

                    maxIndex = 0;

                    // Search for Groups of 4
                    for (i = 0; i < potential4Groups.length; i++) {

                        // TODO: Fix redundant groups made with don't cares
                        if ((potential4Groups[i][0].cellValue == "0" || potential4Groups[i][0].cellValue == "X") &&
                            (potential4Groups[i][1].cellValue == "0" || potential4Groups[i][1].cellValue == "X") &&
                            (potential4Groups[i][2].cellValue == "0" || potential4Groups[i][2].cellValue == "X") &&
                            (potential4Groups[i][3].cellValue == "0" || potential4Groups[i][3].cellValue == "X") &&
                            (!potential4Groups[i][0].isGrouped || !potential4Groups[i][1].isGrouped ||
                                !potential4Groups[i][2].isGrouped || !potential4Groups[i][3].isGrouped)) {

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

                            newBooleanExp += simpleMins4Group[maxIndex];
                            maxIndex++;

                        }
                        else {
                            maxIndex++;
                        }

                    }

                    maxIndex = 0;

                    // Search for Groups of 2
                    for (i = 0; i < potential2Groups.length; i++) {

                        if ((potential2Groups[i][0].cellValue == "0" || potential2Groups[i][0].cellValue == "X") &&
                            (potential2Groups[i][1].cellValue == "0" || potential2Groups[i][1].cellValue == "X") &&
                            (!potential2Groups[i][0].isGrouped || !potential2Groups[i][1].isGrouped)) {

                            if ((potential2Groups[i][0].cellValue == "X" && potential2Groups[i][1].cellValue == "X") ||
                                ((potential2Groups[i][0].isGrouped && potential2Groups[i][0].cellValue == "0") &&
                                    potential2Groups[i][1].cellValue == "X") || ((potential2Groups[i][1].isGrouped &&
                                    potential2Groups[i][1].cellValue == "0") && potential2Groups[i][0].cellValue == "X")) {
                                // Do nothing as a group here would be unnecessary
                                maxIndex++;
                            }
                            else {

                                potential2Groups[i][0].isGrouped = true;
                                potential2Groups[i][1].isGrouped = true;

                                groups[groupIndex] = potential2Groups[i];
                                groupIndex++;

                                newBooleanExp += simpleMins2Group[maxIndex];
                                maxIndex++;

                            }

                        }
                        else {
                            maxIndex++;
                        }

                    }

                }

                // Accounts for isolated cells (Groups of 1)
                var cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8,
                    cell9, cell10, cell11, cell12, cell13, cell14, cell15];
                var isolatedCellMaxterms = ["(A + B + C + D)", "(A + B + C + D')", "(A + B' + C' + D)", "(A + B + C' + D')",
                    "(A + B' + C + D)", "(A + B' + C + D')", "(A + B' + C' + D)", "(A + B' + C' + D')",
                    "(A' + B + C + D)", "(A' + B + C + D')", "(A' + B + C' + D)", "(A' + B + C' + D')",
                    "(A' + B' + C + D)", "(A' + B' + C + D')", "(A' + B' + C' + D)", "(A' + B' + C' + D')"];

                for (i = 0; i < cells.length; i++) {

                    if (!cells[i].isGrouped && (cells[i].cellValue == "0")) {

                        groups[groupIndex] = [cells[i]];
                        groupIndex++;
                        newBooleanExp += isolatedCellMaxterms[i] + " ";

                    }

                }

                // Shows simplified boolean expression
                kmOutput.innerHTML += "" + newBooleanExp + "<br>Groups (Cell #s): ";

                if (groups[0].length == 16) {
                    kmOutput.innerHTML += "All cells";
                }

                if (groups[0].length != 16) {

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
    }
</script>

<style scoped>
    .km-container-4var {
        width: 500px;
        height: 500px;
        display: inline-block;
    }
    .cell {
        width: 95px;
        height: 95px;
        border: 3px solid #43494c;
        display: inline-flex;
    }
    .info-cell {
        width: 95px;
        height: 50px;
        display: inline-flex;
    }
    img {
        height: 70px;
    }
    .info-top {
        display: inline;
        position: relative;
        font-size: 30px;
        top: 25%;
        left: 45%;
        color: #D38D5F;
    }
    .info-side {
        display: inline;
        position: relative;
        font-size: 30px;
        top: 60%;
        left: 50%;
        color: #D38D5F;
    }
    select {
        display: inline;
        position: relative;
        height: 40%;
        font-size: 24px;
        color: #D38D5F;
        top: 30%;
        left: 28%;
    }
    input {
        margin-top: 8px;
        position: relative;
    }
    .inputs {
        float: right;
    }
    .card {
        width: 500px;
        padding: 0;
    }
    .card-header, .card-text {
        padding: 10px;
    }
</style>