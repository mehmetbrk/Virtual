const Discord = require("discord.js");
const client = new Discord.Client();
const jimp = require("jimp");
const db = require("quick.db");
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);
const { GiveawaysManager } = require("discord-giveaways");


client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);





//////çekiliş/////////
if (!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
  async getAllGiveaways() {
    return db.get("giveaways");
  }

  async saveGiveaway(messageID, giveawayData) {
    db.push("giveaways", giveawayData);
    return true;
  }

  async editGiveaway(messageID, giveawayData) {
    const giveaways = db.get("giveaways");
    const newGiveawaysArray = giveaways.filter(
      giveaway => giveaway.messageID !== messageID
    );
    newGiveawaysArray.push(giveawayData);
    db.set("giveaways", newGiveawaysArray);
    return true;
  }

  async deleteGiveaway(messageID) {
    const newGiveawaysArray = db
      .get("giveaways")
      .filter(giveaway => giveaway.messageID !== messageID);
    db.set("giveaways", newGiveawaysArray);
    return true;
  }
};
const manager = new GiveawayManagerWithOwnDatabase(client, {
  storage: false,
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#0a99ff",
    reaction: "🎉"
  }
});
client.giveawaysManager = manager;

client.login(process.env.token);

///ÇEKİLİŞ/// 






//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//

client.on("guildMemberAdd", async member => {
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);

  let kanal = member.guild.channels.cache.get(kanal1);
  let rol = member.guild.roles.cache.get(rol1);

  if (!kanal) return;
  if (!rol) return;

  const embed = new Discord.MessageEmbed()

    .setColor("BLACK")
    .setDescription(
      `Sunucuya Katılan **${member}** Adlı Kullanıcıya Başarıyla \`${rol.name}\` Rolü Verildi.`
    );

  kanal.send(embed);
  member.roles.add(rol);
});

//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//




//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//

