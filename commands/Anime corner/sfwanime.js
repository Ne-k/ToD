module.exports = {
    config: {
        name: "sfwanime",
        description: "Sends a random anime girl picutre.",
        usage: "anime",
    },
    run: async (bot, message, args) => {
        const Discord = require('discord.js')
        const fetch = require('node-fetch');

        fetch(`https://gallery.fluxpoint.dev/api/sfw/anime`, { headers: { 'Authorization': process.env.Fluxpoint_API_Token } }).then(res => res.json()).then(data => {
let fluxAzureEmbed = new Discord.MessageEmbed()
.setColor('#CACACA')
.setImage(data.file)
message.channel.send({embeds: [fluxAzureEmbed]})
        })

    }
}