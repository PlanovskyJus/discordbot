// bot code
var Eris = require('eris');
var bot = new Eris("NDAwOTk0OTkyOTI0OTE3Nzcw.DTjvOQ.QNrRYjcsGsA5-jBEjnMaYvg_huA");
bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
    if(msg.content === "!joke") {
        bot.createMessage(msg.channel.id, "Ur Mom");
    }
    if(msg.content === '!about') {
        bot.createMessage(msg.channel.id, "``` I am a bot, built by people in the SEHS \n Programming Club! ```");
    }
    if(msg.content === '!msgme') {   // sends a msg to the person who wrote this
        bot.getDMChannel(msg.author.id).then(channel => {  // get the channel id to send
            channel.createMessage("asdfasdf"); //send msg
        });
    }
});
bot.connect();