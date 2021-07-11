const Discord = require('discord.js'); 
const superagent = require('superagent'); 
module.exports = {
    config: {
        name: "okami",
        usage: "okami",
        description: "Wolf girl.",

    },
  run: async (bot, message, args) => {
    const { body } = await superagent
        .get("https://purrbot.site/api/img/sfw/okami/img"); 

        const embed = new Discord.MessageEmbed()
.setColor("RANDOM") 
.setTitle(`~ Okami ~`) 
.setFooter(`Requested by: ${message.author.tag} | Powered by *Purr*.`, message.author.displayAvatarURL({ size: 32 }))
.setImage(body.link) 
message.channel.send({embed})

   


   

   



}
    
    }

