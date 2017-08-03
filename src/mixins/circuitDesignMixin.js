import Snap from 'snapsvg'
import $ from 'jquery'

function ThreeInputAND (id, input1, input2, input3, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return (this.input1 && this.input2 && this.input3);
    }

}

function ThreeInputNAND (id, input1, input2, input3, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return !(this.input1 && this.input2 && this.input3);
    }

}

function ThreeInputNOR (id, input1, input2, input3, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return !(this.input1 || this.input2 || this.input3);
    }

}

function ThreeInputOR (id, input1, input2, input3, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return (this.input1 || this.input2 || this.input3);
    }

}

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

function TwoInputNAND (id, input1, input2, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return !(this.input1 && this.input2);
    }

}

function TwoInputNOR (id, input1, input2, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return !(this.input1 || this.input2);
    }

}

function TwoInputOR (id, input1, input2, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return (this.input1 || this.input2);
    }

}

function TwoInputXNOR (id, input1, input2, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return !(this.input1 ^ this.input2);
    }

}

function TwoInputXOR (id, input1, input2, inputConnections, outputConnections) {

    this.id = id;
    this.input1 = input1;
    this.input2 = input2;
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;

    this.output = function() {
        return (this.input1 ^ this.input2);
    }

}

export default {
    mounted () {
        let snap = Snap('#canvas');
        let vm = this;

        let newComponent;
        let canvas = document.getElementById("canvas");

        $('#select3InputNAND').click(function() {

            Snap.load("src/components/circuitComponents/threeInputNAND.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 3 input NAND gate
                vm.circuitComponents[vm.idNum] = new ThreeInputNAND(uniqueID, false, false, false, [], []);
                vm.idNum++;

            });

        });

        $('#select3InputAND').click(function() {

            Snap.load("src/components/circuitComponents/threeInputAND.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 3 input AND gate
                vm.circuitComponents[vm.idNum] = new ThreeInputAND(uniqueID, false, false, false, [], []);
                vm.idNum++;

            });

        });

        $("#select3InputNOR").click(function() {

            Snap.load("src/components/circuitComponents/threeInputNOR.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 3 input NOR gate
                vm.circuitComponents[vm.idNum] = new ThreeInputNOR(uniqueID, false, false, false, [], []);
                vm.idNum++;

            });

        });

        $("#select3InputOR").click(function() {

            Snap.load("src/components/circuitComponents/threeInputOR.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 3 input OR gate
                vm.circuitComponents[vm.idNum] = new ThreeInputOR(uniqueID, false, false, false, [], []);
                vm.idNum++;

            });

        });

        $("#select2InputXOR").click(function() {

            Snap.load("src/components/circuitComponents/twoInputXOR.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 2 input XOR gate
                vm.circuitComponents[vm.idNum] = new TwoInputXOR(uniqueID, false, false, [], []);
                vm.idNum++;

            });

        });

        $("#select2InputXNOR").click(function() {

            Snap.load("src/components/circuitComponents/twoInputXNOR.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 2 input XNOR gate
                vm.circuitComponents[vm.idNum] = new TwoInputXNOR(uniqueID, false, false, [], []);
                vm.idNum++;

            });

        });

        $("#select2InputOR").click(function() {

            Snap.load("src/components/circuitComponents/twoInputOR.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 2 input OR gate
                vm.circuitComponents[vm.idNum] = new TwoInputOR(uniqueID, false, false, [], []);
                vm.idNum++;

            });

        });

        $("#select2InputNOR").click(function() {

            Snap.load("src/components/circuitComponents/twoInputNOR.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 2 input NOR gate
                vm.circuitComponents[vm.idNum] = new TwoInputNOR(uniqueID, false, false, [], []);
                vm.idNum++;

            });

        });

        $("#select2InputNAND").click(function() {

            Snap.load("src/components/circuitComponents/twoInputNAND.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 2 input NAND gate
                vm.circuitComponents[vm.idNum] = new TwoInputNAND(uniqueID, false, false, [], []);
                vm.idNum++;

            });

        });

        $("#select2InputAND").click(function() {

            Snap.load("src/components/circuitComponents/twoInputAND.vue", function(e) {
                newComponent = e.select("g");
                snap.append(newComponent);
                newComponent.drag();

                // Sets a unique id to the rendered component
                var newSVG = canvas.lastElementChild;
                var uniqueID = "component-" + vm.idNum;
                newSVG.setAttribute("id", uniqueID);

                // Create default 2 input AND gate
                vm.circuitComponents[vm.idNum] = new TwoInputAND(uniqueID, false, false, [], []);
                vm.idNum++;

            });

        });

        $(document).on("dblclick", ".gate-output", function () {
            vm.findOutputCoords($(this))
        });
        $(document).on("dblclick", ".gate-input", function () {
            vm.findInputCoords($(this))
        });
        $(document).on("mouseup", ".drag-box", function () {
            vm.redrawWires($(this)[0].parentNode)
        });
    }
}