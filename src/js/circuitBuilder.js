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

// TODO: PERHAPS STORE INFO OF LATEST COMPONENT OR WIRE MADE FOR UNDO PURPOSES

// Wire class definition
function Wire(outputSide, inputSide, inputNumber, wireId, outputX, outputY, inputX, inputY, outputCompOffsetX, outputCompOffsetY,
                inputCompOffsetX, inputCompOffsetY) {

    this.outputSide = outputSide;
    this.inputSide = inputSide;
    this.inputNumber = inputNumber;
    this.wireId = wireId;
    this.outputX = outputX;
    this.outputY = outputY;
    this.inputX = inputX;
    this.inputY = inputY;
    this.outputCompOffsetX = outputCompOffsetX;
    this.outputCompOffsetY = outputCompOffsetY;
    this.inputCompOffsetX = inputCompOffsetX;
    this.inputCompOffsetY = inputCompOffsetY;

}

var outputComponent;
var inputComponent;
var outputCompOffsetX;
var outputCompOffsetY;

// Finds approximate output coordinates on
// circuit components (for use in wire drawing)
function findOutputCoords(e) {

    outputComponent = e.parentNode.getAttribute("id");

    var outputCompTransform = e.parentNode.getAttribute("transform");
    outputCompTransform = (outputCompTransform.substring(7, outputCompTransform.length - 1)).split(",");

    outputCompOffsetX = Number(outputCompTransform[4]);
    outputCompOffsetY = Number(outputCompTransform[5]);

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

    if (outputCoords[0] == undefined) {
        return null;
    }

    else {

        // Grabs which input the wire will be connecting to
        var inputNum = e.getAttribute("class");
        inputNum = inputNum.substring(inputNum.length - 1, inputNum.length);

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
        var outputX = outputCoords[0] - 6;
        var outputY = outputCoords[1];
        var inputX = inputCompOffsetX + 10;
        var inputY = totalYOffset;

        var newX = ((Math.abs(inputX - outputX)) / 2.0) + outputX;

        // Set up path attributes
        var path1 = snap.path("M " + outputX + "," + outputY + "L" + newX + "," + outputY);
        var path2 = snap.path("M " + newX + "," + outputY + "L" + newX + "," + inputY);
        var path3 = snap.path("M " + newX + "," + inputY + "L" + inputX + "," + inputY);

        var wireGroup = snap.group(path1, path2, path3);

        var wireId = "wire-" + wireIdNum;

        wireGroup.attr({
            id: wireId,
            stroke: "#000",
            strokeWidth: 2.3
        });

        wires[wireIdNum] = new Wire(outputComponent, inputComponent, inputNum, wireId, outputX, outputY, inputX, inputY, outputCompOffsetX,
                                 outputCompOffsetY, inputCompOffsetX, inputCompOffsetY);

        var inputComponentIndex = Number(inputComponent.substring(10, inputComponent.length));
        var outputComponentIndex = Number(outputComponent.substring(10, outputComponent.length));

        var inputCompObject = circuitComponents[inputComponentIndex];
        inputCompObject.inputConnections.push(wires[wireIdNum]);

        var outputCompObject = circuitComponents[outputComponentIndex];
        outputCompObject.outputConnections.push(wires[wireIdNum]);

        wireIdNum++;

        outputCoords = [];  // Reset output coords

    }

}

