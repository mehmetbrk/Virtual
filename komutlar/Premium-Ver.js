const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {

  if (message.author.id !== '748946208181059648') return;
  let prex = args[0]
  if (!prex) return message.channel.send('<a:Uyar:794135977202548737>  | **Bir kullanıcının IDsini girmelisin**')
  
  db.set(`prexgold${prex}`, 'gold')
  
  message.channel.send(`<:OnayPng:794135282093654047>  | **${prex}** IDli kullanıcı artık Premium Üye Oldu`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["premium-ver"],
  permLevel: 0
};
exports.help = {
  name: 'premium-ver',
  description: '[Admin Komutu]',
  usage: 'gold-ver <ID>'
};