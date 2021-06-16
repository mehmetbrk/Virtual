const Discord = require('discord.js');
const client = new Discord.Client();
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (client, message, args) => {
    if (args.length < 1) return message.channel.send("mesaj gir krdşm..")

    message.channel.send(args.map(randomizeCase).join(' '));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'keko',
  description: 'Keko Yazı.',
  usage: 'keko <mesaj>'
}