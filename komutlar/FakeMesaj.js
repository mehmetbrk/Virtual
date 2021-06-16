const Discord = require('discord.js');

exports.run = async (client, message, args) => {//hamzamertakbaba#3361
 await message.delete();
  let ÇekilecekKullanıcı = args[0]
  if (!ÇekilecekKullanıcı) return message.channel.send(`${message.author} Bir kullanıcı ID'si girmelisin.`);
  
  if (ÇekilecekKullanıcı.bot === true) return message.channel.send(`${message.author} Botların mesajlarını kopyalamam. Kopyalarım da cnm istemiyor :)`);
  
  let YazılacakMesaj = args.slice(1).join(' ');
  if (!YazılacakMesaj) return message.channel.send(`${message.author} ID'sini girdiğin kullanıcı ne yazsın?`);
  if (YazılacakMesaj.includes("@everyone")) return message.channel.send(`${message.author} Bana Cidden Everyone Attırabileceğini Düşündünmü Düşünme Bence :wink:`);
  if (YazılacakMesaj.includes("@here")) return message.channel.send(`${message.author} Bana Cidden Here Attırabileceğini Düşündünmü Düşünme Bence :wink:`);
  
  let Kullanıcı = await client.users.fetch(ÇekilecekKullanıcı)
  try { 
  message.channel.createWebhook(Kullanıcı.username, {
      avatar: Kullanıcı.avatarURL()})
    .then(async (wb) => {
        const w = new Discord.WebhookClient(wb.id, wb.token)
        await w.send(YazılacakMesaj); 
        setTimeout(() => {
            w.delete()
        }, 2000);
    })  
  } catch (err) {
    message.channel.send(err);
};
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fake-mesaj'],
  permLevel: 0,
  cooldown: 0
 
};

exports.help = {
  name: 'sahtemesaj',
};