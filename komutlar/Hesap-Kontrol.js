const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  const ayarlar = require("../ayarlar.json")
let prefix = ayarlar.prefix
   if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek i�in `Sunucuyu y�net` yetkisine sahip olmal��sn')
  
   let kanal = message.mentions.channels.first() || args[0]
   if(!kanal) return message.channel.send('G�venlik mesajlar�n�n gidece�i kanal� etiketlemedin :x:')
   else {
    db.set(`g�venlik.${message.guild.id}`, kanal.id)
    return message.channel.send('G�venlik kanal� <#'+kanal+'> olarak ayarland�')
   }
   if(args[0] === 's�f�rla') {
    db.delete(`g�venlik.${message.guild.id}`)
    message.channel.send('G�venlik kanal� s�f�rland�.')
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
  description: 'G�venlik kanal�n� ayarlars�n�z.',
  usage: 'g�venlik #kanal'
}
