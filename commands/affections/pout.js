const fetch = require('node-fetch')
const waifuAPI = 'https://api.kaedee.xyz'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "pout",
        description: "show the expression pout.",
        usage: "Pout.",
    },
    run: async (bot, message, args) => {
       

let quotes = args.join(" ");
    
        const waifu = new Discord.MessageEmbed()
    
        fetch(`https://api.kaedee.xyz/v1/cdn/sfw/pout`, { headers: { 'Authorization': process.env.KAEDE_CDN_KEY,  } }).then(res => res.json()).then(data => {
    
        waifu.setImage(data.path)
        .setAuthor(`${message.author.username} does not like this.`, message.author.avatarURL({dynamic: true}))
        
        .setDescription(quotes)
        .setColor('RANDOM')
    message.channel.send(waifu)
   
    })
    }
}