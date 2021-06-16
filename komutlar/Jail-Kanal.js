const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <:OnayPng:794135282093654047>', '**SÜPER!** <:OnayPng:794135282093654047>', '**NASIL YAPTIN BUNU?!** <:OnayPng:794135282093654047>', '**MÜKEMMEL!** <:OnayPng:794135282093654047>', '**SEVDİM BUNU!** <:OnayPng:794135282093654047>', '**ŞİMDİ OLDU!** <:OnayPng:794135282093654047>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:Uyar:794135977202548737>', '**OLMADI BU!** <a:Uyar:794135977202548737>', '**HAY AKSİ!** <a:Uyar:794135977202548737>', '**HADİ ORADAN!** <a:Uyar:794135977202548737>', '**OLMADI YA!** <a:Uyar:794135977202548737>', '**BÖYLE OLMAZ?!** <a:Uyar:794135977202548737>', '**HADİ YA!** <a:Uyar:794135977202548737>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`<a:Uyar:794135977202548737>  | **${ayarlar.prefix}jail-yetkilisi ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`<a:Uyar:794135977202548737>  | **Sistemi kullanabilmek için, !jail-yetkilisi ayarla/sıfırla @rol yazmalısın.**`)
   
  
  if (args[0] == 'ayarla') {
  
  let kanal = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args[1].join('-'))
  if (!kanal) return message.channel.send(x2 + ` Bir kanal etiketle.`)
  
  db.set(`jailkanal_${message.guild.id}`, kanal.id)
  message.channel.send(x + ` <:OnayPng:794135282093654047>  | Jail logunun tutulacağı kanal ${kanal} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailkanal_${message.guild.id}`)
    message.channel.send(x + ` <:OnayPng:794135282093654047>  |  Jail logunun tutulduğu kanal başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailkanal'],
 permLevel: 0
};

exports.help = {
 name: 'jail-kanal',
 description: 'Birisi jaile atılınca hangi kanala mesaj atılacağını ayarlarsınız.',
 usage: 'jail-kanal ayarla/sıfırla #kanal',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};