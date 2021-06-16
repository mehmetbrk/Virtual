const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const sharpen = new Discord.MessageEmbed()

.setColor("RED")
.setImage("https://media1.tenor.com/images/0c05631335594254143fb8beb56c7817/tenor.gif?itemid=11558347")
.setTitle("Efsane bir gol attın !");

  message.channel.send(sharpen);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gol"],
  permLevel: `Yok`
};

exports.help = {
  name: "gol",
  description: "Gol  atarsın",
  usage: "gol"
};