const Discord = require('discord.js')
const db = require('quick.db')
////////////////////////////////////

exports.run = async (client, message, args) => {
if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("<a:Uyar:794135977202548737>  | ** Bunu yapmak için `Üyeleri At` yetkisine ihtiyacın var **")
let kanaletiket = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
if(!kanaletiket) return message.reply("<a:Uyar:794135977202548737>  | **UyariLog kanalini etiketlemelisin!**")
db.set(`uyarilog_${message.guild.id}`, kanaletiket)
message.channel.send(`<:OnayPng:794135282093654047>  | Uyari Log kanali ${kanaletiket} olarak ayarlandi `)
}



exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['uyari-log','uyarilog',"uyarı-log"],
permLevel: 0,
}

exports.help = {
name: 'uyarılog'
}