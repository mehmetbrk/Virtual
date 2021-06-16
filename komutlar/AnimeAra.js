const animeJs = require('@freezegold/anime.js');
const anime = new animeJs.Client()
const Discord = require("discord.js")
exports.run = (client, message, args) => {
let pixelien = args.slice(0).join(' ')
if(!pixelien) return message.channel.send("Bir anime adı girmelisin.")
anime.searchAnime(pixelien).then(res => {
if(!res) return message.channel.send("Böyle bir anime bulamadım.")
let codework = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(res[0].titles.romaji)
.setDescription(`:star: ${res[0].averageRating}\n\n**MyAnimeList kullanıcı sayısı** : \`${res[0].userCount}\`\n**MyAnimeList favori sayısı** : \`${res[0]. favoritesCount}\`\n**Çıkış Tarihi** : \`${res[0].startDate}\`\n**Bitiş tarihi** : \`${res[0].endDate}\`\n**Bölüm Sayısı** : \`${res[0].episodeCount}\`\n**Bölüm Uzunluğu** : \`${res[0].episodeLength}dk\`\n**Nsfw Mi?** : ${res[0].nsfw? "Evet" : "Hayır"}\n\n\n**Konu** : \n${res[0].synopsis.replace("'", "").replace("+","\n")}`)
.setImage(res[0].  posterImage.large)
message.channel.send(codework)
});
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'animeara',
  description: 'Anime aramak için kullanılır.',
  usage: 'animeara '
};