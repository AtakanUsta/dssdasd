const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"Parayı çevirdin ve **Tura** Geldi!",
	"Parayı çevirdin ve **Yazı** Geldi!"
];

exports.run = function(client, message) {
	
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	
	if (cevap === "Parayı çevirdin ve **Yazı** Geldi!") {
		
		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
     .setTitle("AtakanBuba's YazıTura Project")
     .setTimestamp()
     .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png")
		message.channel.send(embedyazı);
		
	} else if (cevap === "Parayı çevirdin ve **Tura** Geldi!") {
		
		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png")
		message.channel.send(embedtura);
		
	}
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};