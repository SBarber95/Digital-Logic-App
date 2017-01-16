/**
 * Created by savannah on 12/12/2016.
 */

function TwoInputAND (id, input1, input2, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return (this.input1 && this.input2);
    }

}

$("#select2InputAND").click(function() {

    var newComponent;
    var canvas = document.getElementById("canvas");

    Snap.load("../images/2_Input_AND.svg", function(e) {
        newComponent = e.select("g");
        snap.append(newComponent);
        newComponent.drag();

        // Sets a unique id to the rendered component
        var newSVG = canvas.lastElementChild;
        var uniqueID = "component-" + idNum;
        newSVG.setAttribute("id", uniqueID);

        // Create default 2 input AND gate
        circuitComponents[idNum] = new TwoInputAND(uniqueID, false, false, [], []);
        idNum++;

    });

});