const db = require('quick.db');

const Discord = require('discord.js')

exports.run = function(client, message, args) {
  if(!args[0]) return message.channel.send("Doğru kullanım: `!sayaç ayarlar/sıfırla`")
  if(args[0] === "ayarla"){
    let kanal = message.mentions.channels.first();
    let sayı = args[2]
    if(db.has(`sayackanal_${message.guild.id}`)) return message.channel.send("Zaten ayarlanmış sıfırlamak için !sayaç sıfırla")
    if(!kanal) return message.channel.send("Bir kanal etiketlemelisin.")
    if(!sayı) return message.channel.send("Üye hedefini girmelisin.")
    if(isNaN(sayı)) return message.channel.send("Üye hedefi bir sayı olmalı.")
    db.set(`sayackanal_${message.guild.id}`, kanal.id)
    db.set(`sayachedef_${message.guild.id}`, sayı)
    message.channel.send("Başarıyla ayarlandı sıfırlamak için !sayaç sıfırla")
    
  }
  if(args[0] === "sıfırla"){
    if(!db.has(`sayackanal_${message.guild.id}`)) return message.channel.send("Zaten ayarlanmamış ayarlamak için !sayaç ayarla")
    db.delete(`sayackanal_${message.guild.id}`)
    db.delete(`sayackanal_${message.guild.id}`)
    message.channel.send("Başarıyla sıfırlandı")
  }

}
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'sayaç',

  description: 'description',

  usage: 'usage'

};