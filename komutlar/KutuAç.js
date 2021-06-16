const Discord = require('discord.js');
exports.run = async (client, message) => {
  var savasci = [
    "Colt",
    "Nita",
    "Bull",
    "Jessie",
    "Mortis",
    "Gale",
    "Leon",
    "Spike",
    "Sandy",
    "Crow",
    "MR.P",
    "Max",
    "Sprout",
    "Tara",
    "Gene",
    "Surge",
    "Brock",
    "Dynamike",
    "Frank",
    "Piper",
    "Carl",
    "Penny",
    "Darrly",
    "Rico",
    "Rosa",
    "Poco",
    "Barley",
    "El Primo",
    "8-Bit",
    "Tick",
    "Bibi",
    "Bo",
    "Shelly",
    "Pam",
    "Bea",
    "Emz",
    "Jacky",
    "Nani",
    "Shelly",
    "Byron",
    "Lou",
    "Collete",
    "Edgar",
    "Colonel Ruffs"
  ];
   
 
  var savasci = savasci[Math.floor(Math.random(1) * savasci.length)]
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username}'ın Kutusu;`, message.author.avatarURL())
   .setImage('https://media0.giphy.com/media/JOdQKwcV985Ip2ezWh/giphy.gif')
    .setDescription(`
\`\`\`
Kutudan Çıkan Karakter = ${savasci}
\`\`\`
`)
  .setFooter(`Kutuyu açan (${message.author.username})`)
    message.channel.send(embed);
  }
 
 
exports.conf = {
  aliases: ['kutu-aç']
}
exports.help = {
  name: "kutuaç"
}