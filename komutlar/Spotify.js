const Discord = require("discord.js");
const canvacord = require("canvacord");

exports.run = async (client, message, args) => { // 'Vu4ll#0586 ❤️
  let user =
    message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    message.author;

  let Activity = user.presence.activities;

  if (Activity.length <= 0)
    return message.channel.send(`Belirttiğiniz Kişi Spotify Dinlemiyor`);

  user.presence.activities.forEach(activity => {
    if (activity.type === "LISTENING" && activity.name === "Spotify") {
      let image = `https://i.scdn.co/image/${activity.assets.largeImage.slice(
        8
      )}`;
      const card = new canvacord.Spotify()
        .setAuthor(activity.state)
        .setAlbum(activity.assets.largeText)
        .setStartTimestamp(activity.timestamps.start)
        .setEndTimestamp(activity.timestamps.end)
        .setImage(image)
        .setBackground("COLOR", "000001")
        .setTitle(activity.details);

      card.build().then(Card => {
        return message.channel.send(
          new Discord.MessageAttachment(Card, "SpotifyCard.png")
        );
      });
    }
  });
};

exports.conf = { // 'Vu4ll#0586
  aliases: ["sp"]
};

exports.help = {
  name: "spotify",
  description: "Spotify kart oluşturur",
  usage: "spotify <isteğe bağlı etiket>",
  perm: ""
};