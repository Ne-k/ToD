const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = {

        name: "foxes",
        description: "Shows wholesome foxes from the API http://asuna.ga/",
        usage: "1) foxes",

    run: async (bot, message, args) => {
        const {body} = await superagent.get(
            "http://asuna.ga/api/wholesome_foxes"
        );

        // Kitsune command
        const embed = new Discord.EmbedBuilder()
            .setTitle(`~ Wholesome foxes ~`)
            .setColor("#3399FF")

            .setImage(body.url);
        message.channel.send({embeds: [embed]});
    },
};
