/**
 * Created by savannah on 12/12/2016.
 * Modified 1/5/2017
 */

function TwoInputOR (id, input1, input2) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;

    this.output = function() {
        return (this.input1 || this.input2);
    }

}

$("#select2InputOR").click(function() {

    var newComponent;
    var canvas = document.getElementById("canvas");

    Snap.load("../images/2_Input_OR.svg", function(e) {
        newComponent = e.select("g");
        snap.append(newComponent);
        newComponent.drag();

        // Sets a unique id to the rendered component
        var newSVG = canvas.lastElementChild;
        var uniqueID = "component-" + idNum;
        newSVG.setAttribute("id", uniqueID);

        // Create default 2 input OR gate
        circuitComponents[idNum] = new TwoInputOR(uniqueID, false, false);
        idNum++;

    });

});