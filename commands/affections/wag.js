const fetch = require('node-fetch')
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "wag",
        description: "Wag your fictional tail.",
        usage: "wag",
    },
    run: async (bot, message, args) => {


        message.channel.startTyping()  
        const waifu = new Discord.MessageEmbed()
    
        const { link } = await fetch(`https://purrbot.site/api/img/sfw/tail/gif`).then(res => res.json())
    let quotes = args.join(" ");
        waifu.setImage(link)
        .setAuthor(`${message.author.username} is wagging their tail.`, message.author.avatarURL({dynamic: true}))
        
        .setDescription(quotes)
        .setColor('RANDOM')
        message.channel.stopTyping(true)
        return message.channel.send({embeds: [waifu]})

    }
}