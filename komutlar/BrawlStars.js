
const Discord = require('discord.js')
const db = require('quick.db')

var shellygif = ['https://i.pinimg.com/originals/12/5a/cb/125acbbc0fdd00ee1c750a1367041636.jpg','https://i.pinimg.com/originals/b3/f1/fc/b3f1fc93f282584287db7978d6012eb7.png','https://pa1.narvii.com/7525/5b9ac5f06f1620b6c38504961bf3c178b1831783r1-590-500_00.gif'] /// gifleri arttıra bilirsiniz siz.
var primogif = ['https://media.giphy.com/media/gj02Qz9ecc0KIEIRLg/giphy.gif','https://media.giphy.com/media/YOFuJPWvPsfafM80EJ/giphy.gif','https://media.giphy.com/media/YOFuJPWvPsfafM80EJ/giphy.gif']
var leongif = ['https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F564x%2Fe8%2Fbd%2F7d%2Fe8bd7d146d3ae9ee92a9959b83c64353.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.at%2Fpin%2F703194929307529646%2F%3Famp_client_id%3DCLIENT_ID(_)%26mweb_unauth_id%3D%7B%7Bdefault.session%7D%7D%26amp_url%3Dhttps%253A%252F%252Fwww.pinterest.at%252Famp%252Fpin%252F703194929307529646%252F&tbnid=VfAzlMXcOfSbTM&vet=12ahUKEwjKyemVgoLuAhWX7qQKHU-lB2EQMygAegUIARDDAQ..i&docid=zUzeViY44QjVKM&w=407&h=712&q=brawl%20stars%20leon&client=opera-gx&ved=2ahUKEwjKyemVgoLuAhWX7qQKHU-lB2EQMygAegUIARDDAQ','gif2','gif3']
var lougif = ['https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.redd.it%2Fgycptejsory51.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2FBrawlstars%2Fcomments%2Fjsqxs5%2Flou%2F&tbnid=qZ59QrRTLExNwM&vet=12ahUKEwjow7yzgoLuAhWSIMUKHT5aCggQMygCegUIARCrAQ..i&docid=UsQ3eqk-KX7k_M&w=1500&h=1500&q=brawl%20%20stars%20lou&client=opera-gx&ved=2ahUKEwjow7yzgoLuAhWSIMUKHT5aCggQMygCegUIARCrAQ','gif2','gif3']                                                                
var ambergif = ['https://static.wikia.nocookie.net/brawlstars/images/a/a3/Amber_Skin-Default.png/revision/latest?cb=20201108094559','https://cdn.glitch.com/2a20615c-bc45-42df-bd2d-4bf1a8547def%2Fthumbnails%2F7390d986-1c09-4cd2-a807-820eb0ccdba7.image.png?1613307324804']
exports.run = function(client, message, args) {

let shellyrandom = shellygif[Math.floor(Math.random() * shellygif.length)]
let primorandom = primogif[Math.floor(Math.random() * primogif.length)]
let leonrandom = leongif[Math.floor(Math.random() * leongif.length)]
let lourandom = lougif[Math.floor(Math.random() * lougif.length)]
let amberrandom = ambergif [Math.floor(Math.random()* ambergif.length)]
let karakterler = args[0]
var kupaa = db.fetch(`kupa_${message.author.id}`) || 0

if(!karakterler) return message.channel.send("Oynamak İstediğin Karakteri Girmelisin!\nKarakterler: **shelly,primo,leon,lou,amber**")

if(args[0] === "shelly"){
  let sıra = Math.round(Math.random() * 10)
  let kupa;
  if(sıra == 1) kupa = 10
  if(sıra == 2) kupa = 9 
  if(sıra == 3) kupa = 8
  if(sıra == 4) kupa = 7
  if(sıra == 5) kupa = 6
  if(sıra == 6) kupa = 5
  if(sıra == 7) kupa = 4
  if(sıra == 8) kupa = 3
  if(sıra == 9) kupa = 2
  if(sıra == 10) kupa = 1
  db.add(`kupa_${message.author.id}`,kupa)
  const kazanma = new Discord.MessageEmbed()
  .setTitle("Tebrikler Kazandın !")
  .addField("🏆 Kazandığın Kupa Sayısı:", kupa, true)
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupaa, true)
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Brawl Stars")
                       .setColor(message.guild.me.displayColor)
                      .setImage(shellyrandom)
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(kazanma);
  }, 4000)
}); 
}