client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`kufur_${message.guild.id}`);
  let kullanici = message.member;
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
    const reklam = [
      "discord.app",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
        if (uyarisayisi === null) {
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Virtual Reklam Engel")
            .setDescription(
              ` <a:Uyar:794135977202548737>  | <@${message.author.id}> **Reklam Yapmayı Sonlandır Bu İlk Uyarındır** (1/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Virtual Reklam Engel")
            .setDescription(
              `<a:Uyar:794135977202548737>  | <@${message.author.id}> **Reklam Yapmayı Sonlandır Bir Daha Yaparsan Sunucudan Atılacaksın**(2/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 2) {
          message.delete();
          await kullanici.kick({
            reason: `Reklam-Engel Sistemi!`
          });
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Virtual Reklam Engel")
            .setDescription(
              `<:Onay:798597771166875669>  | <@${message.author.id}> Reklam Yaptığı İçin Sunucudan Atıldı (3/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 3) {
          message.delete();
          await kullanici.ban({
            reason: `Kinsta Reklam-Engel Sistemi!`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.RichEmbed()
            .setColor("BLACK")
            .setTitle("Virtual Reklam Engel")
            .setDescription(
              `<:Onay:798597771166875669>  | <@${message.author.id}> Atıldıktan Sonra Tekrar Reklam Yaptığı İçin Sunucudan Banlandı`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
      }
    }
  }
});

//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//







//-----------------------KOMUTLAR-----------------------\\
//token .env
//ready.js mainde :)

//sa as
client.on("message", async message => {
  let a = await db.fetch(`saas_${message.guild.id}`)
  if (a) {
      if (message.content.toLowerCase() === "sa") {
        message.channel.send(
new Discord.MessageEmbed()
          .setDescription(`**Aleyküm Selam Hoşgeldin**`)
)
      }
  }
  
  
})



client.on("guildMemberAdd", async member => {
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);

  let kanal = member.guild.channels.cache.get(kanal1);
  let rol = member.guild.roles.cache.get(rol1);

  if (!kanal) return;
  if (!rol) return;

  const embed = new Discord.MessageEmbed()

    .setColor("BLACK")
    .setDescription(
      `Sunucuya Katılan **${member}** Adlı Kullanıcıya Başarıyla \`${rol.name}\` Rolü Verildi.`
    );

  kanal.send(embed);
  member.roles.add(rol);
});




client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setDescription(
      "> :moneyGF: **Sunucuya yeni katılan** **" +
        member.user.username +
        "** **Kullanıcısına** <@&" +
        rol +
"> **Rolü verildi** :TikkGF:"
    )
    .setColor("RANDOM"); //.setFooter(`<@member.id>`)
  member.guild.channels.cache.get(kanal).send(embed);
});
















  client.on("guildMemberAdd", async member => {
    let sayac = await db.fetch(`sayac_${member.guild.id}`);
    let skanal = await db.fetch(`sayacK_${member.guild.id}`);
    if (!sayac) return;
    if (member.guild.memberCount >= sayac) {
      member.guild.channels.cache
        .get(skanal)
        .send(
          `:GiriGif: **${
            member.user.tag
          }** sunucuya **katıldı**! \`${db.fetch(
            `sayac_${member.guild.id}`
          )}\` kişi olduk! :RainbowiekGif: Sayaç sıfırlandı.`
  );
     db.delete(`sayac_${member.guild.id}`);
      db.delete(`sayacK_${member.guild.id}`);
      return;
    } else {
      member.guild.channels.cache
        .get(skanal)
        .send(
          `:GiriGif: **${
            member.user.tag
          }** sunucuya **katıldı**! \`${db.fetch(
            `sayac_${member.guild.id}`
          )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
            member.guild.memberCount}\` üye kaldı! Sunucumuz şuanda \`${
            member.guild.memberCount
          }\` kişi!`
  );
  }
  });
  
  
  client.on("guildMemberAdd", async member => {
    let sayac = await db.fetch(`sayac_${member.guild.id}`);
    let skanal = await db.fetch(`sayacK_${member.guild.id}`);
    if (!sayac) return;
    if (member.guild.memberCount >= sayac) {
      member.guild.channels.cache
        .get(skanal)
        .send(
          `:GiriGif: **${
            member.user.tag
          }** sunucuya **katıldı**! \`${db.fetch(
            `sayac_${member.guild.id}`
          )}\` kişi olduk! :RainbowiekGif: Sayaç sıfırlandı.`
  );
     db.delete(`sayac_${member.guild.id}`);
      db.delete(`sayacK_${member.guild.id}`);
      return;
    } else {
      member.guild.channels.cache
        .get(skanal)
        .send(
          `:GiriGif: **${
            member.user.tag
          }** sunucuya **katıldı**! \`${db.fetch(
            `sayac_${member.guild.id}`
          )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
            member.guild.memberCount}\` üye kaldı! Sunucumuz şuanda \`${
            member.guild.memberCount
          }\` kişi!`
  );
  }
  });
  
  
  client.on("guildMemberRemove", async member => {
    let sayac = await db.fetch(`sayac_${member.guild.id}`);
    let skanal = await db.fetch(`sayacK_${member.guild.id}`);
    if (!sayac) return;
    member.guild.channels.cache
      .get(skanal)
      .send(
        `:kGif: **${
          member.user.tag
        }** sunucudan **ayrıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
          member.guild.memberCount}\` üye kaldı! Sunucumuz şuanda \`${
          member.guild.memberCount
        }\` kişi!`
  );
  });





  

