const {EmbedBuilder, ApplicationCommandType} = require("discord.js");
module.exports = {
    name: "policy",
    description: "Shows ToD (truth or dare)'s private policy stating if information is stored or collected.",
    cooldown: 3000,
    type: ApplicationCommandType.ChatInput,
    category: "info",
    run: async (client, interaction) => {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription("ToD's private policy is viewable [here](https://github.com/Ne-k/Docs/blob/main/Truth%20Or%20dare/readme.md)")
                    .setColor("Random")
            ]
        })
    }
}