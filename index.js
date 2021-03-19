const Discord = require("discord.js");
const { welcomeImage } = require('discord-welcome-card');
const client = new Discord.Client();





client.on('ready', () => {
  client.user.setActivity("RoyalPlay.cz");
  console.log(`${client.user.tag} byl prihlasen.`);

  client.on("guildMemberAdd", async message => {
    const image = await welcomeImage(message.member);

    message.channel.send(new Discord.MessageAttachment(image, 'welcome.png'))
});


client.login("ODIyMzY4NTQ2MTM0MDMyNDM0.YFRQZA._3gGtbGGbuWJAt5bg0j4kkirKYA")});