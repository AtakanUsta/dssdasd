const Discord = require('discord.js')
const cevaplar = [
  "Evet",
  "iyi",
  "kötü",
  "Muhtemelen",
	"Hayır"
];
exports.run = function(client, message, args) {
    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
if(!soru) return message.channel.send('Bana sormak istediğin soruyu yazarmısın?')
    else message.reply(cevap)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };  
  exports.help = {
    name: 'sorgula',
    description: 'kendinizi sorgularsınız',
    usage: 'sorgula'
  };
 