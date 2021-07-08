const Discord = require('discord.js')
const fetch = require('node-fetch')


module.exports = {
    config: {
        name: "rem",
        usage: "rem",
        description: "This command does absolutely nothing other than show a random picture of Rem. Why I did it, who knows.",
    },
  run: async (bot, message, args) => {
    fetch('https://rra.ram.moe/i/r?type=rem').then(res => res.json()).then(data => {
      
      message.channel.send(new Discord.MessageEmbed().setImage(`https://cdn.ram.moe/${data.path.replace("/i/", "")}`).setColor(16758465).setFooter(`Requested by: ${message.author.tag} | Powered by weeb.sh`, message.author.displayAvatarURL({ format: "png", size: 32, dynamic: true })).setTitle(`Click here if the image doesn't load.`).setURL(`https://cdn.ram.moe/${data.path.replace("/i/", "")}`))
  })
  

        
    
      
    
    

  }
}