else if(args[0] === "primo"){
  let sıra = Math.round(Math.random() * 10)
  let kupa;
  if(sıra == 1) kupa = 10
  if(sıra == 2) kupa = 9 
  if(sıra == 3) kupa = 8
  if(sıra == 4) kupa = 7
  if(sıra == 5) kupa = 6
  if(sıra == 6) kupa = 5
  if(sıra == 7) kupa = 4
  if(sıra == 8) kupa = 3
  if(sıra == 9) kupa = 2
  if(sıra == 10) kupa = 1
  db.add(`kupa_${message.author.id}`,kupa)
  const kazanma = new Discord.MessageEmbed()
  .setTitle("Tebrikler Kazandın !")
  .addField("🏆 Kazandığın Kupa Sayısı:", kupa, true)
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupaa, true)
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Brawl Stars")
                       .setColor(message.guild.me.displayColor)
                      .setImage(primorandom)
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(kazanma);
  }, 4000)
}); 
}
else if(args[0] === "leon"){
  let sıra = Math.round(Math.random() * 10)
  let kupa;
   if(sıra == 1) kupa = 10
  if(sıra == 2) kupa = 9 
  if(sıra == 3) kupa = 8
  if(sıra == 4) kupa = 7
  if(sıra == 5) kupa = 6
  if(sıra == 6) kupa = 5
  if(sıra == 7) kupa = 4
  if(sıra == 8) kupa = 3
  if(sıra == 9) kupa = 2
  if(sıra == 10) kupa = 1
  db.add(`kupa_${message.author.id}`,kupa)
  const kazanma = new Discord.MessageEmbed()
  .setTitle("Tebrikler Kazandın !")
  .addField("🏆 Kazandığın Kupa Sayısı:", kupa, true)
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupaa, true)
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Brawl Stars")
                       .setColor(message.guild.me.displayColor)
                      .setImage(leonrandom)
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(kazanma);
  }, 4000)
}); 
}
  else if(args[0] === "amber"){
  let sıra = Math.round(Math.random() * 10)
  let kupa;
   if(sıra == 1) kupa = 10
  if(sıra == 2) kupa = 9 
  if(sıra == 3) kupa = 7
  if(sıra == 3) kupa = 7
  if(sıra == 4) kupa = 6
  if(sıra == 4) kupa = 6
  if(sıra == 5) kupa = 5
  if(sıra == 5) kupa = 5
  if(sıra == 5) kupa = 5
  if(sıra == 6) kupa = 4
  db.add(`kupa_${message.author.id}`,kupa)
  const kazanma = new Discord.MessageEmbed()
  .setTitle("Tebrikler Kazandın !")
  .addField("🏆 Kazandığın Kupa Sayısı:", kupa, true)
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupaa, true)
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Brawl Stars")
                       .setColor(message.guild.me.displayColor)
                      .setImage(amberrandom)
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(kazanma);
  }, 4000)
}); 
}
  else if(args[0] === "lou"){
     let sıra = Math.round(Math.random() * 10)
  let kupa;
  if(sıra == 1) kupa = 10
  if(sıra == 1) kupa = 10
  if(sıra == 2) kupa = 9 
  if(sıra == 3) kupa = 8
  if(sıra == 4) kupa = 7
  if(sıra == 5) kupa = 6
  if(sıra == 6) kupa = 5
  if(sıra == 7) kupa = 4
  if(sıra == 8) kupa = 3
  if(sıra == 9) kupa = 2
  if(sıra == 10) kupa = 1
  db.add(`kupa_${message.author.id}`,kupa)
  const kazanma = new Discord.MessageEmbed()
  .setTitle("Tebrikler Kazandın !")
  .addField("🏆 Kazandığın Kupa Sayısı:", kupa, true)
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupaa, true)
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Brawl Stars")
                       .setColor(message.guild.me.displayColor)
                      .setImage(lourandom)
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(kazanma);
  }, 4000)
}); 
}else return message.channel.send("Doğru karakter girmelisin!\nKarakterler: **shelly,primo,leon,lou**")
   
};
////Fiber Botlist & Code #7.7K
exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: ['bs','brawl-stars','brawlstars'],
  permLevel: 0

};

exports.help = {

  name: 'brawl-stars',
  description: 'By Ufukcan ',
  usage: 'bs oynarsınız'

}