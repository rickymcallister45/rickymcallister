"use strict";



var Alexa = require("alexa-sdk");



var handlers = {
  
	'LaunchRequest': function() {

	    this.response.speak("Hello").listen('What would you like to ask?');
	
    this.emit(':responseReady');

  },


	'myGreatestIntent': function () {
    
		this.response.speak("you are the greatest");
		this.emit(':responseReady');

  }	}



exports.handler = function(event, context, callback){
 
   var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);

    alexa.execute();

};