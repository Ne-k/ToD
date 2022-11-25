const fetch = require("cross-fetch");
const Discord = require("discord.js");
const {ApplicationCommandType} = require("discord.js");
module.exports = {
    name: 'rem',
    description: "Get a random picture of Rem from Re:Zero",
    type: ApplicationCommandType.ChatInput,
    category: "anime",
    cooldown: 3000,
    run: async (client, interaction) => {
        fetch("https://rra.ram.moe/i/r?type=rem")
            .then((res) => res.json())
            .then((data) => {
                interaction.reply({
                    embeds: [
                        new Discord.EmbedBuilder()
                            .setImage(`https://cdn.ram.moe/${data.path.replace("/i/", "")}`)
                            .setColor(16758465)
                            .setTitle(`Click here if the image doesn't load.`)
                            .setURL(`https://cdn.ram.moe/${data.path.replace("/i/", "")}`),
                    ],
                });
            });
    }
}