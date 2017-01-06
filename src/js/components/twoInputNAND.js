/**
 * Created by savannah on 12/12/2016.
 */

function TwoInputNAND (id, input1, input2) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;

    this.output = function() {
        return !(this.input1 && this.input2);
    }

}

$("#select2InputNAND").click(function() {

    var newComponent;
    var canvas = document.getElementById("canvas");

    Snap.load("../images/2_Input_NAND.svg", function(e) {
        newComponent = e.select("g");
        snap.append(newComponent);
        newComponent.drag();

        // Sets a unique id to the rendered component
        var newSVG = canvas.lastElementChild;
        var uniqueID = "component-" + idNum;
        newSVG.setAttribute("id", uniqueID);

        // Create default 2 input NAND gate
        circuitComponents[idNum] = new TwoInputNAND(uniqueID, false, false);
        idNum++;

    });

});