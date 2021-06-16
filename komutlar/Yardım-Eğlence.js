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
.addField('**<:OnayPng:794135282093654047>  Eğlence 2 Komutları  <:OnayPng:794135282093654047>**',`
\n:white_small_square: **!dc** : Doğruluk Cesaret
:white_small_square: **!slots** : Slot Oyunu Oynarsınız
:white_small_square: **!beşlik** : Beşlik Atarsınız
:white_small_square: **!taksimdayı** : Taksim Dayı 
:white_small_square: **!kartopu** : Kartopu Atarsınız
:white_small_square: **!fbi** : Fbi Gif Atar
:white_small_square: **!stresçarkı** : Stres Çarkı Çevirirsiniz
:white_small_square: **!fal** : Falınızı Söyler 
:white_small_square: **!magik** : Magik Resim
:white_small_square: **!silah** : Silah Resim
:white_small_square: **!kar** : Kar Resim
:white_small_square: **!emojiyazı** : Emojili Yazı Yazar`)
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
  name: 'eğlence2',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   