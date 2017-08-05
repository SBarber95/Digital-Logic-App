<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4 col-md-3 sidebar">
                    <ul class="nav nav-sidebar">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion"
                                           href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Logic Gates
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel"
                                     aria-labelledby="headingOne">
                                    <ul class="list-group">
                                        <li id="select2InputAND" class="list-group-item">2-Input AND<img
                                                src="../images/2_Input_AND.png" class="component-img"></li>
                                        <li id="select3InputAND" class="list-group-item">3-Input AND<img
                                                src="../images/3_Input_AND.png" class="component-img"></li>
                                        <li id="select2InputOR" class="list-group-item">2-Input OR<img
                                                src="../images/2_Input_OR.png" class="component-img"></li>
                                        <li id="select3InputOR" class="list-group-item">3-Input OR<img
                                                src="../images/3_Input_OR.png" class="component-img"></li>
                                        <li id="select2InputNOR" class="list-group-item">2-Input NOR<img
                                                src="../images/2_Input_NOR.png" class="component-img"></li>
                                        <li id="select3InputNOR" class="list-group-item">3-Input NOR<img
                                                src="../images/3_Input_NOR.png" class="component-img"></li>
                                        <li id="select2InputNAND" class="list-group-item">2-Input NAND<img
                                                src="../images/2_Input_NAND.png" class="component-img"></li>
                                        <li id="select3InputNAND" class="list-group-item">3-Input NAND<img
                                                src="../images/3_Input_NAND.png" class="component-img"></li>
                                        <li id="select2InputXOR" class="list-group-item">2-Input XOR<img
                                                src="../images/2_Input_XOR.png" class="component-img"></li>
                                        <li id="select2InputXNOR" class="list-group-item">2-Input XNOR<img
                                                src="../images/2_Input_XNOR.png" class="component-img"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                                           aria-controls="collapseTwo">
                                            Flip-Flops
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                                     aria-labelledby="headingTwo">
                                    <ul class="list-group">
                                        <li class="list-group-item">S-R Flip-Flop</li>
                                        <li class="list-group-item">J-K Flip-Flop</li>
                                        <li class="list-group-item">D Flip-Flop</li>
                                        <li class="list-group-item">T Flip-Flop</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingThree">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapseThree" aria-expanded="false"
                                           aria-controls="collapseThree">
                                            Output Modules
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                                     aria-labelledby="headingThree">
                                    <ul class="list-group">
                                        <li class="list-group-item">7-Segment Display</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingFour">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapseFour" aria-expanded="false"
                                           aria-controls="collapseFour">
                                            Other Components
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFour" class="panel-collapse collapse" role="tabpanel"
                                     aria-labelledby="headingFour">
                                    <ul class="list-group">
                                        <li class="list-group-item">Inverter<img src="../images/Inverter.svg"
                                                                                 class="component-img"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
                    <h1 style="margin-top: 0"><button class="btn btn-info btn-sm" data-toggle="modal" data-target="#circuitModal">
                        Instructions!
                    </button>
                        <div class="modal fade" id="circuitModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span>
                                        </button>
                                        <h4 class="modal-title" id="circuitTitle">Circuit Designer Instructions</h4>
                                    </div>
                                    <div class="modal-body">
                                        <h3 class="sub-header">How to Add Circuit Components</h3>
                                        Click on any component from the list on the left to add it to the design space.
                                        <h3 class="sub-header">How to Draw Wires Between Components</h3>
                                        Double-click on a component's output. Then, double-click on the second component's input.
                                        A wire will be drawn between both components.
                                        <h3 class="sub-header">Setting Inputs</h3>
                                        All inputs are false by default. To toggle an input signal, right click on the
                                        input you wish to change. Select "toggle input" from the menu. The associated
                                        input will change color based in its current value (Green = true; Red = false).
                                        <h3 class="sub-header">Running Simulations</h3>
                                        When your circuit is fully connected, click on the Simulate button. The application
                                        can evaluate both single and multiple-output circuits. The outputs will change color
                                        in association with the simulated value (Green = true; Red = false).
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="button" id="delete_circuit" class="btn btn-danger btn-sm" value="Delete Circuit">
                        <input type="submit" id="simulate" @click="simulate" class="btn btn-mdb btn-sm" value="Simulate">
                    </h1>
                    <svg id="canvas"></svg>
                </div>
            </div>
        </div>
        <nav id="context-menu" class="context-menu">
            <ul class="context-menu__items">
                <li class="context-menu__item">
                    <a href="#" class="context-menu__link" id="toggle_input" data-action="View"><i
                            class="fa fa-cogs"></i> Toggle Input</a>
                </li>
                <li class="context-menu__item">
                    <a href="#" class="context-menu__link" id="delete_component" data-action="Delete"><i
                            class="fa fa-times"></i> Delete Component</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import Snap from 'snapsvg'
    import TreeModel from 'tree-model'
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

    export default {
        data() {
            return {
                // TODO: PERHAPS STORE INFO OF LATEST COMPONENT OR WIRE MADE FOR UNDO PURPOSES
                // Global ID # for unique component IDs and wires
                idNum: 0,
                wireIdNum: 0,

                outputCoords: [],
                circuitComponents: [],
                wires: [],

                outputComponent: null,
                inputComponent: null,
                outputCompOffsetX: null,
                outputCompOffsetY: null
            }
        },
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
                console.log($(this)[0].parentNode)
                vm.redrawWires($(this)[0].parentNode)
            });
            /**
             * Custom context menu script for the circuit designer.
             * STRUCTURE CODE PROVIDED BY SITEPOINT
             */

            (function() {

                "use strict";

                // H E L P E R    F U N C T I O N S

                /**
                 * Function to check if we clicked inside an element with a particular class
                 * name.
                 *
                 * @param {Object} e The event
                 * @param {String} className The class name to check against
                 * @return {Boolean}
                 */
                function clickInsideElement( e, className ) {
                    var el = e.srcElement || e.target;

                    if ( el.classList.contains(className) ) {
                        return el;
                    } else {
                        while ( el = el.parentNode ) {
                            if ( el.classList && el.classList.contains(className) ) {
                                return el;
                            }
                        }
                    }

                    return false;
                }

                /**
                 * Get's exact position of event.
                 *
                 * @param {Object} e The event passed in
                 * @return {Object} Returns the x and y position
                 */
                function getPosition(e) {
                    var posx = 0;
                    var posy = 0;

                    if (!e) var e = window.event;

                    if (e.pageX || e.pageY) {
                        posx = e.pageX;
                        posy = e.pageY;
                    } else if (e.clientX || e.clientY) {
                        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                    }

                    return {
                        x: posx,
                        y: posy
                    }
                }

                /**
                 * Variables.
                 */
                var contextMenuClassName = "context-menu";
                var contextMenuItemClassName = "context-menu__item";
                var contextMenuLinkClassName = "context-menu__link";
                var contextMenuActive = "context-menu--active";

                var taskItemClassName = "gate-input";
                var taskItemInContext;

                var associatedItem;
                var associatedItemId;
                var associatedInput;

                var clickCoords;
                var clickCoordsX;
                var clickCoordsY;

                var menu = document.querySelector("#context-menu");
                var menuItems = menu.querySelectorAll(".context-menu__item");
                var menuState = 0;
                var menuWidth;
                var menuHeight;
                var menuPosition;
                var menuPositionX;
                var menuPositionY;

                var windowWidth;
                var windowHeight;

                /**
                 * Initialise our application's code.
                 */
                function init() {
                    contextListener();
                    clickListener();
                    keyupListener();
                    resizeListener();
                }

                /**
                 * Listens for contextmenu events.
                 */
                function contextListener() {

                    document.addEventListener( "contextmenu", function(e) {

                        taskItemInContext = clickInsideElement( e, taskItemClassName );

                        if ( taskItemInContext ) {

                            e.preventDefault();
                            toggleMenuOn();
                            positionMenu(e);

                            associatedInput = taskItemInContext.getAttribute("class").substring(16);

                            // TODO: FOR DELETING COMPONENT
                            associatedItemId = taskItemInContext.parentNode.id;
                            associatedItem = taskItemInContext.parentNode.id.substring(10);

                        } else {
                            taskItemInContext = null;
                            toggleMenuOff();
                        }

                    });

                }

                /**
                 * Listens for click events.
                 */
                function clickListener() {
                    document.addEventListener( "click", function(e) {
                        var clickeElIsLink = clickInsideElement( e, contextMenuLinkClassName );

                        if ( clickeElIsLink ) {
                            e.preventDefault();
                            menuItemListener( clickeElIsLink );
                        } else {
                            var button = e.which || e.button;
                            if ( button === 1 ) {
                                toggleMenuOff();
                            }
                        }
                    });
                }

                /**
                 * Listens for keyup events.
                 */
                function keyupListener() {
                    window.onkeyup = function(e) {
                        if ( e.keyCode === 27 ) {
                            toggleMenuOff();
                        }
                    }
                }

                /**
                 * Window resize event listener
                 */
                function resizeListener() {
                    window.onresize = function(e) {
                        toggleMenuOff();
                    };
                }

                /**
                 * Turns the custom context menu on.
                 */
                function toggleMenuOn() {
                    if ( menuState !== 1 ) {
                        menuState = 1;
                        menu.classList.add( contextMenuActive );
                    }
                }

                /**
                 * Turns the custom context menu off.
                 */
                function toggleMenuOff() {
                    if ( menuState !== 0 ) {
                        menuState = 0;
                        menu.classList.remove( contextMenuActive );
                    }
                }

                /**
                 * Positions the menu properly.
                 *
                 * @param {Object} e The event
                 */
                function positionMenu(e) {
                    clickCoords = getPosition(e);
                    clickCoordsX = clickCoords.x;
                    clickCoordsY = clickCoords.y;

                    menuWidth = menu.offsetWidth + 4;
                    menuHeight = menu.offsetHeight + 4;

                    windowWidth = window.innerWidth;
                    windowHeight = window.innerHeight;

                    if ( (windowWidth - clickCoordsX) < menuWidth ) {
                        menu.style.left = windowWidth - menuWidth + "px";
                    } else {
                        menu.style.left = clickCoordsX + "px";
                    }

                    if ( (windowHeight - clickCoordsY) < menuHeight ) {
                        menu.style.top = windowHeight - menuHeight + "px";
                    } else {
                        menu.style.top = clickCoordsY + "px";
                    }
                }

                $("#toggle_input").click(function () {

                    if (associatedInput == "1" && vm.circuitComponents[associatedItem].input1 == false) {
                        vm.circuitComponents[associatedItem].input1 = true;
                        taskItemInContext.setAttribute("style", "stroke: #06c400");
                    }
                    else if (associatedInput == "1" && vm.circuitComponents[associatedItem].input1 == true) {
                        vm.circuitComponents[associatedItem].input1 = false;
                        taskItemInContext.setAttribute("style", "stroke: #ef0000");
                    }
                    else if (associatedInput == "2" && vm.circuitComponents[associatedItem].input2 == false) {
                        vm.circuitComponents[associatedItem].input2 = true;
                        taskItemInContext.setAttribute("style", "stroke: #06c400");
                    }
                    else if (associatedInput == "2" && vm.circuitComponents[associatedItem].input2 == true) {
                        vm.circuitComponents[associatedItem].input2 = false;
                        taskItemInContext.setAttribute("style", "stroke: #ef0000");
                    }
                    else if (associatedInput == "3" && vm.circuitComponents[associatedItem].input3 == false) {
                        vm.circuitComponents[associatedItem].input3 = true;
                        taskItemInContext.setAttribute("style", "stroke: #06c400");
                    }
                    else if (associatedInput == "3" && vm.circuitComponents[associatedItem].input3 == true) {
                        vm.circuitComponents[associatedItem].input3 = false;
                        taskItemInContext.setAttribute("style", "stroke: #ef0000");
                    }

                });

                $("#delete_component").click(function () {

                    // TODO: BEFORE GETTING RID OF COMPONENT FROM ARRAY, MUST DELETE ALL CONNECTING WIRES (VISUALLY
                    // TODO: AND LOGICALLY), AS WELL AS ADJACENT COMPONENTS' CONNECTIONS (LOGICALLY ONLY)

                    var circuitComponent = vm.circuitComponents[Number(associatedItemId.substring(10))];

                   vm.circuitComponents[Number(associatedItemId.substring(10))] = null;

                    $("#" + associatedItemId).remove();

                });

                /**
                 * Dummy action function that logs an action when a menu item link is clicked
                 *
                 * @param {HTMLElement} link The link that was clicked
                 */
                function menuItemListener( link ) {
                    console.log( "Task ID - " + taskItemInContext.getAttribute("data-id") + ", Task action - " + link.getAttribute("data-action"));
                    toggleMenuOff();
                }

                /**
                 * Run the app.
                 */
                init();

            })();

        },
        methods: {
            // Finds approximate output coordinates on
            // circuit components (for use in wire drawing)
            findOutputCoords (e) {

                e = e[0];

                this.outputComponent = e.parentNode.getAttribute("id");

                var outputCompTransform = e.parentNode.getAttribute("transform");
                outputCompTransform = (outputCompTransform.substring(7, outputCompTransform.length - 1)).split(",");

                this.outputCompOffsetX = Number(outputCompTransform[4]);
                this.outputCompOffsetY = Number(outputCompTransform[5]);

                var outputSVGOffsetY = Number(e.getAttribute("aria-label"));

                // SVG component length attributes
                var width = e.parentNode.getBoundingClientRect().right - e.parentNode.getBoundingClientRect().left;

                var outputX = width + this.outputCompOffsetX;
                var outputY = this.outputCompOffsetY + outputSVGOffsetY;

                this.outputCoords = [outputX, outputY];

                return this.outputCoords;

            },

            /**
             * Grabs input coordinates of corresponding component and uses both
             * output and input coordinates to create a wire.
             * @param e
             */
            findInputCoords (e) {

                console.log('Finding output coords and making wire');

                e = e[0];

                let snap = Snap('#canvas');

                if (this.outputCoords[0] == undefined) {
                    return null;
                }

                else {

                    // Grabs which input the wire will be connecting to
                    var inputNum = e.getAttribute("class");
                    inputNum = inputNum.substring(inputNum.length - 1, inputNum.length);

                    this.inputComponent = e.parentNode.getAttribute("id");

                    // Grab attribute of clicked element that sets coordinate values
                    var svgInputYCoord = e.getAttribute("aria-label");

                    var inputCompTransform = e.parentNode.getAttribute("transform");
                    inputCompTransform = (inputCompTransform.substring(7, inputCompTransform.length - 1)).split(",");

                    var inputCompOffsetX = Number(inputCompTransform[4]) + 5;
                    var inputCompOffsetY = Number(inputCompTransform[5]);

                    // Calculate total Y offset
                    var totalYOffset = Number(svgInputYCoord) + inputCompOffsetY;

                    // Set up appropriately named variables for all coordinates for wire drawing
                    var outputX = this.outputCoords[0] - 6;
                    var outputY = this.outputCoords[1];
                    var inputX = inputCompOffsetX + 10;
                    var inputY = totalYOffset;

                    var newX = ((Math.abs(inputX - outputX)) / 2.0) + outputX;

                    // Set up path attributes
                    var path1 = snap.path("M " + outputX + "," + outputY + "L" + newX + "," + outputY);
                    var path2 = snap.path("M " + newX + "," + outputY + "L" + newX + "," + inputY);
                    var path3 = snap.path("M " + newX + "," + inputY + "L" + inputX + "," + inputY);

                    var wireGroup = snap.group(path1, path2, path3);

                    var wireId = "wire-" + this.wireIdNum;

                    wireGroup.attr({
                        id: wireId,
                        stroke: "#000",
                        strokeWidth: 2.3
                    });

                    this.wires[this.wireIdNum] = new Wire(this.outputComponent, this.inputComponent, inputNum, wireId, outputX, outputY, inputX, inputY, this.outputCompOffsetX,
                        this.outputCompOffsetY, inputCompOffsetX, inputCompOffsetY);

                    var inputComponentIndex = Number(this.inputComponent.substring(10, this.inputComponent.length));
                    var outputComponentIndex = Number(this.outputComponent.substring(10, this.outputComponent.length));

                    var inputCompObject = this.circuitComponents[inputComponentIndex];
                    inputCompObject.inputConnections.push(this.wires[this.wireIdNum]);

                    var outputCompObject = this.circuitComponents[outputComponentIndex];
                    outputCompObject.outputConnections.push(this.wires[this.wireIdNum]);

                    this.wireIdNum++;

                    this.outputCoords = [];  // Reset output coords

                }

            },

            redrawWires (e) {

                console.log('Redrawing Wires')

                let snap = Snap('#canvas')

                var componentId = e.getAttribute("id");
                var componentIndex = Number(componentId.substring(10, componentId.length));
                var componentObject = this.circuitComponents[componentIndex];

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
                        var outputSideWire = this.circuitComponents[outputSideIndex].outputConnections[0];

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
                        this.wires[newWireIdNum] = new Wire(currentWire.outputSide, currentWire.inputSide, currentWire.inputNumber, wireId, currentWire.outputX, currentWire.outputY,
                            newInputX, newInputY, currentWire.outputCompOffsetX, currentWire.outputCompOffsetY, newCompOffsetX, newCompOffsetY);
                        componentObject.inputConnections[i] = this.wires[newWireIdNum];
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
                        for (var j = 0; j < this.circuitComponents[inputSideIndex].inputConnections.length; ++j) {

                            if (this.circuitComponents[inputSideIndex].inputConnections[j].wireId == currentWire.wireId) {
                                inputSideWire = this.circuitComponents[inputSideIndex].inputConnections[j];
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
                        this.wires[newWireIdNum] = new Wire(currentWire.outputSide, currentWire.inputSide, currentWire.inputNumber, wireId, newOutputX, newOutputY,
                            currentWire.inputX, currentWire.inputY, newCompOffsetX, newCompOffsetY, currentWire.inputCompOffsetX, currentWire.inputCompOffsetY);
                        componentObject.outputConnections[i] = this.wires[newWireIdNum];
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

            },
            simulate () {

                // Create Array of outputs (which will become the roots)
                var treeRoots = [];
                for (var i = 0; i < this.circuitComponents.length; ++i) {

                    if (this.circuitComponents[i] != null) {
                        if (this.circuitComponents[i].outputConnections.length == 0) {
                            treeRoots.push(this.circuitComponents[i]);
                        }
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
                        var childComponent = this.circuitComponents[childId];
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
                                childComponent = this.circuitComponents[childId];
                                tempChildren.push(childComponent);

                            }

                        }

                    }

                    var nodes = [];

                    // Builds the simulation order by tree traversal
                    root.walk({strategy: 'post'}, function (node) {
                        nodes.push(node.model.id);
                    });

                    for (j = 0; j < nodes.length; ++j) {

                        var currentComponent = this.circuitComponents[nodes[j]];
                        var output = currentComponent.output();

                        for (k = 0; k < currentComponent.outputConnections.length; ++k) {

                            var inputNum = currentComponent.outputConnections[k].inputNumber;
                            var nextComponentIndex = Number(currentComponent.outputConnections[k].inputSide.substring(10));

                            if (inputNum == "1") {
                                this.circuitComponents[nextComponentIndex].input1 = output;
                            }
                            else if (inputNum == "2") {
                                this.circuitComponents[nextComponentIndex].input2 = output;
                            }
                            else if (inputNum == "3") {
                                this.circuitComponents[nextComponentIndex].input3 = output;
                            }

                        }

                        if (j == nodes.length - 1) {

                            var outputID = currentComponent.id;
                            outputID = document.getElementById(outputID).firstElementChild;

                            // Color output to show true value (green)
                            if (output) {
                                outputID.setAttribute("style", "stroke: #06c400");
                            }
                            // Color output to show false value (red)
                            else {
                                outputID.setAttribute("style", "stroke: #ef0000");
                            }

                        }

                    }

                }

            }

        }

    }
</script>

<style scoped>
    .nav-sidebar li {
        text-align: left;
        min-height: 70px;
    }
</style>