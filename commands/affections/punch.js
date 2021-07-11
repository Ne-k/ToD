const fetch = require('node-fetch')
const waifuAPI = 'https://api.kaedee.xyz'
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "punch",
        description: "Punch a specified user.",
        examples: "1) <prefix>punch @user/id\n2) <prefix>punch @nek",
        usage: "punch @user/id",
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
            return message.channel.send('Please input a (valid) user to punch them <:Megumin_Blush:843537370107215913>')
        }


         let quotes = args.slice(1).join(" ");
        const waifu = new Discord.MessageEmbed()
    
        fetch(`https://api.kaedee.xyz/v1/cdn/sfw/punch`, { headers: { 'Authorization': process.env.KAEDE_CDN_KEY,  } }).then(res => res.json()).then(data => {
    
        waifu.setImage(data.path)
        .setAuthor(`${message.author.username} has punched ${user.user.tag}`, message.author.avatarURL({dynamic: true}))
        
        .setDescription(quotes)
        .setColor('RANDOM')
    message.channel.send(waifu)
   
    })
    }
}