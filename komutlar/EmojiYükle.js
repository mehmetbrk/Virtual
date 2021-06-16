const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

        if (!message.member.hasPermission("MANAGE_EMOJIS")) {

            return message.channel.send(`Gerekli yetkin yok! (Emojileri yönet)`)

        }

        const emoji = args[0];

        if (!emoji) return message.channel.send(`Bir emoji girmelisin!`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {

            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${

              customemoji.animated ? "gif" : "png"

            }`;

            const name = args.slice(1).join(" ");

            message.guild.emojis.create(

                `${Link}`,

                `${name || `${customemoji.name}`}`

            ).catch(error => {

                console.log(error)

            })

            const Added = new MessageEmbed() //sharpen

                .setTitle(`Emoji Çalındı`)

                .setColor("BLACK" )

                .setDescription(

                    `**Emoji Başarıyla Dızlandı** | **İsim:** \`${name || `${customemoji.name}`}\` | **Ön İzleme:** [Bana Tıkla](${Link})`

                );

            return message.channel.send(Added).catch(e => {

                console.log(e)

            })

        } else {

            let CheckEmoji = parse(emoji, {   //sharpen

                assetType: "png"

            });

            if (!CheckEmoji[0])

                return message.channel.send(`Lütfen düzgün bir emoji girin!`);

            message.channel.send(

                `Default emojileri sunucunuza ekleyemezsiniz!`

            );

        }
}

exports.conf = {
    aliases: ["emoji-yükle","emoji-ekle"]
}

exports.help = {
    name: "emoji-çal",
    description: "pinkçode",
    usage: "emoji-yükle"
}