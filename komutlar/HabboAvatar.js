const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
  let Hotel = args[0]
  let İsim = args[1]
  let Eylem = args[2]
  let Vücut = args[3]
  let Kafa = args[4]
  let Surat = args[5]
  let Boyut = args[6]
  
  var embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${message.author.tag} adlı kullanıcının\nHabbo avatarı:`)
    .setThumbnail(client.user.avatarURL)
    .setImage(`https://www.habbo.com.tr/habbo-imaging/avatarimage?hb=image&user=${args[0]}&headonly=0&direction=4&head_direction=2&action=&gesture=&size=l`)
  message.channel.send(embed)
  };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['habbo-avatar', 'habboavatar', 'habbo'],
    permLevel: 0
};
exports.help = {
  name: 'habbo-avatar'
}