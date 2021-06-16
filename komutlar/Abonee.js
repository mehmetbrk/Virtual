const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
    message.delete()
    if (!message.member.roles.find("name", "Üst Düzel Yetkili")) {
        return message.channel.send(' <a:Uyar:794135977202548737> **| Bu Komutu Kullanmak için** Üst Düzel Yetkili **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
    let toabone = message.guild.member(message.mentions.users.first());
    let abonerole = message.guild.roles.find(`name`, "Abonelerim");
    if (!abonerole) return message.reply("<a:Uyar:794135977202548737> **|** **Rol Bulunamadı Lütfen** 'Abonelerim' **Adıyla Rol Oluşturunuz**");
    if (!toabone) return message.reply("<a:Uyar:794135977202548737> **|** **Bir Kişiyi Et**");
    await (toabone.addRole(abonerole.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let aboneembed = new Discord.RichEmbed()
        .setTitle("<:OnayPng:794135282093654047> **・ Abone Rolü Verildi**")
        .setColor('BLACK')
        .addField("<:OnayPng:794135282093654047> **・ Abone Rolü Veren Yetkili**", `${message.author.tag}`, true)
        .addField("<:OnayPng:794135282093654047> **・ Abone Rolü Alan Kullanıcı**", `${vUser}`, true)
       .setTimestamp();
    let abonelog = message.guild.channels.find(`name`, "📷・abone-foto");
      if (!abonelog) return message.channel.send("<a:Uyar:794135977202548737> **|** Kayıt Log Kanalı bulunamadı.`");
    abonelog.send(aboneembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt','k'],
};
exports.help = {
  name: 'a',
  description: 'Kayıt etme komutu',
  usage: 'a'
};  