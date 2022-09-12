export default function sketch(s) {
  const BACKGROUND = 0;
  const STROKE = 255;
  const FILL = 122;
  const SIZE = 500;
  const CENTER = SIZE / 2;
  const FRAME_RATE = 30;
  const STEPS = 3000;
  const ROSE_SIZE = 100
  let ROSE_AMPLITUDE = 0.001
  let INCREMENT = 0.0001

  s.setup = () => {
    s.createCanvas(SIZE, SIZE);
  };

  s.draw = () => {
    s.translate(CENTER, CENTER)
    s.background(BACKGROUND);
    s.beginShape();
    s.noFill();
    [...Array(STEPS).keys()]
      .map(n => s.map(n, 0, STEPS, 0, s.TWO_PI * 15))
      .forEach(theta => {
        let r = ROSE_SIZE * s.cos(ROSE_AMPLITUDE * theta);
        // let x = SIZE / 2 + r * s.cos(theta);
        // let y = SIZE / 2 + r * s.sin(theta);
        console.log(theta);
        // let r = 100;
        let x = r * s.cos(theta);
        let y = r * s.sin(theta);
        s.stroke(STROKE);
        s.vertex(x, y);
      });
    s.endShape();
    ROSE_AMPLITUDE += INCREMENT;
  };

  s.mousePressed = () => {
  };
}
