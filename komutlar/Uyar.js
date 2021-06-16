const Discord = require('discord.js')
const data = require('quick.db')
////////////////////////////////////

exports.run = async (client, message, args) => { 
let uyarilog = data.fetch(`uyarilog_${message.guild.id}`)
if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("<a:Uyar:794135977202548737>  | ** Bunu yapmak için `Üyeleri At` yetkisine ihtiyacın var**")
if(!args[0]) return message.channel.send(`<:OnayPng:794135282093654047>  | **Uyarı sisteminin komutlarını görmek için \`!uyarı-sistemi\` yazabilirsiniz.**`)


let kullanıcı = message.mentions.users.first()
if(!args[0]) return message.reply("<a:Uyar:794135977202548737>  | **Lütfen bir üye etiketle** ")
if(!kullanıcı) return message.reply(`<a:Uyar:794135977202548737>  | **Kullanıcı Sunucuda Bulunamadı **(` + args[0] + `)`)
if(kullanıcı.bot) return message.reply(`<a:Uyar:794135977202548737>  | **Botları uyaramazsın, sadece kullanıcılar** `) 
if(kullanıcı.id === message.author.id) return message.reply(`<a:Uyar:794135977202548737>  | **Kendini uyaramazsın,başka bir kullanıcı etiketle**`)
 if(kullanıcı.permissions <= client.permissions) return message.reply("<a:Uyar:794135977202548737>  | **Yetkili üyeleri uyaramam **");
data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

let reason = args.slice(1).join(' ')

if(!reason) {
await message.channel.send(new Discord.MessageEmbed()
                          .setColor("#f9ff00")
                          .setAuthor(kullanıcı.tag + " Uyarıldı")
                          .setDescription("**Sebep:** Belirtilmedi"))
if(uyarilog) {
  message.guild.channels.cache.get(uyarilog.id).send(new Discord.MessageEmbed()
                          .setColor("YELLOW")
                          .setTitle("Virtual | Uyarı Sistemi")
                          .setDescription(`**${kullanıcı}** kullanıcısı **${message.author.tag}** tarafından **sebepsizce** uyarıldı!`)
                          .setTimestamp())
}
return
}

if(reason) {
await message.channel.send(new Discord.MessageEmbed()
                          .setColor("#f9ff00")
                          .setAuthor(kullanıcı.tag + " Uyarıldı")
                          .setDescription("**Sebep:** "+ reason))
if(uyarilog) {
  message.guild.channels.cache.get(uyarilog.id).send(new Discord.MessageEmbed()
                          .setColor("YELLOW")
                          .setTitle("Virtual | Uyarı Sistemi")
                          .setDescription(`**${kullanıcı}** kullanıcısı **${message.author.tag}** tarafından **${reason}** sebebiyle uyarıldı!`)
                          .setTimestamp())
}
  return
} 

}







exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["warn"],
    permLevel: 0
};

exports.help = {
    name: 'uyar',
};