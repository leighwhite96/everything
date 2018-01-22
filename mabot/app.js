var restify = require("restify");
var builder = require("botbuilder");

var server = restify.createServer();
server.listen(3978, function() {
  console.log("%s listening to %s", server.name, server.url);
});

var connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post("/api/messages", connector.listen());

var bot = new builder.UniversalBot(connector, function(session) {
  session.beginDialog("greetings");
});

bot.dialog("greetings", [
  function(session) {
    builder.Prompts.text(session, "Hi! What is your name?");
  },
  function(session, results) {
    session.endDialog(`Hello ${results.response}!`);
  }
]);
