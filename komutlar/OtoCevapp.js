const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
let prefix = ayarlar.prefix
  let yazılar = db.fetch(`${message.guild.id}.otocevap.yazılar`)
  let cevaplar = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
  let sallamadimmm = args.slice(1).join(' ')
  let sallamadimm = args.slice(2).join(' ')
  let sallamadimbm = sallamadimm.split(" | ")
  let bilmsallamadim = sallamadimmm.split(" | ")
  let ifsallamadim = message.content.includes(" | ")
  var ekle = ["ekle","+","add"]
  var sil = ["sil","-","remove", "delete", "rm"]
  var list = ["liste","list"]
  var edit = ["edit","düzenle"]
if (list.includes(args[0])) {
  var sallamadim = ""
  let xsallamadim = db.fetch(`${message.guild.id}.otocevap.yazılar`).filter(a=> a !== null).length
  for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
    sallamadim += `${i +1}) *${yazılar[i]}* - **${cevaplar[i]}** \n`
  }
      if (!db.fetch(`${message.guild.id}.otocevap.yazılar`)) {
      sallamadim += "Eklenmiş hiç bir otomatik olarak cevap verilecek mesaj yok."
    }
     if (db.fetch(`${message.guild.id}.otocevap.yazılar`).length == 0) {
      sallamadim += "Eklenmiş hiç bir otomatik olarak cevap verilecek mesaj yok."
    }
