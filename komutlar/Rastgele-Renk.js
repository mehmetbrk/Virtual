const Discord = require('discord.js')

//hocam bak bu kısım önemli buraya asla dokunma sonra vay efendim kod çalışmıyor cart curt diye atarlanma
const devamke = ['e', 'f', 'd', 'a', 'b', 'c', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const pompake = ['e', 'f', 'd', 'a', 'b', 'c', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const parçalıyoruzke = ['e', 'f', 'd', 'a', 'b', 'c', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const kebabke = ['e', 'f', 'd', 'a', 'b', 'c', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const tavukke = ['e', 'f', 'd', 'a', 'b', 'c', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const biberke = ['e', 'f', 'd', 'a', 'b', 'c', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
//hocam bak bu kısım önemli buraya asla dokunma sonra vay efendim kod çalışmıyor cart curt diye atarlanma


exports.run = function(client, message) {


    var m = devamke[Math.floor(Math.random() * devamke.length)];
    var e = pompake[Math.floor(Math.random() * pompake.length)];
    var f = parçalıyoruzke[Math.floor(Math.random() * parçalıyoruzke.length)];
    var t = kebabke[Math.floor(Math.random() * kebabke.length)];
    var u = tavukke[Math.floor(Math.random() * tavukke.length)];
    var n = biberke[Math.floor(Math.random() * biberke.length)];
       
  const şalgam_ooo_çokke =`${m}${e}${f}${t}${u}${n}` //meftun#3544 yaptı bunu haberin olsun
  
  const raki_yemekten_sonrake = new Discord.MessageEmbed()
.setColor(şalgam_ooo_çokke)
.setTitle(`İşte senin için bir renk oluşturdum!`)
.setDescription(`Hani sevdiysen falan buyur renk kodu: ${şalgam_ooo_çokke}`)
.setThumbnail(`https://dummyimage.com/100x50/${şalgam_ooo_çokke}/ffffff&text=%20`)
.setFooter(`Virtual Bot Rastgele Renk Sistemi`)
message.channel.send(raki_yemekten_sonrake)

}; //meftun#3544 yaptı bunu haberin olsun


exports.conf = { 
enabled: true, 
guildOnly: false, 
aliases: ["rastgelerenk", "renkrastgele"],
permLevel: 0
}
exports.help = { 
name: 'rastgelerenkver'
} 