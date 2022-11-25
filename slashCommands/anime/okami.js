const Discord = require("discord.js");
const fetch = require("cross-fetch");
const {ApplicationCommandType, EmbedBuilder} = require("discord.js");
const superagent = require("superagent");


module.exports = {
    name: 'okami',
    description: "Wolf girl cause why not.",
    type: ApplicationCommandType.ChatInput,
    category: "anime",
    cooldown: 3000,
    run: async (client, interaction) => {

        const {body} = await superagent.get(
            "https://purrbot.site/api/img/sfw/okami/img"
        );
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setImage(body.link)
                    .setDescription("~ Okami ~")
                    .setColor("Random")
            ]
        })

    }
}