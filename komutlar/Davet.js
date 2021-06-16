const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setAuthor(`Virtual Bot`, client.user.avatarURL)
    .addField(
      `> Neden Biz ?`,
      `**Çünkü İşimizi Kaliteli Yapıyoruz**`
    )
    .addField(
      `> Botumuzu Davet Etmek İsterseniz`,
      `[Botu Davet Et](https://pvp.tc/OsXg)`
    )
    .addField(
      `> Destek Sunucusuna Katılmak İsterseniz`,
      `[Destek Sunusu](https://discord.gg/vG3WaFVddR)`
    )
    .addField(
      `> Minecraft Sunucumuzun Discord Sunucusu`,
      `[Minecraft Sunucumuz](https://discord.gg/a6Rk8kqfMC)`
    )
    .addField(
      `> Sitemize Göz Atmak İsterseniz`,
      `[Sitemiz](http://giftcord.xyz/html/)`
    )

    .setThumbnail(
      ""
    );
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: ""
};