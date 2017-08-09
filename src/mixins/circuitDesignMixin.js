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

        $("#canvas").on("dblclick", ".gate-output", function () {
            vm.findOutputCoords($(this))
        });
        $("#canvas").on("dblclick", ".gate-input", function () {
            vm.findInputCoords($(this))
        });
        $("#canvas").on("mouseup", ".drag-box", function () {
            vm.redrawWires($(this)[0].parentNode)
        });
    }
}