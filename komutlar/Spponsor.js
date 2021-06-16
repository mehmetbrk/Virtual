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
.addField('**<:OnayPng:794135282093654047>  **Legend Project | Yazılım ve Tasarım Hizmetleri**  <:OnayPng:794135282093654047>**' ,`
                                                                                                                                                                                    
<:ElektirikPng:794135281895866378> Legend Project nedir?

Yaklaşık 6 Ay önce açıldık , müşterilerinin tüm dijital ihtiyaçlarını karşılama hedefiyle yola çıkan LegendProject web projeleri, özel e-ticaret sistemleri , eklenti paketi ve grafik tasarım üzerine yoğunlaşmıştır. Farklı düşünce ve vizyonlara sahip görüşlerden oluşan ekibimiz, tek bir amacı bünyesinde barındırır;
‘’Farklı düşün, kaliteyi yarat ve bunu 7/24 ulaşılabilir şekilde yap’’

Eğer sizin de aklınızda bir başlangıç noktası ve fikri varsa, bu fikri geliştirip en iyi çözümü yaratmaya ve bu çözümü zirveye taşımaya biz varız.

<:ElektirikPng:794135281895866378>  Buradaki tüm hizmetler ücretli mi?

Hizmetlerimiz ücretli ve ücretsiz olmak üzere ikiye ayrılıyor. Ücretsiz olduğuna aldanmayın, her yerde bulunan hazır ürünleri sunmuyoruz. Tamamen bize ait özgün ve kaliteli hizmetleri sizler için ücretsiz sunuyoruz. Ayrıca yardım al kanallarımız ve destek taleplerimiz üzerinden yaşadığınız sorunlar ile ilgili destek sunuyoruz.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.addField("**➥ Linkler**", "[:white_check_mark: Web Site](https://www.legendproject.net/)\n[:white_check_mark: Discord Sunucu](https://discord.gg/YDPBe7HAsy)")
.setImage('https://cdn.discordapp.com/attachments/801003591032635412/801072105168830485/yu.png')
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["legendproject"],
  permLevel: 0,
};

exports.help = {
  name: 'sponsor',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   