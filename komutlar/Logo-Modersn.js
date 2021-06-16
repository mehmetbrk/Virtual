//HysteX Tarafından Kodlandı///kuatyın ark <3

const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let hystex = args[0]

if (!hystex) return message.channel.send(`:carpi: **Bir Yazı Yazmalısın**`).then(msg => msg.delete(10000))

 const HysteX = new Discord.MessageEmbed()

  .setColor("BLUE")

  .setTitle('İşte Logon')

  .setImage('https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=crafts-logo&text=' + hystex)

message.channel.send(HysteX)

 };

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0


};

exports.help = {

  name: 'modern',

  description: '',

  usage: ''

};

//HysteX Tarafından Kodlandı/////Kuatyın Arkadaşı