const Discord = require('discord.js')
const data = require('quick.db')
////////////////////////////////////

exports.run = async (client, message, args) => {
let uyarilog = data.fetch(`uyarilog_${message.guild.id}`)
  

  if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("<a:Uyar:794135977202548737>  | ** Bunu yapmak için `Üyeleri At` yetkisine ihtiyacın var **")
if(!args[0]) return message.channel.send(`<:OnayPng:794135282093654047>  | **Uyarı sisteminin komutlarını görmek için \`!uyarı-sistemi\` yazabilirsiniz.**`)




let kullanıcı = message.mentions.users.first()
if(!args[0]) return message.reply(" <a:Uyar:794135977202548737>  | **Lütfen bir üye etiketle.**")
if(!kullanıcı) return message.reply(` <a:Uyar:794135977202548737>  | **Kullanıcı Bulunamadı** (` + args[0] + `)`)

let sayı = args[1]
if(!sayı) return message.reply(` <a:Uyar:794135977202548737>  | **Lütfen silinecek uyarı sayısını gir.**`)
if(isNaN(sayı)) return message.reply(`<a:Uyar:794135977202548737>  | ** Geçerli sayı girmeye ne dersin?**`)
if(sayı === '0') return message.reply(`<a:Uyar:794135977202548737>  | ** Silinecek uyarı 0'dan yüksek olmalı.**`)
const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(syı2 < sayı) return message.reply("Başarısız işlem :/",new Discord.MessageEmbed()
                                     .setColor("#f9ff00")
                                     .setDescription(`**${kullanıcı.tag}** kullanıcısından en fazla **${syı2}** uyarı silinebilir.`))

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
await message.channel.send(new Discord.MessageEmbed()
                           .setColor("#f9ff00")
                           .setTitle(`${kullanıcı.tag}, uyarısı silindi`)
                           .setDescription(`Toplamda **${sayı}** uyarı silindi. Uyarılar: ${syı ? `**`+ syı + `** uyarısı var`: '**0**'}`))
  
if(uyarilog) {
  message.guild.channels.cache.get(uyarilog.id).send(new Discord.MessageEmbed()
                          .setColor("YELLOW")
                          .setTitle("Virtual | Uyarı Sistemi")
                          .setDescription(`**${kullanıcı}** kullanıcısının **${sayı}** uyarısı**${message.author.tag}** tarafından silindi!`)
                          .setTimestamp())
}  


}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["uyarısil","clearwarn","unwarn","delwarn","deletewarn","delete-warn","del-warn","clear-warn","clearwarn","clear-infractions","uyarı-sil","uyari-sil"],
    permLevel: 0
};

exports.help = {
    name: 'uyarisil',
};