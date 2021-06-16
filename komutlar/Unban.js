const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`<a:Uyar:794135977202548737> | **Yetkin yeterli degil!**`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setDescription(`<a:Uyar:794135977202548737> | **Kullanici id hatali veya kullanici yasakli degil!**`))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setDescription(`<:OnayPng:794135282093654047>  | **Basarili!**`))
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = {
    name: 'unban'
};