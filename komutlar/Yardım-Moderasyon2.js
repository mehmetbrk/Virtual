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
.addField('**<:OnayPng:794135282093654047>  Moderasyon Komutları 2  <:OnayPng:794135282093654047>**',`
**:white_small_square: !reklam-engel** : Reklam Engelleme  
**:white_small_square: !unban** : Kişinin Banını Kaldırırsınız
**:white_small_square: !mute-sistemi** : Mute Sistemi
**:white_small_square: !rol-al** : Rol Alır
**:white_small_square: !rol-ver** : Rol Verir
**:white_small_square: !süreliban** :  Süreli Ban Atar
**:white_small_square: !unmute** : Kişinin Mutesini Kaldırırsınız
**:white_small_square: !sil** : Sohbeti Temizler
**:white_small_square: !sohbet-aç** : Sohbeti Herkese Açar
**:white_small_square: !sohbet-kapat** : Sohbeti Herkese Kapatır
**:white_small_square: !banlist** :  Banlananları Listeler
**:white_small_square: !jailsistemi** : Jail Sistemi Komutları`)
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
  name: 'moderasyon2',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   