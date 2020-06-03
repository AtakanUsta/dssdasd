const Discord = require('discord.js');


exports.run = function(client, message) {

    const AtakanUstaBruhProject = new Discord.RichEmbed()
        .setTitle("**Atakan Usta GİF**")
        .setDescription("Abone Olmayı Unutma: Atakan Usta")
        .setImage('https://cdn.discordapp.com/attachments/701832521855533056/702226368590512208/ezgif.com-optimize_3.gif')
        .setColor("30d5c8")

    message.channel.send(AtakanUstaBruhProject);
message.delete();
};




exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['atakan', 'atakan-gif'],
  permLevel: 0
};

exports.help = {
  name: 'atakangif', 
  description: 'atakan gif ini atar',
  usage: 'atakangif'
};




