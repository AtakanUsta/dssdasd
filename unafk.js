const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  let afk = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField("Atakan Buba's Self Bot **BETA**")
.setAuthor("Atakan Buba's AFK Project")
.setTitle(":white_check_mark: **Artik AFK Değilsin!**")
.setTimestamp()
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(afk) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkcik', 'afklıktançık'],
  permLevel: 0
};

exports.help = {
  name: 'unafk',
  description: 'Değişiklikleri gösterir.',
  usage: 'unafk'
};
