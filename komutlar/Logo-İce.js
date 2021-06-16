const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)

  const kuaty = `https://habbofont.net/font/ice/${yazi}.gif`

  .replace(' ', '+')

  

  const kuaty2 = new Discord.RichEmbed()

  .setTitle(`İşte Logon Burada`)

  .setColor("BLUE")

  .setImage(kuaty)

  message.channel.send(kuaty2)

}
///Fiber CODE

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: [],

    permLevel: 0

}

exports.help = {

    name: 'ice',

    description: 'Gold logo yaparsınız.',

    usage: 'gold <yazı>'

}