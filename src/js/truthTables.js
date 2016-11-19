/**
 * Created by savannah on 11/19/2016.
 */

// Three Variable Truth Table Component ----------------------------
var threeVarTruthTable = new Vue({
    el: '.three-var-tt',
    template: '<div class="table-responsive" id="table-placeholder">' +
    '<form name="3_var_TT" id="3_var_TT">' +
    '<table class="table table-striped">' +
    '<thead>' +
    '<tr>' +
    '<th>A</th>' +
    '<th>B</th>' +
    '<th>C</th>' +
    '<th>Output</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr>' +
    '<td>0</td>' +
    '<td>0</td>' +
    '<td>0</td>' +
    '<td><select name="binary0">' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>' +
    '</select></td>' +
    '</tr>' +
    '<tr>' +
    '<td>0</td>' +
    '<td>0</td>' +
    '<td>1</td>' +
    '<td><select name="binary1">' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>' +
    '</select></td>' +
    '</tr>' +
    '<tr>' +
    '<td>0</td>' +
    '<td>1</td>' +
    '<td>0</td>' +
    '<td><select name="binary2">' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>' +
    '</select></td>' +
    '</tr>' +
    '<tr>' +
    '<td>0</td>' +
    '<td>1</td>' +
    '<td>1</td>' +
    '<td><select name="binary3">' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>' +
    '</select></td>' +
    '</tr>' +
    '<tr>' +
    '<td>1</td>' +
    '<td>0</td>' +
    '<td>0</td>' +
    '<td><select name="binary4">' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>' +
    '</select></td>' +
    '</tr>' +
    '<tr>' +
    '<td>1</td>' +
    '<td>0</td>' +
    '<td>1</td>' +
    '<td><select name="binary5">' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>' +
    '</select></td>' +
    '</tr>' +
    '<tr>' +
    '<td>1</td>' +
    '<td>1</td>' +
    '<td>0</td>' +
    '<td><select name="binary6">' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>' +
    '</select></td>' +
    '</tr>' +
    '<tr>' +
    '<td>1</td>' +
    '<td>1</td>' +
    '<td>1</td>' +
    '<td><select name="binary7">' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>' +
    '</select></td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '<input type="submit" v-on:click="findMinMaxterms" class="btn btn-primary" name="submit" value="Find Min/Maxterms">' +
    '</form>',
    methods: {
        findMinMaxterms: function(e) {
            e.preventDefault();
            /**
             * Created by savannah on 11/4/2016.
             */
            var output = document.getElementById("Output");

            // Pull needed form into a variable for easy manipulation
            var form = document.getElementById("3_var_TT");

            // Sets up corresponding minterm values if that row is marked with a 1
            // Ex) Row 0 is 0 0 0, so its minterm if output is 1 would be A'B'C'
            var minterms = ["A'B'C'", "A'B'C", "A'BC'", "A'BC", "AB'C'", "AB'C", "ABC'", "ABC"];

            // Sets up corresponding maxterm values if that row is marked with a 0
            // Ex) Row 0 is 0 0 0, so its maxterm if output is 0 would be (A + B + C)
            var maxterms = ["(A + B + C)", "(A + B + C')", "(A + B' + C)", "(A + B' + C')", "(A' + B + C)", "(A' + B + C')",
                "(A' + B' + C)", "(A' + B' + C')"];

            // Grab user input values and store them
            var inputArray = [form.binary0.value,
                form.binary1.value,
                form.binary2.value,
                form.binary3.value,
                form.binary4.value,
                form.binary5.value,
                form.binary6.value,
                form.binary7.value];

            // Clear output from previous submission
            output.innerHTML = "";

            output.innerHTML += "Minterms: ";

            // Find minterm input and display output
            for (i = 0; i < inputArray.length; i++) {

                if (inputArray[i] == 1) {
                    output.innerHTML += minterms[i] + " ";
                }

            }

            output.innerHTML += "<br>Maxterms: ";

            // Find maxterm input and display output
            for (var i = 0; i < inputArray.length; i++) {

                if (inputArray[i] == 0) {
                    output.innerHTML += maxterms[i] + " ";
                }

            }
        }
    }
});

