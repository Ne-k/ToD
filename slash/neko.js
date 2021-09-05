const fetch = require('node-fetch')
const waifuAPI = 'https://waifu.pics/api'
const Discord = require('discord.js')
const ColorThief = require('color-thief-updated')
var colorThief = new ColorThief();
module.exports = {
    slash: {
    name: 'neko',
    c: 'Anime',
    description: 'Cat girls drawn in an anime artstyle',
    commandOptions: null,
    global: true,
},
    async execute(interaction, int, client) {

        const waifu = new Discord.MessageEmbed(); const { url } = await fetch(`${waifuAPI}/sfw/neko`).then(res => res.json());  let arrayBuffer = await require('node-fetch')(url).then(m => m.arrayBuffer()); const buffer = Buffer.from(arrayBuffer); waifu.setImage(url).setColor(colorThief.getColor(buffer));

        client.api.interactions(interaction.id, interaction.token).callback.post({data: {
            type: 4,
            data: {
embeds: [waifu]
            }
        }
    })



    }
}