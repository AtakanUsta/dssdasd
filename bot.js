const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**SelfBot-Komutlar**]`)
  .addField(`**Bot-Komutları**`,`:white_small_square: \`-bilgi\` = Bot hakkında bilgi verir. \n:white_small_square: \`-yapımcı\` = Bot'un yapımcısını gösterir.\n:white_small_square: \`-version\` = Bot'un version'u hakkında bilgi verir.`)
        .setThumbnail(message.author.avatarURL)
return message.channel.sendEmbed(embed);
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: 'bot',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'bot'
}