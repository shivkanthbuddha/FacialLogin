let mobilenet;
let classifier;
let video;
let label = 'loading model';
let ukeButton;
let whistleButton;
let trainButton;
let personName;
let msg;


function modelReady() {
  console.log('Model is ready!!!');
  // classifier.load('model.json', customModelReady);
  msg.html( 'I am Ready with Mobilenet');
}

function customModelReady() {
  console.log('Custom Model is ready!!!');
  msg.html(  'I am Ready with Custom model');
  classifier.classify(gotResults);
}

function videoReady() {
  console.log('Video is ready!!!');
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);
  personName = select("#personName");

  msg= select("#msg");  

  addAnImage = select("#addAnImage"); 
  addAnImage.mousePressed(function () {
    classifier.addImage( personName.value());
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

function login(){
  select("#buttons").hide();
  select("#nameSection").hide()
  trainButton.hide();
  saveButton.hide();
  classifier.classify(gotResults);
}


function draw() {
  background(0);
  image(video, 0, 0, 400, 400);
  fill(255);
  textSize(16);
 // text(label, 10, height - 10);
}


function whileTraining(loss) {
  if (loss == null) {
    msg.html( "Registration Complete")
    console.log('Training Complete');
    //classifier.classify(gotResults);
  } else {
    msg.html( "Please wait...Training in progress")
    console.log(loss);
  }
}



function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    msg.html( "Hi " + result.toUpperCase() + " Welcome back ");
    label = result;
    classifier.classify(gotResults);
  }
}