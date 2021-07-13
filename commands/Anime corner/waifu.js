const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')

module.exports = {
    config: {
        name: "waifu",
        usage: "waifu",
        description: "Sends a embed with a random waifu picture from `https://waifu.pics`.",
    },
    run: async (bot, message, args) => {
message.channel.startTyping()  
        const waifu = new Discord.MessageEmbed()
    
        const { url } = await fetch(`${waifuAPI}/sfw/waifu`).then(res => res.json())
    
        waifu.setImage(url)
        .setColor('RANDOM')
          .setDescription(`Your requested waifu.`)
          .setFooter(`Requested by: ${message.author.tag} | Powered by ${waifuAPI}`, message.author.displayAvatarURL({ size: 32 }))
          message.channel.send({embeds: [waifu]})
    message.channel.stopTyping(true)

}
}