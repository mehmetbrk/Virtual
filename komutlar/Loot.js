const Discord = require('discord.js');
const ms = require("ms")
exports.run = async(client, message) => {
//ottomancode
 const esyalar = [
    "Paraşütten indiğin gibi öldün, hiç eşya bulamadın!", 
    "M416 Buldun!",
    "AKM Buldun!",
    "Ağrı kesici buldun!",
    "İlk Yardım Kiti Buldun",
    "UZI Buldun!",
    "Tava Buldun!", 
    "Levye Buldun!", 
    "Kar98k Buldun!", 
    "M24 Buldun!",
    "Sis Bombası Buldun!",
   "El Bombası Buldun!",
   "İşaret Fişeği Buldun!"
   //ottomancode
];
let sure = "3s"
const ottomanmesaj = esyalar[Math.floor(Math.random() * esyalar.length)];
  message.channel.send("Paraşütten indin eşya arıyorsun...")
  
  setTimeout(function() {
    message.channel.send(ottomanmesaj)
  }, ms(sure));

}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ["pubgloot","pubg-loot"]
}
exports.help = {
    name : 'loot'
}