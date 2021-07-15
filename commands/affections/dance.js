const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "dance",
        description: "Just dance.",
        usage: "dance",
    },
    run: async (bot, message, args) => {


        message.channel.startTyping()  
        const waifu = new Discord.MessageEmbed()
    let quotes = args.join(" ");
        const { url } = await fetch(`${waifuAPI}/sfw/dance`).then(res => res.json())
    
        waifu.setImage(url)
        .setAuthor(`${message.author.username} is dancing.`, message.author.avatarURL({dynamic: true}))
        
        .setDescription(quotes)
        .setColor('RANDOM')
        message.channel.send({embeds: [waifu]})
    message.channel.stopTyping(true)

    }
}