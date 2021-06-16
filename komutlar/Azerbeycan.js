const Discord = require("discord.js");

exports.run = (client, message) => {
  const motion = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor("🇦🇿 Azerbaycan 🇦🇿")
    .setTitle("Virtual Development • Destek Sunucumuz için tıkla")
    .setURL("https://discord.gg/BJwp5gm8eK")
    .setDescription(
      "**Azerbaycan, ya da resmî adıyla Azerbaycan Cumhuriyeti, Batı Asya ile Doğu Avrupa'nın kesişim noktası olan Kafkasya'da yer alan bir ülke.**"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/730067760620503143/734977603940909207/indir.png"
    )
    .addField("⭐ Başkent", "**Bakü**")
    .addField("⚡ Kuruluş Yılı", "**1918 Yılında kurulmuştur.**")
    .addField("👤 Nüfus", "**10,989 milyon(2019 Sayımlı)**")
    .addField("💎 Para birimi", "**Azerbaycan Manatı**")
    .addField("👑 Başkan", "**İlham Aliyev**")
    .addField("💭 Resmi dil", "**Azerice**")
    .addField(
      "Virtual • Bot Davet",
      "◇ [Davet link](https://discordapp.com/oauth2/authorize?client_id=757928684253478974&amp;scope=bot&amp;permissions=473001199)"
    )
    .setTimestamp()
    .setFooter("Powered by Motion", client.user.avatarURL());
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["!"],
  permlevel: 0
};

exports.help = {
  name: "azerbaycan-bilgi",
  description: "",
  usage: "az"
};
