const Discord = require("discord.js");
const fetch = require ('node-fetch')

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
  .setTitle('Hata')
  .setColor('RED')
const metin = args.slice(0).join("%20")
if(!metin)return message.channel.send(embed.setDescription('Lütfen Sormak İstediğiniz Sözcüğü Veya Metni Giriniz'))
fetch(`https://apiobestones.glitch.me/api/chatbot?mesaj=${metin}&id=${message.author.id}`).then( re => re.json()).then(jso => {
message.channel.send(jso.cevap)

})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sor",
  description: "",
  usage: "sonüye <aç/kapat>"
};