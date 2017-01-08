/**
 * Created by savannahb on 12/14/2016.
 */

// Global ID # for unique component IDs and wires
var idNum = 0;
var wireIdNum = 0;
var snap = Snap("#canvas");

var outputCoords = [];
var circuitComponents = [];
var wires = [];

class Wire {

    constructor(outputSide, inputSide, wireId) {

        this.outputSide = outputSide;
        this.inputSide = inputSide;
        this.wireId = wireId;

    }
}

var outputComponent;
var inputComponent;

// Finds approximate output coordinates on
// circuit components (for use in wire drawing)
function findOutputCoords(e) {

    outputComponent = e.parentNode.getAttribute("id");

    var outputCompTransform = e.parentNode.getAttribute("transform");
    outputCompTransform = (outputCompTransform.substring(7, outputCompTransform.length - 1)).split(",");

    var outputCompOffsetX = Number(outputCompTransform[4]);
    var outputCompOffsetY = Number(outputCompTransform[5]);

    var outputSVGOffsetY = Number(e.getAttribute("aria-label"));

    // SVG component length attributes
    var width = e.parentNode.getBoundingClientRect().right - e.parentNode.getBoundingClientRect().left;

    var outputX = width + outputCompOffsetX;
    var outputY = outputCompOffsetY + outputSVGOffsetY;

    outputCoords = [outputX, outputY];

    return outputCoords;

}

/**
 * Grabs input coordinates of corresponding component and uses both
 * output and input coordinates to create a wire.
 * @param e
 */
function findInputCoords(e) {

    if (outputCoords == []) {
        return null;
    }

    else {

        // TODO: Change 3 Input OR SVG so reference is consistent (won't work now with 3-OR)
        inputComponent = e.parentNode.getAttribute("id");

        // Grab attribute of clicked element that sets coordinate values
        var svgInputYCoord = e.getAttribute("aria-label");

        var inputCompTransform = e.parentNode.getAttribute("transform");
        inputCompTransform = (inputCompTransform.substring(7, inputCompTransform.length - 1)).split(",");

        var inputCompOffsetX = Number(inputCompTransform[4]) + 5;
        var inputCompOffsetY = Number(inputCompTransform[5]);

        // Calculate total Y offset
        var totalYOffset = Number(svgInputYCoord) + inputCompOffsetY;

        // Set up appropriately named variables for all coordinates for wire drawing
        var outputX = outputCoords[0] - 10;
        var outputY = outputCoords[1];
        var inputX = inputCompOffsetX + 10;
        var inputY = totalYOffset;

        var newX = ((Math.abs(inputX - outputX)) / 2.0) + outputX;

        // Set up path attributes
        var path1 = snap.path("M " + outputX + "," + outputY + "L" + newX + "," + outputY);
        var path2 = snap.path("M " + newX + "," + outputY + "L" + newX + "," + inputY);
        var path3 = snap.path("M " + newX + "," + inputY + "L" + inputX + "," + inputY);

        var wireGroup = snap.group(path1, path2, path3);

        wireGroup.attr({
            stroke: "#000",
            strokeWidth: 2.3
        });

        var wireId = "wire-" + wireIdNum;
        document.getElementById("canvas").lastElementChild.setAttribute("id", wireId);
        wireIdNum++;

        outputCoords = [];  // Reset output coords

    }

}

$("#delete_circuit").click(function() {

    var response = confirm("Are you sure you want to delete the entire circuit and start over?\n" +
                            "Everything will be erased from the design board.");

    if (response) {

        $("#canvas").empty();
        circuitComponents = [];
        wires = [];
        idNum = 0;
        wireIdNum = 0;

    }

});