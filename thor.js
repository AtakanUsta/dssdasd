const Discord = require('discord.js');


exports.run = function(client, message) {

    const AtakanUstaBruhProject = new Discord.RichEmbed()
        .setTitle("**Thor'un Çekicinin Tadına Bak!**")
        .setImage('https://media.giphy.com/media/EOfarA6ZUqzZu/giphy.gif')
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    message.delete();

    message.channel.send(AtakanUstaBruhProject);
};




exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'thor', 
  description: 'Serverin iconunu gösterir',
  usage: 'thor'
};




