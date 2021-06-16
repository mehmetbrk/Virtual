const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    var embed = new Discord.MessageEmbed()
    .setTitle("Yapımcım")
    .setDescription("<@748946208181059648> | Bot Geliştiricisi")
    .setImage('https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=star-wars-logo&text=AhmetOsmanTR')
    .setColor("#2c2f33")
    message.channel.send({embed})
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım','yapımcı','yapımcılarım','yapımcılar',],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  kategori: 'genel',
  description: 'Yapımcımı Gosterir.',
  usage: 'yapımcım'
};