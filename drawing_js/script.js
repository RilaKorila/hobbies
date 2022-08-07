let fr = 10;

// 最初に1回だけ実行
function setup(){
    // create Canvas
    createCanvas(800, 600);
    // set background color
    background(255);
    noStroke();
    var fr = 10
}

// 1フレームごとに実行
function draw(){
    // change the nummber of times draw() execuses in each second
    frameRate(fr);
    //set the color of objects
    fill(random(255), random(255), random(255), 50);
    // draw a circle at the center of Canvas
    ellipse(random(width), random(height), random(100));

    fr += 1;
}
