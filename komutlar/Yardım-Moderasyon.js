const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('755712467367231548')

exports.run = (client, message, args) => {
                         if (talkedRecently.has(message.author.id)) {
           return message.reply("``Komutu 5 Saniye Aralıklarla Kullanabilirsin.``");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
    const embed = new Discord.MessageEmbed()
 .setColor(0xF001FA)
.addField('**<:OnayPng:794135282093654047>  Moderasyon Komutları  <:OnayPng:794135282093654047>**',`
**\n:white_small_square: !bansistemi** :  Ban Sistemi
**:white_small_square: !kicksistemi** :  Kick Sistemi 
**:white_small_square: !modlog** : Modlog 
**:white_small_square: !kayıtsistemi** : Gelişmiş Kayıt 
**:white_small_square: !abone-sistemi** :  Abone Sistemi
**:white_small_square: !botlist-sistemi** :  Bot List Sunucularına Özel
**:white_small_square: !uyarı-sistemi** : Uyarı Sistemi
**:white_small_square: !sayaç** : Gelişmiş Sayaç Sistemi
**:white_small_square: !ototag** : Oto Tag Sistemi
**:white_small_square: !sunucukur** : Oto Sunucu Kurar
**:white_small_square: !sunucukur-public** : Public Sunucu Kurar
**:white_small_square: !sunucukur-public2** : Public 2 Sunucu Kurar
**:white_small_square: !emojikur** : Emoji Kurar Sunucunuza
**:white_small_square: !otocevap** : Gelişmiş OtoCevap Sistemi
**:white_small_square: !sa-as** : Sa - As Sistemis
**:white_small_square: !nuke** : Kanalı Siler Ve Tekrar Açar
**:white_small_square: !slowmode** : Yavaş Modu Açar `)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.addField("**➥ Linkler**", "[:white_check_mark: Davet Linki](https://discord.com/oauth2/authorize?client_id=757928684253478974&scope=bot&permissions=8)\n[:white_check_mark: Destek Sunucu](https://discord.gg/BJwp5gm8eK)\n[:white_check_mark: Website](https://docs.virtualbot.xyz/)")
.setImage('https://cdn.discordapp.com/attachments/803627425766440994/803632972804390932/standard_2.gif')
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   