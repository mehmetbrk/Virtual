const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komut sunucu sahiplerine özel yapılmıştır. *Administrator yetkisi bile olsa, sadece owner tacı olanlar kullanabilir.*')

await message.guild.channels.cache.forEach(a => a.delete())

await message.guild.channels.create('KATEGORİ | GENEL', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("📣︲Duyurular", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | GENEL').id,})
await message.guild.channels.create("📊︲Kurallar", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | GENEL').id})
await message.guild.channels.create("🎉︲Çekilişler", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | GENEL').id})
await message.guild.channels.create("💝︲Boost", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | GENEL').id})

                                        
  
  
await message.guild.channels.create('KATEGORİ | KULLANICI', { type: "category" })
await message.guild.channels.create("💬︲Chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | KULLANICI').id})
await message.guild.channels.create("🛠️︲Komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | KULLANICI').id})
await message.guild.channels.create("📷︲Medya", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | KULLANICI').id})

await message.guild.channels.create('KATEGORİ | ROL ALMA', { type: "category" })  
  await message.guild.channels.create("💣︲ilişki-rolleri", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | ROL ALMA').id})
   await message.guild.channels.create("🔢︲burç-rolleri", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | ROL ALMA').id})
   await message.guild.channels.create("💡︲oyun-rolleri", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | ROL ALMA').id})
  
  
await message.guild.channels.create('KATEGORİ | SESLİ', { type: "category" })
await message.guild.channels.create("💬︲Sohbet | 1", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | SESLİ').id})
await message.guild.channels.create("💬︲Sohbet | 2", {type: "voice", parent: message.guild.channels.cache.find(a=> a.name === 'KATEGORİ | SESLİ').id})
await message.guild.channels.create("💬︲Sohbet | 3", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | SESLİ').id})

await message.guild.channels.create('KATEGORİ | MÜZİK', { type: "category" })
await message.guild.channels.create("🎵︲Music | 1", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | MÜZİK').id})
await message.guild.channels.create("🎵︲Music | 2", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | MÜZİK').id})
await message.guild.channels.create("🎵︲Music | 3", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | MÜZİK').id})

  
  
await message.guild.channels.create('KATEGORİ | YETKİLİ', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: false,
 READ_MESSAGE_HISTORY: false
})
})
await message.guild.channels.create("🔒︲Yetkili chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | YETKİLİ').id})
 await message.guild.channels.create("🔒︲Yetkili komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | YETKİLİ').id}) 
  await message.guild.channels.create("🎤︲Yetkili Özel", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'KATEGORİ | YETKİLİ').id})
await message.guild.channels.cache.find(a => a.name === "💬︲Chat").send(' <@'+message.author.id+"> **Sunucunuz Başarıyla Kuruldu** Virtual Bot Her Zaman En İyisi")
}

exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0 
};

exports.help = {
name: 'sunucukur-public',
description: '',
usage: ''
}