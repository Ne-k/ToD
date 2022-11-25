const fetch = require("cross-fetch");
const {ApplicationCommandType, EmbedBuilder} = require("discord.js");
module.exports = {
    name: 'shinobu',
    description: "Image of shinobu from an anime",
    type: ApplicationCommandType.ChatInput,
    category: "anime",
    cooldown: 3000,
    run: async (client, interaction) => {
        const {url} = await fetch(`https://waifu.pics/sfw/shinobu`).then((res) => res.json());
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setImage(url)
                    .setDescription("~ Shinobu ~")
                    .setColor("Random")
            ]
        })

    }
}