const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "slap",
        description: "Slap a specified user.",
        examples: "1) <prefix>slap @user/id\n2) <prefix>slap @nek",
        usage: "slap @user/id",
    },
    run: async (bot, message, args) => {
        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.guild.members.cache.find(m =>
          [m.user.username, m.displayName, m.user.tag].some(
            e => e.toLowerCase() === args.join(" ").toLowerCase()
          )
        ) 
        if(!user) {
            return message.channel.send('Please input a (valid) user to slap them <:Megumin_Blush:843537370107215913>')
        }

let quotes = args.slice(1).join(" ");
        message.channel.startTyping()  
        const waifu = new Discord.MessageEmbed()
    
        const { url } = await fetch(`${waifuAPI}/sfw/slap`).then(res => res.json())
    
        waifu.setImage(url)
        .setAuthor(`${message.author.username} has slapped ${user.user.tag}`, message.author.avatarURL({dynamic: true}))
        
        .setDescription(quotes)
        .setColor('RANDOM')
    message.channel.send(waifu)
    message.channel.stopTyping(true)

    }
}