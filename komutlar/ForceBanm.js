const Discord = require("discord.js");

  module.exports.run = async (client, message, args) => {
  if (!args[0]) {
  return message.channel.send(
  `Komutu kullanmak için bir kullanıcının **ID**'sini girmen gerek*-`);
  }

  var sebeb = args.slice(1).join(" ");
  var id = args[0];
  var now = new Date();
  if (!sebeb) {
  message.guild.fetchBans().then(bans => {
  if (bans.has(id)) {
  return message.channel.send(`**Bu kullanıcı zaten yasaklanmış**`);
  }
      message.guild.members
      .ban(id, {
      reason: `${message.author.tag} **-** **Sebep belirtilmemiş**`
      })
      .then(async member => {
      let user;
      if (member instanceof Discord.GuildMember) {
      user = member.user;
      } else if (member instanceof Discord.User) {
      user = member;
      } else {
      user = await client.users.fetch(member);
      }
      message.channel.send(`<@!${user.id}> **Adlı kullanıcı sunucudan yasaklandı** `);
      })
      .catch(error => {
      message.channel.send(``);
      console.error("Hata");
      });
      });
      } else {
      message.guild.fetchBans().then(bans => {
      if (bans.has(id)) {
      return message.channel.send(`**Bu kullanıcı zaten yasaklanmış**`);
      }
      message.guild.members
      .ban(id, { reason: `${message.author.tag} - ${sebeb}`})
      .then(async member => {
      let user;
      if (member instanceof Discord.GuildMember) {
      user = member.user;
      } else if (member instanceof Discord.User) {
      user = member;
      } else {
      user = await client.users.fetch(member);
      }
      message.channel.send(`<@!${user.id}> **Sunucudan yasaklandı**`);
      })
      .catch(error => {
      message.channel.send(``);
      console.error("Hata");
      });
      });
      }  
      };

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["force-ban"],
permLevel: 3
};

exports.help = {
name: "forceban"
};