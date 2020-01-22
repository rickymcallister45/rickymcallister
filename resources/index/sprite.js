let data = [{
  title:'desktop',
  x: 0,
  y: 0,
  path: 'app/desktop/index.html'
},
{
  title:'calender',
  x: -50,
  y: 0,
  path: 'https://calendar.google.com/'
},
{
  title:'clock',
  x: -100,
  y: 0,
  path: 'needsFiguredOut'
  },
{
  title:'gmail',
  x: -150,
  y: 0,
  path: 'https://mail.google.com/'
  },
{
  title:'entertainment',
  x: 0,
  y: -50,
  path: 'http://rickymcallister.com/app/entertainment/r6index.html'
  },
{
  title:'grocery',
  x: -50,
  y: -50,
  path: 'http://rickymcallister.com/app/groceryList/index.php'
  },
{
  title:'keep',
  x: -100,
  y: -50,
  path: 'https://keep.google.com/'
  },
{
  title:'controller',
  x: -150,
  y: -50,
  path: 'http://rickymcallister.com/app/controller/index.html'
  },
{
  title:'store',
  x: 0,
  y: -100,
  path: 'http://rickymcallister.com/app/store/index.php'
},
{
  title:'soundboard',
  x: -50,
  y: -100,
  path: 'http://rickymcallister.com/app/soundboard/index.php'
},
{
  title:'services',
  x: -100,
  y: -100,
  path: 'http://rickymcallister.com/app/services/index.php'
},
{
  title:'radar',
  x: -150,
  y: -100,
  path: 'http://rickymcallister.com/app/radar/index.html'
},
{
  title:'todo',
  x: 0,
  y: -150,
  path: 'http://rickymcallister.com/app/toDo/index.php'
},
{
  title:'tv',
  x: -50,
  y: -150,
  path: 'http://rickymcallister.com/app/remote/index.html'
},

    
];



for(i=0;i<data.length;i++){
  var element = "<li class='icons' id='" + data[i].title + "'><a href='" + data[i].path + "'><img= src='resources/index/img/sprite.jpg'></a></li>";  
 
 $(".menu").append(element);
   $('#' + data[i].title).css('background-position', data[i].x + 'px'+ ' ' + data[i].y + 'px');
 }
