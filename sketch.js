function preload() {
  sound = loadSound("sonidos/galaxia.wav");
}

//fondo
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw() {
  background(0);

  //Onda
  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();

  text("click to play", 20, 30);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
