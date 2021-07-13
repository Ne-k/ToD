const fetch = require('node-fetch')
const waifuAPI = 'https://api.kaedee.xyz'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "horny",
        description: "Show the expression horny.",
        usage: "horny",
    },
    run: async (bot, message, args) => {
      
let quotes = args.join(" ");
     
        const waifu = new Discord.MessageEmbed()
    
        fetch(`https://api.kaedee.xyz/v1/cdn/sfw/horny`, { headers: { 'Authorization': process.env.KAEDE_CDN_KEY,  } }).then(res => res.json()).then(data => {
    let ishorny = ["Best to stay away from them.", " ", " ", " ", " ", " ", " ", " ", " ", " ", " " ," " ," ", " "]
    let hornyresult = Math.floor((Math.random() * ishorny.length));
        waifu.setImage(data.path)
        .setAuthor(`${message.author.username} seems horny. ${ishorny[hornyresult]}`, message.author.avatarURL({dynamic: true}))
        
        .setDescription(quotes)
        .setColor('RANDOM')
    
    return  message.channel.send({embeds: [waifu]})
    })
    }
}