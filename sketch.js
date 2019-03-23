let bg;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;
var button9;

var song;
var hihatButton;
var hihat;
var boomButton;
var boom;
var clapButton;
var clap;
var kickButton;
var kick;
var openhatButton;
var openhat;
var rideButton;
var ride;
var snareButton;
var snare;
var tinkButton;
var tink;
var tomButton;
var tom;
var buttonPos = {};
var buttons = {};
var instrumentNames = [
    "hihat", "boom", "clap", "kick", "openhat", "ride", "snare", "tink", "tom"
];
var instruments = {};
var keyMaps = {
    "d": "hihat",
    "f": "boom",
    "g": "clap",
    "h": "kick",
    "j": "openhat",
    "c": "ride",
    "v": "snare",
    "b": "tink",
    "n": "tom"
}

function preload() {
  soundFormats('mp3', 'wav');
  for (var i in instrumentNames) {
      instruments[instrumentNames[i]] = loadSound("/sounds/" + instrumentNames[i] + ".wav");
  }
}

function setup() {
  createCanvas(1430,690);
  bg = loadImage('assets/drum.jpg');


  // space out the buttons along the window
  button1 = createButton('sound');
  button1.position(10, 200);

  button2 = createButton('sound');
  button2.position(360, 160);

  button3 = createButton('sound');
  button3.position(715, 120);

  button4 = createButton('sound');
  button4.position(1065, 160);

  button5 = createButton('sound');
  button5.position(1380, 200);

  button6 = createButton('sound');
  button6.position(185, 440);

  button7 = createButton('sound');
  button7.position(536, 400);

  button8 = createButton('sound');
  button8.position(880, 400);

  button9 = createButton('sound');
  button9.position(1220, 440);

  // use the next line to link what happens when u press the button
  // button.mousePressed();
}

function keyPressed() {
  var instr = instruments[keyMaps[key.toLowerCase()]];
  if (instr) {
      instr.play();
  }
}

function draw() {
  background(bg);
  // display all the buttons
}
