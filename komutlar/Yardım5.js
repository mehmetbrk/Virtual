const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
   const filter = (reaction, user) => {
  return ["🏠","💬","🎉","💵","🛠️","💼","🧾","🤖","👮"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};

  const yardım = new Discord.MessageEmbed()
      .setColor("RANDOM")
  .setTitle('Odin Yardım Menüsü')
  .setImage("https://cdn.discordapp.com/attachments/808981105709023272/809038268992716800/odin_2.gif")
  .setThumbnail("https://cdn.discordapp.com/attachments/808981105709023272/809378234105069598/odn.jpeg")
  .setDescription(`**Ana Menü: 🏠 \n Tasarım Hizmetleri 💬 \n Tasarım Ekibimiz 🎉 \n Tasarım Çalışmalarımız 💵 \n Tasarım Çalışmalarımız 2 🛠️ \n Tasarım Çalışmalarımız 3 💼 \n Tasarım Çalışmalarımız 4 🧾 \n Tasarım Çalışmalarımız 5 🤖 \n Tasarım Çalışmalarımız 6 👮 **`)
 var menü = await message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 200000 });
  let emojiler = ["🏠","💬","🎉","💵","🛠️","💼","🧾","🤖","👮"]
  await menü.react(emojiler[0])
  await menü.react(emojiler[1])
  await menü.react(emojiler[2])
  await menü.react(emojiler[3])
  await menü.react(emojiler[4])
  await menü.react(emojiler[5])
  await menü.react(emojiler[6])
  await menü.react(emojiler[7])
  await menü.react(emojiler[8])
  

// GENEL BAŞ
collector.on('collect', (reaction, user) => {

  
     if(reaction.emoji.name == "💬") {
    const genels = new Discord.MessageEmbed()
      .setColor("RANDOM")
 .setTitle('Legend Project Tasarım Hizmetleri')
 .setAuthor("Selam",client.user.displayAvatarURL())
 .addField("`.avatar`",'Etiketlenen veya idsi girilen kişinin avatarını gösterir.')
 .addField("`.ping`",'Botun pingine bakarsınız.')
 .addField("`.öneri`",'Bot yapımcısına bana yani :) öneri iletirsiniz.')
 .addField("`.istatistik`",'Botun istatistiklerine bakarsınız.')
 .addField("`.toplam-komut`",'Botun toplam komut sayısına bakarsınız.')
 .setThumbnail("https://cdn.discordapp.com/attachments/808981105709023272/809378234105069598/odn.jpeg")
 .setImage("https://cdn.discordapp.com/attachments/808981105709023272/809038268992716800/odin_2.gif")
 menü.edit(genels)
  }
 if(reaction.emoji.name == "🏠") {
 menü.edit(yardım)
  }
});

collector.on('end', collected => {
  console.log(`Aha ${collected.size} tane loot toplandı beyim`);
});
// GENEL SON

// EĞLENCE BAŞ
collector.on('collect', (reaction, user) => {

  
    if(reaction.emoji.name == "🎉") {
   const denemes = new Discord.MessageEmbed()
     .setColor("RANDOM")
.setTitle('Eğlence Komutları')
.addField("Profil Sistemi",'\n `.profilim` = Profilinize bakarsınız. \n `.bayrakayarla` = Bayrağınızı ayarlarsınız. \n `.isimayarla` = İsminizi ayarlarsınız. \n `.soyisimayarla` = Soyisminizi ayarlarsınız. \n `.yaşayarla` = Yaşınızı ayarlarsınız. \n `.cinsiyetayarla` = Cinsiyetinizi ayarlarsınız.')
.addField("`.aduket-çek`",'Etiketlenen kişiye aduket çeker.')
.addField("`.doğruluk-cesaret`",'Sunucunuzda doğruluk-cesaretlik oynarsınız.')
.addField("`.havadurumu`",'Girdiğiniz ilin/ilçenin havadurumuna bakarsınız.')
.addField("`.efsane`",'Efsane logo yapar.')
.addField("`.ejderha`",'Ejderha şeklinde logo yapar.')
.setThumbnail("https://cdn.discordapp.com/attachments/808981105709023272/809378234105069598/odn.jpeg")
.setImage("https://cdn.discordapp.com/attachments/808981105709023272/809038268992716800/odin_2.gif")
menü.edit(denemes)
 }
if(reaction.emoji.name == "🏠") {
menü.edit(yardım)
 }
});

