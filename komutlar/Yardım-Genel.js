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
 .setFooter(client.user.tag, client.user.avatarURL())
.addField('**<:OnayPng:794135282093654047>  Genel Kullanıcı Komutları  <:OnayPng:794135282093654047>**',`
**\n:white_small_square: !istek** 
**:white_small_square: !hata** 
**:white_small_square: !istatistik**
**:white_small_square: !banneryazı** 
**:white_small_square: !steamoyun** 
**:white_small_square: !atasözü** 
**:white_small_square: !site** 
**:white_small_square: !resimçiz** 
**:white_small_square: !animeara** 
**:white_small_square: !döviz** 
**:white_small_square: !tekerleme** 
**:white_small_square: !yardım** 
**:white_small_square: !afk** 
**:white_small_square: !ping** 
**:white_small_square: !komutlar** 
**:white_small_square: !emojiler** 
**:white_small_square: !osmanlı-bilgi** 
**:white_small_square: !avatar** 
**:white_small_square: !sunucubilgi**
**:white_small_square: !çeviri** `)
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
  name: 'genel',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   