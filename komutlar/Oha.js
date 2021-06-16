const Discord = require(`discord.js`)
exports.run = async (client, message) => {
if(message.author.bot)return
let sahipID = "748946208181059648"
let prefixz = "!"
message.channel.send({embed: {color: "RED", description: "Lütfen bekleyin. Menü kuruluyor"}}).then(async msg => {
let rütbe;
if(message.author.id === sahipID) rütbe = "Sahip"
if(message.author.id !== sahipID) rütbe = "Kullanıcı"
let prefix = prefixz
setTimeout(() => {
var embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("")
.setTimestamp()
.addField("**`Legend Project Tasarım`**;", "💎 Tasarım Hizmetlerimiz Hakkında Bilgi İçin 🌌 Tepkisine Tıklayabilirsin\n💎 Tasarım Ekibi Kadromuzu Görmek İçin 🔥 Tepkisine Tıklayabilirsin\n💎 Tasarım Çalışmalarımızı Görmek İçin 🧩 Tepkisine Tıklayabilirsin.\n💎 Diğer Tasarım Çalışmalarımızı Görmek İçin 🎵 Tepkisine Tıklayabilirsin\n💎 Bizden Ürün Alan Müşterilerimizin Yorumları Görmek İçin 💡 Tepkisine Tıklayabilirsin")
.addField("**💦 Menüye geri dönmek için 🚧 tepkisine tıklayabilirsin.**\n**🚪 Menüyü kapatmak için ❌ tepkisine tıklayabilirsin.**\n\n**👥 Menüyü sadece komutu yazan kişi kullanabilir.**",`**\`📑 Linkler;\`**\nDiscord Sunucumuz [tıkla!](https://discord.gg/YDPBe7HAsy)\nSitemiz [tıkla!](https://www.legendproject.net/)`)
msg.edit({embed: embed})
}, 6000);
msg. react("🌌").then( r => {
msg. react("🔥")
msg. react("🧩")
msg. react("🎵")
msg. react("💡")
msg. react("🚧")
msg. react("❌")
setTimeout(() => {
const eğlenceyardımFilter = (reaction, user) => reaction.emoji.name === '🌌' && user.id === message.author.id
const moderasyonyardımFilter = (reaction, user) => reaction.emoji.name === '🔥' && user.id === message.author.id
const moderasyon2yardımFilter = (reaction, user) => reaction.emoji.name === '🧩' && user.id === message.author.id
const müzikyardımFilter = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id
const diğeryardımFilter = (reaction, user) => reaction.emoji.name === '💡' && user.id === message.author.id
const menüyedönFilter = (reaction, user) => reaction.emoji.name === '🚧' && user.id === message.author.id
const menüyükapatFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id
const eğlenceyardım = msg.createReactionCollector(eğlenceyardımFilter)
const moderasyonyardım = msg.createReactionCollector(moderasyonyardımFilter)
const moderasyon2yardım = msg.createReactionCollector(moderasyon2yardımFilter)
const müzikyardım = msg.createReactionCollector(müzikyardımFilter)
const diğeryardım = msg.createReactionCollector(diğeryardımFilter)
const menüyedön = msg.createReactionCollector(menüyedönFilter)
const menüyükapat = msg.createReactionCollector(menüyükapatFilter)
eğlenceyardım.on('collect', r => {
r.users.remove(r.users.cache.filter(u => u === message.author).first())
var embed = new Discord.MessageEmbed()
.setColor("RED")
.addField("💎 Bireysel Tasarım Hizmetlerimiz",`**💎 Hayalinizde bir tasarım mı var?**\n💎 Logo \`Logo Yapma\`\n💎 Banner \`Size Özel Banner Tasarımı\`\n💎 Konu Tasarım \`Profesyonel Konu Tasarımı\`\n💎 Sosyal Medya Kiti ve daha fazlası..\`Youtube,Twitch Tasarım\``)
.addField("💎 Kurumsal Tasarım Hizmetleri", `Firmanıza özel üretilen tasarımlar ile siz de firmanızı sanal dünyada tanıtmak ister misiniz? Cevabınız evet ise biz size hizmet sunmaya hazırız`)
.addField("💎 Tasarım Yenileme / İyileştirme", `Hali hazırda bir tasarımınız var ama beğenmiyormusunuz biz sizin için isteğinize özel sunarız`)
.setImage('https://cdn.discordapp.com/attachments/801003591032635412/801072105168830485/yu.png')
msg.edit(embed)
})
moderasyonyardım.on('collect', r => {
r.users.remove(r.users.cache.filter(u => u === message.author).first())
var embed = new Discord.MessageEmbed()
.setColor("RED")
.addField("<@751173382908674191> Enes|20")
.addField("<@298121977707888644> Burak|19")
.addField("<@742071363673653360> Turan|16")
.addField("<@288754757542346753> Boran|14")
.addField("<@694464764507848776> Ayberk|15")
.addField("<@573878127093350420> Tunahan|15")
.setImage('https://cdn.discordapp.com/attachments/801003591032635412/801072105168830485/yu.png')
msg.edit(embed)
})
moderasyon2yardım.on('collect', r => {
r.users.remove(r.users.cache.filter(u => u === message.author).first())
var embed = new Discord.MessageEmbed()
.setColor("RED")
.setImage('https://cdn.discordapp.com/attachments/809789024209338368/826033595964981248/mos.jpg')
.setImage('https://cdn.discordapp.com/attachments/809789024209338368/826033595964981248/mos.jpg')
.setImage('https://cdn.discordapp.com/attachments/809789024209338368/826033621856550944/neon.png')
.setImage('https://cdn.discordapp.com/attachments/809789024209338368/826033654488367114/merhabayt.png')
msg.edit(embed)
})
müzikyardım.on('collect', r => {
r.users.remove(r.users.cache.filter(u => u === message.author).first())
var embed = new Discord.MessageEmbed()
.setColor("RED")
.setImage('https://cdn.discordapp.com/attachments/809789024209338368/826033577648455690/bilgi.png')
.setImage('https://cdn.discordapp.com/attachments/809789024209338368/826033577497591848/ulkeninamk_-_Kopya.png')
.setImage('https://cdn.discordapp.com/attachments/809789024209338368/826033560750260254/3.png')
msg.edit(embed)
})
diğeryardım.on('collect', r => {
r.users.remove(r.users.cache.filter(u => u === message.author).first())
var embed = new Discord.MessageEmbed()
.setColor("RED")
.setImage('https://cdn.discordapp.com/attachments/815987220691026041/826035840819265546/unknown.png')
.setImage('https://cdn.discordapp.com/attachments/815987220691026041/826035884541083668/unknown.png')
.setImage('https://cdn.discordapp.com/attachments/815987220691026041/826035926907617331/unknown.png')
msg.edit(embed)
})
menüyedön.on('collect', r => {
r.users.remove(r.users.cache.filter(u => u === message.author).first())
var embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("")
.setTimestamp()
.addField("**`Legend Project Tasarım`**;", "💎 Tasarım Hizmetlerimiz Hakkında Bilgi İçin 🌌 Tepkisine Tıklayabilirsin\n💎 Tasarım Ekibi Kadromuzu Görmek İçin 🔥 Tepkisine Tıklayabilirsin\n💎 Tasarım Çalışmalarımızı Görmek İçin 🧩 Tepkisine Tıklayabilirsin.\n💎 Diğer Tasarım Çalışmalarımızı Görmek İçin 🎵 Tepkisine Tıklayabilirsin\n💎 Bizden Ürün Alan Müşterilerimizin Yorumları Görmek İçin 💡 Tepkisine Tıklayabilirsin")
.addField("**💦 Menüye geri dönmek için 🚧 tepkisine tıklayabilirsin.**\n**🚪 Menüyü kapatmak için ❌ tepkisine tıklayabilirsin.**\n\n**👥 Menüyü sadece komutu yazan kişi kullanabilir.**",`**\`📑 Linkler;\`**\nDiscord Sunucumuz [tıkla!](https://discord.gg/YDPBe7HAsy)\nSitemiz [tıkla!](https://www.legendproject.net/)`)
msg.edit({embed: embed})
})
menüyükapat.on('collect', r => {
r.users.remove(r.users.cache.filter(u => u === message.author).first())
msg.delete()
})
}, 6000);
})
})
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0,
};
exports.help = {
name: 'oha',
description: 'Legend Project',
usage: 'Herkese Açık Olmayan Koddur'
};
//LegendCode