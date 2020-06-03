const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  let mesaj = args.join(" ").slice(0);
    message.delete()
  if (mesaj.length < 1) return message.reply('**Afk olma sebebini yazmalısın.**');
  
  message.delete()
  
  
  let afk = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(mesaj)
.setAuthor("Atakan Buba's AFK Project")
.setTitle(":white_check_mark: **Artik Afksin** - **Afk Olma Sebebin;**")
.setTimestamp()
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(afk) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Değişiklikleri gösterir.',
  usage: 'afk'
};
