/**
 * Created by savannah on 12/12/2016.
 */
var twoInputAND = new Vue({
    el: '.insertion-point',
    template: '<svg xmlns="http://www.w3.org/2000/svg" width="105.10703" height="54.930817" class="two-input-AND" version="1">'+
    '<g transform="matrix(1.234375,0,0,1.3732704,-12.158594,-6.866352)">'+
    '<path d="m 74.98,25.13 c 16.01,0 20.02,0 20.02,0" class="gate-output"></path>'+
    '<path d="m 31,16.150564 -20.89,0" class="gate-input"></path>'+
    '<path d="m 32,34.140661 -22.02,0" class="gate-input"></path>'+
    '<path d="m 30,5 0,1.43 0,37.14 0,1.43 1.59,0 21.15,0 c 12.51,0 22.2,-9 22.2,-20 0,-11 -9.69,-20 -22.2,-20 0,0 0,0 -21.15,0 L 30,5 Z m 3.17,2.86 c 8.86,0 14.5,0 16.92,0 1.32,0 1.98,0 2.31,0 0.17,0 0.26,0 0.3,0 0.02,0 0.03,0 0.03,0 10.84,0 18.5,7.64 18.5,17.14 0,9.5 -8.2,17.14 -19.03,17.14 l -19.03,0 0,-34.29 z" class="two-AND"></path>'+
    '</g>'+
    '</svg>'
});

var draggie = new Draggabilly(".two-input-AND", {
    containment: true
});