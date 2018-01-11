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
});
bot.connect();