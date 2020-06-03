const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`SelfBot Version Bilgisi`)
        .setDescription(`:white_small_square: Bot'un Version'u **Sürüm'ü**: BETA 1.9 \n:white_small_square: Sonraki version: BETA 3.8`)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Version Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sürüm'],
  permLevel: 0,
};

exports.help = {
  name: 'version',
  description: 'sürümü gösterir',
  usage: 'version'
};