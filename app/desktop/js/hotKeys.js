
var capitalAlphabetKeys = {
  "sounds": [
    {
      "name": "suspense02",
      "key": "A",
      "charCode": 65
    },
    {
      "name": "sKidaDdle",
      "key": "B",
      "charCode": 66
    },
    {
      "name": "priceIsWrong",
      "key": "C",
      "charCode": 67
    },
    {
      "name": "suspense00",
      "key": "D",
      "charCode": 68
    },
    {
      "name": "suspense01",
      "key": "E",
      "charCode": 69
    },
    {
      "name": "lawAndOrder",
      "key": "F",
      "charCode": 70
    },
    {
      "name": "leeroyJenins",
      "key": "G",
      "charCode": 71
    },
    {
      "name": "Complain",
      "key": "H",
      "charCode": 72
    },
    {
      "name": "DefLeppardPourSomeSugarOnMe",
      "key": "I",
      "charCode": 73
    },
    {
      "name": "ElectricSlide",
      "key": "J",
      "charCode": 74
    },
    {
      "name": "GeorgeBushDoesntCareAboutBlackPeople",
      "key": "K",
      "charCode": 75
    },
    {
      "name": "HeNeedSomeMilk",
      "key": "L",
      "charCode": 76
    },
    {
      "name": "HellNah",
      "key": "M",
      "charCode": 77
    },
    {
      "name": "JebBush",
      "key": "N",
      "charCode": 78
    },
    {
      "name": "KeeptheChangeYouFilthyAnimal",
      "key": "O",
      "charCode": 79
    },
    {
      "name": "suspense02",
      "key": "P",
      "charCode": 80
    },
    {
      "name": "MyMan",
      "key": "Q",
      "charCode": 81
    },
    {
      "name": "gunCock",
      "key": "R",
      "charCode": 82
    },
    {
      "name": "gospel",
      "key": "S",
      "charCode": 83
    },
    {
      "name": "ReallyNibba",
      "key": "T",
      "charCode": 84
    },
    {
      "name": "RiffRaff",
      "key": "U",
      "charCode": 85
    },
    {
      "name": "wasted",
      "key": "V",
      "charCode": 86
    },
    {
      "name": "TaylorSwiftLookWhatYouMadeMeDo",
      "key": "W",
      "charCode": 87
    },
    {
      "name": "WompWompWomp",
      "key": "X",
      "charCode": 88
    },
    {
      "name": "Worldstar",
      "key": "Y",
      "charCode": 89
    },
    {
      "name": "suspense03",
      "key": "Z",
      "charCode": 90
    }
  ]
}

var numberPadKeys = {
  "sounds": [
    {
      "name": "RobloxDeathSoundEffect",
      "key": "num0",
      "keyCode": 96
    },
    {
      "name": "everyFuckingDayMP3",
      "key": "num1",
      "keyCode": 97
    },
    {
      "name": "BecauseYoudBeInJail",
      "key": "num2",
      "keyCode": 98
    },
    {
      "name": "Podesta",
      "key": "num3",
      "keyCode": 99
    },
    {
      "name": "BisonYes",
      "key": "num4",
      "keyCode": 100
    },
    {
      "name": "Brah",
      "key": "num5",
      "keyCode": 101
    },
    {
      "name": "AirhornSoundEffect",
      "key": "num6",
      "keyCode": 102
    },
    {
      "name": "AwkwardCricketSoundEffect",
      "key": "num7",
      "keyCode": 103
    },
    {
      "name": "MyNameIsJeffSoundEffect",
      "key": "num8",
      "keyCode": 104
    },
    {
      "name": "xFiles",
      "key": "starSign",
      "keyCode": 106
    },
    {
      "name": "MetalGearSolidAlert",
      "key": "plusSign",
      "keyCode": 107
    },
    {
      "name": "smokeDetector",
      "key": "num9",
      "keyCode": 108
    },
    {
      "name": "birdMan",
      "key": "minusSign",
      "keyCode": 109
    },
    {
      "name": "CashMeOutside",
      "key": "period",
      "keyCode": 110
    },
    {
      "name": "TaylorSwiftLookWhatYouMadeMeDo",
      "key": "/",
      "keyCode": 111
    }
  ]
}

var topNumbersKeys = {
  "sounds": [
    {
      "name": "Ahhhh",
      "key": "1",
      "keyCode": 49
    },
    {
      "name": "Ahhhh",
      "key": "2",
      "keyCode": 50
    },
    {
      "name": "Ahhhh",
      "key": "3",
      "keyCode": 51
    },
    {
      "name": "Ahhhh",
      "key": "4",
      "keyCode": 52
    },
    {
      "name": "Ahhhh",
      "key": "5",
      "keyCode": 53
    },
    {
      "name": "Ahhhh",
      "key": "6",
      "keyCode": 54
    },
    {
      "name": "Ahhhh",
      "key": "7",
      "keyCode": 55
    },
    {
      "name": "Ahhhh",
      "key": "8",
      "keyCode": 56
    },
    {
      "name": "Ahhhh",
      "key": "9",
      "keyCode": 57
    },
    {
      "name": "Ahhhh",
      "key": "0",
      "keyCode": 48
    },
  ]
}

var capitalAlphabet = capitalAlphabetKeys.sounds;
var numberPad = numberPadKeys.sounds;
var topNumbers = topNumbersKeys.sounds;

function keys2() {
  //capitalAlphabet
    $("html").keypress(function(e){
   	  for(i = 0; i < capitalAlphabet.length; i++) {
	      if (e.charCode == capitalAlphabet[i].charCode) {
		      var audio = new Audio('../../files/mp3/' + capitalAlphabet[i].name + '.mp3');
			      audio.play();
      }}
	});
}

function keys3() {
  //numkeys
    $("html").keydown(function(e){
      for(i = 0; i < numberPad.length; i ++){
        if (e.keyCode == numberPad[i].keyCode) {
          var audio = new Audio('../../files/mp3/' + numberPad[i].name + '.mp3');
            audio.play();
      }}
  });
}

function keys4() {
//topNumberKeys
  $("html").keydown(function(e){
      for(i = 0; i < topNumbers.length; i ++){
        if (e.keyCode == topNumbers[i].keyCode) {
          var audio = new Audio('../../files/mp3/' + topNumbers[i].name + '.mp3');
            audio.play();
      }}
  });
}

keys2();
keys3();
keys4();
