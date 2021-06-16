const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, chimp) => {// can ♡ b#1010
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yeterli yetkin yok.');

if(!chimp[0]) return message.reply('Bir argüman belirtmelisin.');
let args = ['aç', 'kapat'];
if(!args.includes(chimp[0])) return message.reply(`<:OnayPng:794135282093654047> |  Geçersiz bir argüman belirttin.\nKullanabileceğin argümanlar: **${args.join('**, **')}**`);

if(chimp[0] === 'aç') {
const system = await database.fetch(message.guild.id);
if(system && system == true) return message.reply('<:OnayPng:794135282093654047>  **| Sistem zaten açık görünüyor.**');
database.set(message.guild.id, true);
message.reply('<:OnayPng:794135282093654047> **| Gelişmiş reklam koruması aktif edildi.**');
} else if(chimp[0] === 'kapat') {
const system = await database.fetch(message.guild.id);
if(system && system == false) return message.reply('<:OnayPng:794135282093654047> **| Sistem zaten kapalı görünüyor.**');
database.set(message.guild.id, false);
message.reply('<:OnayPng:794135282093654047>  ** | Gelişmiş reklam koruması devre dışı bırakıldı.**');
};

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'gelişmiş-reklam'
};// codare ♥