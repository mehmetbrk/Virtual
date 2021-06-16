const Froze = require('discord.js');
exports.run = (client, message, args) => {//Froze
    const codare = args.slice(0).join(' ')

if (!codare) return message.channel.send('Birşey Yazmalısın!')
  const data = `https://api.raksix-blog.tk/api/text?text=${codare}`.replace(' ', '+');
  message.channel.send(new Froze.MessageEmbed() .setColor('BLUE') .setImage(data) .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true})))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'maviyazı',
  description: 'maviyazarsınknk',
  usage: 'maviyazı'
};