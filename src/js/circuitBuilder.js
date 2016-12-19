/**
 * Created by savannahb on 12/14/2016.
 */
var idNum = 1;

function findOutputCoords(e) {

    // SVG length attributes
    var width = e.getBoundingClientRect().right - e.getBoundingClientRect().left;
    var height = e.getBoundingClientRect().bottom - e.getBoundingClientRect().top;

    // Absolute offsets of SVG from its (0,0) coordinate
    var xCoord = e.getBoundingClientRect().left;
    var yCoord = e.getBoundingClientRect().top;

    var outputX = width + xCoord;
    var outputY = height/2.0 + yCoord;

    var output = document.getElementById("test");

    output.innerHTML = "coords: " + outputX + ", " + outputY + "<br> height: " + height;

}