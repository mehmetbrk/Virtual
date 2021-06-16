const db = require("quick.db")
const Discord = require("discord.js");

exports.run = function(client, message, args) {

  var cfxu = message.author;
  var cfxsp = args.slice(0).join("  ");
  const cfxreason = new Discord.MessageEmbed()
  .setDescription(`**AFK Moduna Geçmek İçin Bir Sebep Belirtmelisin!** \`${message.author.username}\``)
  .setColor("BLACK")
  .setFooter(`${client.user.username}| AFK.`, client.user.avatarURL())
  if(!cfxsp) return message.channel.send(cfxreason);
  
  db.set(`afk_${cfxu.id}`, cfxsp);
  db.set(`afk_süre_${cfxu.id}`, Date.now());
  const codefenixkodpaylasim = new Discord.MessageEmbed()
  .setDescription(`**Başarıyla AFK Moduna Girdin!** \`${cfxu.username}\``)
  .setColor("RANDOM")
  .setFooter(`${client.user.username} | AFK`, client.user.avatarURL())
  message.member.setNickname(`[AFK] ${message.author.username}`)
  return message.channel.send(codefenixkodpaylasim)
  message.channel.send(codefenixkodpaylasim)
  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 ,
};

exports.help = {
  name: 'afksssssssss', 
  description: 'Kendinizi Afk Moduna Giresiniz',
  usage: 'afk <sebep>'
};
