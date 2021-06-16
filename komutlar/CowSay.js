const codarexd = require("discord.js");
var kodurare = require("cowsay");

exports.run = (client, msg, args) => {

    let text = args.join(" ");
    if(!text) return msg.channel.send("**Lütfen Yazı Girin ^-^**")
msg.channel.send(new codarexd.MessageEmbed().setDescription("```" + kodurare.say({
        text : text
 }) + "```"))

};

exports.conf = { enabled: true, guildOnly: false, aliases: [], };

exports.help = { name: 'cowsay', description: 'asdas famanas wqe zayras', usage: 'cowsay <yazi>' };