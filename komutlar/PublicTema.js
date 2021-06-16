const Discord = require('discord.js'); /// PinkCode
const data = require('quick.db'); /// PinkCode
const ms = require('ms'); /// PinkCode
 
exports.run = async (client, message, args) => { /// PinkCode
const datas = await data.fetch(`${message.author.id}.zaman.public`); /// PinkCode
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`${message.author} **__6__ saat de bir kullanabilirsiniz!**`)).then(m => m.delete({timeout: 6000})); /// PinkCode
data.set(`${message.author.id}.zaman.public`, Date.now()+ms('6h')); /// PinkCode
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **Özelden gönderdim __public sunucunu__ gönderdim bakar mısın.**`));
message.author.send(`> **1 adet __Public__ sunucu kurmak için tema geldi.**
 
> Güle güle kullan 😇 ( Örnek olarak Atlantis Şablonunu Verdim )
 
https://discord.new/GsYDbB9VpnWE`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı."))); /// PinkCode - Buradaki GsYDbB9VpnWE yerine şablonunuzu yapıştırın
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
 
exports.help = {
  name: 'public-tema'
};