const CodeWorkCanva = require("canvacord");
const { MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let triggered = await CodeWorkCanva.Canvas.trigger(user.displayAvatarURL({ format: "png", dynamic: false }));
    let attachment = new MessageAttachment(triggered, "triggered.gif");
    return message.channel.send(new MessageAttachment(triggered, "triggered.gif"))
}

exports.conf = {
    enabled: true,
    aliases: ["trigger"],
};

exports.help = {
    name: 'triggered',
};