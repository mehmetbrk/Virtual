const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const agacıkoktanottomanıgötten = new Discord.MessageEmbed()
    .setTitle(`Virtual  - Komut Sayısı`)
    .setDescription('**\n Virtual Bot| Toplam**  **`' + client.commands.size + '`** **Komut Bulunmakta!**')
    .setColor("RANDOM")//renk kodu 
    .setTimestamp()
    .setFooter("Virtual  " , client.user.avatarURL())

    return message.channel.send(agacıkoktanottomanıgötten);
    
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "komutlar"
}