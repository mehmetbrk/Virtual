const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {//'Vu4ll#0586

  let kullanıcı = message.mentions.users.first() || message.author;
  let link = `https://useless-api--vierofernando.repl.co/art?image=${kullanıcı.avatarURL({ format: "png", size: 1024})}`;

  const ek = new MessageAttachment(link, `tablo.png`);

  const embed = new MessageEmbed()
    .setTitle(`Tablonuz hazır!`)
    .setColor(`RANDOM`)
    .attachFiles(ek)
    .setImage(`attachment://tablo.png`)
    .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
    .setTimestamp();

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {//'Vu4ll#0586
  name: "tablo",
  description: "",
  usage: "tablo <etiket>"
};