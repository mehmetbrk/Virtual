const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    let x12;
    let x13;
    let x14;
    let x15;
    let x16;
    let x17;
    let x18;
    let x19;
    let x20;
    let x21;
    let x22;
    let x23;
    let x24;
    let x25;
    let x26;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<:Reddedilmek:794135281824956437> "
    
    //Sunucuda davet oluşturma yetkisi
    if (msg.member.hasPermission("CREATE_INSTANT_INVITE")) x2 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("CREATE_INSTANT_INVITE")) x2 = "<:Reddedilmek:794135281824956437> "
  
    //Üye atma yetkisi
    if (msg.member.hasPermission("KICK_MEMBERS")) x3 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("KICK_MEMBERS")) x3 = "<:Reddedilmek:794135281824956437> "
    
    //Üye yasaklama yetkisi
    if (msg.member.hasPermission("BAN_MEMBERS")) x4 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("BAN_MEMBERS")) x4 = "<:Reddedilmek:794135281824956437> "
    
    //Kanalları yönetme yetkisi
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<:Reddedilmek:794135281824956437> "
    
    //Sunucuyu yönetme yetkisi
    if (msg.member.hasPermission("MANAGE_GUILD")) x6 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("MANAGE_GUILD")) x6 = "<:Reddedilmek:794135281824956437> "
    
    //Tepki ekleme yetkisi
    if (msg.member.hasPermission("ADD_REACTIONS")) x7 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("ADD_REACTIONS")) x7 = "<:Reddedilmek:794135281824956437> "
    
    //Denetim Kaydını görüntüleme yetkisi
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x8 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x8 = "<:Reddedilmek:794135281824956437> "
    
    //Öncelikli Konuşmacı yetkisi
    if (msg.member.hasPermission("PRIORITY_SPEAKER")) x9 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("PRIORITY_SPEAKER")) x9 = "<:Reddedilmek:794135281824956437> "
    
    //Kanalları Görme yetkisi
    if (msg.member.hasPermission("VIEW_CHANNEL")) x10 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("VIEW_CHANNEL")) x10 = "<:Reddedilmek:794135281824956437> "
    
    //Mesaj Gönderme yetkisi
    if (msg.member.hasPermission("SEND_MESSAGES")) x11 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("SEND_MESSAGES")) x11 = "<:Reddedilmek:794135281824956437> "
    
    //Sesli Mesaj gönderme yetkisi
    if (msg.member.hasPermission("SEND_TTS_MESSAGES")) x12 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("SEND_TTS_MESSAGES")) x12 = "<:Reddedilmek:794135281824956437> "
    
    //Mesajları Yönetme yetkisi
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x13 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x13 = "<:Reddedilmek:794135281824956437>"
    
    //Link Gönderme yetkisi
    if (msg.member.hasPermission("EMBED_LINKS")) x14 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("EMBED_LINKS")) x14 = "<:Reddedilmek:794135281824956437> "
  
    //Dosya Gönderme yetkisi
    if (msg.member.hasPermission("ATTACH_FILES")) x15 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("ATTACH_FILES")) x15 = "<:Reddedilmek:794135281824956437> "
  
    //Mesaj Geçmişini Okuma yetkisi
    if (msg.member.hasPermission("READ_MESSAGE_HISTORY")) x16 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("READ_MESSAGE_HISTORY")) x16 = "<:Reddedilmek:794135281824956437> "
  
    //Herkesten Bahsetme yetkisi
    if (msg.member.hasPermission("MENTION_EVERYONE")) x17 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("MENTION_EVERYONE")) x17 = "<:Reddedilmek:794135281824956437> "
    
    //Farklı Sunuculardaki Emojileri Kullanma yetkisi
    if (msg.member.hasPermission("USE_EXTERNAL_EMOJIS")) x18 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("USE_EXTERNAL_EMOJIS")) x18 = "<:Reddedilmek:794135281824956437> "
  
    //Sese Bağlanma yetkisi
    if (msg.member.hasPermission("CONNECT")) x19 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("CONNECT")) x19 = "<:Reddedilmek:794135281824956437> "
  
    //Seste Konuşma yetkisi
    if (msg.member.hasPermission("SPEAK")) x20 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("SPEAK")) x20 = "<:Reddedilmek:794135281824956437> "
  
    //Seste Kullanıcıyı Susturma yetkisi
    if (msg.member.hasPermission("MUTE_MEMBERS")) x21 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("MUTE_MEMBERS")) x21 = "<:Reddedilmek:794135281824956437> "
  
    //Seste Kullanıcıyı Sağırlaştırma yetkisi
    if (msg.member.hasPermission("DEAFEN_MEMBERS")) x22 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("DEAFEN_MEMBERS")) x22 = "<:Reddedilmek:794135281824956437> "
  
    //Seste Kullanıcıyı Taşıma yetkisi
    if (msg.member.hasPermission("MOVE_MEMBERS")) x23 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("MOVE_MEMBERS")) x23 = "<:Reddedilmek:794135281824956437>"
  
    //Kendi İsmini Yönetme yetkisi
    if (msg.member.hasPermission("CHANGE_NICKNAME")) x24 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("CHANGE_NICKNAME")) x24 = "<:Reddedilmek:794135281824956437> "
  
    //Kullanıcı İsimlerini Yönetme yetkisi
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x25 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x25 = "<:Reddedilmek:794135281824956437> "
   
    //Rolleri Yönetme yetkisi
    if (msg.member.hasPermission("MANAGE_ROLES")) x26 = "<:evrimii:794135282303107072>"
    if (!msg.member.hasPermission("MANAGE_ROLES")) x26 = "<:Reddedilmek:794135281824956437> "
     const embed = new Discord.MessageEmbed()
    .setColor('1b1b1f')
    .setDescription(` ${x} **Yönetici**
                      ${x2} **Sunucuda davet oluşturma**
                      ${x3} **Üye atma**
                      ${x4} **Üye yasaklama**
                      ${x5} **Kanalları yönetme**
                      ${x6} **Sunucuyu yönetme**
                      ${x7} **Tepki ekleme**
                      ${x8} **Denetim Kaydını görüntüleme**
                      ${x9} **Öncelikli Konuşmacı**
                      ${x10} **Kanalları Görme**
                      ${x11} **Mesaj Gönderme**
                      ${x12} **Sesli Mesaj gönderme**
                      ${x13} **Mesajları Yönetme**
                      ${x14} **Link Gönderme**
                      ${x15} **Dosya Gönderme**
                      ${x16} **Mesaj Geçmişini Okuma**
                      ${x17} **Herkesten Bahsetme**
                      ${x18} **Farklı Sunuculardaki Emojileri Kullanma**
                      ${x19} **Sese Bağlanma**
                      ${x20} **Seste Konuşma**
                      ${x21} **Seste Kullanıcıyı Susturma**
                      ${x22} **Seste Kullanıcıyı Sağırlaştırma**
                      ${x23} **Seste Kullanıcıyı Taşıma**
                      ${x24} **Kendi İsmini Yönetme**
                      ${x25} **Kullanıcı İsimlerini Yönetme**
                      ${x26} **Rolleri Yönetme**
                      `);
 msg.channel.send(embed);

  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilerim' ,'y'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};