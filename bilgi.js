const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`SelfBot'u Kullanırken Bilinmesi Gerekenler;`)
        .setDescription(`:white_small_square: ToS Aykırıdır. Fakat Ben Bizzat Kötü Bişi Olduğunu Tespit Edemedim. \n:white_small_square: Hesabınızın Başına Gelebilcek Olaylardan Biz Sorumlu Değiliz. \n:white_small_square: Proje'yi Bu Şekilde Kullanırsanız (Kurcalamazsanız) Hiçbir Sıkıntı Çıkmayacaktır. \n:white_small_square: Program (Proje) Daha Yapım Aşmasındadır (Betada) Bundan Dolayı Ufak Tefek Hatalar İle Karşılaşabilirsiniz. \n:white_small_square: Projemizi Arkadaşlarınızla Paylaşmayı Unutmayınız. \n:white_small_square:  **Destek Sunucusu İçin** [**TIKLA**](https://discord.gg/jk2qZxk)`)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.author.username} Başarıyla Version Sistemini Kullandı!`, message.author.avatarURL)
        .setTimestamp()
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'bilgi',
  usage: 'bilgi'
};