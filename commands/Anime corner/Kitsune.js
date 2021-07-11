const Discord = require('discord.js'); 
const superagent = require('superagent'); 
module.exports = {
  config: {
      name: "foxes",
      description: "Shows wholesome foxes from the API http://asuna.ga/",
      usage: "1) foxes",
  },
  run: async (bot, message, args) => {
const { body } = await superagent
.get("http://asuna.ga/api/wholesome_foxes"); 


      const embed = new Discord.MessageEmbed()
      .setTitle(`~ Wholesome foxes ~`) 
      .setColor('#3399FF')
      .setFooter(`Requested by: ${message.author.tag} | Powered by a http://asuna.ga/`, message.author.displayAvatarURL({ size: 32 }))
      .setImage(body.url) 
      message.channel.send({embed})


}
    
    }

