const Discord = require("discord.js");

exports.run = async (client, message, args) => { 

const napim = new Discord.MessageEmbed()

      .setAuthor("NAPİM")
      .setDescription("NAPİMM")
      .setImage('https://cdn.discordapp.com/emojis/794459059390382110.png?v=1');
//OTTOMAN CODE EGGAMİNG ADAMDIR
//AGACIKÖKTENSAMETİGÖTTEN
return message.channel.send(napim);
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['napim'],
  permLevel: 0
};



exports.help = {
  name: "napim",
  description: "napim",
  usage: "napim"
};