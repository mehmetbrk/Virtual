
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
var prefix = ayarlar.prefix;

const help = new Discord.MessageEmbed()

.setColor(message.guild.me.displayColor)
.setImage('https://cdn.discordapp.com/attachments/803627425766440994/803632972804390932/standard_2.gif')
.setThumbnail(client.user.avatarURL())
.setTitle(`<:OnayPng:794135282093654047>  **Virtual Logo Sistemi**  <:OnayPng:794135282093654047>`)

.setDescription(`
**:white_small_square: ${prefix}banzai:** Banzai fontunda logo yaparsınız.
**:white_small_square: ${prefix}bird:** Bird Logo yaparsınız.
**:white_small_square: ${prefix}bubble:** Bubble rengarenk logo yaparsınız.
**:white_small_square: ${prefix}bubble2:** Mavi bubble logo yaparsınız.
**:white_small_square: ${prefix}fluffy:** Şeker logo yaparsınız.
**:white_small_square: ${prefix}gold:** Gold logo yaparsınız.
**:white_small_square: ${prefix}habbo:** Habbo logo yaparsınız.
**:white_small_square: ${prefix}hallowen:** Hallowen logo yaparsınız.
**:white_small_square: ${prefix}ice:** Buz logo yaparsınız.
**:white_small_square: ${prefix}retro:** Pixelli logo yaparsınız.
**:white_small_square: ${prefix}retro-blue:** Mavi pixelli logo yaparsınız.
**:white_small_square: ${prefix}arrow:** Oklu Logo
**:white_small_square: ${prefix}discord:** Discord Logo
**:white_small_square: ${prefix}green:** Yeşil Logo
**:white_small_square: ${prefix}cool:** Havalı Logo
**:white_small_square: ${prefix}booking:** Kitap Logosu
**:white_small_square: ${prefix}bubble:** Balon Logo
**:white_small_square: ${prefix}bubble2:** Balon Logo 2
**:white_small_square: ${prefix}bubble3:** Balon Logo 3
**:white_small_square: ${prefix}blue:** Mavi Logo
**:white_small_square: ${prefix}fire:** Ateşli Logo
**:white_small_square: ${prefix}kalp:** Kalpli Logo
**:white_small_square: ${prefix}gold2:** Altın Logo 2
**:white_small_square: ${prefix}ejderhalogo:** Ejderha Logosu
**:white_small_square: ${prefix}modern:** Modern logo yaparsınız.
**:white_small_square: ${prefix}starwars:** Starwars logo yaparsınız.`)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

return message.channel.send(help);

};

exports.conf = {

enabled: true,

guildOnly: false,

aliases: [],

permLevel: 0

};

exports.help = {

name: 'logo-sistemi',

description: 'Bota yazı yazdırır.',

usage: 'yaz <mesaj>'

};