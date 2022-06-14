function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
  fill(255,0,0);
  stroke(100,155,0);
  rect(30,20,340,25);
  rect(20,30,25,340);
  rect(30,360,340,25);
  rect(360,30,25,340);
    fill(0,0,255);
  stroke(0,155,100);
  circle(30,30,50);
  circle(370,30,50);
  circle(30,370,50);
  circle(370,370,50);
}

function take_snapshot(){
    save('Arjunwithfilter.png')
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}