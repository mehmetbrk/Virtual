const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:Uyar:794135977202548737>  |  Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

    let rol = message.mentions.roles.first()
    if(!rol) return message.channel.send('<a:Uyar:794135977202548737>  |  ```Bir rol etiketlemelisin (Eğer rolü bulamıyorsan kanalı görebildiğinden veya etkietlenebilir olduğundan emin ol)```')
   db.set(`kickrol_${message.guild.id}`, rol.id)
   return message.channel.send('<:OnayPng:794135282093654047>  |  Kick Yetkili Rolü Başarıyla <@&' + rol+ '> Olarak ayarlandı')
}   

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "kick-yetkilisi"
}