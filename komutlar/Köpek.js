const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
exports.run = async(client, message, args) => {

fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(`${client.emotes.error} | İyi.`)
message.channel.send(new MessageEmbed().setImage(body.message))
        
        
        })
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "köpek"
}