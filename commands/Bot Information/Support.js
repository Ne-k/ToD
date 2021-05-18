const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "support",
        aliases: ["server", "discord"],
        usage: "t;support",
        description: "Sends ToD support server, along with a server that helped with the development if ToD.",
    
    },
    run: async (bot, message, args) => {

            let Sembed = new MessageEmbed()
                .setColor('#7975a8')
                .setDescription('**[Support Server Invite](https://discord.gg/PVC35NbeTD)**')
                .setImage('https://media.discordapp.net/attachments/777983875170304005/789589678928035910/CompressedToDBanner.gif')
                .setTimestamp()
                .setThumbnail(bot.user.displayAvatarURL) //bot avatar

            message.channel.send(Sembed);
            
        
    } 
}






