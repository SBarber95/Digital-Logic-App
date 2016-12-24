/**
 * Created by savannah on 12/12/2016.
 */

class ThreeInputNAND {

    // String, Boolean, Boolean, Boolean
    constructor(id, input1, input2, input3) {

        this.id = id;           // ID connects with appropriate SVG
        this.input1 = input1;
        this.input2 = input2;
        this.input3 = input3;

        this.output = !(this.input1 && this.input2 && this.input3);

    }

}

$("#select3InputNAND").click(function() {

    var threeInputNAND = new Vue({
        el: '.insertion-point',
        template: '<svg xmlns="http://www.w3.org/2000/svg" width="110.25" height="55" class="component three-input-NAND" version="1.0">'+
        '<g transform="translate(-5,-5)">'+
        '<path style="stroke-width:2.59566951" d="m 95.65,32.5 c 15.68,0 19.6,0 19.6,0" class="gate-output" onclick="findOutputCoords(this.parentNode.parentNode)"/>'+
        '<path style="stroke-width:2.59566951" d="m 36.85,14.860913 -31.85,0" class="gate-input"/>'+
        '<path style="stroke-width:2.59566927" d="m 38.075,49.962311 -33.075,0" class="gate-input"/>'+
        '<path d="m 35.625,5 0,1.9642857 0,51.0714293 0,1.964285 1.75,0 23.333333,0 C 74.51152,60 85.208332,47.624938 85.208332,32.5 85.208332,17.375062 74.511521,5.0000002 60.708333,5 c 0,0 0,0 -23.333333,0 l -1.75,0 z m 3.5,3.9285715 c 9.771974,0 16.000001,0 18.666667,0 1.458333,0 2.187499,0 2.552082,0 0.182292,0 0.282554,0 0.328126,0 0.02278,0 0.03076,0 0.03645,0 11.956813,10e-8 20.416668,10.5049385 20.416668,23.5714285 0,13.06649 -9.043189,23.571428 -21,23.571428 l -21,0 0,-47.1428565 z" class="three-NAND"/>'+
        '<ellipse class="gate-inverter" cx="90.75" cy="32.5" rx="4.9000001" ry="5.5" />'+
        '<path style="stroke-width:2.59566951" d="m 36.799748,32.486544 -31.8500005,0" class="gate-input"/>'+
        '</g>'+
        '</svg>'
    });

    var canvas = document.getElementById("canvas");

    // Sets a unique id to the rendered component
    var newSVG = canvas.lastElementChild;
    var uniqueID = "component-" + idNum;
    newSVG.setAttribute("id", uniqueID);
    idNum++;

    // Create default 3 input NAND gate
    new ThreeInputNAND(uniqueID, false, false, false);

    // Recreates insertion point to allow the addition of multiple components
    canvas.innerHTML += '<div class="insertion-point"></div>';

    // Makes sure all instances of this component remain draggable
    var draggableElems = document.querySelectorAll('.component');

    var draggies = [];

    for ( var i=0; i < draggableElems.length; i++ ) {
        var draggableElem = draggableElems[i];
        var draggie = new Draggabilly( draggableElem, {
            containment: true
        });
        draggies.push( draggie );
    }

});