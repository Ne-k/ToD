const { MessageEmbed } = require("discord.js");
const {MessageButton } = require('discord-buttons')
require('discord-buttons')
const fetch = require('node-fetch')
module.exports = {
    config: {
        name: "invite",
        aliases: ["links", "sites",],
        usage: "t;invite",
        description: "Sends the bot's invite links.",
    
    },
    run: async (bot, message, args) => {
        const { link } = await fetch(`https://purrbot.site/api/img/sfw/neko/gif`).then(res => res.json())
        let invitelink = new MessageButton()
        .setStyle('url') 
        .setLabel('Invite ToD')
        .setURL('https://discord.com/oauth2/authorize?client_id=752306970467237970&scope=bot&permissions=380096')  
        

            let Sembed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription('**[Click here to invite ToD bot](https://discord.com/oauth2/authorize?client_id=752306970467237970&scope=bot&permissions=380096)**\n\n<:Purple_dash:843518550966796309> [Top.gg](https://top.gg/bot/752306970467237970) **|** <:Orange_dash:843518612747976714> [Development Server](https://discord.gg/PVC35NbeTD) **|** <:Red_dash:843518522209992724> [Statistics Page](https://statcord.com/bot/752306970467237970)')
                .setImage(link)
                message.channel.send({button: invitelink, embed: Sembed});
        
    } 
}