client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`Virtual | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
   const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir kişinin yasağı kaldırıldı")
     .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
     .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
     .setFooter(`Virtual | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });


 client.on('channelCreate', async channel => {
  let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     if (channel.type === "text") {
       let embed = new Discord.MessageEmbed()
       .setColor("#fffa00")
       .setAuthor("Bir Kanal Oluşturuldu")
       .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
       .addField(`Oluşturulan Kanalın Türü : `, `Yazı`)
       .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
       .setFooter(`Virtual | Mod-Log Sistemi`)
       .setTimestamp()
       modlogkanal.send(embed)
     }
       if (channel.type === "voice") {
       
         let embed = new Discord.MessageEmbed()
         .setColor("#fffa00")
         .setAuthor("Bir Kanal Oluşturuldu")
         .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
         .addField(`Oluşturulan Kanalın Türü : `, `Ses`)
         .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
         .setFooter(`Virtual| Mod-Log Sistemi`)
         .setTimestamp()
         modlogkanal.send(embed)
 
 
     }
 }});

 client.on('channelDelete', async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
let user = client.users.cache.get(entry.executor.id)
let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
if(!modlogs) return;
if(modlogs) {
if (channel.type === "text") {
let embed = new Discord.MessageEmbed()
.setColor("#fffa00")
.setAuthor("Bir Kanal Silindi")
.addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
.addField(`Silinen Kanalın Türü : `, `Yazı`)
.addField(`Kanalı Silen : `, `<@${user.id}>`)
.setFooter(`Virtual | Mod-Log Sistemi`)
.setTimestamp()
modlogkanal.send(embed)
}
  if (channel.type === "voice") {

    let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor("Bir Kanal Silindi")
    .addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
    .addField(`Silinen Kanalın Türü : `, `Ses`)
    .addField(`Kanalı Silen : `, `<@${user.id}>`)
    .setFooter(`Virtual | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
   }
  }
});

client.on('roleDelete', async role => {
  let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
   let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
  const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir Rol Silindi")
     .addField(`Silinen Rolün İsmi : `, `${role.name}`)
     .addField(`Rolü Silen : `, `<@${user.id}>`)
     .setFooter(`Virtual | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
 
 client.on('emojiDelete', async emoji => {
  let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  let entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir Emoji Silindi")
     .addField(`Silinen Emojinin İsmi : `, `${emoji.name}`)
     .addField(`Emojiyi Silen : `, `<@${user.id}>`)
     .setFooter(`Virtual | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
  

 client.on('roleCreate', async role => {
  let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
    const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
      let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Rol Oluşturuldu")
      .addField(`Oluşturulan Rolün İsmi : `, `${role.name}`)
      .addField(`Rolü Oluşturan : `, `<@${user.id}>`)
      .setFooter(`Virtual| Mod-Log Sistemi`)
      .setTimestamp()
      modlogkanal.send(embed)
    }
  });
  
  
  client.on('emojiCreate', async emoji => {
   let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
   let entry = await role.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
    const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
      let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Emoji Oluşturuldu")
      .addField(`Oluşturulan Emojinin İsmi : `, `${emoji.name}`)
      .addField(`Emoji Silen : `, `<@${user.id}>`)
      .setFooter(`Virtual | Mod-Log Sistemi`)
      .setTimestamp()
      modlogkanal.send(embed)
    }
  });













client.on("message", msg => {
  if (msg.channel.id !== "805824491242258432") {
    return;
  }
  if (msg.author.id === msg.guild.ownerID) return;
  if (msg.attachments.size < 1) {
    msg.delete();
  }
});




//-------------------- Mod Log Sistemi --------------------//

client.on('channelCreate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`salvomodlog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal oluşturuldu`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});

client.on('channelDelete', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`salvomodlog_${channel.guild.id}`));
  if (!c) return;
    let embed = new Discord.MessageEmbed()
                    .addField(`Kanal silindi`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)

    c.send(embed)
});

   client.on('channelNameUpdate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`salvomodlog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal İsmi değiştirildi`, ` Yeni İsmi: \`${channel.name}\`\nID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});

client.on('emojiCreate', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`salvomodlog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji oluşturuldu`, ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\nID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`salvomodlog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji silindi`, ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\nID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiUpdate', (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.cache.get(db.fetch(`salvomodlog_${newEmoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji güncellendi`, ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\nID: ${oldEmoji.id}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`, newEmoji.client.user.avatarURL)

    c.send(embed)
    });

client.on('guildBanAdd', async (guild, user) => {    
    const channel = guild.channels.cache.get(db.fetch(`salvomodlog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcı banlandı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Sebep: **${entry.reason || 'Belirtmedi'}**\n Banlayan: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});

client.on('guildBanRemove', async (guild, user) => {    
    const channel = guild.channels.cache.get(db.fetch(`salvomodlog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcının banı açıldı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});
client.on('messageDelete', async message => {    
  if(message.author.bot) return

    const channel = message.guild.channels.cache.get(db.fetch(`salvomodlog_${message.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
                    .setTitle("Mesaj silindi")                
                    .addField(`Silinen mesaj : ${message.content}`,`Kanal: ${message.channel.name}`)
                  //  .addField(`Kanal:`,`${message.channel.name}`)
                    .setTimestamp()
                    .setColor("Black")
                    .setFooter(`${message.client.user.username}#${message.client.user.discriminator}`, message.client.user.avatarURL)

    channel.send(embed)
});

client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;

    const channel = oldMessage.guild.channels.cache.get(db.fetch(`salvomodlog_${oldMessage.guild.id}`));
    if(!channel) return;

    let embed = new Discord.MessageEmbed()
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ",`${oldMessage.content}`)
    .addField("Yeni mesaj : ",`${newMessage.content}`)
    .addField("Kanal : ",`${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("Black")
    .setFooter(`${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,`${oldMessage.client.user.avatarURL}`)

    channel.send(embed)
});

client.on('roleCreate', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`salvomodlog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("Black")
.addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
});

client.on('roleDelete', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`salvomodlog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("Black")
    .addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
})
client.on('voiceStateUpdate', (oldMember, newMember) => {
  
 // if (!logA[oldMember.guild.id]) return;
  
  if (db.has(`salvomodlog_${oldMember.guild.id}`) === false) return;
  
  var kanal = oldMember.guild.channels.cache.get(db.fetch(`salvomodlog_${oldMember.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.MessageEmbed()
    .setColor("Black")
    .setDescription(`${newMember.user.tag} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal.send(embed);
    
  } else if(newUserChannel === undefined){

    
  }
});


//-------------------- Mod Log Sistemi Son --------------------//





 
  
  
 









client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setDescription(
      "> :moneyGF: **Sunucuya yeni katılan** **" +
        member.user.username +
        "** **Kullanıcısına** <@&" +
        rol +
"> **Rolü verildi <:OnayPng:794135282093654047>** "
    )
    .setColor("RANDOM"); //.setFooter(`<@member.id>`)
  member.guild.channels.cache.get(kanal).send(embed);
});



client.on("message", async message => {

  if( message.content === "sa" || message.content === "Sa" || message.content === "Selamın Aleyküm" || message.content === "selamın aleyküm" || message.content === "sea" || message.content === "Sea") {
  
  let gold = require("quick.db").fetch(`prexgold${message.author.id}`)
  if (gold === "gold") {
  
    const embed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(" Hizaya Geçin Bu Benim **Sahibim** ")
    message.channel.send(embed)
  
    } else {
  
  return;
  
    }
  }
  })
















////////OTO ROL/////////////////
client.on("guildMemberAdd", async (member, guild, message) => {
  let role = await db.fetch(`otorol_${member.guild.id}`);
  let otorol = await db.fetch(`otorol_${member.guild.id}`);
  let i = await db.fetch(`otolog_${member.guild.id}`);
  if (!otorol || otorol.toLowerCase() === "yok") return;
  else {
    try {
      if (!i) return;
      console.log();
      member.addRole(member.guild.roles.get(otorol));
      var embed = new Discord.RichEmbed()
        .setDescription(
          `**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`
        )
        .setColor("0x36393E")
        .setFooter(`'Virtual Otorol Sistemi`);
      member.guild.channels.get(i).send(embed);
    } catch (e) {
      console.log(e);
    }
  }
});













 


 




  -
  client.on('message', message => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.mentions.users.first()) { if (message.mentions.users.first().id === client.user.id){ 
  const sametigötten = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`**Merhaba Ben** ${client.user.username} **Galiba Hakkımda Bişey Bilmiyorsun**`)
  .setDescription(`\`@${client.user.username}\` **Adlı Rolümü Üstte Tutmayı Unutma**
  
  <:ElektirikPng:794135281895866378>**  | Şuanki Pingim** \`${client.ws.ping}ms\`
 <:ElektirikPng:794135281895866378> **  | Yardım Menüme Erişmek İçin** \`!yardım\`
 <:ElektirikPng:794135281895866378>  | **Prefixim**\`!\`
  <:ElektirikPng:794135281895866378> | **Dilim** \`Türkçe\`
  <:ElektirikPng:794135281895866378> | ** Beni Davet Et** \`!davet\`
 <:ElektirikPng:794135281895866378>** |  Sitemiz** \`!site\``)
  .setImage("https://cdn.discordapp.com/attachments/774140269699661824/808767232305397800/Foto_1.png")
  message.channel.send(sametigötten)
  }}});



 //ANTİ RAİD

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`antiraidK_${member.guild.id}`)== "anti-raid-aç"
    if (!kanal) return;  
    var darknesyt = member.guild.owner
    if (member.user.bot === true) {
       if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
      let darknesguardv2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(member.user.avatarURL())
        .setDescription(`**${member.user.tag}** (${member.id}) adlı bota bir yetkili izin verdi eğer kaldırmak istiyorsanız **!bot-izni kaldır <botid>**.`);
      darknesyt.send(darknesguardv2);
       } else {
         let izinverilmemişbot = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(member.user.avatarURL())
        .setDescription("**" + member.user.tag +"**" + " (" + member.id+ ") " + "adlı bot sunucuya eklendi ve banladım eğer izin vermek istiyorsanız **" + "!bot-izni ver <botid>**")
         member.kick();// Eğer sunucudan atmak istiyorsanız ban kısmını kick yapın
         darknesyt.send(izinverilmemişbot)
  }
    }
  });
  
  //ANTİ RAİD SON
  




  //KANAL & ROL KORUMA

