const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${message.author.username}`, message.author.avatarURL)
.setColor('RANDOM')
.addField("Atakan Buba's Self Bot **BETA**",`
**-eğlence** : Eğlenceli Komutlarını Listeler.
**-kullanıcı** : Kullanıcı Komutları Listeler.
**-diğer** : Diğer Komutları Listeler.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(message.author.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 1
};
exports.help = {
  name: 'yardım',
  description: 'Yapimcimi Gosterir.',
  usage: 'yardım'
};