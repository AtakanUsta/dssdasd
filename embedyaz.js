const discord = require('discord.js');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {

let yazıİçeriği = args.slice().join(' ')
if (yazıİçeriği.length < 1) return message.reply('**Yazmam için herhangi bir şey yazmalısın.**');
  const Mesaj = new RichEmbed()
      .setAuthor(`${message.author.username} Embed Komutunu Kullandı`, message.author.avatarURL)
      .addField(`${message.author.username} Diyor ki;`,
               yazıİçeriği)
    .setFooter(`${message.author.username} Başarıyla Embed Kullanıldı.`, message.author.avatarURL)
    .setTimestamp()
      .setColor('RANDOM')

message.delete();

message.channel.send(Mesaj)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['embed', 'embedyazı'],
  permLevel: 0
}

exports.help = {
  name: 'embedyaz'
}