const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NzkyODY4NDI1MzQ3ODk3NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE2NjUyMzIzfQ.-NZmncbtg5-CmzZcUPHS8YYC_V8bF1q-UPapSOLSrgA', client); //Dbl Tokeninizi Yazınız.

exports.run = (client, message) => {
  
dbl.hasVoted(message.author.id).then(voted => { 
  
if (!voted) {
  
const embed = new Discord.MessageEmbed()
                     
.setTitle("UYARI")
.setColor("RED")

.setThumbnail(client.user.avatarURL())

.setDescription("Bu Komutu Kullanabilmek için Botumuza Oy Vermelisiniz!")

.addField("Oy Vermek için :", `[Bana Tıkla!](https://top.gg/bot/757928684253478974/vote)`) //Dbl Oy Linkini Yazınız.

.setFooter(client.user.username)

return message.channel.send(embed)
} 
  
else {
  
message.channel.send("Rolün Başarıyla Verildi!");
  
message.member.roles.add("822746839349854220") //Verilecek Rolün İdini Yazınız.

}
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["oy-ver"],
  permLevel: 0,
   
};

exports.help = {
  name: 'oyver',
 
};