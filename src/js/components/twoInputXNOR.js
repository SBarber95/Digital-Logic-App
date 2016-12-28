/**
 * Created by savannah on 12/12/2016.
 */

class TwoInputXNOR {

    // String, Boolean, Boolean, Boolean
    constructor(id, input1, input2) {

        this.id = id;
        this.input1 = input1;
        this.input2 = input2;

        this.output = !(this.input1 ^ this.input2);

    }

}

$("#select2InputXNOR").click(function() {

    var twoInputXNOR = new Vue({
        el: '.insertion-point',
        template: '<svg xmlns="http://www.w3.org/2000/svg" width="110.25" height="55.000008" class="component two-input-XNOR" version="1.0">'+
        '<g transform="translate(-4.9999998,-4.9999995)">'+
        '<path style="stroke-width:2.59566951" d="m 94.833332,32.499999 c 16.333338,0 20.416668,0 20.416668,0" class="gate-output"/>'+
        '<path style="stroke-width:2.59566903" d="m 36.097503,18.749999 -31.0975032,0" class="gate-input"/>'+
        '<path style="stroke-width:2.59566903" d="m 37.293562,46.249997 -32.2935622,0" class="gate-input"/>'+
        '<g class="two-XNOR" transform="matrix(1.225,0,0,1.3749999,31.3375,-56.187496)">'+
        '<path class="two-XNOR" d="m -2.25,81.500005 c -1.597374,2.6444 -2.25,3 -2.25,3 l -3.65625,0 2,-2.4375 c 0,0 5.65625,-7.000054 5.65625,-17.562505 0,-10.562451 -5.65625,-17.5625 -5.65625,-17.5625 l -2,-2.4375 3.65625,0 c 0.78125,0.9375 1.421875,1.65625 2.21875,3 1.872719,3.099815 4.78125,9.026646 4.78125,17 0,7.95065 -2.896697,13.879425 -4.75,17.000005 z"/>'+
        '<path class="two-XNOR" d="m -2.40625,44.5 2,2.4375 c 0,0 5.65625,7.000049 5.65625,17.5625 0,10.562451 -5.65625,17.5625 -5.65625,17.5625 l -2,2.4375 3.15625,0 14,0 c 2.408076,10e-7 7.689699,0.02451 13.625,-2.40625 5.935301,-2.430764 12.536536,-7.343266 17.6875,-16.875 L 44.75,64.5 46.0625,63.78125 C 35.759387,44.71559 19.506574,44.5 14.75,44.5 l -14,0 -3.15625,0 z m 5.875,3 11.28125,0 c 4.684173,0 18.28685,-0.130207 27.96875,17 C 37.951964,72.929075 32.197469,77.18391 27,79.3125 21.639339,81.507924 17.158075,81.500001 14.75,81.5 l -11.25,0 c 1.8735884,-3.108434 4.75,-9.04935 4.75,-17 0,-7.973354 -2.9085314,-13.900185 -4.78125,-17 z"/>'+
        '</g>'+
        '<ellipse class="gate-inverter" cx="90.75" cy="32.499996" rx="4.9000001" ry="5.5" />'+
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

    // Create default 2 input XNOR gate
    new TwoInputXNOR(uniqueID, false, false);

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