const discord = require('discord.js');
exports.run = async(client, message, args) => {
    let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);

    message.author || message.mentions.users.first()
    let flaggie = user.flags
    if((flaggie.any('DISCORD_EMPLOYEE'))) {var staff = ""}
    if((!flaggie.any('DISCORD_EMPLOYEE'))) {var staff = ""}
    if((flaggie.any('PARTNERED_SERVER_OWNER'))) {var partner = ""}
    if(!(flaggie.any('PARTNERED_SERVER_OWNER'))) {var partner = ""}
    if((flaggie.any('HYPESQUAD_EVENTS'))) {var events = ""}
    if(!(flaggie.any('HYPESQUAD_EVENTS'))) {var events = ""}
    if((flaggie.any('HOUSE_BRILLIANCE'))) {var brillance = ""}
    if(!(flaggie.any('HOUSE_BRILLIANCE'))) {var brillance = ""}
    if((flaggie.any('HOUSE_BRAVERY'))) {var bravery = ""}
    if(!(flaggie.any('HOUSE_BRAVERY'))) {var bravery = ""}
    if((flaggie.any('HOUSE_BALANCE'))) {var balance = ""}
    if(!(flaggie.any('HOUSE_BALANCE'))) {var balance = ""}
    if((flaggie.any('BUGHUNTER_LEVEL_1'))) {var bughunter = ""}
    if(!(flaggie.any('BUGHUNTER_LEVEL_1'))) {var bughunter = ""}
    if((flaggie.any('BUGHUNTER_LEVEL_2'))) {var bughunter2 = ""}
    if(!(flaggie.any('BUGHUNTER_LEVEL_2'))) {var bughunter2 = ""}
    if((flaggie.any('EARLY_SUPPORTER'))) {var early = ""}
    if(!(flaggie.any('EARLY_SUPPORTER'))) {var early = ""}
    if((flaggie.any('VERIFIED_DEVELOPER'))) {var devepoler = ""}
    if(!(flaggie.any('VERIFIED_DEVELOPER'))) {var devepoler = ""}
    if((flaggie.any('VERIFIED_BOT'))) {var verifiedbot = ""}
    if(!(flaggie.any('VERIFIED_BOT'))) {var verifiedbot = ""}
    if(message.author.bot){ var bot = "" }
    if(!message.author.bot){ var bot = "" }
    const embed = new discord.MessageEmbed()
    .setThumbnail(user.avatarURL())
    .setColor('1b1b1f')
    .setTitle(`${user.username} Kişisinin Rozetleri!`)
    .setDescription(`
     **Discord Personel:** ${staff}
   **Discord Partner:** ${partner}
  **HypeSquad Events:** ${events}
     **HypeSquad Brillance:** ${brillance}
    **HypeSquad Bravery:** ${bravery}
   **HypeSquad Balance:** ${balance}
    **Bug Avcısı 2. Lvl:** ${bughunter2}
     **Bug Avcısı 1. Lvl:** ${bughunter}
    **Nitro early:** ${early}
   **Doğrulanmış bot sahibi:** ${devepoler}
    **Sunucu boost:** <:removed:816327442901237821> \`HATALI\`
    **Verified Bot:** ${verifiedbot}
     **Bot:** ${bot}
    `)
    return message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["r"],
    permLevel: 0
  };
  
  exports.help = {
      name: "rozet-bilgi"
  };