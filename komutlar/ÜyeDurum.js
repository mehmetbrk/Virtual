const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
const embed = new Discord.MessageEmbed()
.setColor(`#1b1b1f`)
.addField(` Toplam Üye`, `**${üyesayi}**`, true)
.addField(`:bust_in_silhouette: Kullanıcılar`, `**${kullanıcılar}**`, true)
.addField(`:robot: Botlar`, `**${botlar}**`, true)
.addField(`Üye Durumları`, ` Çevrimiçi **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}**\n Boşta **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}**\n Rahatsız Etmeyin **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}**\n Çevrimdışı **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}**`, true)
.addField(`Yükseltmeler(Boost)`,` Yükseltme sayısı: **${message.guild.premiumSubscriptionCount}** \n  Yükseltme seviyesi: **${message.guild.premiumTier}**`)
.addField(`Bağlanılan cihazlar`, ` Bilgisayar: **${message.guild.members.cache.filter(m=>Object.keys(m.presence.clientStatus=="desktop")[0])}** \n :globe_with_meridians: Web: **${message.guild.members.cache.filter(m=>Object.keys(m.presence.clientStatus=="web")[0])}** \n :mobile_phone: Telefon: **${message.guild.members.cache.filter(m=>Object.keys(m.presence.clientStatus=="mobile")[0])}**`)
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum","üyeler","durumlar","durum","ü"],
  permLevel: 0
};
 
module.exports.help = {
  name: 'üyedurum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};