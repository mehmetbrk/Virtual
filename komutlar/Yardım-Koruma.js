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
.addField('**<:OnayPng:794135282093654047>  Koruma Komutları  <:OnayPng:794135282093654047>**',`
**\n:white_small_square: !korumalar** : Koruma Komutları
**:white_small_square: !spam**: Spamları Durdurur
**:white_small_square: !botkoruma** : Sunucunuzu Güvence Altına Alır
**:white_small_square: !botkorumakapat** : Korumayı Kapatır
**:white_small_square: !kanal-koruma** : Kanal Koruma Sistemi
**:white_small_square: !sağtıkban** : Sağtık Ban Koruması
**:white_small_square: !caps** : CapsLock Kullanımını Yasaklar
**:white_small_square: !ever-engel** : Ever-Here Engelleme
**:white_small_square: !emoji-koruma** : Emojilerinizi Korur
**:white_small_square: !rol-koruma** : Rollerinizi Korur
**:white_small_square: !reklam** : Reklamları Engeller
**:white_small_square: !fakeüye** : Fake Veya Yeni Açılmış Hesapları Engeller  **(BETA)**`)
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
  name: 'koruma',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   