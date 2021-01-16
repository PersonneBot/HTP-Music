const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ":";
client.login(process.env.TOKEN);
const fs = require('fs');


//on ready
client.on("ready", () => {
  console.log("Working")
  client.user.setActivity({
    type: "LISTENING",
    name: "SOON"
});
});