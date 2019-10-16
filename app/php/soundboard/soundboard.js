$('.sounds').click(function() {
        var name = $(this).text();
        var audio = new Audio('../../../files/mp3/' + name + '.mp3');
        console.log(name);
        audio.play();
});