const basarili = new Discord.MessageEmbed()
.setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
.setDescription(sallamadim)
.setColor("GREEN")
message.channel.send(basarili)
} else if (ekle.includes(args[0])) {
    if (!sallamadimm) return message.channel.send("Olamaz! yanlış bir biçimde kullandın. Örnek kullanım: " + prefix +"otocevap ekle <beklenecekmesaj> | <cevap>")
    if (!ifsallamadim) return message.channel.send("Yazdığın cümle-kelimelerin arasına boşluk bırakarak | koyman gerekiyor. Ayrıca | den **önce** ve **sonra** kelime-cümle yazmalısın.")
    if (!bilmsallamadim[0]) return message.channel.send("Yazdığın cümle-kelimelerin arasına boşluk bırakarak | koyman gerekiyor. Ayrıca | den **önce** ve **sonra** kelime-cümle yazmalısın.")
  if (!bilmsallamadim[1]) return message.channel.send("Yazdığın cümle-kelimelerin arasına boşluk bırakarak | koyman gerekiyor. Ayrıca | den **önce** ve **sonra** kelime-cümle yazmalısın.")
  if (yazılar ? yazılar.includes(bilmsallamadim[0]) : 0) return message.channel.send("Bu otocevap zaten ekli.")
 db.push(`${message.guild.id}.otocevap.yazılar`, bilmsallamadim[0]) 
 db.push(`${message.guild.id}.otocevap.cevaplar`, bilmsallamadim[1]) 
const basarili = new Discord.MessageEmbed()
.setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
.setDescription("Başarılı bir şekilde beklenen mesaj olarak `" + bilmsallamadim[0] + "` eklendi, cevap olarak ise `" + bilmsallamadim[1] + "` eklendi.")
.setColor("GREEN")

message.channel.send(basarili)
} else if (sil.includes(args[0])) {
  if (!yazılar) return message.channel.send("Eklenmiş hiç bir otocevap yok!")
  if (!args[1]) return message.channel.send("Silinmesi için bir otocevap ismi yazmalısın!")
  if (!yazılar.includes(sallamadimm)) return message.channel.send("Uyarı! Yazılan otocevap ismi otocevaplar arasında bulunamadı.")
    for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
    if (sallamadimm == yazılar[i]) {
        const basarili = new Discord.MessageEmbed()
       .setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
       .setDescription("Başarılı bir şekilde beklenen mesaj olarak `" + yazılar[i] + "` **silindi**, cevap olarak ise `" + cevaplar[i] + "` **silindi**.")
       .setColor("GREEN")
       
      const asd = db.fetch(`${message.guild.id}.otocevap.yazılar`)
      asd.splice(i,1)
      db.set(`${message.guild.id}.otocevap.yazılar`, asd);
      const asdd = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
      asdd.splice(i,1)
      db.set(`${message.guild.id}.otocevap.cevaplar`, asdd);
      message.channel.send(basarili)
  }}
} else if (edit.includes(args[0])) {
  if (!yazılar) return message.channel.send("Eklenmiş hiç bir otocevap yok!")
  if (!args[1]) return message.channel.send("Düzenlemek için bir otocevap ismi yazmalısın!")
  if (!yazılar.includes(args[1])) return message.channel.send("Uyarı! Yazılan otocevap ismi otocevaplar arasında bulunamadı.")
      if (!sallamadimmm) return message.channel.send("Olamaz! yanlış bir biçimde kullandın. Örnek kullanım: " + prefix +"otocevap düzenle <otocevapmesajı> <beklenecekmesaj> | <cevap>")
    if (!ifsallamadim) return message.channel.send("Yazdığın cümle-kelimelerin arasına boşluk bırakarak | koyman gerekiyor. Ayrıca | den **önce** ve **sonra** kelime-cümle yazmalısın.")
    if (!bilmsallamadime[0]) return message.channel.send("Yazdığın cümle-kelimelerin arasına boşluk bırakarak | koyman gerekiyor. Ayrıca | den **önce** ve **sonra** kelime-cümle yazmalısın.")
  if (!bilmsallamadime[1]) return message.channel.send("Yazdığın cümle-kelimelerin arasına boşluk bırakarak | koyman gerekiyor. Ayrıca | den **önce** ve **sonra** kelime-cümle yazmalısın.")
  for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
    if (args[1] == yazılar[i]) {
        const basarili = new Discord.MessageEmbed()
       .setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
       .setDescription("Başarılı bir şekilde eskiden beklenen mesaj olarak `" + yazılar[i] + "` **" + bilmsallamadime[0] + "** olarak değiştirildi, cevap olarak ise `" + cevaplar[i] + "` **" + bilmsallamadime[1] + "** olarak değiştirildi.")
       .setColor("GREEN")
       
      const asd = db.fetch(`${message.guild.id}.otocevap.yazılar`)
      asd.splice(i,1)
      db.set(`${message.guild.id}.otocevap.yazılar`, asd);
      db.push(`${message.guild.id}.otocevap.yazılar`, bilmsallamadime[0])
      const asdd = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
      asdd.splice(i,1)
      db.set(`${message.guild.id}.otocevap.cevaplar`, asdd);
      db.push(`${message.guild.id}.otocevap.cevaplar`, bilmsallamadime[1])
      message.channel.send(basarili)
  }}
} else {
  const embed = new Discord.MessageEmbed()
.setAuthor(`${message.author.username},`, message.author.avatarURL({ dynamic: true }))
.setDescription(`
Bu komutu kullanırken bilmen gerekenler:

Eğer ${prefix}${message.content.split(" ")[0].slice(prefix.length)}'dan sonra

**${ekle.join(", ")}** yazarsan yeni bir otocevap ekler.
**${sil.join(", ")}** yazarsan bir otocevabı siler.
**${list.join(", ")}** yazarsan sunucudaki otocevapları listeler.
**${edit.join(", ")}** yazarsan bir otocevabı editlersin.

Ek Bilgiler:
Bir otocevap eklerken veya editlerken **cevap** verilecek kısımda

**{sunucuadı}** yazarsanız {sunucuadı} yazılan kısımda sunucunun adı gözükecektir.
**{üyesayı}** yazarsanız {üyesayı} yazılan kısımda sunucudaki üye sayısı gözükecektir.
**{roller}** yazarsanız {roller} yazılan kısımda sunucudaki rolleri gözükücektir.
**{sunucuid}** yazarsanız {sunucuid} yazılan kısımda sunucunun idsi gözükecektir.
**{sunucubölge}** yazarsanız {sunucubölge} yazılan kısımda sunucunun bölgesi gözükecektir.
**{sunucutarih}** yazarsanız {sunucutarih} yazılan kısımda sunucu ne zaman kurulduğu yazıcaktır.

`)
.setColor("GREEN")
.setFooter("Not: oto cevap düzenlemede sadece tek kelimeli oto cevapları düzenlersiniz.")

  message.channel.send(embed)
}

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["otocevap"],
  permLevel: 0
}

exports.help = {
  name:' oto-cevap'
};