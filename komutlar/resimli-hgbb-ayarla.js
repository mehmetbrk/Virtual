const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let channel = message.mentions.channels.first();
  if (!channel) {
    const hgbb2 = new Discord.MessageEmbed()
     .setTitle('Virtual Bot | Resimli HG-BB Sistemi')
  .setFooter(`Virtual | ${message.author.username} komutu kullandı.`)
    .setColor('#00008B')
    .setDescription('Bir kanal etiketleyin')
    return message.reply(hgbb2);
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  const hgbb1 = new Discord.MessageEmbed()
   .setTitle('Virtual Bot | Resimli HG-BB Sistemi')
  .setFooter(`Virtual Bot | ${message.author.username} komutu kullandı.`)
  .setColor('#0008B')
  .setDescription(` Resimli HG-BB Kanalı ${channel} Olarak Ayarlandı. `)
  message.channel.send(hgbb1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hgbb-ayarla"],
  permLevel: 10
};

exports.help = {
  name: "resimli-hgbb-ayarla",
  description: "",
  usage: ""
};