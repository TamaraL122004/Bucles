function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);

  for (let i = 120; i < width; i += 80) {
    // fill(250, 30, 20);
    // noStroke();

    for (let t = 120; t < height; t += 100) {
      fill(random(255), random(255), random(255));
      noStroke();

      circle(random(i + 20), random(t), random(1, 20));
    }
  }
}
