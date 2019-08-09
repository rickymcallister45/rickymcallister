var gif = ['christmas','coffee','countryside','countryside2','dust','farcry','fire','fire2','firePlace','fountain','fountain2','infinitypool','lava',
'mountain','mountain2','mountain3','pool','pool2','rain', 'rain2', 'rainLeaves','rainyForest','rainyRoad','rainyRoad2', 'rainyRoad3', 'rainyWindow', 'rainyWindow2',
'river','river2','river3','snow','wallFountain','waterfall','wheatField'];

$("#center").append('<ul id="gifs" class="hide-item"></ul>')
        for(i = 0;i < gif.length;i++){
            $('#gifs').append('<ul class="gif"><a>' + gif[i] + '</a></ul>');
            }

function gifBackground(){
    $('#gifs').toggleClass('active');
    
    $('.gif').click(function() {
        var name = $(this).text();
        $('body').css('background-image', 'url(../../files/gif/' + name + '.gif)');
            }); }
