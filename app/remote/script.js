let data = [{
  title:'fox',
  x: -5,
  y: -5,
  path: 'fox-news-live-stream-usa'
},
{
  title:'espn',
  x: -200,
  y: -5,
  path: 'espn'
},
{
  title:'cnn',
  x: -400,
  y: -5,
  path: 'watch-cnn-news-live-24-7-free'
  },
{
  title:'msnbc',
  x: -600,
  y: -5,
  path: 'watch-msnbc-live-stream-24-7-free'
  },
{
  title:'cartoonNetwork',
  x: -5,
  y: -205,
  path: 'cartoon-network'
  },
{
  title:'nick',
  x: -205,
  y: -205,
  path: 'nickelodeon'
  },
{
  title:'fx',
  x: -395,
  y: -205,
  path: 'fx'
  },
{
  title:'disney',
  x: -595,
  y: -205,
  path: 'disney-channel'
  },
{
  title:'comedyCentral',
  x: -5,
  y: -405,
  path: 'comedy-central'
},
{
  title:'abc',
  x: -204,
  y: -404,
  path: 'abc'
},
{
  title:'hbo',
  x: -400,
  y: -405,
  path: 'hbo'
},
{
  title:'starz',
  x: -600,
  y: -405,
  path: 'starz'
},
{
  title:'showtime',
  x: -5,
  y: -595,
  path: 'showtime'
},
{
  title:'home',
  x: -200,
  y: -595,
  path: ''
},

    
];

var url = 'http://watchnewslive.tv/';

for(i=0;i<data.length;i++){
 
 var element = "<a href='" + url + data[i].path + "'><div class='remoteButton' id='" + data[i].title + "'></div></a>";
 
  $("#holder").append(element);
  
  $('#' + data[i].title).css('background-position', data[i].x + 'px'+ ' ' + data[i].y + 'px');
  
}
