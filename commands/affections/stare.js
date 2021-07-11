const fetch = require('node-fetch')
const waifuAPI = 'https://api.kaedee.xyz'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "stare",
        description: "Stare. Just stare.",
        usage: "stare",
    },
    run: async (bot, message, args) => {


        
        const waifu = new Discord.MessageEmbed()
    
        fetch(`https://api.kaedee.xyz/v1/cdn/sfw/stare`, { headers: { 'Authorization': process.env.KAEDE_CDN_KEY,  } }).then(res => res.json()).then(data => {
     let quotes = args.join(" ");
        waifu.setImage(data.path)
        .setAuthor(`${message.author.username} is staring. . .`, message.author.avatarURL({dynamic: true}))
       
        .setDescription(quotes)
        .setColor('RANDOM')
    message.channel.send(waifu)
   
    })
    }
}