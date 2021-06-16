const Discord = require("discord.js");

exports.run = async (client, message, args) => {//'Vu4ll#0586
  let yazı = args
    .slice(0)
    .join("+")
    .replace("Ü", "%C3%9C")
    .replace("ü", "%C3%BC")
    .replace("İ", "%C4%B0")
    .replace("ı", "%C4%B1")
    .replace("Ö", "%C3%96")
    .replace("ö", "%C3%B6")
    .replace("â", "%C3%A2")
    .replace("Â", "%C3%82")
    .replace("Ş", "%C5%9E")
    .replace("ş", "%C5%9F")
    .replace("Ğ", "%C4%9E")
    .replace("ğ", "%C4%9F")
    .replace("Ç", "%C3%87")
    .replace("ç", "%C3%A7")
    .replace("#", "%23")
    .replace("&", "%26");

  if (!yazı) return message.channel.send(`Bir şeyler yazmalısın!`);

  let user = message.author;
  let isim = user.username.split("");

  let link = `https://some-random-api.ml/canvas/youtube-comment?avatar=${user.avatarURL(
    { format: "png", size: 1024 }
  )}&comment=${yazı}&username=${user.username}`;

  if (!harfler("a", "z").some(x => isim.includes(x))) {
    link = `https://some-random-api.ml/canvas/youtube-comment?avatar=${user.avatarURL(
      { format: "png", size: 1024 }
    )}&comment=${yazı}&username=Yorumcu`;
  }

  let ek = new Discord.MessageAttachment(link, `yorum.png`);

  message.channel.send({ files: [ek] });

  function harfler(charA, charZ) {//'Vu4ll#0586
    let a = [],
      i = charA.charCodeAt(0),
      j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
    }
    return a;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {//'Vu4ll#0586
  name: "yorum",
  description: "",
  usage: "yorum <yazı>"
};
