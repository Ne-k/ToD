const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "cry",
        description: "Show the expression cry.",
        usage: "cry",
    },
    run: async (bot, message, args) => {



        message.channel.startTyping()  
        const waifu = new Discord.MessageEmbed()
    
        const { url } = await fetch(`${waifuAPI}/sfw/cry`).then(res => res.json())
        let quotes = args.join(" ");
        
        waifu.setImage(url)
        .setAuthor(`${message.author.username} is crying. . .`, message.author.avatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setDescription(quotes)
    message.channel.send(waifu)
    message.channel.stopTyping(true)

    }
}