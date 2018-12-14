use strict';
const Alexa = require('ask-sdk-v1adapter');

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.registerV2Handlers(HelpIntentHandler); // New API functions for registering v2 request handlers
  alexa.execute();
};

const handlers = {
  'LaunchRequest': function () {
    this.emit('SayHello');
  },
  'HelloWorldIntent': function () {
    this.emit('SayHello');
  },
  'SayHello': function () {
    this.response.speak('Hello World!');
    this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak('Goodbye!');
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
    this.response.speak('See you later!');
    this.emit(':responseReady');
  }
};

// HelpIntentHandler re-written following v2 request handler interface
const HelpIntentHandler = {
  canHandle({requestEnvelope}) {
    return requestEnvelope.request.type === 'IntentRequest'
    && requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle({responseBuilder}){
    const speechOutput = 'This is the Hello World Sample Skill. ';
    const reprompt = 'Say hello, to hear me speak.';
    return responseBuilder
      .speak(speechOutput)
      .reprompt(reprompt)
      .getResponse();
  },
};
