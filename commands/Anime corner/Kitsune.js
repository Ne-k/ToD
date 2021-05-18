const Discord = require('discord.js'); 
const superagent = require('superagent'); 
module.exports = {
    config: {
        name: "kitsune",
        usage: "kitsune",
        description: "Get information on a manga.",

    },
  run: async (bot, message, args) => {
    const { body } = await superagent
        .get("https://nekos.life/api/v2/img/fox_girl"); 
    let NSFWonly = new Discord.MessageEmbed()
    .setDescription('This command can only be used in channels marked nsfw.')
    .setImage('https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif')
    if(!message.channel.nsfw){ return message.channel.send(NSFWonly); }

        const embed = new Discord.MessageEmbed()
.setColor("#ff9900") 
.setTitle(`~ Kitsune ~`) 
.setFooter(`Requested by: ${message.author.tag} | Powered by a random API.`, message.author.displayAvatarURL({ size: 32 }))
.setImage(body.url) 
message.channel.send({embed})

   


   

   



}
    
    }

