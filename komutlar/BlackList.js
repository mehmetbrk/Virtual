const Discord = require('discord.js')
const db = require('quick.db');
//Efe ve codare
exports.run = async(client, message, args) => {  
let id = "748946208181059648" //buranın içerisine kendi id ni yaz
let user = message.mentions.users.first() || client.users.cache.get(args.slice(1).join(' '))
if (message.author.id !== id) return message.channel.send("<a:Uyar:794135977202548737> | **Bu komutu yalnizca bot sahibi kullanabilir!**")
if(!args[0]) return message.channel.send("<a:Uyar:794135977202548737> | Lutfen **ac** veya **kapat** yaziniz.\nKullanicinin karaliste bilgisini gormek icin **bilgi** kullanin :`!blacklist bilgi `")
switch(args[0]) {//codare & Efe
  case "ac":
    if (!user) return message.channel.send("<a:Uyar:794135977202548737> | **Bir kisiyi etiketlemelisin veya id sini yazmalisin.**")
    if(user.id == id) return message.channel.send("<a:Uyar:794135977202548737> | **Bu kullanici karalisteye alinamaz**")
    //codare and efe
    db.set(`cokaradalistere_${user.id}`, true)
    message.channel.send(`\`${user.tag}\` **artık botu kullanamayacak.**`)
    break;//codare ve efe
  case "kapat":
    if (!user) return message.channel.send("<a:Uyar:794135977202548737> | **Bir kisiyi etiketlemelisin veya id sini yazmalısin.**")
    if(user.id == id) return message.channel.send("<a:Uyar:794135977202548737> | **Bu kullanıcı karalisteye alinamaz.**")
    db.delete(`cokaradalistere_${user.id}`)
    message.channel.send(`\`${user.tag}\` **artık botu kullanabilir.**`)
    break;
  case "bilgi":
    if (!user) return message.channel.send("<a:Uyar:794135977202548737> | **Bir kişiyi etiketlemelisin veya id sini yazmalisin.**")
let i = db.fetch(`cokaradalistere_${user.id}`)
      if(i == true) message.channel.send(`\`${user.tag}\` botu su anda **kullanamiyor.**`)
      else message.channel.send(`\`${user.tag}\` botu su anda **kullanabiliyor.**`)
    //codare <3 Efe
    break;
}
}//efe <3 codare
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste"],
  permLevel: 0,
  kategori: "geliştirici"
};
//codare
exports.help = { 
	name: 'blacklist', 
	description: 'Belirlenen kişinin botu kullanmasını engeller.', 
  usage: 'blacklist  '
};