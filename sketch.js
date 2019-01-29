let mobilenet;
let classifier;
let video;
let label = 'loading model';
let ukeButton;
let whistleButton;
let trainButton;
let personName;
let msg;
let count =0;


function modelReady() {
  console.log('Model is ready!!!');
  // classifier.load('model.json', customModelReady);
  msg.html( "Hi There, provide your name and , Click on 'Add Image' 4  New Registration");
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
    count = count +1
    msg.html( "Added (" + count +  ") Image to train , Atleast 10 photos. \n Click on 'Register a face' ")
    classifier.addImage( personName.value());
  });

  trainButton = select("#register");
  trainButton.mousePressed(function () {
    classifier.train(whileTraining);
    count=0;
  });

  saveButton = select("#save");
  saveButton.mousePressed(function () {
    classifier.save();
  });
}

function login(){
  select("#buttons").hide();
  select("#nameSection").hide()
  //trainButton.hide();
  //saveButton.hide();
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
    msg.html( "Registration Complete, Click on 'Login' to see how good i am ")
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
    msg.html( "Got you , " + result.toUpperCase() + "... Login successful");
    label = result;
    classifier.classify(gotResults);
  }
}

