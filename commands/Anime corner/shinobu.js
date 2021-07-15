const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')

module.exports = {
    config: {
        name: "shinobu",
        usage: "shinobu",
        description: "Image of shinobu from an anime I forgot.",
    },
    run: async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
    
const { url } = await fetch(`${waifuAPI}/sfw/shinobu`).then(res => res.json())

embed.setImage(url)
.setColor('RANDOM')
.setFooter(`Requested by: ${message.author.tag} | Powered by ${waifuAPI}`, message.author.displayAvatarURL({ size: 32 }))
mmessage.channel.send({embeds: [embed]})
message.channel.stopTyping(true)

}
}