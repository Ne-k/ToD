const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "smug",
        description: "Show the expression smug.",
        usage: "smug",
    },
    run: async (bot, message, args) => {


        message.channel.startTyping()  
        const waifu = new Discord.MessageEmbed()
    
        const { url } = await fetch(`${waifuAPI}/sfw/smug`).then(res => res.json())
     let quotes = args.join(" ");
        waifu.setImage(url)
        .setAuthor(`${message.author.username} has a smug on their face.`, message.author.avatarURL({dynamic: true}))
       
        .setDescription(quotes)
        .setColor('RANDOM')
    message.channel.send(waifu)
    message.channel.stopTyping(true)

    }
}