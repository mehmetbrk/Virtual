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
.addField('**<:OnayPng:794135282093654047>  BotList Sistemi Komutları  <:OnayPng:794135282093654047>**',`
**\n:white_small_square: !botlist-ayar** : Bot List Ayarlar
**:white_small_square: !botlist-ayar botekle-kanal** : Bot Ekleme Kanalını Ayarlar
**:white_small_square: !botlist-ayar botlog-kanal** : Bot Log Kanalını Ayarlar
**:white_small_square: !botlist-ayar başvurugiden-kanal** : Başvuru Kanalını Ayarlar
**:white_small_square: !botlist-ayar yetkili** : Yetkili Rolünü Ayarlar
**:white_small_square: !botekle** : Kullanıcılar Bot Ekler
**:white_small_square: !onayla** : Bot Onaylarsınız
**:white_small_square: !reddet** : Bot Reddedersiniz`)
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
  name: 'botlist-sistemi',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   