$("#display-three-var-tt").click(function() {
    var header = document.getElementById("truth_table_header");
    header.innerHTML = "3-Variable Truth Table";
    var table = document.getElementById("table-placeholder");
    table.setAttribute("class", "three-var-tt");
    // Three Variable Truth Table Component ----------------------------
    new Vue({
        el: '.three-var-tt',
        template: '<div class="table-responsive" id="table-placeholder">' +
        '<form name="3_var_TT" id="3_var_TT">' +
        '<table class="table table-striped">' +
        '<thead>' +
        '<tr>' +
        '<th>A</th>' +
        '<th>B</th>' +
        '<th>C</th>' +
        '<th>Output</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td><select name="binary0">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td><select name="binary1">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td><select name="binary2">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td><select name="binary3">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td><select name="binary4">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td><select name="binary5">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td><select name="binary6">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td><select name="binary7">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<input type="submit" v-on:click="findMinMaxterms" class="btn btn-primary" name="submit" value="Find Min/Maxterms">' +
        '</form>',
        methods: {
            findMinMaxterms: function(e) {
                e.preventDefault();
                /**
                 * Created by savannah on 11/4/2016.
                 */
                var output = document.getElementById("Output");

                // Pull needed form into a variable for easy manipulation
                var form = document.getElementById("3_var_TT");

                // Sets up corresponding minterm values if that row is marked with a 1
                // Ex) Row 0 is 0 0 0, so its minterm if output is 1 would be A'B'C'
                var minterms = ["A'B'C'", "A'B'C", "A'BC'", "A'BC", "AB'C'", "AB'C", "ABC'", "ABC"];

                // Sets up corresponding maxterm values if that row is marked with a 0
                // Ex) Row 0 is 0 0 0, so its maxterm if output is 0 would be (A + B + C)
                var maxterms = ["(A + B + C)", "(A + B + C')", "(A + B' + C)", "(A + B' + C')", "(A' + B + C)", "(A' + B + C')",
                    "(A' + B' + C)", "(A' + B' + C')"];

                // Grab user input values and store them
                var inputArray = [form.binary0.value,
                    form.binary1.value,
                    form.binary2.value,
                    form.binary3.value,
                    form.binary4.value,
                    form.binary5.value,
                    form.binary6.value,
                    form.binary7.value];

                // Clear output from previous submission
                output.innerHTML = "";

                output.innerHTML += "Minterms: ";

                // Find minterm input and display output
                for (i = 0; i < inputArray.length; i++) {

                    if (inputArray[i] == 1) {
                        output.innerHTML += minterms[i] + " ";
                    }

                }

                output.innerHTML += "<br>Maxterms: ";

                // Find maxterm input and display output
                for (var i = 0; i < inputArray.length; i++) {

                    if (inputArray[i] == 0) {
                        output.innerHTML += maxterms[i] + " ";
                    }

                }
            }
        }
    });
});

$("#display-four-var-tt").click(function() {
    var header = document.getElementById("truth_table_header");
    header.innerHTML = "4-Variable Truth Table";
    var table = document.getElementById("table-placeholder");
    table.setAttribute("class", "four-var-tt");
    // Four Variable Truth Table Component ----------------------------
    var fourVarTruthTable = new Vue({
        el: '.four-var-tt',
        template: '<div class="table-responsive" id="table-placeholder">' +
        '<form name="4_var_TT" id="4_var_TT">' +
        '<table class="table table-striped">' +
        '<thead>' +
        '<tr>' +
        '<th>A</th>' +
        '<th>B</th>' +
        '<th>C</th>' +
        '<th>D</th>' +
        '<th>Output</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td><select name="binary0">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td><select name="binary1">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td><select name="binary2">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td><select name="binary3">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td><select name="binary4">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td><select name="binary5">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td><select name="binary6">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td><select name="binary7">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td><select name="binary8">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td><select name="binary9">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td><select name="binary10">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td><select name="binary11">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>0</td>' +
        '<td><select name="binary12">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td>1</td>' +
        '<td><select name="binary13">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>0</td>' +
        '<td><select name="binary14">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td>1</td>' +
        '<td><select name="binary15">' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '</select></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<input type="submit" v-on:click="findMinMaxterms" class="btn btn-primary" name="submit" value="Find Min/Maxterms">' +
        '</form>',
        methods: {
            findMinMaxterms: function(e) {
                e.preventDefault();
                /**
                 * Created by savannah on 11/4/2016.
                 */
                var output = document.getElementById("Output");

                // Pull needed form into a variable for easy manipulation
                var form = document.getElementById("4_var_TT");

                // Sets up corresponding minterm values if that row is marked with a 0
                // Ex) Row 0 is 0 0 0 0, so its minterm if output is 1 would be A'B'C'D'
                var minterms = ["A'B'C'D'", "A'B'C'D", "A'B'CD'", "A'B'CD", "A'BC'D'", "A'BC'D", "A'BCD'", "A'BCD", "AB'C'D'",
                    "AB'C'D", "AB'CD'", "AB'CD", "ABC'D'", "ABC'D", "ABCD'", "ABCD"];

                // Sets up corresponding maxterm values if that row is marked with a 0
                // Ex) Row 0 is 0 0 0 ), so its maxterm if output is 0 would be (A + B + C + D)
                var maxterms = ["(A + B + C + D)", "(A + B + C + D')", "(A + B' + C' + D)", "(A + B + C' + D')",
                    "(A + B' + C + D)", "(A + B' + C + D')", "(A + B' + C' + D)", "(A + B' + C' + D')",
                    "(A' + B + C + D)", "(A' + B + C + D')", "(A' + B + C' + D)", "(A' + B + C' + D')",
                    "(A' + B' + C + D)", "(A' + B' + C + D')", "(A' + B' + C' + D)", "(A' + B' + C' + D')"];

                // Grab user input values and store them
                var inputArray = [form.binary0.value,
                    form.binary1.value,
                    form.binary2.value,
                    form.binary3.value,
                    form.binary4.value,
                    form.binary5.value,
                    form.binary6.value,
                    form.binary7.value,
                    form.binary8.value,
                    form.binary9.value,
                    form.binary10.value,
                    form.binary11.value,
                    form.binary12.value,
                    form.binary13.value,
                    form.binary14.value,
                    form.binary15.value,];

                // Clear output from previous submission
                output.innerHTML = "";

                output.innerHTML += "Minterms: ";

                // Find minterm input and display output
                for (i = 0; i < inputArray.length; i++) {

                    if (inputArray[i] == 1) {
                        output.innerHTML += minterms[i] + " ";
                    }

                }

                output.innerHTML += "<br>Maxterms: ";

                // Find maxterm input and display output
                for (var i = 0; i < inputArray.length; i++) {

                    if (inputArray[i] == 0) {
                        output.innerHTML += maxterms[i] + " ";
                    }

                }
            }
        }
    });
});