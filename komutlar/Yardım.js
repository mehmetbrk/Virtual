const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "!";
  
  const yardım = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle(`Virtual Bot`)
    .setColor("#F0FFFF")
	.setFooter(client.user.tag, client.user.avatarURL())
    .setDescription(`
**Bot Kullanım Kılavuzu**
> Prefix :  :exclamation: 
> Dil :   🇹🇷  
> Versiyon :  :one: :two: 
**Menü Başlıkları**
> **[${prefix}genel](https://discord.gg/BJwp5gm8eK)** **>** Kullanıcı Komutları
> **[${prefix}moderasyon](https://discord.gg/BJwp5gm8eK)** **>** Yetkili Komutları
> **[${prefix}moderasyon2](https://discord.gg/BJwp5gm8eK)** **>** Yetkiili Komutlarının Devamı
> **[${prefix}eğlence](https://discord.gg/BJwp5gm8eK)** **>** Eğlence Komutları
> **[${prefix}eğlence2](https://discord.gg/BJwp5gm8eK)** **>** Eğlence Komutlarının Devamı
> **[${prefix}koruma](https://discord.gg/BJwp5gm8eK)** **>** Gelişmiş Koruma Komutları
> **[${prefix}kayıtsistemi](https://discord.gg/BJwp5gm8eK)** **>** Gelişmiş Kayıt Sistemi
> **[${prefix}logo-sistemi](https://discord.gg/BJwp5gm8eK)** **>** Logo Yapma Sistemi
> **[${prefix}müzik](https://discord.gg/BJwp5gm8eK)** **>** Gelişmiş Müzik Sistemi
> **[${prefix}abone-sistemi](https://discord.gg/BJwp5gm8eK)** **>** Abone Ver Sistemi 
> **[${prefix}botlist-sistemi](https://discord.gg/BJwp5gm8eK)** **>** Ayarlamalı Bot List
> **[${prefix}profil-sistemi](https://discord.gg/BJwp5gm8eK)** **>** Profil Sistemi
> **[${prefix}efekt](https://discord.gg/BJwp5gm8eK)** **>** Avatar Efekt Sistemi
**Duyuru**
> <:ElektirikPng:794135281895866378> Logo Sistemine Yeni Komutlar Eklendi <:ElektirikPng:794135281895866378>
    `)
    .setImage(
    "https://cdn.discordapp.com/attachments/803627425766440994/803632972804390932/standard_2.gif"
);

  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "help", "h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};