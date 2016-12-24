/**
 * Created by savannah on 12/12/2016.
 */

class TwoInputNOR {

    // String, Boolean, Boolean, Boolean
    constructor(id, input1, input2) {

        this.id = id;
        this.input1 = input1;
        this.input2 = input2;

        this.output = !(this.input1 || this.input2);

    }

}

$("#select2InputNOR").click(function() {

    var twoInputNOR = new Vue({
        el: '.insertion-point',
        template: '<svg xmlns="http://www.w3.org/2000/svg" width="109.62221" height="54.849255" class="component two-input-NOR" version="1.0">'+
        '<g transform="translate(-5,-5.0000001)">'+
        '<path style="stroke-width:2.58471894" d="m 95.13382,32.424619 c 24.36049,0 19.48839,0 19.48839,0" class="gate-output"/>'+
        '<path style="stroke-width:2.58471894" d="M 36.668639,18.71231 5,18.71231" class="gate-input"/>'+
        '<path style="stroke-width:2.5847187" d="M 37.886664,46.136929 5,46.136929" class="gate-input"/>'+
        '<g transform="matrix(1.2180246,0,0,1.371231,-1.090123,-1.8561549)">'+
        '<g transform="translate(26.5,-39.5)">'+
        '<path class="two-NOR" d="m -2.40625,44.5 2,2.4375 c 0,0 5.65625,7.000049 5.65625,17.5625 0,10.562451 -5.65625,17.5625 -5.65625,17.5625 l -2,2.4375 3.15625,0 14,0 c 2.408076,10e-7 7.689699,0.02451 13.625,-2.40625 5.935301,-2.430764 12.536536,-7.343266 17.6875,-16.875 L 44.75,64.5 46.0625,63.78125 C 35.759387,44.71559 19.506574,44.5 14.75,44.5 l -14,0 -3.15625,0 z m 5.875,3 11.28125,0 c 4.684173,0 18.28685,-0.130207 27.96875,17 C 37.951964,72.929075 32.197469,77.18391 27,79.3125 21.639339,81.507924 17.158075,81.500001 14.75,81.5 l -11.25,0 c 1.8735884,-3.108434 4.75,-9.04935 4.75,-17 0,-7.973354 -2.9085314,-13.900185 -4.78125,-17 z"/>'+
        '<circle class="gate-inverter" r="4" cy="25" cx="75" transform="translate(-26.5,39.5)"/>'+
        '</g>'+
        '</g>'+
        '</g>'+
        '</svg>'
    });

    var canvas = document.getElementById("canvas");

    // Sets a unique id to the rendered component
    var newSVG = canvas.lastElementChild;
    var uniqueID = "component-" + idNum;
    newSVG.setAttribute("id", uniqueID);
    idNum++;

    // Recreates insertion point to allow the addition of multiple components
    canvas.innerHTML += '<div class="insertion-point"></div>';

    // Create default 2 input NOR gate
    new TwoInputNOR(uniqueID, false, false);

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