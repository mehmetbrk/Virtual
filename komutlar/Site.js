const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed();
embed.setDescription("[Websitesine Gitmek İçin Buraya Tıklat](https://docs.virtualbot.xyz/)")

message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['site'],
permLevel: 0
}

exports.help = {
name: 'site',

}