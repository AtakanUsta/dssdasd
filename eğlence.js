const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription(`[**SelfBot-Komutlar**]`)
  .addField(`**Eğlence-Komutları**`,`:white_small_square: \`-gembed\` = Gelişmiş embed içinde yazarsınız. \n:white_small_square: \`-embed\` = Embed içinde yazarsınız. \n:white_small_square: \`-inekyaz\` = İnek göstergesinde yazım yaparsınız. \n:white_small_square: \`-kartopu\` = İstediğiniz kişiye kartopu atarsınız. \n:white_small_square: \`-afk\` = Afk olursunuz. \n:white_small_square: \`-unafk\` = Afk'lıktan çıkarsınız. \n:white_small_square: \`-yılbaşı\` = Yılbaşı sayacını gösterir.  \n:white_small_square: \`-emojiyazı\` = Emoji şeklinde yazım yaparsınız. \n:white_small_square: \`-düello\` = Düello başlatırsınız. \n:white_small_square: \`-dans\` = 1-8'e kadar dans gösterimi yapar. \n:white_small_square: \`-balıktut\` = Balık tutarsınız. \n:white_small_square: \`-olay\` = Olay yerine Rıza Baba gelir.`)
  .setThumbnail(message.author.avatarURL)
return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fun'],
  permlevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'eğlence'
}