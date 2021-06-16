const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
let prefix = ayarlar.prefix
exports.run = async(client , message, args) =>{
    const tinkie = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle(`Yardım Komutları`)
    .setDescription(`
    ${prefix}c  = **Botun Cesaret Komutlarını Gösterir**
    ${prefix}d  = **Botun Doğruluk Komutlarını Gösterir**
    ${prefix}18 = **Botun +18 Komutlarını Gösterir**
    ${prefix}p  = **Soruyu Pas Geçer**
    `)
    .setThumbnail(`${message.author.avatarURL()}`)
    .setFooter('Virtual')

    message.channel.send(tinkie)
}

exports.conf ={
    "aliases": ["dc" , "d-c" , "dccc" , "ddcc" ],
    "permLevel": "0"
}

exports.help = {
    "name": "doğrulukcesaret",
    "description": "yardım",
    "usage": ".yardim"
}