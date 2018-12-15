"use strict";

// Include the Alexa SDK
var Alexa = require("alexa-sdk");

// The handlers object tells Alexa how to handle various actions
var handlers = {

	//Our skill will receive a LaunchRequest when the user invokes the skill with the invocation name, but does not provide any command mapping to an intent. For example, "Open code academy"
	"LaunchRequest": function () {
    //Create speech output. This is what Alexa will speak back when the user says "Open code academy"
		this.emit(":tell", "Welcome to Codecademy");
	}
	
		"Phrase": function () {
    //Create speech output. This is what Alexa will speak back when the user says "Ask code academy to say hello"
	var myLanguage = this.event.request.intent.slots.oggetto.value
	
	this.emit(':responseReady');
		//this.emit(":tell", "Hello, Codecademy");
	},
	
};

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
	// Create an instance of the Alexa library and pass it the requested command.
	var alexa = Alexa.handler(event, context);

	// Give our Alexa instance the list of handlers that we created.
	alexa.registerHandlers(handlers);

	// Start our Alexa code.
	alexa.execute();
};
