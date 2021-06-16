const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
     //OTTOMAN CODE
exports.run = async (client, msg, args) => {
        const sorted = msg.guild.members.filter(u => !u.bot).array().sort((a, b) => { return (db.fetch(`xpsira_${b.user.id + msg.guild.id}`) ? db.fetch(`xpsira_${b.user.id + msg.guild.id}`) : 0) - (db.fetch(`xpsira_${a.user.id + msg.guild.id}`) ? db.fetch(`xpsira_${a.user.id + msg.guild.id}`) : 0) });
        //OTTOMAN CODE
        const top10 = sorted.splice(0, 3)
        const mappedLevel = top10.filter(o => !o.bot).map(s => db.fetch(`seviye_${s.user.id + msg.guild.id}`) || 0)
        const mappedName = top10.filter(o => !o.bot).map(s => s.user.tag);
          //OTTOMAN CODE
        const mappedID = top10.filter(o => !o.bot).map(s => s.user.id);
        var str = ''
        for(var i = 0; i < 3; i++) {
            var lvl = mappedLevel[i]
    //OTTOMAN CODE  
            if(msg.author.id === mappedID[i]) {
                str += `:trophy: [${i + 1}] :arrow_right: ${mappedName[i]}\n  **Level:** ${lvl} \n\n`
            }
            if(msg.author.id !== mappedID[i]) {
       str += `:trophy: [${i + 1}] :arrow_right: ${mappedName[i]}\n  **Level:** ${lvl} \n\n`
                
//OTTOMAN CODE                                                   
            }
        }
        let wEmbed = new Discord.RichEmbed()
        .setTitle(`ᴏᴛᴛᴏᴍᴀɴ|ʙᴏᴛ | Seviye Sistemi`)
        .setColor('RANDOM')
        .setDescription(`${str}`)
        msg.channel.send(wEmbed)
  //OTTOMAN CODE
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0,
//OTTOMAN CODE
};
exports.help = {
  name: 'sıralama',
  description: 'sıralama',
  usage: 'sıralama'
};