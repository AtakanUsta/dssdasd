const Discord = require('discord.js');


exports.run = function(client, message) {

    const AtakanUstaBruhProject = new Discord.RichEmbed()
        .setTitle("**Bruh'landın!**")
        .setImage('https://media.giphy.com/media/VIOkcgpsnA2Zy/source.gif')

    message.channel.send(AtakanUstaBruhProject);
message.delete();
};




exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bruh', 
  description: 'Serverin iconunu gösterir',
  usage: 'bruh'
};




