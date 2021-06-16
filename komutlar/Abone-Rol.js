///// - komutlar/abone-rol.js
const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();
exports.run = async(client, message, args) => {
if(!args[0]) return message.channel.send("Doğru Kullanım: `!abone-rol ayarla/sıfırla`")

if(args[0] === "sıfırla") {
if(!db.has(`abonerol_${message.guild.id}`)) return message.channel.send("Sıfırlamak için ayarlı olması gerek")
db.delete(`abonerol_${message.guild.id}`)
message.channel.send("Abone rolü başarıyla sıfırlandı")
}
if(args[0] === "ayarla"){
if(db.has(`abonerol_${message.guild.id}`)) return message.channel.send("Abone rolü zaten ayarlanmış")
let role = message.mentions.roles.first();
if(!role) return message.channel.send("Bir rol etiketlemelisin")
db.set(`abonerol_${message.guild.id}`, role.id)
message.channel.send("Abone rolü başarıyla ayarlandı")
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
  name: 'abone-rol',
  description: 'bişilet',
  usage: 'yaz'
};