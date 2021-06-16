const Discord = require('discord.js');
const talkedRecently = new Set();
exports.run = async (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
          return message.channel.send("`3` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
     

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :envelope: `)
  const linqo = `https://api.no-api-key.com/api/v2/trump?message=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Trump Tweet Attı")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Virtual Bot Eğlence')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ibnetrump','gavatrump'],
    permLevel: 0
}

exports.help = {
    name: 'trump',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'trumpgavat <yazı>'
}