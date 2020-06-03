const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Simit Yedin!**")
        .setImage('https://www.bobiler.org/monte/preview/116199/bobiler.gif')

    message.channel.send(embed);
message.delete();
};




exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['simit'],
  permLevel: 0
};

exports.help = {
  name: 'simitye', 
  description: 'Serverin iconunu gösterir',
  usage: 'simitye'
};




