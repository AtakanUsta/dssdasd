const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**SelfBot-Komutlar**]`)
  .addField(`**Diğer-Komutlar**`,`:white_small_square: \`-bilgi\` = Bot hakkında bilgi alırsınız. \n:white_small_square: \`-avatar\` = Avatarını gösterir.\n:white_small_square: \`-pixelfoto\` = Avatar'ınızın pixel'li halini atar.\n:white_small_square: \`-servericon\` = Sunucunun icon'unu atar.  \n:white_small_square: \`-kullanıcıbilgim\` = Bilgilerinizi Gösterir. \n:white_small_square: \`-reboot\` = Bot'u yeniden başlatırsınız. \n:white_small_square: \`-sorgula\` = Kendinizi sorgularsınız. `)
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
  name: 'diğer',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'diğer'
}