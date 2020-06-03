const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  
  let okul = new Date('2021-01-01 00:00:00')
  let zaman = ms(okul - Date.now())
  
      const AtakanUstaYilbasiProject = new Discord.RichEmbed()
              .setTitle("**Yılbaşına kalan Zaman;**")
        .setAuthor(`${client.user.username}`, client.user.avatarURL)
              .setTimestamp()
      .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
              .setDescription(`Yılbaşının kutlanmasına **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika kaldı!`)
        .setColor("RANDOM")

    message.channel.send(AtakanUstaYilbasiProject);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yılbaşı',
  description: 'Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.',
  usage: 'yılbaşı'
};