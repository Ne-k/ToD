const nep = require('./nep.json'); 
const Discord = require('discord.js'); 

module.exports = {
    config: {
        name: "nep",
        usage: "nep",
        description: "nep. Just Nep.",
    },
  run: async (client, message, args) => {
          // Kitsune command
          rgs = args.join(" ");
          const embed = new Discord.MessageEmbed() 
          .setColor('#FFB6C1') 
          .setTitle("NEP NEP") 
          .setImage(`${nep[Math.floor(Math.random() * nep.length)]}`) 
          .setFooter(message.author.tag, message.author.avatarURL()) 
          .setFooter(`Requested by: ${message.author.tag} | Powered by a json file.`, message.author.displayAvatarURL({ size: 32 }))
          message.channel.send({embed})

      }

  }
