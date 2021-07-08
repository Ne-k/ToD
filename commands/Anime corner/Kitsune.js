const Discord = require('discord.js'); 
const superagent = require('superagent'); 
module.exports = {
    config: {
        name: "kitsune",
        usage: "kitsune",
        description: "Fox girls.",

    },
  run: async (bot, message, args) => {
    const { body } = await superagent
        .get("https://purrbot.site/api/img/sfw/kitsune/img"); 

        const embed = new Discord.MessageEmbed()
.setColor("#ff9900") 
.setTitle(`~ Kitsune ~`) 
.setFooter(`Requested by: ${message.author.tag} | Powered by *Purr*.`, message.author.displayAvatarURL({ size: 32 }))
.setImage(body.link) 
message.channel.send({embed})

   


   

   



}
    
    }