client.on("roleDelete", async role => {
  let rolko = await db.fetch(`rolk_${role.guild.id}`);
  if (rolko) { 
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Silinen Roller Tekrar Açıldı.'})
  }
})

//

client.on("roleCreate", async role => {
  let rolk = await db.fetch(`rolk_${role.guild.id}`);
  if (rolk) { 
       const entry = await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.delete()
  }
})

//

client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
      
    );
  });
  }
})

//

client.on("emojiDelete", async (emoji, message, channels) => {
  let emojik = await db.fetch(`emojik_${emoji.guild.id}`)
  if (emojik) {
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == emoji.guild.owner.id) return;
  if (!emoji.guild.members.cache.get(entry.executor.id).hasPermission('ADMINISTRATOR')) {
    
  emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);

  
  }
  }
});

//KANAL & ROL & EMOJİ KORUMA SON






//EVERYONE-HERE ENGEL

client.on("message", async msg => {
  
let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`)
 if (hereengelle == 'acik') {
   
      const here = ["@here", "@everyone"];
  if (here.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.permissions.has("ADMINISTRATOR")) {
      msg.delete()
       return msg.reply('<a:Uyar:794135977202548737>  | **Bu Sunucuda Everyone ve Here Etiketlemek Yasak**').then(nordx => nordx.delete({timeout: 5000}))
        }
    }
 } else if (hereengelle == 'kapali') {
 
}
});
    
//EVERYONE-HERE ENGEL SON




















 






















//Çekiliş\\

client.on("ready", async () => {
  setInterval(async () => {
    client.guilds.cache.map(guild => {
      guild.channels.cache.map(channel => {
        let data = db.get(`cekilis.${guild.id}_${channel.id}`);
        if (data) {
          let time = Date.now() - data.zaman;
          let sure = data.sure;
          let kanal = guild.channels.cache.get(data.kanalid);
          kanal.messages.fetch(data.mesajid).then(async mesaj => {
            mesaj.edit(
              new Discord.MessageEmbed()
                .setColor("#2c2f33")
                .setTitle(data.odul)
                .setTimestamp()
                .setFooter(data.toplam + " Kazanan")
                .setDescription(`  ** Katılmak İçin Tıkla!
Süre: \`${moment
                .duration(sure - time)
                .format(` DD [Days,] HH [Hours,] mm [Minutes,] ss [Seconds]`)}\`
                 Çekilişi yapan: <@${data.hosted}>**`)
            );
          });

          if (time >= sure) {
            let win = client.channels.cache
              .get(data.kanalid)
              .messages.cache.get(data.mesajid)
              .reactions.cache.get("🎉")
              .users.cache.array()
              .map(user => "<@" + user.id + ">");
            let winner = [];
            for (let i = 0; i < data.toplam; i += 1) {
              winner.push(win[Math.floor(Math.random() * win.length)]);
            }

            kanal.messages.fetch(data.mesajid).then(async mesaj => {
              mesaj.edit(
                new Discord.MessageEmbed()
                  .setTitle(data.odul + " 🎉")//Pixelien
                  .setColor("#2c2f33")//Çalma lütfen emeğe saygı
                  .setTimestamp().setDescription(`**Çekilişi yapan: <@${data.hosted}>
Kazanan: ${winner}**`)
              );
            });
            kanal.send(`**${winner}, \`${data.odul}\` Kazandı!, Tebirkler**`);
            db.delete(`cekilis.${guild.id}_${channel.id}`);
          }
        }
      });
    });
  }, 5000);
});

