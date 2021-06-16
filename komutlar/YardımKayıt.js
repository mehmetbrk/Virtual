const discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix;

const yardım = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<:OnayPng:794135282093654047>  **Virtual Kayıt Sistemi**  <:OnayPng:794135282093654047>`)
.setColor('BLACK')
.setDescription(`**:white_small_square: ${prefix}kız-rol @rol** Kız Rolünü Ayarlar \n **:white_small_square: ${prefix}erkek-rol @rol :** Erkek Rolünü Ayarlar \n **:white_small_square: ${prefix}say :** Kayıt Özel Say \n **:white_small_square: ${prefix}kayıt-tag :** Verilecek Tagı Ayarlar \n **:white_small_square: ${prefix}yetkili-rol @yetkili :** Kayıt Ekibi Rolünü Ayarlar \n **:white_small_square: ${prefix}erkek :** Erkek Kayıt Edersiniz \n **:white_small_square: ${prefix}kız :** Kız Kayıt Edersiniz\n **:white_small_square: ${prefix}kayıtsız-rol :** Kayıtsız Rolünü Ayarlarsınız `)
.setThumbnail(client.user.avatarURL())
.setImage("https://cdn.discordapp.com/attachments/774140269699661824/808767232305397800/Foto_1.png")
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(yardım)

}
exports.conf = {
enabled: true,
guildonly: false,
aliases: [],
permlevel: 0
}
exports.help = {
name: 'kayıtsistemi',
description: '',
usage: ''
}