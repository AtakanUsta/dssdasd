const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

        //kod başlangıç
      let mesaj = args.join(" ").slice(0);
  message.delete()
  if (mesaj.length < 1) return message.reply('**Yazmam için herhangi bir şey yazmalısın.**');
  
    message.delete()


      let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username};`, message.author.avatarURL)
.addField(`${message.author.username} Diyor ki;`,mesaj)
      .setTitle(`Gelişmiş Embed Kullandı`)
      .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL)
      .setColor("RANDOM")
      
  message.channel.send(embed)
}
      
        //kod bitiş

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gembed'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'say [yazdırmak istediğiniz şey]'
};
