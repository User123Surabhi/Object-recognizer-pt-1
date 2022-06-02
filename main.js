img = "";

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}
function preload() {
    img=loadImage('husky.jpg');
}
function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Husky puppy",45,75);
    noFill();
    stroke("#FF0000");
    rect(40,50,340,360);
}