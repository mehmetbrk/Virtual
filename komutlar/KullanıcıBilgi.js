const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = (client, message, args) => {// can ♡ b#1010

let mention = message.author;
if(message.mentions.members.first()) mention = message.mentions.members.first().user;
let mentionMember = message.guild.members.cache.get(mention.id);

let oyunlar = [];
mention.presence.activities.forEach(slm => {
if(slm.type === 'CUSTOM_STATUS') {
oyunlar.push(`${slm.emoji ? slm.emoji : ''} ${slm.state}`);
} else {
oyunlar.push(`**${slm.name}** ${slm.type.replace('PLAYING', 'oynuyor').replace('STREAMING', 'yayınlıyor').replace('LISTENING', 'dinliyor').replace('WATCHING', 'izliyor')}`)
}});

let rozetler = false;
if(mention.flags.toArray().length <= 0) {
rozetler = false;
} else {
rozetler = true;
};

let mentionFlags = mention.flags.toArray().join(' | ')
.replace('HOUSE_BRAVERY', ' Bravery')  
.replace('HOUSE_BRILLIANCE', ' Brilliance')
.replace('HOUSE_BALANCE', ' Balance')
//.replace('VERIFIED_DEVELOPER', '<:discord_bot_dev:780861847514644501> Bot Geliştiricisi')
.replace('DISCORD_EMPLOYEE', ' Discord Çalışanı')
.replace('PARTNERED_SERVER_OWNER', ' Discord Partner')
.replace('HYPESQUAD_EVENTS', ' HypeSquad Events')
.replace('BUGHUNTER_LEVEL_1', ' Bug Avcısı 1. Lvl')
.replace('EARLY_SUPPORTER', ' Erken Destekçi')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', 'Sistem')
.replace('BUGHUNTER_LEVEL_2', 'Bug Avcısı 2. Lvl')
.replace('VERIFIED_BOT', 'Onaylı Bot');
let sa;
if(mention.bot) {
sa = 'Bilinmiyor.'
} else {
};
const embed = new Discord.MessageEmbed()
.setColor('1b1b1f')
.setThumbnail(mention.avatarURL({dynamic: true}))
.addField(':label: **Kullanıcı Adı:**', mention.tag, true)
.addField(':id: **ID Numarası:**', mention.id, true)
.addField(' **Rozetler:**', `${rozetler ? mentionFlags : 'Hiç yok.'}`, true)
.addField(':calendar_spiral: **Discorda Kaydolma Tarihi:**', moment(mention.createdAt).format('D MMMM YYYY'), true)
.addField(':calendar: **Sunucuya Katılma Tarihi:**', moment(mentionMember.joinedAt).format('D MMMM YYYY'), true)
.addField(':rosette: **Durumu:**', mention.presence.status.replace('online', ' Çevrimiçi').replace('idle', ' Boşta').replace('dnd', 'Rahatsız Etmeyin').replace('offline', ' Çevrimdışı'), true)
.addField('  **Kullanıcının Rolleri:**', mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') : 'Hiç yok.', true)
.addField('Aktivite', oyunlar.join('\n') ? oyunlar.join('\n') : 'Hiç yok.', true)

message.channel.send(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profil', 'p'],
  permLevel: 0
};
 
exports.help = {
  name: 'kullanıcı-bilgi'
};// codare ♥
