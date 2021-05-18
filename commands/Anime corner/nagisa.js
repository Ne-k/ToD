const nagisa = require('./nagisa.json'); 
const Discord = require('discord.js'); 

module.exports = {
    config: {
        name: "nagisa",
        usage: "nagisa",
        description: "Shows pictures/gifs of Nagisa shiota from Assassination Classroom[2013] __Command suggested by:__ DaRealDorseyBro#5000.",
    },
  run: async (client, message, args) => {

          // Kitsune command
          rgs = args.join(" ");
          const embed = new Discord.MessageEmbed() 
          .setColor('#bddfeb') 
          .setTitle("Nagisa Shiota") 
          .setImage(`${nagisa[Math.floor(Math.random() * nagisa.length)]}`) 
          .setFooter(message.author.tag, message.author.avatarURL()) 
          .setFooter(`Requested by: ${message.author.tag} | Powered by another fucking json file.`, message.author.displayAvatarURL({ size: 32 }))
          message.channel.send({embed})
  
    
}
  }