//Çekiliş\\









    client.on("message", async message => {
      if (message.author.bot) return;
      //yazılar ve cevaplar
       let yazılar = db.fetch(`${message.guild.id}.otocevap.yazılar`)
       let cevaplar = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
               //yazılar ve cevaplar


               //değişkenler
      var sallamadim = ""
      let sunucuadı = message.guild.name
      let üyesayı = message.guild.members.cache.size
      let roller =  message.guild.roles.cache.map(role => role.name).join(", ")
      let sunucuid = message.guild.id
      let sunucubolge = message.guild.region
      let olusturulma = message.guild.createdAt
                       //değişkenler








          for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
        
            //mesaj gönderen kısm
            if (message.content.toLowerCase() == yazılar[i].toLowerCase()) {
            //değişkenlr tanım
            sallamadim += `${cevaplar[i]

              .replace("{sunucuadı}", `${sunucuadı}`)
            .replace("{üyesayı}", `${üyesayı}`)}`
            .replace("{roller}", `${roller}`)
            .replace("{sunucuid}", `${sunucuid}`)
            .replace("{sunucubölge}", `${sunucubolge}`)
            .replace("{sunucutarih}", `${olusturulma}`)
                          //değişkenlr tanım

            
            var embed = new Discord.MessageEmbed()
            .setDescription(`${sallamadim}`)
            return message.channel.send({embed: embed})
        }
    }
                  //mesaj gönderen kısm

    })


