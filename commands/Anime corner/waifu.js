
const Discord = require('discord.js')

module.exports = {
    config: {
        name: "waifu",
        usage: "waifu",
        description: "Sends a embed with a random waifu from `https://mywaifulist.moe`.",
    },
    run: async (bot, message, args) => {
message.channel.startTyping()  
        require('node-fetch')(`https://japi.rest/mywaifulist/v1/random`, { headers: { 'Authorization': process.env.Japi_API_key}}).then(res => res.json()).then(d => {

            
            message.channel.send({embeds: [new Discord.MessageEmbed().setImage(d.data.image).setTitle(d.data.name).setURL(d.data.url).setDescription(d.data.description).setColor('GOLD')]})
    message.channel.stopTyping(true)
    


        })


}
}