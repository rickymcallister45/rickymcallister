var keybinding = {
  "keyBindings": [
    {
      "name": "youtube",
      "address": "https://www.youtube.com/",
      "key": "a",
      "charCode": 97
    },
    {
      "name": "breaking911",
      "address": "https://twitter.com/breaking911",
      "key": "b",
      "charCode": 98
    },
    {
      "name": "calendar",
      "address": "https://calendar.google.com/calendar/r",
      "key": "c",
      "charCode": 99
    },
    {
      "name": "googleDrive",
      "address": "https://drive.google.com/drive/my-drive",
      "key": "d",
      "charCode": 100
    },
    {
      "name": "ebay",
      "address": "https://www.ebay.com/myb/PurchaseHistory?MyEbay&gbh=1",
      "key": "e",
      "charCode": 101
    },
    {
      "name": "facebook",
      "address": "https://www.facebook.com/",
      "key": "f",
      "charCode": 102
    },
    {
      "name": "toDo",
      "address": "../../app/toDo/index.php",
      "key": "g",
      "charCode": 103
    },
    {
      "name": "horoscope",
      "address": "https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
      "key": "h",
      "charCode": 104
    },
    /*{
      "name": "placeholder",
      "address": "",
      "key": "i",
      "charCode": 105
    },*/
    {
      "name": "infowars",
      "address": "https://www.infowars.com/",
      "key": "j",
      "charCode": 106
    },
    {
      "name": "keep",
      "address": "https://keep.google.com/",
      "key": "k",
      "charCode": 107
    },
    /*{
      "name": "horoscope",
      "address": "",
      "key": "l",
      "charCode": 108
    },*/
    {
      "name": "memes",
      "address": "../../app/memes/index.html",
      "key": "m",
      "charCode": 109
    },
    {
      "name": "soundboard",
      "address": "../../app/soundboard/index.html",
      "key": "n",
      "charCode": 110
    },
    {
      "name": "The_Donald",
      "address": "https://www.reddit.com/r/The_Donald/",
      "key": "o",
      "charCode": 111
    },
    {
      "name": "/pol/",
      "address": "http://boards.4chan.org/pol/catalog",
      "key": "p",
      "charCode": 112
    },
    {
      "name": "qmap",
      "address": "https://qmap.pub/",
      "key": "q",
      "charCode": 113
    },
    {
      "name": "radar",
      "address": "https://radar.weather.gov/Conus/centgrtlakes_loop.php",
      "key": "r",
      "charCode": 114
    },
    {
      "name": "POTUS",
      "address": "https://twitter.com/realDonaldTrump",
      "key": "s",
      "charCode": 115
    },
    /*{
      "name": "clock",
      "address": "",
      "key": "t",
      "charCode": 116
    },*/
    {
      "name": "birthChart",
      "address": "https://astro.cafeastrology.com/graphic.php?type=24&x=1200&y=1600&index=80303062&lang=en",
      "key": "u",
      "charCode": 117
    },
    {
      "name": "GreatAwakening",
      "address": "https://voat.co/v/GreatAwakening/new",
      "key": "v",
      "charCode": 118
    },
    /*{
      "name": "weather",
      "address": "",
      "key": "w",
      "charCode": 119
    },*/
    {
      "name": "gmail",
      "address": "https://mail.google.com/mail/u/0/?tab=wm#inbox",
      "key": "x",
      "charCode": 120
    },
    {
      "name": "grampsHouse",
      "address": "https://grampshouse.neocities.org/",
      "key": "y",
      "charCode": 121
    },
    {
      "name": "google",
      "address": "https://www.google.com/",
      "key": "z",
      "charCode": 122
    }
    ]}

    var target = keybinding.keyBindings;
    
function keys(){
   $("html").keypress(function(e){
   	for(i = 0;i < target.length;i++){
	if (e.charCode == target[i].charCode) {
		window.open(target[i].address);
   		}}
	});
}


  keys();
