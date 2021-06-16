const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('<a:Uyar:794135977202548737> | Doğru Kullanım : !hata-bildir <bulduğunuz hata>')

return message.channel.send(embed)
}
  
const embed = new Discord.MessageEmbed()
//lrowsxrd
.setColor('GREEN')
.setDescription('<:OnayPng:794135282093654047>  | Botta Bulduğunuz Hata Başarıyla Bildirildi.\nEn Yakın Zamanda İlgileneceğiz')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının **Botta Bulduğu Hata ;**`)

.addField(`:envelope: **Gönderen Kişinin Bilgileri ;**`, `:white_small_square: Kullanıcı İd : ${message.author.id}\n:white_small_square: Kullanıcı Adı : ${message.author.username}\n:white_small_square: Kullanıcı Tagı : ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen Hata/Bug Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('803909803293671434').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hata-bildir","hatabildir"],
    permLevel: 0
}

exports.help = {
    name: 'hata',
    description: 'Botta bulduğunuz hatayı belirtilen kanala bildirir.',
    usage: 'hata'
}