collector.on('end', collected => {
 console.log(`Aha ${collected.size} tane loot toplandı beyim`);
});
// EĞLENCE SON

// EKONOMİ BAŞ
collector.on('collect', (reaction, user) => {

  
    if(reaction.emoji.name == "💵") {
   const nebilmaq = new Discord.MessageEmbed()
     .setColor("RANDOM")
.addField("**Ekonomi Komutları**", `\n Beklemede kalın...`)
.setThumbnail("https://cdn.discordapp.com/attachments/808981105709023272/809378234105069598/odn.jpeg")
.setImage("https://cdn.discordapp.com/attachments/808981105709023272/809038268992716800/odin_2.gif")
menü.edit(nebilmaq)
 }
if(reaction.emoji.name == "🏠") {
menü.edit(yardım)
 }
});

collector.on('end', collected => {
 console.log(`Aha ${collected.size} tane loot toplandı beyim`);
});
// EKONOMİ SON

// MODERASYON BAŞ
collector.on('collect', (reaction, user) => {


    if(reaction.emoji.name == "🛠️") {
   const moderasyonamk = new Discord.MessageEmbed()
     .setColor("RANDOM")
.setTitle('**Moderasyon Komutları**')
.addField("`.sil`",'Miktarını girdiğiniz kadar mesaj siler.')
.addField("`.rol-ver`",'Etiketlenen kişiye istediğiniz rolü verir.')
.addField("`.rol-al`",'Etiketlenen kişiden istediğiniz rolü alır.')
.addField("`.emoji-ekle`",'Sunucunuza emoji eklemeye yarar.')
.addField("`.sunucu-kur`",'Bot hazır sunucu kurar.')
.addField("`.emoji-kur`",'Sunucunuza hazır emojiler ekler.')
.addField("`.emoji-bilgi`",'İsmini girdiğiniz emojinin bilgilerini gösterir.')
.addField("`.kilit`",'Kanalı kilitler.')
.addField("`.kilit-aç`",'Kanalın kilidini açar.')
.addField("`.say`",'Sunucu istatistiklerine bakarsınız.')
.addField("`.template`",'Hazır sunucu templateleri.')
.addField("`.duyuru`",'Sunucunuzda duyuru yapmanıza yarar.')
.addField("`.çekiliş`",'Sunucunuzda çekiliş yaparsınız.')
.setThumbnail("https://cdn.discordapp.com/attachments/808981105709023272/809378234105069598/odn.jpeg")
.setImage("https://cdn.discordapp.com/attachments/808981105709023272/809038268992716800/odin_2.gif")
menü.edit(moderasyonamk)
 }
if(reaction.emoji.name == "🏠") {
menü.edit(yardım)
 }
});

collector.on('end', collected => {
 console.log(`Aha ${collected.size} tane loot toplandı beyim`);
});
// MODERASYON SON

// SİSTEMLER BAŞ
collector.on('collect', (reaction, user) => {


  if(reaction.emoji.name == "💼") {
 const seksiyardım = new Discord.MessageEmbed()
   .setColor("RANDOM")
.setTitle('**Sistemler**')
.addField("Ban Sistemi",'\n `.ban` = Kullanıcı banlama. \n `.banlog-ayarla` = Ban log kanal ayarlama. \n `.banyetkilisi-ayarla` = Ban yetkilisi ayarlama. \n `.ban-say` = Sunucunuzdan banlanan kişi sayısını gösterir. \n `.bansistemi-kapat` = Ban sistemini kapatma.')
.addField("Resimli HG-BB Sistemi",'\n `.hg-bb-ayarla` = Resimli hg-bb kanal ayarlama. \n `.hg-bb-sıfırla` = Resimli hg-bb sıfırlama.')
.addField("Otorol Sistemi",'\n `.otorol` = Otorol ayarlama.')
.addField("Sayaç Sistemi",'\n `.sayaç` = Sayaç ayarlama.')
.addField("Ototag Sistemi",'\n `.ototag` = Ototag ayarlama. \n `.ototag-kapat` = Ototag sistemini kapatma.')
.addField("Mute Sistemi",'\n `.mute` = Mute atma. \n `.mute-rol` = Muteli rol ayarlama. \n `.unmute` = Muteli kişinin mutesini kaldırma.')
.addField("Uyarı Sistemi",'\n `.uyar` = Etiketlenen kişiyi uyarma. \n `.uyarılar` = Etiketlenen üyenin uyarılarına bakma. \n `.uyarı-sil` = Etiketlenen üyenin uyarısını siler. \n `.uyarı-log` = Uyarı log ayarlama.')
.addField("Mod-log Sistemi",'\n `.mod-log` = Mod-log ayarlama. \n `.mod-log sıfırla` = Mod-log sıfırlama.')
.setThumbnail("https://cdn.discordapp.com/attachments/808981105709023272/809378234105069598/odn.jpeg")
.setImage("https://cdn.discordapp.com/attachments/808981105709023272/809038268992716800/odin_2.gif")
menü.edit(seksiyardım)
}
if(reaction.emoji.name == "🏠") {
menü.edit(yardım)
}
});

