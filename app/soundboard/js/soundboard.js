var sounds = ['Ahhhh',
'AirhornSoundEffect',
'AintItGreattobeCrazy',              
'AwkwardCricketSoundEffect',
'BecauseYoudBeInJail',
'BisonYes',
'Brah',
'BrettKavanaugh',
'CanYouFeelIt',
'CashMeOutside',
'Complain',
'DefLeppardPourSomeSugarOnMe',
'DXTheme',              
'ElectricSlide',
'Faggots',
'GeorgeBushDoesntCareAboutBlackPeople',
'HeNeedSomeMilk',
'HellNah',
'JebBush',
'JimAcosta',
'Kanye West - All Of The Lights (Album Version Explicit) ',
'KathyGriffin',
'KeeptheChangeYouFilthyAnimal',
'KillBillSuspense',
'KillBillSuspense2',
'MetalGearSolidAlert',
'MyMan',
'MyNameIsJeffSoundEffect',
'Podesta',
'ReallyNibba',
'RiffRaff',
'RobloxDeathSoundEffect',
'TaylorSwiftLookWhatYouMadeMeDo',
'TrumpvsAcosta',
'WhiteMale',
'WompWompWomp',
'Worldstar',
'birdMan',
'everyFuckingDayMP3',
'gospel',
'gunCock',
'lawAndOrder',
'leeroyJenins',
'PredatorTheme',              
'priceIsWrong',
'RideTheWind',              
'sKidaDdle',
'smokeDetector',
'suspense00',
'suspense01',
'suspense02',
'suspense03',
'wasted',
'xFiles'];

/*$.ajax({
    url: "http://rickymcallister.com/json/soundboard.json",

    dataType: "jsonp",
    success: function( response ) {
        console.log( response ); // server response
    }

});
*/

$("body").append('<ul id="soundboard"></ul>')
        for(i = 0; i < sounds.length; i++){
            $('#soundboard').append('<ul class="sounds">' + sounds[i] + '</ul>');
            
            }
$('.sounds').click(function() {
        var name = $(this).text();
        var audio = new Audio('../../../files/mp3/' + name + ".mp3");
        console.log(name);
        audio.play();
        
            });



