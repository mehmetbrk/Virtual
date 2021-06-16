const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  const ayarlar = require("../ayarlar.json")
let prefix = ayarlar.prefix
   if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu yönet` yetkisine sahip olmalýýsn')
  
   let kanal = message.mentions.channels.first() || args[0]
   if(!kanal) return message.channel.send('Güvenlik mesajlarýnýn gideceði kanalý etiketlemedin :x:')
   else {
    db.set(`güvenlik.${message.guild.id}`, kanal.id)
    return message.channel.send('Güvenlik kanalý <#'+kanal+'> olarak ayarlandý')
   }
   if(args[0] === 'sýfýrla') {
    db.delete(`güvenlik.${message.guild.id}`)
    message.channel.send('Güvenlik kanalý sýfýrlandý.')
   }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:[],
  permlevel: 0
};

exports.help = {
  name: "hesap-kontrol",
  description: 'Güvenlik kanalýný ayarlarsýnýz.',
  usage: 'güvenlik #kanal'
}
