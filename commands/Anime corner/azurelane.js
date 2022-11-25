module.exports = {

        name: "azurlane",
        description: "Sends a random azurlane picture.",
        usage: "aniquote",

    run: async (bot, message, args) => {
        const Discord = require("discord.js");
        const fetch = require("cross-fetch");
        return message.channel.send({
            content: "Command is currently disabled.",
        })

        fetch(`https://gallery.fluxpoint.dev/api/sfw/azurlane`, {
            headers: {Authorization: process.env.Fluxpoint_API_Key},
        })
            .then((res) => res.json())
            .then((data) => {
                let fluxAzureEmbed = new Discord.MessageEmbed()
                    .setTitle("Azurlane")
                    .setColor("#CACACA")
                    .setImage(data.file);
                message.channel.send({embeds: [fluxAzureEmbed]});
            });
    },
};
