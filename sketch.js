let mobilenet;
let classifier;
let video;
let label = 'loading model';
let ukeButton;
let whistleButton;
let trainButton;
let labelInput;


function modelReady() {
  console.log('Model is ready!!!');
  // classifier.load('model.json', customModelReady);
}

function customModelReady() {
  console.log('Custom Model is ready!!!');
  label = 'model ready';
  classifier.classify(gotResults);
}

function videoReady() {
  console.log('Video is ready!!!');
}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);
  labelInput = select("#personName");

  addAnImage = select("#addAnImage"); 
  addAnImage.mousePressed(function () {
    classifier.addImage( labelInput.value());
  });

  trainButton = select("#register");
  trainButton.mousePressed(function () {
    classifier.train(whileTraining);
  });

  saveButton = select("#save");
  saveButton.mousePressed(function () {
    classifier.save();
  });
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}


function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}


function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result;
    classifier.classify(gotResults);
  }
}