const {ApplicationCommandType, EmbedBuilder} = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: 'why',
    description: "Random why questions",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    run: async (client, interaction) => {

        require("cross-fetch")("https://nekos.life/api/v2/why")
            .then((res) => res.json())
            .then(async (data) => {
                let factEmbed = new EmbedBuilder()
                    .setColor("#eaecf3")
                    .setTitle("Why")
                    .setDescription(data.why);
                return interaction.reply({embeds: [factEmbed]});
            });
    }
}