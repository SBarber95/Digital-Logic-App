<template>
<div>
    <form name="3_var_TT" id="3_var_TT">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>Output</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td><select name="binary0">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td><select name="binary1">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td><select name="binary2">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td><select name="binary3">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td><select name="binary4">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td><select name="binary5">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td><select name="binary6">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td><select name="binary7">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            </tbody>
            </table>
        <div class="flex-center md-form">
        <button v-on:click="findMinMaxterms" class="btn btn-mdb" name="submit">Find Min/Maxterms</button>
        </div>
        </form>
    <div class="card">
        <div class="card-header mdb-color white-text">
            Minterms and Maxterms
        </div>
        <div class="card-body">
            <p id="Output" class="card-text">Output will appear here.</p>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        mounted () {
            document.getElementById("truth_table_header").innerHTML = '<button type="button" style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#minMaxModal">'+
                'Instructions!'+
                '</button>'+
                '<div class="modal fade" id="minMaxModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
                '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                '<div class="modal-header">'+
                '<button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>'+
                '<h4 class="modal-title" id="minMaxTitle">Min/Maxterm Instructions</h4>'+
                '</div>'+
                '<div class="modal-body">'+
                'Select the output values in the table and click "Find Min/Maxterms" '+
                'to receive the minterm and maxterm expression. <br>NOTE: The min/maxterm '+
                'expression you receive here is NOT simplified! If you desire a simplified expression, '+
                'you can use the output here with the Karnaugh Map feature.'+
                '</div>'+
                '<div class="modal-footer">'+
                '<button class="btn btn-mdb" data-dismiss="modal">Close</button>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '3-Variable Truth Table';
        },
        methods: {
            findMinMaxterms: function(e) {
                e.preventDefault();
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

                var mintermString = "";

                // Find minterm input and display output
                for (i = 0; i < inputArray.length; i++) {

                    if (inputArray[i] == 1) {
                        mintermString += minterms[i] + " ";
                    }

                }

                // Format output for decent user readability
                mintermString = mintermString.replace(/\s/g, " + ");
                mintermString = mintermString.substring(0, mintermString.length - 2);
                output.innerHTML += mintermString;

                output.innerHTML += "<br>Maxterms: ";

                // Find maxterm input and display output
                for (var i = 0; i < inputArray.length; i++) {

                    if (inputArray[i] == 0) {
                        output.innerHTML += maxterms[i] + " ";
                    }

                }
            }
        }
    }
</script>

<style scoped>
    .card-header, .card-text {
        padding: 10px;
    }
</style>