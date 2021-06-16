const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
    let prefix = data.fetch(`prefix_${message.guild.id}`)

  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${prefix}kız-role\` **kullanmak için,** \`Yönetici\` **olmanız gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
if(!args[0]) return message.channel.send(nn.setTitle('Bir hata oldu!').setColor('#f583fa').setDescription(`Bir rol etiketlemeyi unuttunuz.`)).then(a => a.delete({timeout: 10000}));
let role = message.mentions.roles.first();
if(!role) return message.channel.send(nn.setTitle('Bir hata oldu!').setColor('#f583fa').setDescription(`Bir rol etiketlemeyi unuttunuz.`)).then(a => a.delete({timeout: 10000}));

data.set(`kadın.${message.guild.id}`, role.id);
message.channel.send(nn.setTitle(`İşte bu kadar!`).setDescription(`Kayıt için kullanılacak: ${role} rol olarak seçtiniz.`)).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kız-rol'
};