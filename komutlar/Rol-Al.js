const emran = require('discord.js');

exports.run = async (client, message, args) => {
    const ayarlar = require('../ayarlar.json')
            let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

        if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send(new emran.MessageEmbed().setDescription('<a:Uyar:794135977202548737> | Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));
var member = message.mentions.members.first();
var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name == args.slice(1).join(' '));
if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('<a:Uyar:794135977202548737> | Bu komutu kullanabilmek için "\`Rolleri Yönet\`" yetkisine sahip olmalısın.');
if (!member) return message.channel.send('<a:Uyar:794135977202548737> | **Lütfen bir kullanıcıyı etiketleyin veya ismini yazın.**');
if (!role) return message.channel.send('Rol bulunamadı.');
    if (!member.roles.cache.has(role.id)) return message.channel.send(new emran.MessageEmbed().setDescription('<a:Uyar:794135977202548737> | Kullanıcı O Yetkiye Sahip Değil.').setColor('#D2EE07'));
  if (message.member.roles.highest.comparePositionTo(role) < 1) {
  return message.channel.send(`<a:Uyar:794135977202548737> | Alınacak rol sizin rolünüzün üstünde bu yüzden rolü **veremiyorum!**`);
  }
  try{
await (member.roles.remove(role.id))
 message.channel.send(new emran.MessageEmbed().setDescription(`<:OnayPng:794135282093654047>  | ${member} isimli üyenin \`${role.name}\` isimli yetkisi başarıyla alındı!`)  .setFooter('Bu komutu kullanan yetkili ' + message.author.tag, message.author.avatarURL).setColor('#D2EE07'));
    
  } catch (e) {
    console.log(e);
    message.channel.send('<a:Uyar:794135977202548737> |  **Hata oluştu!**');
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolal'],
  permLevel: 0
};

exports.help = {
  name: 'rol-al',
  description: 'Belirttiğiniz kullanıcıdan belirttiğiniz rolü alır.',
  usage: 'rol-al'
};