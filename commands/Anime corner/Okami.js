const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = {

        name: "okami",
        usage: "okami",
        description: "Wolf girl.",

    run: async (bot, message, args) => {
        const {body} = await superagent.get(
            "https://purrbot.site/api/img/sfw/okami/img"
        );

        const embed = new Discord.EmbedBuilder()
            .setColor("RANDOM")
            .setTitle(`~ Okami ~`)
            .setImage(body.link);
        message.channel.send({embeds: [embed]});
    },
};
