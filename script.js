//Define variables
//Sound Classification ML Model URL
let modelURL = "https://teachablemachine.withgoogle.com/models/ux_wTI7c4/";
//Label that changes based on classification
let label = 'Waiting For Sound';
//Classifier that imports the sound classification model using ml5
let classifier; 

//Importing ML Model
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

//Setup function
function setup() {
  //Adjusts canvas size 
  var cnv = createCanvas(640, 520);
  var x = (windowWidth) / 2 - 400;
  var y = (windowHeight) / 2 + 350;
  cnv.position(x, y);
  //Calls the classify audio function
  classifyAudio();
  //Calls the change image function
  changeImage();
  console.log("setup complete")
}

//Classifies audio heard
function classifyAudio() {
  //Calls the got results function
  classifier.classify(gotResults);
  console.log("classifies");
}
//Draw function
function draw() {
  //Draws background and adjusts text size and label size
  background(211);
  textSize(50);
  //Text changes position based on what is in the label 
  if (label === 'Background Noise') {
    text(label, 205, 50);
  }
  if(label === 'A Note') {
    text(label, 285, 50);
  }
  if(label === 'B Note') {
    text(label, 285, 50);
  }
  if(label === 'C Note') {
    text(label, 285, 50);
  }
  if(label === 'D Note') {
    text(label, 285, 50);
  }
  if(label === 'E Note') {
    text(label, 285, 50);
  }
  if(label === 'F Note') {
    text(label, 285, 50);
  }
  if(label === 'G Note') {
    text(label, 285, 50);
  }
}

//Gets classification based on the audio it hears
function gotResults(error, results) {
   //If it is unable to classify something, it will return an error
  if (error) {
    console.error(error);
    return;
  }
  //If it able to classify something, change the label to the name of the object it classifies
  label = results[0].label;
  //Repeatedly change image and classify audio
  changeImage();
  classifyAudio();
  
}
//Changes image based on the text inside the label
function changeImage() {
  if(label === 'A Note') {
    document.getElementById("img").src = "PianoNotes/ANote.png";
    console.log("a reached");
  } else if (label === 'B Note') {
      document.getElementById("img").src = "PianoNotes/BNote.png";
      console.log("b reached");
  } else if (label === 'C Note') {
      document.getElementById("img").src = "PianoNotes/CNote.png";
      console.log("c reached");
  } else if (label === 'D Note') {
      document.getElementById("img").src = "PianoNotes/DNote.png";
      console.log("d reached");
  } else if (label === 'E Note') {
      document.getElementById("img").src = "PianoNotes/ENote.png";
      console.log("e reached");
  } else if (label === 'F Note') {
      document.getElementById("img").src = "PianoNotes/FNote.png";
      console.log("f reached");
  } else if (label === 'G Note') {
      document.getElementById("img").src = "PianoNotes/GNote.png";
      console.log("g reached");
  } else {
      document.getElementById("img").src = "PianoNotes/blankPiano.png";
      console.log("blank piano reached");
  }
}