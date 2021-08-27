module.exports = {
    config: {
        name: "feed",
        description: "feed a specified user.",
        examples: "1) <prefix>feed @user/id\n2) <prefix>feed @nek",
        usage: "feed @user/id",
    },
    run: async (bot, message, args) => {
const Discord = require('discord.js')
const fetch = require('node-fetch')
fetch(`https://purrbot.site/api/img/sfw/feed/gif`).then(res => res.json()).then(data => {
    let user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.guild.members.cache.find(m =>
      [m.user.username, m.displayName, m.user.tag].some(
        e => e.toLowerCase() === args.join(" ").toLowerCase()
      )
    ) 
    if(!user) {
        return message.channel.send('Please input a (valid) user to feed them food <:Megumin_Blush:843537370107215913>')
    }


     
    const waifu = new Discord.MessageEmbed()

    let quotes = args.slice(1).join(" ");
    
    waifu.setImage(data.link)
    .setAuthor(`${message.author.username} fed ${user.user.tag} food`, message.author.avatarURL({dynamic: true}))
    .setDescription(quotes)
    .setColor('RANDOM')
    
    return message.channel.send({embeds: [waifu]})

})

    }
}