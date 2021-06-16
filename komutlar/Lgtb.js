const CodeWorkCanva = require("canvacord");
const { MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {
  
  
  
     let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let triggered = await CodeWorkCanva.Canvas.rainbow(user.displayAvatarURL({ format: "png", dynamic: false, size: 4096}));
    let attachment = new MessageAttachment(triggered, "gay.png");
    return message.channel.send(new MessageAttachment(triggered, "gay.png"))
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'lgtb',
};