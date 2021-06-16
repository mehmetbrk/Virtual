const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {//'Vu4ll#0586

  let kullanıcı = message.mentions.users.first() || message.author;
  let link = `https://api.devs-hub.xyz/gun?image=${kullanıcı.avatarURL({ format: "png", size: 1024 })}`;

  const ek = new MessageAttachment(link, `gun.png`);

  const embed = new MessageEmbed()
    .setTitle(`Silah efekti uygulamış avatar!`)
    .setColor(`RANDOM`)
    .attachFiles(ek)
    .setImage(`attachment://gun.png`)
    .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
    .setTimestamp();

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gun"],
  permLevel: 0
};

exports.help = {//'Vu4ll#0586
  name: "silah",
  description: "silah <etiket>",
  usage: ""
};