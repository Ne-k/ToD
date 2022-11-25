module.exports = {

        name: "nekopara",
        description: "Sends a random nekopara image.",
        usage: "nekopara",

    run: async (bot, message, args) => {
        const Discord = require("discord.js");
        const fetch = require("cross-fetch");
        return message.channel.send({
            content: "Command is currently disabled.",
        })
        fetch(`https://gallery.fluxpoint.dev/api/sfw/nekopara`, {
            headers: {Authorization: process.env.Fluxpoint_API_Key},
        })
            .then((res) => res.json())
            .then((data) => {
                let fluxAzureEmbed = new Discord.EmbedBuilder()
                    .setTitle("Nekopara")
                    .setColor("#CACACA")
                    .setImage(data.file);
                message.channel.send({embeds: [fluxAzureEmbed]});
            });
    },
};
