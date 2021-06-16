const Discord = require("discord.js")

exports.run = async function(client, message, args) {

    if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("<a:Uyar:794135977202548737> | **Bu komudu kullanabilmek için** `Kullanıcı Adlarını Yönet` **yetkisine sahip olmanız gerek.**");


const user = message.mentions.users.first()

if (!user) {
message.channel.send(new Discord.MessageEmbed())
.setTitle("Hata!")
.setDescription(`<a:Uyar:794135977202548737> | **Bir kullanıcı etiketlemelisin!**`)
.setColor("RED")

const nick = args.join(" ")

if (!nick) {
message.channel.send(new Discord.MessageEmbed())
.setTitle("Hata!")
.setDescription(`<a:Uyar:794135977202548737> | **Lütfen bir isim belirtin!**`)
.setColor("RED")
user.setNickname(nick).then(() => {
message.channel.send(new Discord.MessageEmbed())
.setTitle("Başarılı!")
.setDescription(`<:OnayPng:794135282093654047>  | **Başarıyla,** ${user} **kullanıcısının ismi** \`${nick}\` **olarak ayarlandı**`)
.setFooter(`${message.author.tag} Adlı kullanıcı tarafından kullanıldı!`)
.setColor("GREEN")

}).catch(err => message.channel.send("<a:Uyar:794135977202548737> | **İsim değiştirirken bir hata meydana geldi.**"))
}
  }
  }//codare
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['isim-değiştir'],
permLevel: 0
}
exports.help = {
name: "nick",
description: "Kullanıcıların ismini kolay bir şekil de değiştirebilirsiniz.",
usage: "nick "
}