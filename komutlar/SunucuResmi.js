const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("#36393F")
      .setTimestamp()
      .setFooter("© 2021 Virtual Bot", client.user.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("<a:Uyar:794135977202548737> |  Uyarı <a:Uyar:794135977202548737> | ","`sunucuresmi` adlı komutu özel mesajlarda kullanamazsın.");
    return message.author.send(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const sunucubilgi = new Discord.MessageEmbed()
      .setAuthor(message.guild.name)
      .setColor("#36393F")
      .setImage(message.guild.iconURL({ dynamic: false, format: 'png', size: 1024 }))
      .setTimestamp()
      .setFooter("© 2021 Virtual Bot", client.user.avatarURL());
    return message.channel.send(sunucubilgi);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-pp", "sunucu-resmi"],
  permLevel: 0
};

exports.help = {
  name: "sunucuresmi",
  description: "Sunucu Resminin Linkini Atar.",
  usage: "sunucuresmi"
};
