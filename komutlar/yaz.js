const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const mesaj = args.slice(0).join(' ')
    if (mesaj < 1) {
      message.reply("Yazmam için bir şey belirt")
    } else {
      message.delete();
      message.channel.send(mesaj)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:[],
  permlevel: 0,
};

exports.help = {
  name: 'yaz',
  description: 'Bota istediğiniz bir mesaj yazdırırsınız',
  usage: 'yaz <mesaj>'
};
