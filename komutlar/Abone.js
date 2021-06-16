const db = require('quick.db');

const Discord = require('discord.js')

exports.run = function(client, message, args) {
let user = message.mentions.users.first() || client.users.cache.get(args[0])
let member = message.guild.members.cache.get(user.id)
var abonekanal = db.fetch(`abonekanal_${message.guild.id}`)
var abonelog = db.fetch(`abonelog_${message.guild.id}`)
var aboneyetkili = db.fetch(`aboneyetkili_${message.guild.id}`)
var abonerol = db.fetch(`abonerol_${message.guild.id}`)
if(!member) return message.channel.send("Abone rolü vermek istediğin kişiyi etiketlemelisin")
if(message.channel.id !== abonekanal) return message.channel.send(`Bu komudu sadece <#${abonekanal} kanalında kullanabilirsin!`)
if(!message.member.roles.cache.has(abonerol)) return message.channel.send("Bu komudu kullanmak için gerekli role sahip değilsin.")
if(member.roles.cache.has(abonerol)) return message.channel.send("Bu kullanıcı zaten abone rolüne sahip")
member.roles.add(abonerol)
message.channel.send(new Discord.MessageEmbed()
.setTitle("Başarılı")
.setColor("RANDOM")
.setDescription("Kullanıcıya başarıyla abone rolü verildi."))

client.channels.cache.get(abonekanal).send(new Discord.MessageEmbed()
.setTitle("Başarılı")
.setColor("RANDOM")
.setDescription(`${user.username} adlı kullanıcıya abone rolü verildi\nYetkili: ${message.author.username}`))
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'abone',

  description: 'description',

  usage: 'usage'

};