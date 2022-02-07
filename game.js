var px = 10;
var py = 30;

function update() {

    rect(0,0,160,120,0); //clear screen

    text(1,1,7,"Move Rect with D-Pad");

    px += held(1) - held(3);
    py += held(2) - held(0);

    rect(px,py,10,10,5);
}
