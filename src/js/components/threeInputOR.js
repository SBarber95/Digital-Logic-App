/**
 * Created by savannah on 12/12/2016.
 */

class ThreeInputOR {

    // String, Boolean, Boolean, Boolean
    constructor(id, input1, input2, input3) {

        this.id = id;
        this.input1 = input1;
        this.input2 = input2;
        this.input3 = input3;

        this.output = (this.input1 || this.input2 || this.input3);

    }

}

$("#select3InputOR").click(function() {

    var newComponent;
    var canvas = document.getElementById("canvas");

    Snap.load("../images/3_Input_OR.svg", function(e) {
        newComponent = e.select("g");
        snap.append(newComponent);
        newComponent.drag();

        // Sets a unique id to the rendered component
        var newSVG = canvas.lastElementChild;
        var uniqueID = "component-" + idNum;
        newSVG.setAttribute("id", uniqueID);

        // Create default 3 input OR gate
        circuitComponents[idNum] = new ThreeInputOR(uniqueID, false, false, false);
        idNum++;

    });

});