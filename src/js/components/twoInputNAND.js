/**
 * Created by savannah on 12/12/2016.
 */

class TwoInputNAND {

    // String, Boolean, Boolean
    constructor(id, input1, input2) {

        this.id = id;
        this.input1 = input1;
        this.input2 = input2;

        this.output = !(this.input1 && this.input2);

    }

}

$("#select2InputNAND").click(function() {

    var twoInputNAND = new Vue({
        el: '.insertion-point',
        template: '<svg xmlns="http://www.w3.org/2000/svg" width="110.25" height="55" class="component two-input-NAND" version="1.0">'+
        '<g transform="translate(-5,-5)">'+
        '<path style="stroke-width:2.59566951" d="m 95.65,32.5 c 15.68,0 19.6,0 19.6,0" ondblclick="findOutputCoords(this.parentNode.parentNode)" class="gate-output"/>'+
        '<path style="stroke-width:2.59566951" d="M 36.85,18.75 5,18.75" aria-label="18.75" ondblclick="findInputCoords(this)" class="gate-input"/>'+
        '<path style="stroke-width:2.59566951" d="M 38.075,46.25 5,46.25" aria-label="46.25" ondblclick="findInputCoords(this)" class="gate-input"/>'+
        '<path d="m 35.625,5 0,1.9642857 0,51.0714293 0,1.964285 1.75,0 23.333333,0 C 74.51152,60 85.208332,47.624938 85.208332,32.5 85.208332,17.375062 74.511521,5.0000002 60.708333,5 c 0,0 0,0 -23.333333,0 l -1.75,0 z m 3.5,3.9285715 c 9.771974,0 16.000001,0 18.666667,0 1.458333,0 2.187499,0 2.552082,0 0.182292,0 0.282554,0 0.328126,0 0.02278,0 0.03076,0 0.03645,0 11.956813,10e-8 20.416668,10.5049385 20.416668,23.5714285 0,13.06649 -9.043189,23.571428 -21,23.571428 l -21,0 0,-47.1428565 z" class="two-NAND"/>'+
        '<ellipse class="gate-inverter" cx="90.75" cy="32.5" rx="4.9000001" ry="5.5" />'+
        '</g>'+
        '</svg>'
    });

    var canvas = document.getElementById("canvas");

    // Sets a unique id to the rendered component
    var newSVG = canvas.lastElementChild;
    var uniqueID = "component-" + idNum;
    newSVG.setAttribute("id", uniqueID);

    // Create default 2 input NAND gate
    circuitComponents[idNum] = new TwoInputNAND(uniqueID, false, false);
    idNum++;

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