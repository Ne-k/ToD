

module.exports = {
    config: {
        name: "neko",
        usage: "neko",
        description: "Shows imagines of nekos __from kaedee.xyz__",
    },
  run: async (bot, message, args) => {
    const fetch = require('node-fetch')
    const Discord = require('discord.js')
    /* https://api.kaedee.xyz/v1/cdn/<anime/nsfw/sfw>/<category> */
    fetch(`https://api.kaedee.xyz/v1/cdn/sfw/neko`, { headers: { 'Authorization': process.env.KAEDE_CDN_KEY,  } }).then(res => res.json()).then(data => {

          const embed = new Discord.MessageEmbed()
          .setColor('RANDOM')
         .setFooter(`Requested by ${message.author.tag} | Powered by kaedee.xyz`)
          .setImage(data.path) 
          return message.channel.send({embeds: [embed]})
    
      

  })

}
    
    }