function redrawWires(e) {

    var componentId = e.getAttribute("id");
    var componentIndex = Number(componentId.substring(10, componentId.length));
    var componentObject = circuitComponents[componentIndex];

    if (componentObject.inputConnections.length > 0) {

        // Grab new x and y transform values
        var compTransform = e.getAttribute("transform");
        compTransform = (compTransform.substring(7, compTransform.length - 1)).split(",");

        var newCompOffsetX = Number(compTransform[4]);
        var newCompOffsetY = Number(compTransform[5]);

        for (var i = 0; i < componentObject.inputConnections.length; i++) {

            // Retrieve old x and y transform values
            var oldCompOffsetX = componentObject.inputConnections[i].inputCompOffsetX;
            var oldCompOffsetY = componentObject.inputConnections[i].inputCompOffsetY;

            // Calculate transform offsets
            var dragOffsetX = newCompOffsetX - oldCompOffsetX;
            var dragOffsetY = newCompOffsetY - oldCompOffsetY;

            var currentWire = componentObject.inputConnections[i];

            var outputSideIndex = currentWire.outputSide;
            outputSideIndex = Number(outputSideIndex.substring(10, outputSideIndex.length));
            // TODO: INNER LOOP FOR MULTIPLE OUTPUT WIRES FROM SAME OUTPUT
            var outputSideWire = circuitComponents[outputSideIndex].outputConnections[0];

            var newInputX = currentWire.inputX + dragOffsetX;
            var newInputY = currentWire.inputY + dragOffsetY;

            var newX = ((Math.abs(newInputX - currentWire.outputX)) / 2.0) + currentWire.outputX;

            // Set up path attributes
            var path1 = snap.path("M " + currentWire.outputX + "," + currentWire.outputY + "L" + newX + "," + currentWire.outputY);
            var path2 = snap.path("M " + newX + "," + currentWire.outputY + "L" + newX + "," + newInputY);
            var path3 = snap.path("M " + newX + "," + newInputY + "L" + (newInputX + 8) + "," + newInputY);

            var wireGroup = snap.group(path1, path2, path3);

            var wireId = currentWire.wireId;

            var newWireIdNum = Number(wireId.substring(5, wireId.length));
            wires[newWireIdNum] = new Wire(currentWire.outputSide, currentWire.inputSide, currentWire.inputNumber,  wireId, currentWire.outputX, currentWire.outputY,
                newInputX, newInputY, currentWire.outputCompOffsetX, currentWire.outputCompOffsetY, newCompOffsetX, newCompOffsetY);
            componentObject.inputConnections[i] = wires[newWireIdNum];
            outputSideWire.inputX = newInputX;
            outputSideWire.inputY = newInputY;
            outputSideWire.inputCompOffsetX = newCompOffsetX;
            outputSideWire.inputCompOffsetY = newCompOffsetY;

            $("#" + wireId).remove();

            wireGroup.attr({
                id: wireId,
                stroke: "#000",
                strokeWidth: 2.3
            });

        }

    }

    if (componentObject.outputConnections.length > 0) {

        // Grab new x and y transform values
        compTransform = e.getAttribute("transform");
        compTransform = (compTransform.substring(7, compTransform.length - 1)).split(",");

        newCompOffsetX = Number(compTransform[4]);
        newCompOffsetY = Number(compTransform[5]);

        for (i = 0; i < componentObject.outputConnections.length; i++) {

            // Retrieve old x and y transform values
            oldCompOffsetX = componentObject.outputConnections[i].outputCompOffsetX;
            oldCompOffsetY = componentObject.outputConnections[i].outputCompOffsetY;

            // Calculate transform offsets
            dragOffsetX = newCompOffsetX - oldCompOffsetX;
            dragOffsetY = newCompOffsetY - oldCompOffsetY;

            currentWire = componentObject.outputConnections[i];

            var inputSideIndex = currentWire.inputSide;
            inputSideIndex = Number(inputSideIndex.substring(10, inputSideIndex.length));

            // Looks for the proper wire in the corresponding input component's connections array
            var inputSideWire;
            for (i = 0; i < circuitComponents[inputSideIndex].inputConnections.length; ++i) {

                if (circuitComponents[inputSideIndex].inputConnections[i].wireId == currentWire.wireId) {
                    inputSideWire = circuitComponents[inputSideIndex].inputConnections[i];
                }

            }

            var newOutputX = currentWire.outputX + dragOffsetX;
            var newOutputY = currentWire.outputY + dragOffsetY;

            newX = ((Math.abs(currentWire.inputX - newOutputX)) / 2.0) + newOutputX;

            // Set up path attributes
            path1 = snap.path("M " + newOutputX + "," + newOutputY + "L" + newX + "," + newOutputY);
            path2 = snap.path("M " + newX + "," + newOutputY + "L" + newX + "," + currentWire.inputY);
            path3 = snap.path("M " + newX + "," + currentWire.inputY + "L" + (currentWire.inputX + 8) + "," + currentWire.inputY);

            wireGroup = snap.group(path1, path2, path3);

            wireId = currentWire.wireId;
            newWireIdNum = Number(wireId.substring(5, wireId.length));
            wires[newWireIdNum] = new Wire(currentWire.outputSide, currentWire.inputSide, currentWire.inputNumber, wireId, newOutputX, newOutputY,
                currentWire.inputX, currentWire.inputY, newCompOffsetX, newCompOffsetY, currentWire.inputCompOffsetX, currentWire.inputCompOffsetY);
            componentObject.outputConnections[i] = wires[newWireIdNum];
            inputSideWire.outputX = newOutputX;
            inputSideWire.outputY = newOutputY;
            inputSideWire.outputCompOffsetX = newCompOffsetX;
            inputSideWire.outputCompOffsetY = newCompOffsetY;

            $("#" + wireId).remove();

            wireGroup.attr({
                id: wireId,
                stroke: "#000",
                strokeWidth: 2.3
            });

        }

    }

}

