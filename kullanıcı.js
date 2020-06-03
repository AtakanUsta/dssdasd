const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**SelfBot-Komutlar**]`)
  .addField(`**Kullanıcı-Komutları**`,`:white_small_square: \`-ping\` = Botun Pingini gösterir. \n:white_small_square: \`-avatar\` = Avatarını gösterir.\n:white_small_square: \`-pixelfoto\` = Avatar'ınızın pixel'li halini atar.\n:white_small_square: \`-servericon\` = Sunucunun icon'unu atar.  \n:white_small_square: \`-kullanıcıbilgim\` = Bilgilerinizi Gösterir. \n:white_small_square: \`-reboot\` = Bot'u yeniden başlatırsınız. \n:white_small_square: \`-sorgula\` = Kendinizi sorgularsınız. \n:white_small_square: \`-fb\` = Avatar'ınıza Fenerbahçe çerçevesi ekler. \n:white_small_square: \`-bjk\` = Avatar'ınıza Beşiktaş çerçevesi ekler. \n:white_small_square: \`-gs\` = Avatar'ınıza Galatasaray çerçevesi ekler. `)
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
  name: 'kullanıcı',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'kullanıcı'
}