client.on('message', async message => {
  if(message.guild.id === "793926948921278474"){///Sunucu id
    if(message.channel.id === "793932559419310121"){//// kanal id
      if(message.content.includes("kabul ediyorum")){
        message.delete()
        message.member.addRole(`793929993465626674`)///rolid
       }else {message.delete()}
    }else return;
    
  }else return;
  })




  client.on("warn", e => {
  
});

require("moment-duration-format");
client.on('ready', () => {
  setInterval(function() {
let pink = client.channels.cache.get("822847645064101898")
  const çalışmasüresi = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
     if(pink){
        const sürelistat = new Discord.MessageEmbed()
  .setColor("#66ff00")
  .setFooter('Hera Bot ', client.user.avatarURL())
  .addField("**İstatistik Kodu**", "Güncel İstatistikler")
  .addField("**Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("**Çalışma süresi**", çalışmasüresi)
  .addField("**Kullanıcılar**" , client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("**Sunucular**", client.guilds.cache.size.toLocaleString(), true)
  .addField("**Kanallar**", client.channels.cache.size.toLocaleString(), true)
  .addField("**Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("**Ping**", client.ws.ping+" ms", true)
return pink.send(sürelistat)
     }
    }, 300000)
})



client.on("guildMemberRemove", async member => {
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(
    db.fetch(`gçkanal_${member.guild.id}`)
  );
  if (!canvaskanal) return;

  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = ["Sunucudan Ayrıldı."];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://media.discordapp.net/attachments/783742353474453536/793450222843461632/GULEGULE.png?width=1001&height=563" //buraya bb resmini koyabilirsiniz dc linkiyle resim linkini kopyalayın yeni sekmede acın ona gore bb yazısını koyarsınız.
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#ffffff`;
  ctx.font = `37px "BornStrong"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({
    format: "png",
    dynamic: true,
    size: 1024
  });
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "galaktik-bot-güle-güle.png"
  );

  canvaskanal.send(attachment);
  canvaskanal.send(
    msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
  );
  if (member.user.bot)
    return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
});

client.on("guildMemberAdd", async member => {
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(
    db.fetch(`gçkanal_${member.guild.id}`)
  );

  if (!canvaskanal || canvaskanal === undefined) return;
  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = ["Sunucuya Katıldı."];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let paket = await db.fetch(`pakets_${member.id}`);
  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://media.discordapp.net/attachments/783742353474453536/793450192833740860/HOSGELDIN.png?width=1001&height=563" //buraya hg resmini koyabilirsiniz dc linkiyle resim linkini kopyalayın yeni sekmede acın ona gore hg yazısını koyarsınız.
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#ffffff`;
  ctx.font = `37px "BornStrong"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({
    format: "png",
    dynamic: true,
    size: 1024
  });
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "galaktik-bot-hosgeldin.png"
  );

  canvaskanal.send(attachment);
  canvaskanal.send(
    msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
  );
  if (member.user.bot)
    return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
});






const Topgg = require('@top-gg/sdk')
const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NzkyODY4NDI1MzQ3ODk3NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE2NjUyMzIzfQ.-NZmncbtg5-CmzZcUPHS8YYC_V8bF1q-UPapSOLSrgA') // https://top.gg/bot/BOTID/webhooks
setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size
  })
}, 1800000) // hunterrock#6353





let kanalid = '835575075724984322'
//KANAL ID GIR

client.on('guildDelete', guild => {
    setTimeout( async () => {
        const berke = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor("Bot bir sunucudan çıktı/çıkarıldı.")
        .setThumbnail(guild.iconURL({dynamic:true}))
        .addField('Sunucu Bilgileri', `**\`⤷\`** __Sunucu Adı:__ ${guild.name}\n**\`⤷\`** __Sunucu IDsi:__ ${guild.id}\n**\`⤷\`** __Sunucu Sahibi:__ ${guild.owner.user}\n**\`⤷\`** __Sunucu Oluşturma Tarihi:__ ${moment(guild.createdTimestamp).format("Do MMMM YYYY")}\n**\`⤷\`** __Özel URL:__ ${guild.vanityURLCode ? `discord.gg/${guild.vanityURLCode} ( \`${guild.vanityURLUses}\` )` : "Özel URL Yok"}\n**\`⤷\`** __Sunucu Açıklaması:__ ${guild.description ? guild.description : "Sunucu Açıklaması Yok."}\n**\`⤷\`** __Sunucu Bölgesi:__ ${(guild.region).replace('russia', 'Rusya').replace('brazil', 'Brezilya').replace('europe', 'Avrupa').replace('india', 'Hindistan').replace('japan', 'Japonya').replace('singapore','Singapur').replace('south africa', 'Güney Afrika').replace('sydney', 'Sidney').replace('us central', 'Amerika Birleşik Devletleri').replace('us east', 'Amerika Birleşik Devletleri (  Doğu )').replace('us south', 'Amerika Birleşik Devletleri ( Güney )').replace('us west', 'Amerika Birleşik Devletleri ( Batı )')}\n**\`⤷\`** __Sistem Kanalı:__ ${guild.systemChannelID ? `<#${guild.systemChannelID}>` : "Sistem Kanalı Bulunmuyor."}\n**\`⤷\`** __AFK Sistemi:__ ${guild.afkChannelID ? `<#${guild.afkChannelID}> ( \`${guild.afkTimeout}\` )` : "Afk Sistemi Devredışı."}\n**\`⤷\`** __Kurallar Kanalı:__ ${guild.rulesChannelID ? `<#${guild.rulesChannelID}>` : "Senkronize Kurallar Kanalı Yok."}`)
        return client.channels.cache.get(kanalid).send(berke)
    }, 1000)
});//champ






//KANAL ID GIR

client.on('guildCreate', guild => {
    setTimeout( async () => {
        let entry = await guild.fetchAuditLogs({type: 'BOT_ADD'}).then(audit => audit.entries.first());
        setTimeout( () => {
            const berke = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor("Bot bir sunucuya eklendi.")
            .setImage(guild.banner ? guild.banner : "https://i1.wp.com/blog.travian.com/wp-content/uploads/2020/05/discord.png?fit=980%2C504&ssl=1 ")
            .setThumbnail(guild.iconURL({dynamic:true}))
            .addField('Sunucu Bilgileri', `**\`⤷\`** __Sunucu Adı:__ ${guild.name}\n**\`⤷\`** __Sunucu IDsi:__ ${guild.id}\n**\`⤷\`** __Sunucu Sahibi:__ ${guild.owner.user}\n> Botu Ekleyen: ${entry ? entry.executor : "Ekleyeni Bulamadım."}\n**\`⤷\`** __Sunucu Oluşturma Tarihi:__ ${moment(guild.createdTimestamp).format("Do MMMM YYYY")}\n**\`⤷\`** __Özel URL:__ ${guild.vanityURLCode ? `discord.gg/${guild.vanityURLCode} ( \`${guild.vanityURLUses}\` )` : "Özel URL Yok"}\n**\`⤷\`** __Sunucu Açıklaması:__ ${guild.description ? guild.description : "Sunucu Açıklaması Yok."}\n**\`⤷\`** __Sunucu Bölgesi:__ ${(guild.region).replace('russia', 'Rusya').replace('brazil', 'Brezilya').replace('europe', 'Avrupa').replace('india', 'Hindistan').replace('japan', 'Japonya').replace('singapore','Singapur').replace('south africa', 'Güney Afrika').replace('sydney', 'Sidney').replace('us central', 'Amerika Birleşik Devletleri').replace('us east', 'Amerika Birleşik Devletleri (  Doğu )').replace('us south', 'Amerika Birleşik Devletleri ( Güney )').replace('us west', 'Amerika Birleşik Devletleri ( Batı )')}\n**\`⤷\`** __Sistem Kanalı:__ ${guild.systemChannelID ? `<#${guild.systemChannelID}>` : "Sistem Kanalı Bulunmuyor."}\n**\`⤷\`** __AFK Sistemi:__ ${guild.afkChannelID ? `<#${guild.afkChannelID}> ( \`${guild.afkTimeout}\` )` : "Afk Sistemi Devredışı."}\n**\`⤷\`** __Kurallar Kanalı:__ ${guild.rulesChannelID ? `<#${guild.rulesChannelID}>` : "Senkronize Kurallar Kanalı Yok."}`)
            .addField('Sunucu Bilgileri 2', `**\`⤷\`** __Toplam Kanal Sayısı: __\`${guild.channels.cache.size}\`\n> Yazı Kanallar: \`${guild.channels.cache.filter(champ => champ.type == 'text').size}\`\n> Ses Kanallar: \`${guild.channels.cache.filter(champ => champ.type == 'voice').size}\`\n> Duyuru Kanallar: \`${guild.channels.cache.filter(champ => champ.type == 'news').size}\`\n**\`⤷\`** __Toplam Rol Sayısı:__ \`${guild.roles.cache.size}\`\n> Yetkili Rol Sayısı: \`${guild.roles.cache.filter(a => a.permissions.has("ADMINISTRATOR") || a.permissions.has("MANAGE_CHANNELS") || a.permissions.has("MANAGE_ROLES") || a.permissions.has("MANAGE_EMOJIS") || a.permissions.has("MANAGE_GUILD") || a.permissions.has("MANAGE_WEBHOOKS")).size}\`\n**\`⤷\`** __Toplam Emoji Sayısı:__ \`${guild.emojis.cache.size}\`\n> Animasyonlu Emoji: \`${guild.emojis.cache.filter(a => a.animated).size}\`\n> Animasyonsuz Emoji: \`${guild.emojis.cache.filter(a => !a.animated).size}\``)
            .addField('Kullanıcı Bilgileri', `**\`⤷\`** __Toplam Üye Sayısı:__ \`${guild.memberCount}\`\n> İnsan Üye Sayısı: \`${guild.members.cache.filter(a => !a.user.bot).size}\`\n> Bot Üye Sayısı: \`${guild.members.cache.filter(a => a.user.bot).size}\`\n> Çevrimiçi Üye Sayısı: \`${guild.members.cache.filter(a => a.presence.status !== "offline").size}\`\n**\`${guild.members.cache.filter(a => a.presence.status == "online").size}\` - \`${guild.members.cache.filter(a => a.presence.status == "idle").size}\` - \`${guild.members.cache.filter(a => a.presence.status == "dnd").size}\` - \`${guild.members.cache.filter(a => a.presence.status == "offline").size}\`**`)
            return client.channels.cache.get(kanalid).send(berke)
        }, 1000)
    }, 1000)
});//champ

client.on("guildBanRemove", (guild, user) => {
    const database = require('quick.db')
    const bans = database.get(`acilmayanBan.laura.${guild.id}`) || [];
    if (bans.some(ban => ban.user.id == user.id)) return guild.members.ban(user, { reason: 'Açılmayan Ban Sistemi'});
})



var logs = require("discord-logs")
logs(client)





