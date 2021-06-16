///// - komutlar/abone-yetkili.js
const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();
exports.run = async(client, message, args) => {
if(!args[0]) return message.channel.send("Doğru Kullanım: `!abone-yetkili ayarla/sıfırla`")

if(args[0] === "sıfırla") {
if(!db.has(`aboneyetkili_${message.guild.id}`)) return message.channel.send("Sıfırlamak için ayarlı olması gerek")
db.delete(`aboneyetkili_${message.guild.id}`)
message.channel.send("abone yetkilisi rolü başarıyla sıfırlandı")
}
if(args[0] === "ayarla"){
if(db.has(`aboneyetkili_${message.guild.id}`)) return message.channel.send("Abone yetkilisi rolü zaten ayarlanmış")
let yrole = message.mentions.roles.first();
if(!yrole) return message.channel.send("Bir rol etiketlemelisin")
db.set(`aboneyetkili_${message.guild.id}`, yrole.id)
message.channel.send("Abone yetkilisi rolü başarıyla ayarlandı")
}
} 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
///fiber code
exports.help = {
  name: 'abone-yetkili',
  description: 'bişilet',
  usage: 'yaz'
};