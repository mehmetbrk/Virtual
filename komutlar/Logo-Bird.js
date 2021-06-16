const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)

  const kuaty = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=birdy-logo&text=${yazi}`

  .replace(' ', '+')

  

  const kuaty2 = new Discord.MessageEmbed()

  .setTitle(`İşte Logon Burada`)

  .setColor("BLUE")
  .setImage(kuaty)

  message.channel.send(kuaty2
                      )

}
///Fiber CODE
exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: [],

    permLevel: 0

}

exports.help = {

    name: 'bird',

    description: 'Gold logo yaparsınız.',

    usage: 'gold <yazı>'

}