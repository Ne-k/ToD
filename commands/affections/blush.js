const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "blush",
        description: "Show the expression blush.",
        usage: "Blush.",
    },
    run: async (bot, message, args) => {


        message.channel.startTyping()  
        const waifu = new Discord.MessageEmbed()
    
        const { url } = await fetch(`${waifuAPI}/sfw/blush`).then(res => res.json())
        let quotes = args.join(" ");
      
        waifu.setImage(url)
        .setAuthor(`${message.author.username} feels flushed`, message.author.avatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setDescription(quotes)
    message.channel.send({embeds: [waifu]})
    message.channel.stopTyping(true)

    }
}