const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
   
  const kuaty = `https://habbofont.net/font/bubble_blue/${yazi}.gif`
  
  .replace(' ', '+')

  

  const kuaty2 = new Discord.MessageEmbed()

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

    name: 'bubble2',

    description: 'Gold logo yaparsınız.',

    usage: 'gold <yazı>'

}