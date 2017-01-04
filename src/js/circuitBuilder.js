/**
 * Created by savannahb on 12/14/2016.
 */

// Global ID # for unique component IDs and wires
var idNum = 0;
var wireIdNum = 0;

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

    outputComponent = e.getAttribute("id");

    // SVG length attributes
    var width = e.getBoundingClientRect().right - e.getBoundingClientRect().left;
    var height = e.getBoundingClientRect().bottom - e.getBoundingClientRect().top;

    // Absolute offsets of SVG from its (0,0) coordinate
    var xCoord = e.getBoundingClientRect().left;
    var yCoord = e.getBoundingClientRect().top;

    var outputX = width + xCoord;
    var outputY = height/2.0 + yCoord;

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
        inputComponent = e.parentNode.parentNode.getAttribute("id");

        // Grab attribute of clicked element that sets coordinate values
        var svgYCoord = e.getAttribute("aria-label");

        var leftOffset = e.parentNode.getBoundingClientRect().left;
        var topOffset = e.parentNode.getBoundingClientRect().top;

        // Calculate total Y offset
        var totalYOffset = Number(svgYCoord) + topOffset;

        // Set up appropriately named variables for all coordinates for wire drawing
        var outputX = outputCoords[0];
        var outputY = outputCoords[1];
        var inputX = leftOffset;
        var inputY = totalYOffset;

        var newX = ((Math.abs(inputX - outputX)) / 2.0) + outputX;

        // Set up path attributes
        var path1 = "M " + outputX + "," + outputY + " " + newX + "," + outputY;
        var path2 = "M " + newX + "," + outputY + " " + newX + "," + inputY;
        var path3 = "M " + newX + "," + inputY + " " + inputX + "," + inputY;

        document.getElementById("canvas").innerHTML += "<svg id='new_wire' class='wire-component'><path class='wire' id='path1'></path><path class='wire' id='path2'></path><path class='wire' id='path3'></path></svg>";
        // TODO: ADD DRAG ENABLER IN HERE

        document.getElementById("path1").setAttribute("d", path1);
        document.getElementById("path2").setAttribute("d", path2);
        document.getElementById("path3").setAttribute("d", path3);

        document.getElementById("path1").removeAttribute("id");
        document.getElementById("path2").removeAttribute("id");
        document.getElementById("path3").removeAttribute("id");

        var wireId = "wire-" + wireIdNum;
        document.getElementById("new_wire").setAttribute("id", wireId);
        wireIdNum++;

        //document.getElementById("canvas").innerHTML += "" + leftOffset + ", " + totalYOffset + " " + outputCoords[0];

        outputCoords = [];  // Reset output coords

    }

}