const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('<a:Uyar:794135977202548737>  | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`<a:Uyar:794135977202548737>  | **Örnek Kullanım:** ${prefix}kanal-koruma aç/kapat`)
  }
  if (args[0] === 'aç') {
    db.set(`kanalk_${message.guild.id}`, "Aktif")
     message.channel.send(`<:OnayPng:794135282093654047>  | **Kanal Koruma Başarıyla Açıldı!**`)
  }
   if (args[0] === 'kapat') {
    db.delete(`kanalk_${message.guild.id}`)
    message.channel.send(`<:OnayPng:794135282093654047>  | **Kanal Koruma Başarıyla Kapatıldı!**`)
  }
};
exports.conf = {
  aliases: ['kanalkoruma'],
  permLevel: 4
};
exports.help = {
  name: 'kanal-koruma'
}; 
