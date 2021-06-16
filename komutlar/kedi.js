const Discord = require('discord.js');
var CodeWork = require('request');
exports.run = (client, message, args) => {
  
  
  
CodeWork(`http://aws.random.cat/meow`, function (error, response, body) {
    if (error) return console.log(error); 
    else if (!error) { 
        var info = JSON.parse(body);
          let CodeWorkEmbed = new Discord.MessageEmbed()
           .setAuthor("Virtual | Kedi")
          .setImage(info.file);

  message.channel.send(CodeWorkEmbed);
    }
});
  
}
exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
    name: 'kedi',
};