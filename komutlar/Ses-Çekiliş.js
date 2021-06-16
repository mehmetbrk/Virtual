const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if (!message.member.voice.channel || !message.member.hasPermission("MANAGE_GUILD") || message.member.voice.channel.members.cache.size === 1) return;
  let mesaj = await message.channel.send('Çekiliş yapılıyor...');
  setTimeout(() => {
    mesaj.edit(new Discord.MessageEmbed().setDescription(`Çekilişi kazanan kişi: ${message.member.voice.channel.members.cache.filter(a => a.id !== message.author.id).random()}`));
  }, 5000);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = { 
  name: 'ses-çekiliş', 
  description: 'Ses çekilişi.',
  usage: 'ses-çekiliş',
  kategori: 'kullanıcı'
};