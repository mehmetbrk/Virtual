const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {

  let kullanıcı = message.mentions.users.first() || message.author;
  let link = `https://api.devs-hub.xyz/grab?image=${kullanıcı.avatarURL({ format: "png", size: 1024 })}`;

  const ek = new MessageAttachment(link, `grab.png`);

  const embed = new MessageEmbed()
    .setColor(`RANDOM`)
    .attachFiles(ek)
    .setImage(`attachment://grab.png`)
    .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
    .setTimestamp();

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "boğazla",
  description: "",
  usage: ""
};