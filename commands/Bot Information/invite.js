const { MessageEmbed } = require("discord.js");


module.exports = {
    config: {
        name: "invite",
        aliases: ["links", "sites",],
        usage: "t;invite",
        description: "Sends the bot's invite links.",
    
    },
    run: async (bot, message, args) => {
            let Sembed = new MessageEmbed()
                .setColor('PINK')
                .setTitle(`Click below for the invite links. <:smug:843517735529873438>`)
                .setDescription('**[Minimum permission invite.](https://discord.com/oauth2/authorize?client_id=752306970467237970&scope=bot&permissions=470150368)** (Recommend)\n\n**[Admin permission invite.](https://bit.ly/ToD-TruthOrDare)**\n\n**[Support Server Invite](https://discord.gg/PVC35NbeTD)**')
                .setImage("https://media.discordapp.net/attachments/777983875170304005/789589678928035910/CompressedToDBanner.gif")
                .setFooter(`Thank you for using ToD and I hope I can be useful in your server!`, message.author.avatarURL);
                message.channel.send(Sembed);
        
    } 
}
