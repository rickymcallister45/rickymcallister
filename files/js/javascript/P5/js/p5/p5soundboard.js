

var titles = ["jeff", "crickets",  "nuke", "rimshot", "owen_wilson_wow", "Not good for my image", "lets_go_champ", "ImRickJamesBitch", "WompWompWomp", "DrumRoll", "Cocaine" ];
var songs = [];
var song;
var button;
var i;
var j;


//http://www.freesfx.co.uk/


function preload(){
	songs[0] = loadSound("mp3/MyNameIsJeffSoundEffect.mp3");
	songs[1] = loadSound("mp3/AwkwardCricketSoundEffect.mp3");
	songs[2] = loadSound("mp3/RimshotMp3.mp3");
	songs[3] = loadSound("mp3/owen_wilson_wow.mp3");
	songs[4] = loadSound("mp3/Not good for my image.mp3");
	songs[5] = loadSound("mp3/lets_go_champ.mp3");
	songs[6] = loadSound("mp3/ImRickJamesBitch.mp3");
	songs[7] = loadSound("mp3/WompWompWomp.mp3");
	songs[8] = loadSound("mp3/DrumRoll.mp3");
	songs[9] = loadSound("mp3/Cocaine.mp3");

}
	



function setup() {
	noCanvas();
	
	//create divLoop
	

	for(i = 0; i < titles.length; i++) {

			//div

		var D = createDiv(titles[i]);
			D.class("soundDiv");
			D.id(titles[i]);
			
			//button
						
			button = createButton("play");
			button.parent(D);
			button.class("button");
			button.id(titles[i]);
			
			
		}

		//for(j = 0; j < songs.length; j++){}
			

			button.mousePressed(togglePlaying);
			song = songs[1];
			

			
			

				
			}


function togglePlaying() {
	if (!song.isPlaying()) {
	song.play();
	//buttonChange
	button.html("pause");
} else {
	song.stop();
	//buttonChange
	button.html("play");
}
}

function loaded() {
	song.play();
	
}

function draw() {
	background(0);
	

	//song.setVolume(slider.value());
}


//problems =	 button pressed controls all buttons
//				 song only plays one song on all