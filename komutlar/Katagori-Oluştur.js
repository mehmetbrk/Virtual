const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let motion = args.slice(0).join(" ");
  let guild = message.guild;
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply(
      "<a:Uyar:794135977202548737> | Bu komutu kullanabilmek için `Kanalları Yönet` yetkisine sahip olmalısın."
    );

  if (motion.length < 1)
    return message.channel.send(
      "<a:Uyar:794135977202548737> | Oluşturmak istediğin kategorinin adını yazmalısın."
    );

  guild.createChannel(motion, "category");

  message.channel.send("<:OnayPng:794135282093654047> | Kategori başarıyla oluşturuldu.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kategorioluştur", "kategoriolustur"],
  permLevel: 0
};

exports.help = {
  name: "kategori-oluştur",
  description: "Bir kategori oluşturur.",
  usage: "kategori-oluştur"
};