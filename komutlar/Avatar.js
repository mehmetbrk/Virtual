const Discord = require(`discord.js`);

exports.run = async (client, message) => {

  let user = message.mentions.users.first() || message.author;

  if (user) {

    const embed = new Discord.MessageEmbed()
      .setAuthor(`Buyur Avatarın`)

      .setImage(user.displayAvatarURL({ dynamic: true }))

      .setTimestamp()

      .setFooter(`Virtual Bot`);

    message.channel.send(embed);

  } else {

    const embed = new Discord.MessageEmbed()

      .setAuthor(

        `Buyur Avatarın`,

        message.author.avatarURL

      )

      .setImage(message.author.avatarURL({ dynamic: true }))

      .setTimestamp()

      .setFooter(`Virtual Bot`);

    message.channel.send(embed);

  }

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["avatar", "avatarım"],

  permLevel: 0

};

exports.help = {

  name: "avatar"

};