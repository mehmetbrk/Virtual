const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
  let question = args.join(" ");
  let user = message.author.username;
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  if (!question)
  
    return message.channel
      .send(
        new Discord.MessageEmbed().addField(`❌ **Yazı Yazman Gerek** ❌`)
      )
      .then(m => m.delete(5000));
  console.log(
    "oylama komutu " +
      message.author.username +
      "#" +
      message.author.discriminator +
      " tarafından kullanıldı."
  );
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setAuthor(`**${message.author.username} Tarafından Oylama Yapıldı**`)
        .setColor("RED")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("© 2021 Virtual ")
        .addField(`**Oylama**`, `**${question}**`)
    )
    .then(function(message) {
      message.react("✅");
      message.react("❌");
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 2
};
exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};