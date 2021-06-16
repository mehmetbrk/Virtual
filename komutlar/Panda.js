const Discord = require('discord.js');
const CodeWork2 = require('axios')
exports.run = async (client, message, args, tools) => {

  
  const url = "https://some-random-api.ml/img/panda";
        const facts = "https://some-random-api.ml/facts/panda"

        let image, response;
        let fact, responses;
        try {
            response = await CodeWork2.get(url);
            image = response.data;

            responses = await CodeWork2.get(facts)
            fact = responses.data

        } catch (e) {
            return console.log(e)
        }

        const embed = new Discord.MessageEmbed()
   .setAuthor("Virtual | Panda")         
   .setImage(image.link)

        await message.channel.send(embed)
    }
  
exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
  name: 'panda',
};
   