const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
//OTTOMAN CODE
exports.run = async (bot, message,args) => { 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için yeterli iznin yok.`);
let OTTOMAN = message.mentions.channels.first();
let OTTOMANCODE = await db.fetch(`guvenlik${message.guild.id}`)  
if (args[0] === "kapat" || args[0] === "sıfırla") {
if(!OTTOMANCODE) return message.channel.send(`Güvenlik zaten kapalı`);
//OTTOMAN CODE    
   db.delete(`guvenlik${message.guild.id}`)
   message.channel.send(`Güvenlik başarıyla kapatıldı.`); 
    return
  }
if (!OTTOMAN) return message.channel.send('Güvenlik kanalını bulamadım\nDoğru Kullanım : -güvenlik #metin-kanal`');
   db.set(`guvenlik${message.guild.id}`, OTTOMAN.id)
//OTTOMAN CODE
message.channel.send(`Güvenlik kanalı ${OTTOMAN} olarak ayarlandı`);
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//OTTOMAN CODE
module.exports.help = {
  name: 'güvenlik',
  description: 'güvenlik',
  usage: 'güvenlik'
};