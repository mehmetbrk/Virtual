const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  let prefix = ayarlar.prefix;

  if (db.has(`gçkanal_${message.guild.id}`) === false) {
    const embed = new Discord.MessageEmbed()
     .setTitle('Virtual Bot | Resimli HG-BB Sistemi')
  .setFooter(`Virtual Bot | ${message.author.username} komutu kullandı.`)
      .setDescription(`Resimli HG-BB Kanalını Ayarlamadığın İçin Sıfırlayamazsın! \n Ayarlamak İçin !resimlihgbb-ayarla #kanal`)
      .setColor("#00008B")
    message.channel.send(embed);
    return;
  }
  db.delete(`gçkanal_${message.guild.id}`);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Resimli HG-BB Kanalı Başarıyla Sıfırlandı`)
  .setTitle('Virtual Bot | Resimli HG-BB Sistemi')
  .setFooter(`Virtual Bot | ${message.author.username} komutu kullandı.`)
    .setColor("#0008B")
  message.channel.send(embed);
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hgbb-sıfırla"],
  permLevel: 10
};

exports.help = {
  name: "resimlihgbb-kapat",
  description: "",
  usage: ""
};