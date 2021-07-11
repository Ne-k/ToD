const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "wave",
        description: "Wave your hand.",
        usage: "wave",
    },
    run: async (bot, message, args) => {


        message.channel.startTyping()  
        const waifu = new Discord.MessageEmbed()
    
        const { url } = await fetch(`${waifuAPI}/sfw/wave`).then(res => res.json())
    let quotes = args.join(" ");
        waifu.setImage(url)
        .setAuthor(`${message.author.username} has waved!`, message.author.avatarURL({dynamic: true}))
        
        .setDescription(quotes)
        .setColor('RANDOM')
    message.channel.send(waifu)
    message.channel.stopTyping(true)

    }
}