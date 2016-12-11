/**
 * Created by savannah on 11/6/2016.
 */

// Decimal to Binary Converter Component ------------------------------
var decToBinConverter = new Vue({
    el: '#dec-to-bin-convert-component',
    template: '<form id="dec-to-bin-converter">' +
        '<input type="text" class="decimal-value" name="decimalValue" placeholder="Enter a Decimal Value" required><br>' +
        '<input type="submit" class="btn btn-primary" v-on:click="convert" name="submit" value="Convert">' +
        '</form>',
    methods: {
        convert: function(e) {
            e.preventDefault();

            var output = document.getElementById("output");

            var form = document.getElementById("dec-to-bin-converter");

            var decimalValue = parseInt(form.decimalValue.value);

            output.innerHTML = "Binary Value: " + decimalValue.toString(2);
        }
    }
});