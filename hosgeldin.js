const Discord = require('discord.js');


exports.run = function(client, message) {


const embed = new Discord.RichEmbed()

.setTitle("Dostum, Hoşgeldin :)")
.setImage("https://media.giphy.com/media/ii2iuh5VPJe8B436td/giphy.gif")
.setTimestamp()
.setFooter(` ${message.author.username} Tarafından İstendi`, message.author.avatarURL)
        .setColor("RANDOM")

    message.channel.send(embed);
message.delete();
};




exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["hoşgeldin"],
  permLevel: 0
};

exports.help = {
  name: 'hosgeldin', 
  description: 'Serverin iconunu gösterir',
  usage: 'hosgeldin'
};