/**
 * Deletes a circuit design upon confirmation of the user and resets the design canvas.
 */
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

/**
 * Simulates the logic of the built circuit by building a subtree for
 * each output component, then evaluating outputs in a postorder
 * traversal.
 */
function simulate() {

    // Clear previous debug output
    document.getElementById("circuitOutput").innerHTML = "";

    // Create Array of outputs (which will become the roots)
    var treeRoots = [];
    for (var i = 0; i < circuitComponents.length; ++i) {

        if (circuitComponents[i].outputConnections.length == 0) {
            treeRoots.push(circuitComponents[i]);
        }

    }

    for (i = 0; i < treeRoots.length; ++i) {

        var tree = new TreeModel();

        var rootId = (treeRoots[i].id).substring(10, treeRoots[i].id.length);

        var children = [];
        var tempChildren = [];

        // Set root
        var root = tree.parse({id: rootId});

        // Current parent node is the root
        var parentTreeNode = root.first(function(node) {
            return node.model.id === rootId;
        });

        // Initial child-finding loop for the root's children
        for (var j = 0; j < treeRoots[i].inputConnections.length; ++j) {

            var childId = treeRoots[i].inputConnections[j].outputSide;
            childId = childId.substring(10, childId.length);
            var newChild = tree.parse({id: childId});

            parentTreeNode.addChild(newChild);
            var childComponent = circuitComponents[childId];
            tempChildren.push(childComponent);

        }

        // Loop for all subsequent levels of the circuits
        while (tempChildren.length != 0) {

            children = tempChildren.slice();
            tempChildren = [];

            for (j = 0; j < children.length; ++j) {

                parentTreeNode = root.first(function(node) {
                    return node.model.id === (children[j].id).substring(10, children[j].id.length);
                });

                for (var k = 0; k < children[j].inputConnections.length; ++k) {

                    childId = children[j].inputConnections[k].outputSide;
                    childId = childId.substring(10, childId.length);
                    newChild = tree.parse({id: childId});

                    parentTreeNode.addChild(newChild);
                    childComponent = circuitComponents[childId];
                    tempChildren.push(childComponent);

                }

            }

        }

        var nodes = [];

        root.walk({strategy: 'post'}, function (node) {
            nodes.push(node.model.id);
        });

        for (j = 0; j < nodes.length; ++j) {

            var currentComponent = circuitComponents[nodes[j]];

            var output = currentComponent.output();

            for (k = 0; k < currentComponent.outputConnections.length; ++k) {

                var inputNum = currentComponent.outputConnections[k].inputNumber;
                var nextComponentIndex = Number(currentComponent.outputConnections[k].inputSide.substring(10));

                if (inputNum == "1") {
                    circuitComponents[nextComponentIndex].input1 = output;
                }
                else if (inputNum == "2") {
                    circuitComponents[nextComponentIndex].input2 = output;
                }
                else if (inputNum == "3") {
                    circuitComponents[nextComponentIndex].input3 = output;
                }

            }

            if (j == nodes.length - 1) {

                // TODO: CHANGE OUTPUT FROM DEBUG TO END-USER
                document.getElementById("circuitOutput").innerHTML += "" + output + "<br>";

            }

        }

    }

}