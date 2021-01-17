const { CommandoClient } = require("discord.js-commando");
const path = require('path');
const client = new CommandoClient({
  commandPrefix: "!",
  owner: "554728734792482827",
  invite: "https://discord.gg/DnxrKxRchZ"
});
client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerGroup('music', "Music")
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(process.env.TOKEN);


//on ready
client.on("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
  client.user.setActivity({
    type: "LISTENING",
    name: "SOON"
});
});

client.on('error', console.error);