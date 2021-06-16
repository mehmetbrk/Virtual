///// - komutlar/abone-log.js
const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();
exports.run = async(client, message, args) => {
if(!args[0]) return message.channel.send("Doğru Kullanım: `!abone-log ayarla/sıfırla`")
if(args[0] === "sıfırla") {
if(!db.has(`abonelog_${message.guild.id}`)) return message.channel.send("Sıfırlamak için ayarlı olması gerek")
db.delete(`abonelog_${message.guild.id}`)
message.channel.send("Abone log kanalı başarıyla sıfırlandı")
}
if(args[0] === "ayarla"){
if(db.has(`abonelog_${message.guild.id}`)) return message.channel.send("Abone log kanalı zaten ayarlanmış")
let channel = message.mentions.channels.first();
if(!channel) return message.channel.send("Bir kanal etiketlemelisin")
db.set(`abonelog_${message.guild.id}`, channel.id)
message.channel.send("Abone log kanalı başarıyla ayarlandı")
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
  name: 'abone-log',
  description: 'bişilet',
  usage: 'yaz'
};