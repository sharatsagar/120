function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    circle(50, 450, 80);

    circle(600, 450, 80);

    circle(600, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 490, 20);

    rect(90, 439, 490, 20);

    rect(40, 90, 20, 340);

    rect(599, 90, 20, 340);
}

function take_snapshot() {
    save('student_name.png');
}