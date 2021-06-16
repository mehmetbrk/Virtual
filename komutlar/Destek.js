const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('<a:Uyar:794135977202548737> | Doğru Kullanım : !destek <isteğiniz>')

return message.channel.send(embed)
}
  //lrowsxrd
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription('<:OnayPng:794135282093654047>  | Desteğiniz Başarıyla Bildirildi.\nEn Yakın Zamanda İlgilenecektir')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının **Desteği ;**`)

.addField(`:envelope: **Gönderen Kişinin Bilgileri ;**`, `:white_small_square: Kullanıcı İd : ${message.author.id}\n:white_small_square: Kullanıcı Adı : ${message.author.username}\n:white_small_square: Kullanıcı Tagı : ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen İstek/Tavsiye Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('803912153601409025').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["istek-bildir","istekbildir"],
    permLevel: 0
}

exports.help = {
    name: 'destek',
    description: 'isteğinizi belirtilen kanala bildirir.',
    usage: 'istek'
}