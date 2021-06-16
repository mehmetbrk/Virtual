const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)

  const kuaty = `https://habbofont.net/font/habbo_new/${yazi}.gif`

  .replace(' ', '+')

  
///Fiber CODE
  const kuaty2 = new Discord.MessageEmbed()

  .setTitle(`İşte Logon Burada`)

  .setColor("ORANGE")

  .setImage(kuaty)

  message.channel.send(kuaty2
                      )

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: [],

    permLevel: 0

}

exports.help = {

    name: 'habbo',

    description: 'Gold logo yaparsınız.',

    usage: 'gold <yazı>'

}