
var board, starting, target, data, input, sel, selected;
var ext = [];
let thread = [];
var threads = [];
var pages = [];
var img = []; 
var commentArray = [];
var link = [];
var regex = /((http:\/\/boards\.4chan\.org)|(http:\/\/boards\.4channel\.org))(\/[a-z0-9]+\/)/;
var url =   "http://boards.4chan.org/pol/thread/" 
var base = "http://i.4cdn.org";
var catolog = 'http://boards.4chan.org/pol/catalog.json';
var memeTemplate = 'https://www.reddit.com/r/MemeTemplatesOfficial.json';
var memeEcon = 'https://www.reddit.com/r/MemeEconomy.json';
var memeInsider = 'https://www.reddit.com/r/InsiderMemeTrading.json';
var dankMeme = 'https://www.reddit.com/r/dankmemes.json';

function setup() {
    noCanvas();
    input = createInput('');
    input.id('thread');
    input.parent('#header');

    var button = button = createButton('submit');
        button.id('button');
        button.parent('#header');
        button.mousePressed(start);
        sel = createSelect();
        sel.parent('#header');    
        sel.id('dropdown');
        sel.option('images');
        sel.option('user');
        sel.option('posts');
}

function start() {
  starting = input.value();
  var isExisting = regex.exec(starting);
  board = isExisting[4]; 
  target = starting + '.json';
  console.log('starting == ' + starting);
  loadJSON(target, drawdata);
}

function drawdata(data) {
  if(sel.value() == 'catolog'){
    for(i = 1 ; i < 9; i++) {
          thread[i] = data[i].threads[i].no;
      }}else{
      loadJSON(starting + '.json', gotData);
    }

function gotData(thread){
  if(sel.value() == 'images'){
     for(i = 0; i < thread.posts.length; i++){
         var image = thread.posts[i].tim;
         var extension = thread.posts[i].ext;
              if(image == undefined){
                console.log('timesThisThreadWasNotUsedAsanImageBoard')
              }else{
                var result = createImg(base + board + image + extension);
                
                result.style('width', '300px');
                result.style('height', '300px');
                result.style('padding', '9px');
              }   }   }
            else if(sel.value == 'posts'){
              for(i = 0; i < data.posts.length; i ++){
            var comments = data.posts[i].com;
            commentArray = createElement('ul' ,comments);
            
            }}else{
            var id = window.prompt('enter user number', '');
            console.log(id);
            for(i = 0; i < data.posts.length; i++){
            if(data.posts[i].id == id){
            var userPosts = createP(data.posts[i].com);
            userPosts.style('color', 'white');
          }
        }
      }
    }
  }

function calologEvent() {
   loadJSON(catolog,catologCallback);
}

function catologCallback(data) {
  console.log(data);
  base = 'http://i.4cdn.org/pol/';
    for(i = 0 ; i < 2; i++) {
      pages[i] = data[i];
    }
      for(i = 0 ; i < 2; i++){
        for(j = 0; j < 19; j++){
          img[j] = pages[i].threads[j].tim;
            thread[j] = pages[i].threads[j].no;

            function visit(){
              console.log(thread);
            } 
              } 
            }
              for(j = 0; j < 19; j++){
                threads =  ('http://boards.4chan.org/pol/thread/' + thread[j] + '.json');
                  loadJSON(threads, threadCallback);
                  }
                }
         function threadCallback(data){
           for(l = 0; l < data.posts.length; l++){
              img[l] = data.posts[l].tim;
              ext[l] = data.posts[l].ext;
              link[l] = data.posts[l].no;
              if(img[l] == undefined){
                  console.log('timesThisThreadWasNotUsedAsanImageBoard')
                  }else{
                    
                    var result = createImg(base + img[l] + ext[l]);
                    result.style('width', '300px');
                    result.style('height', '300px');
                    result.style('padding', '9px');
                    function visit() {
                      window.open(('http://boards.4chan.org/pol/thread/' + data.posts[0].no), '');
                    }
                    result.doubleClicked(visit);
                  }
                }
              }
function redditEvent() {
  loadJSON(memeTemplate, Callback);
}

function memeEconEvent() {
  loadJSON(memeEcon, Callback);
}

function insiderEvent() {
  loadJSON(memeInsider, Callback);
}

function dankEvent() {
  loadJSON(dankMeme, Callback);
}

function Callback(data) {
   for(i = 2; i < 27; i++){
    var result = createImg(data.data.children[i].data.url);
    result.style('width', '300px');
                result.style('height', '300px');
                result.style('padding', '9px');
      }
    }

function pixlrEvent() {
  window.open('https://pixlr.com/editor/',pixlr)
}

function imgurEvent() {
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.imgur.com/3/account/me/images",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer 49ad36f5c9897eb1e7db8ad4d7990efb458d7605",
    "cache-control": "no-cache",
    "Postman-Token": "a40c4305-b746-47b4-858c-9c2ea420825f"
  }
}

$.ajax(settings).done(function (response) {

  for(i = 0; i < response.data.length; i++){
    console.log(response.data[i].link);
    var result = createImg(response.data[i].link);
    console.log(result);
    result.style('width', '300px');
                result.style('height', '300px');
                result.style('padding', '9px');
  }
  
});
}    

function draw() {}