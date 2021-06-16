const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message) => {
const harf = '\n'
const yunusemre = new Discord.MessageEmbed()
.setTitle("• Kurallar •")
.setDescription(`
**Reklam**
• Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır.

**Küfür, Argo, Hakaret**
• Her kanalda küfür etmek ve argo kullanmak yasaktır.
• Üyelere karşı hakaret etmek ve dalga geçme yasaktır.

**Kanallar**
• Komut kanalı haricinde komut kullanılması yasaktır.
• Sesli müzik kanalı haricinde müzik açılması yasaktır.
• Kanal açıklamalarında yararlı bilgiler bulabilirsin.

**Yetkililer ve Yetki**
• Yetki istemek yasaktır.
• Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır.
• Yetkililere saygılı olun.

**Spam ve Etiketleme**
• Spam yapmak yasaktır.
• Bir kelimeyi sürekli bir mesajda yazmak yasaktır.
• Bir üyeyi sürekli @etiketlemek yasaktır.

**Din, Siyaset, Cinsellik**
• Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır.
• Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır.
• 18+ fotoğraflar paylaşmak ve konuşmak yasaktır.

**Kavga, Tartışmak**
• Kavga etmek, kavgaya dahil olmak ve tartışmak yasaktır.
`)
.setColor("1b1b1f")
message.channel.send(yunusemre)
}
module.exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["kurallar"],
permLevel: 0
};
module.exports.help = {
name: 'kurallar',
description: 'Botta bulunan kurallar komutları gösterir',
usage: 'kurallar'
};
