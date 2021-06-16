const Discord = require("discord.js");
const ms = require("ms");

exports.run = (client, message, args, func) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: **| Bu komutu kullanabilmek için** `Üyeleri yasakla` **yetkisine sahip olmanız gerek**")

    let judge = message.mentions.users.first();
    if (!judge) return message.reply("**Lütfen Bir kullanıcı belirtin**")
    let süre = args[1]
    if (!süre) return message.reply("**Lütfen Bir Süre belirtin**")
    let member = message.guild.member(judge)
    if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Yetkilileri banlayamam`)

    message.guild.members.ban(judge, 2)
    message.channel.send(`${judge} **süreli olarak banlandı**`)

    setTimeout(() => {

        message.guild.members.unban(judge)
        message.channel.send(`${judge} **adlı kişinin banının süresi bittiği için banı açıldı!**`)

    }, ms(süre))

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['süreliban'],
    permLevel: 0
};

exports.help = {
    name: 'süreliban',
    description: 'Etiketlenen kullanıcıyı süreli olarak banlar',
    usage: 'süreliban <@kullanıcı> <süre>'
};