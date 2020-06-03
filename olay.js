const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
      const AtakanBuba = new Discord.RichEmbed()
    .setTitle("**OLAY VAR DEDİLER GELDİK KARDEŞ HAYIRDIR** "  )
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`http://i.milliyet.com.tr/YeniAnaResim/2012/03/02/fft99_mf2054235.Jpeg`)
    return message.channel.sendEmbed(AtakanBuba);
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["olayvar , olay-var"],
  permLevel: 0
};

exports.help = {
  name: 'olay',
  description: 'Çay İçer.',
  usage: 'olay'
};
