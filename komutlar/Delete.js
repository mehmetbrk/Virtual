const Discord = require('discord.js');
const Canvas = require("canvas")
const db = require("quick.db")
exports.run = async(client, message, args) => { 
  var user = message.mentions.users.first() || message.author;
  const canvas = Canvas.createCanvas(748, 356);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/819669488697212939/822949535784632330/pls_delete.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: "png" }))
  ctx.drawImage(avatar, 120, 135, 195, 195);
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
    
    message.channel.send(attachment)
    };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'delete',
  description: 'Ğ', 
  usage: 'by ahmetosmantr#1453'
};