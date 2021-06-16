const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
  ;
message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${message.author} **Bak Tokeni Al Direk Sunucuları Patlatmaya Başla Okey.....**`)).then(m => {
setTimeout(() => {
m.edit(new Discord.MessageEmbed().setDescription(`${message.author} **Al Sana Token**`).setImage(''))
}, 4500)
})

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'token'
};