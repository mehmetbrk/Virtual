const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args) => {
    let replies = ["https://i.hizliresim.com/XnJyPX.jpg", "https://i.hizliresim.com/a5yACF.jpg", "https://i.hizliresim.com/smdYiY.jpg", "https://cdn.yeniakit.com.tr/images/news/625/iyi-insanlar-kotu-olur-mu-h1526934190-29c7a0.jpg", "https://i.pinimg.com/236x/2e/eb/1c/2eeb1c5de6280293baec04e11a26a6a4--the-beauty.jpg", "https://i.pinimg.com/474x/b6/38/a3/b638a31b365e2d168842a973ec3e622e.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKfd4Ow690eHtLLCUbMKDUyaAy1TgV5KpWyQ&usqp=CAU", "https://i.pinimg.com/236x/4b/60/56/4b6056a4448d2b1b018b01eec4e73405--paint-party-canvas-paintings.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcIF1gKdLSpnTBvGjFekw_iJX-F3hZaPe6Kg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3oYZ-c8TQN69siGPvrYwFO85OKijixuPAtQ&usqp=CAU", "https://i.pinimg.com/originals/1b/74/b4/1b74b4714ea162548a8d1d35284f84ec.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1c456GIM2g94fssiT_GpyfajyuHLxff6mTg&usqp=CAU", "https://www.samsunkavak.bel.tr/Sayfalar/EskiResimler/resimler/20139726_106856759975968_1748087663980719464_n[1].jpg", "https://www.kuveytturkozel.com.tr/Resources/CultureArt/ImageFile/ismail-sanal-soyut-resim-8_l.jpg",    "https://www.istasyonsanat.com/upload/ckfinder/files/duyurular/resim-yapmanin-puf-naktalari.jpg", "https://i.hizliresim.com/jJLA1U.jpg"];
    let result = Math.floor((Math.random() * replies.length));
    let resimembed = new Discord.MessageEmbed()
        .setTitle("İşte Resmin;")
        .setColor("BLACK")
        .setImage(replies[result]);
    message.channel.send(resimembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['resim-yap'], 
  permLevel: 0
};

exports.help = {
  name: 'resimçiz',
  description: 'CodeWork V12 resimçiz', 
  usage: 'resimçiz'
};