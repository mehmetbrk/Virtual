const discord = require("discord.js")
const axios = require('axios')
const talkedRecently = new Set()

exports.run = async(client, message, args) => {
 if(talkedRecently.has(message.author.id)) return message.channel.send(`Bu komutu 10 dakikada bir kullanabilirsin`)
if(!args[0]) return message.channel.send(`bir şehir adı girin *Küçük harfler ile*`)
axios.get(`https://api.collectapi.com/pray/all?data.city=${args[0].toLowerCase()}`, {
 headers: {
  "content-type": "application/json",
  "authorization": "apikey 19f9vtz36jOjMRzmAZszzf:39LjoW4lhz1UcmTcsLfVcz"
   }
 }).then(res => {
  var imsak = res.data.result[0].saat === undefined ? "Okundu" : res.data.result[0].saat
  var sabah = res.data.result[1].saat === undefined ? "Okundu" : res.data.result[1].saat
  var öğle = res.data.result[2].saat === undefined ? "Okundu" : res.data.result[2].saat
  var ikindi = res.data.result[3].saat === undefined ? "Okundu" : res.data.result[3].saat
  var akşam = res.data.result[4].saat === undefined ? "Okundu" : res.data.result[4].saat
  var yatsı = res.data.result[5].saat === undefined ? "Okundu" : res.data.result[5].saat
  const embed = new discord.MessageEmbed().setColor("YELLOW").setDescription(`**${args[0]}** Şehri için namaz vakitleri.\n*10 Dakikada bir kullanılır*`)
  .addField(`**${res.data.result[0].vakit}** Ezanı saati`, `**${imsak}**`)
  .addField(`**${res.data.result[1].vakit}** Ezanı saati`, `**${sabah}**`)
  .addField(`**${res.data.result[2].vakit}** Ezanı saati`, `**${öğle}**`)
  .addField(`**${res.data.result[3].vakit}** Ezanı saati`, `**${ikindi}**`)
  .addField(`**${res.data.result[4].vakit}** Ezanı saati`, `**${akşam}**`)
  .addField(`**${res.data.result[5].vakit}** Ezanı saati`, `**${yatsı}**`)
  message.channel.send(embed)
 }).catch(err => {
  message.channel.send(new discord.MessageEmbed().setColor("YELLOW").setDescription(`Bir hata oldu`))
})
  talkedRecently.add(message.author.id);
  setTimeout(() => {
  message.delete();
  talkedRecently.delete(message.author.id);
 }, 600000);
}

exports.conf = {
  aliases: [],
}

exports.help = {
  name: "ezan"
}