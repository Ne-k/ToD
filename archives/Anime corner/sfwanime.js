module.exports = {

        name: "sfwanime",
        description: "Sends a random anime girl picutre.",
        usage: "anime",

    run: async (bot, message, args) => {
        const Discord = require("discord.js");
        const fetch = require("cross-fetch");
        return message.channel.send({
            content: "Command is currently disabled.",
        })
        fetch(`https://gallery.fluxpoint.dev/api/sfw/anime`, {
            headers: {Authorization: process.env.Fluxpoint_API_Key},
        }).then((res) => res.json()).then((data) => {
            let fluxAzureEmbed = new Discord.MessageEmbed()
                .setColor("#CACACA")
                .setImage(data.file);
            return message.channel.send({embeds: [fluxAzureEmbed]});
        });
    },
};
