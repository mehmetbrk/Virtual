const Discord = require('discord.js');
const request = require('node-superfetch');
//OTTOMAN CODE
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");
const db = require('quick.db');
//OTTOMAN CODE
exports.run = async (client, msg, args) => { 
  let u = msg.mentions.users.first() || msg.author;

    if(u.bot === true) {
    const OTTOMAN = new Discord.RichEmbed()
   .setDescription("**Botların Seviyesi Yoktur!**")
   .setColor("RED")
    msg.channel.send(OTTOMAN)
    return
    }
//OTTOMAN CODE
var g = "50" 
  var Canvas = require('canvas')
   var canvas = Canvas.createCanvas(750, 240)
   var ctx = canvas.getContext('2d');
   const avatarURL = u.displayAvatarURL
   const { body } = await request.get(avatarURL);
   const avatar = await Canvas.loadImage(body);
  ctx.fillStyle = "#000000";
  ctx.fill()
       ctx.fillRect(25, 22, 700, 192)   
 //OTTOMAN CODE 
  ctx.fillStyle = "rgba(0, 0, 0, 0.30)";
  ctx.fill()
  ctx.fillRect(0, 0, 750, 240)  
        var re = "db3b3b"
//OTTOMAN CODE  
  var xp = db.fetch(`puan_${u.id + msg.guild.id}`);
  var lvl = db.fetch(`seviye_${u.id + msg.guild.id}`);  
   let vUser = msg.guild.member(msg.mentions.users.first());
  let sira = ''
  const sorted = msg.guild.members.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`seviye_${b.user.id + msg.guild.id}`) - db.fetch(`seviye_${a.user.id + msg.guild.id}`) });
  //OTTOMAN CODE     
  const top10 = sorted.splice(0, msg.guild.members.size)
  const mappedID = top10.map(s => s.user.id);
  //OTTOMAN CODE
  for(var i = 0; i < msg.guild.members.size; i++) {
   if(mappedID[i] === u.id) {
   sira += `${i + 1}`
      }
        }
  //OTTOMAN CODE   
 var de = 1.6
  ctx.beginPath()
  ctx.fillStyle = "#999999";
  ctx.arc(100 + 18.5, 130 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
    ctx.fill();
//OTTOMAN CODE
  ctx.fillRect(100 + 18.5, 130 + 36.15, 250 * de, 37.5);
  ctx.arc(100 + 18.5 + 250 * de, 130 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = `#66ccff`;
//OTTOMAN CODE
   ctx.arc(100 + 18.5, 130 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
   ctx.fill();
   ctx.fillRect(100 + 18.5, 130 + 36.25, xp * de, 37.5);
   ctx.arc(100 + 18.5 + xp * de, 130 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
   ctx.fill();
//OTTOMAN CODE
   ctx.fillStyle = `#${re}`;
   ctx.textAlign = "right";
   ctx.font = '23px Impact';
   ctx.fillStyle = `#f0fc00`;  
   ctx.fillText(`Seviye: ${lvl || 0}`, 160, 130);
 //OTTOMAN CODE        
  ctx.fillText(`Sıralama: #${sira}`, 185, 85);
  ctx.fillText(`xᴘ: ${xp || 0} / 250`, 510, 155);
   ctx.fillStyle = `#99ff00`;
   ctx.font = '25px Impact';
  ctx.textAlign = "right";
//OTTOMAN CODE
ctx.font = 'bold 25px Impact';
ctx.textAlign = "right";
   ctx.fillStyle = `#FF6600`;
  ctx.fillText(`ᴏᴛᴛᴏᴍᴀɴ|ʙᴏᴛ`, 435, 46);
  ctx.fillStyle = `#fcfdff`;
  ctx.font = 'bold 20px Impact';
//OTTOMAN CODE
        ctx.textAlign = "left";
   ctx.fillText(`${u.username}`, 115, 192)     
        ctx.beginPath();
//OTTOMAN CODE
        ctx.lineWidth = 8;
  ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(570 + 67, 67 + 67, 67, 0, 2 * Math.PI, false);
    ctx.clip();
//OTTOMAN CODE
    ctx.drawImage(avatar, 570, 67, 135, 135);    
      msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"ottomanbot-seviye.png"}]})
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0,
};
//OTTOMAN CODE
exports.help = {
  name: 'seviye',
//OTTOMAN CODE
  description: 'seviye',
  usage: 'seviye'
};