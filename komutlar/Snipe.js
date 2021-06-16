const { MessageEmbed } = require('discord.js')
const emirhan = require('quick.db')

   exports.run = async(client, message, args) => {
    const emirhan = await db.fetch(`snipe.id.${message.guild.id}`)
    if(!emirhan) {
    const codare2 = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`<a:Uyar:794135977202548737> |**Mesaj bulunamadı**`)
.setColor(`#f3c7e1`)
    message.channel.send(codare2);
          } else {
  let kullanıcı = client.users.cache.get(emirhan);
  const emran = await db.fetch(`snipe.mesaj.${message.guild.id}`)
  const codare = new MessageEmbed()
  .setAuthor(kullanıcı.username, kullanıcı.avatarURL())
  .setDescription(`Silinen mesaj: ` + emran)
.setColor(`#f3c7e1`)
  message.channel.send(codare) }
}
exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["snipe"],
  permlevel: 0
};

exports.help = {
  name: "snipe",
  description: "t!osmanlı",
  usage: "!osmanlı"
};