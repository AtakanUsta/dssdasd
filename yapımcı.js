const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bu Program, SelfBot AtakanBuba Tarafından Yapılıp, Editlenmiştir. İletişim İçin: !➤ AtakanBuba#2883')
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL);
    message.channel.sendEmbed(ozelmesajkontrol) };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapimcim',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};
