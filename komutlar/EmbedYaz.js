const Discord = require('discord.js')

exports.run = async function(client, message, args) {
   if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu Komutu kullanmanız için `Mesajları Yönet` yetkisine sahip olmalısınız.') 
let embed = args.slice(0).join(' ');
        if (embed.length < 1) {
        return message.channel.send(`<a:dikkat1:803028001343143957> Ne yazılacağını belirtmediniz!`);
            } else {
        const yaz = new Discord.MessageEmbed()
        .setColor('0x36393E')
        .setDescription(`**${embed}**`)
        .setFooter('Virtual', client.user.avatarURL())
        return message.channel.send(yaz)
      }
     };

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['embed-yaz'],
permLevel: 0
}
exports.help = {
  name:"embedyaz",
  description: "Yazılan Yazıyı Embed Olarak Gösterir.",
  usage: "emdedyaz yazı"
}