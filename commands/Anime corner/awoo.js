const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "awoo",
        description: "Show fox girls.",
        usage: "awoo",
    },
    run: async (bot, message, args) => {



        message.channel.startTyping()  
        const waifu = new Discord.MessageEmbed()
    
        const { url } = await fetch(`${waifuAPI}/sfw/awoo`).then(res => res.json())
    
        waifu.setImage(url)
        .setDescription('Awoo?')
        .setFooter(`Requested by: ${message.author.tag} | Powered by waifu.pics`, message.author.displayAvatarURL({ size: 32 }))
        .setColor('RANDOM')
    message.channel.send(waifu)
    message.channel.stopTyping(true)

    }
}