collector.on('end', collected => {
console.log(`Aha ${collected.size} tane loot toplandı beyim`);
});
// SİSTEMLER SON

// KAYIT BAŞ
collector.on('collect', (reaction, user) => {


    if(reaction.emoji.name == "🧾") {
   const ananzaa = new Discord.MessageEmbed()
     .setColor("RANDOM")
.addField("**Kayıt Sistemi**", `\n Beklemede kalın...`)
.setThumbnail("https://cdn.discordapp.com/attachments/808981105709023272/809378234105069598/odn.jpeg")
.setImage("https://cdn.discordapp.com/attachments/808981105709023272/809038268992716800/odin_2.gif")
menü.edit(ananzaa)
 }
if(reaction.emoji.name == "🏠") {
menü.edit(yardım)
 }
});

collector.on('end', collected => {
 console.log(`Aha ${collected.size} tane loot toplandı beyim`);
});
// KAYIT SON

// BOTLİST BAŞ
collector.on('collect', (reaction, user) => {


  if(reaction.emoji.name == "🤖") {
 const moderasyon = new Discord.MessageEmbed()
   .setColor("RANDOM")
.addField("**Botlist Sistemi**", `\n Beklemede kalın...`)
.setThumbnail("https://cdn.discordapp.com/attachments/808981105709023272/809378234105069598/odn.jpeg")
.setImage("https://cdn.discordapp.com/attachments/808981105709023272/809038268992716800/odin_2.gif")
menü.edit(moderasyon)
}
if(reaction.emoji.name == "🏠") {
menü.edit(yardım)
}
});

collector.on('end', collected => {
console.log(`Aha ${collected.size} tane loot toplandı beyim`);
});
// BOTLİST SON

// KORUMA BAŞ
collector.on('collect', (reaction, user) => {

  
  if(reaction.emoji.name == "👮") {
 const guardbebeim = new Discord.MessageEmbed()
   .setColor("RANDOM")
.setTitle('Koruma Komutları')
.addField("`.rol-koruma`",'Sunucunuzdaki rollerin silinmesini veya yeni rol açılmasını önler.')
.addField("`.kanal-koruma`",'Sunucunuzdaki kanalların silinmesini veya yeni kanal açılmasını önler.')
.addField("`.emoji-koruma`",'Sunucunuzda silinen emojileri geri yükler.')
.addField("`.reklam-engel`",'Sunucunuzda reklam yapılmasını engeller.')
.addField("`.capsengel`",'Sunucunuzda büyük harf yazımını engeller.')
.addField("`.küfür-aç`",'Küfür engel aktif edersiniz.')
.addField("`.küfür-kapat`",'Küfür engel kapatırsınız.')
.addField("`.anti-raid`",'Anti-raid sistemini açarsınız.')
.addField("`.ever-here-engel`",'Ever-here engel açarsınız.')
.setThumbnail("https://cdn.discordapp.com/attachments/808981105709023272/809378234105069598/odn.jpeg")
.setImage("https://cdn.discordapp.com/attachments/808981105709023272/809038268992716800/odin_2.gif")
menü.edit(guardbebeim)
}
if(reaction.emoji.name == "🏠") {
menü.edit(yardım)
}
});

collector.on('end', collected => {
console.log(`Aha ${collected.size} tane loot toplandı beyim`);
});
// KORUMA SON



};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['help5'],
 permLevel: 0,
};

exports.help = {
 name: 'yardım5',
 description: '',
 usage: ''
};