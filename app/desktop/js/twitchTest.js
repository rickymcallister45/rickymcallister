  
$.getJSON('https://api.twitch.tv/kraken/streams/rickymcallister45', function(channel) {

    if (channel["stream"] == null) { 
        console.log('twitch offline');
    } else {

        console.log('online motherfucker');
    
    }



});
