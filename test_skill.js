"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "HelloIntent": function () {
    this.response.speak("Ciao, dispensa"); 
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("ben venuto in dispensa"); 
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
