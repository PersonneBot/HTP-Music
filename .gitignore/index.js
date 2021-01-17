const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");
var prefix = "!";
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

client.on("message", message => {
  if(message.content.indexOf(prefix + "play")){
    if(message.member.voice){
      message.channel.send("right");
    }
  }
})