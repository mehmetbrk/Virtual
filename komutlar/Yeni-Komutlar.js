const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor(0xF001FA)
  .setDescription(`<:OnayPng:794135282093654047>  **Virtual Bot Sizler Sayesinde Gelişiyor**  <:OnayPng:794135282093654047>`)
  .addField(`**:game_die: İşte Karşınızda Yenilikler :game_die:**\n\n`,
`:green_circle: \`!kayıtsistemi\`  
:green_circle: \`!ekonomi\`  
:green_circle: \`!döviz\`  
:green_circle: \`!token\`  
:green_circle: \`!silah\` 
:green_circle: \`!kar\`  
:green_circle: \`!yorum\`  
:green_circle: \`!tablo\`
:green_circle: \`!massban\` 
:green_circle: \`!magik\`
:green_circle: \`!ping\` 
:green_circle: \`!komutlar\` `)
.addField("**➥ Linkler**", "[:white_check_mark: Davet Linki](https://discord.com/oauth2/authorize?client_id=757928684253478974&scope=bot&permissions=8)\n[:white_check_mark: Destek Sunucu](https://discord.gg/vG3WaFVddR)\n[:white_check_mark: Website](http://giftcord.xyz/html/)")
.setImage('https://cdn.discordapp.com/attachments/803627425766440994/803632972804390932/standard_2.gif')
    .setFooter(`${message.author.username} Bizim İçin Bir Yıldızsın.`, message.author.avatarURL())
  return message.channel.send(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yENİLİK','yen','new'],
  permlevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}