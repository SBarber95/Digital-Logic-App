<template>
<div>
    <form name="4_var_TT" id="4_var_TT">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>Output</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>0</td>
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
                <td>0</td>
                <td>1</td>
                <td><select name="binary1">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>0</td>
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
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td><select name="binary3">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td><select name="binary4">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td><select name="binary5">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td><select name="binary6">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td><select name="binary7">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td><select name="binary8">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td><select name="binary9">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td><select name="binary10">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td><select name="binary11">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td><select name="binary12">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td><select name="binary13">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td><select name="binary14">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td><select name="binary15">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    </select></td>
                </tr>
            </tbody>
            </table>
        <button v-on:click="findMinMaxterms" class="btn btn-primary" name="submit">Find Min/Maxterms</button>
        </form>
    <div class="col-sm-12 output-panel">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Minterms and Maxterms</h3>
            </div>
            <div class="panel-body" id="Output">
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        mounted () {
            document.getElementById("truth_table_header").innerHTML = '<button style="margin-right: 12px" class="btn btn-info btn-lg" data-toggle="modal" data-target="#minMaxModal">'+
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
                '<button class="btn btn-default" data-dismiss="modal">Close</button>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '4-Variable Truth Table';
        },
        methods: {
            findMinMaxterms: function(e) {
                e.preventDefault();
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
    .output-panel {
        margin-top: 20px;
    }
</style>