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
.addField('**<:OnayPng:794135282093654047>  Eğlence Komutları  <:OnayPng:794135282093654047>**',`
**\n:white_small_square: !yazıtura** : Bot Yazıtura Atar
**:white_small_square: !balıktut** : Balık Tutarsınız
**:white_small_square: !kelime-tahmini** : Kelime Tahmini Oyunu Oynarsınız
**:white_small_square: !dans** : Dans Figürleri Atar
**:white_small_square: !aduketçek** : Aduket Çeker
:white_small_square: **!yorum** : Yorum Atarsınız
:white_small_square: **!kralol** : Kral Olursunuz
:white_small_square: **!alkış** : Alkışlarsınız
:white_small_square: **!ejdarha-yazı** : Ejderha Yazı Yazar
:white_small_square: **!aşkölçer** : Aşkınızı Ölçer
:white_small_square: **!adamasmaca** : Adam Asmaaca Oynarsınız!
**:white_small_square: !şekerye** : Şeker Ye`)
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
  name: 'eğlence',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   