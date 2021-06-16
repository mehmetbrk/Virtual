const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <:OnayPng:794135282093654047>', '**SÜPER!** <:OnayPng:794135282093654047>', '**NASIL YAPTIN BUNU?!** <:OnayPng:794135282093654047>', '**MÜKEMMEL!** <:OnayPng:794135282093654047>', '**SEVDİM BUNU!** <:OnayPng:794135282093654047>', '**ŞİMDİ OLDU!** <:OnayPng:794135282093654047>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:Uyar:794135977202548737>', '**OLMADI BU!** <a:Uyar:794135977202548737>', '**HAY AKSİ!** <a:Uyar:794135977202548737>', '**HADİ ORADAN!** <a:Uyar:794135977202548737>', '**OLMADI YA!** <a:Uyar:794135977202548737>', '**BÖYLE OLMAZ?!** <a:Uyar:794135977202548737>', '**HADİ YA!** <a:Uyar:794135977202548737>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`<a:Uyar:794135977202548737>  | **${ayarlar.prefix}jail-rol ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`<a:Uyar:794135977202548737>  | Sistemi kullanabilmek için, q!jail-rol ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: q!yardım sustur-kanal`)
   
  
  if (args[0] == 'ayarla') {
  
  let rol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!rol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  db.set(`jailrol_${message.guild.id}`, rol.id)
  message.channel.send(x + `<:OnayPng:794135282093654047>  |   Jail rolü ${rol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailrol_${message.guild.id}`)
    message.channel.send(x + `<:OnayPng:794135282093654047>  |   Jail rolü başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailrol'],
 permLevel: 0
};

exports.help = {
 name: 'jail-rol',
 description: 'Birisi jaile atılınca hangi role sahip olacağını ayarlarsınız.',
 usage: 'jail-rol ayarla/sıfırla @rol',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};