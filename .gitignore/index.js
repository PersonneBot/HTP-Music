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
  if(message.content.indexOf(prefix + "play") == 0){
    if(message.member.voice){
      message.channel.send("right");
    }
  }
});


//commande hello                                                          nice v12
client.on("message", message =>{
  if(!message.guild) return
  if(message.content.indexOf(prefix + "hello") == 0){
    message.channel.send("Bonjour " + message.author.username + "!")
  }
});