const Discord = require('discord.js')

exports.run = (client, message, params) => {
const embed = new Discord.MessageEmbed()
.setTitle(':flag_tr: Türkiyenin Saati Aşağida Yazmaktadir')
.setTimestamp()
.setFooter('Türkiye Saati ->')
.setColor(0xff7f00)

message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'saat',
    description: 'saat',
    usage: 'saat'
  };