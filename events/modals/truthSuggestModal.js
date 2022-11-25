const {
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
    WebhookClient,
    EmbedBuilder
} = require("discord.js");
module.exports = async (interaction) => {
    if(interaction.isButton()) {
        // get button ID
        if(interaction.customId === "truth_button") {
            // create a modal
            const modalBuilder = new ModalBuilder()
                .setTitle("Truth Suggestion")
                .setCustomId("suggest_truth_modal")

            const suggestion = new TextInputBuilder()
                .setCustomId("suggest_truth_input")
                .setPlaceholder("Suggest a truth question.")
                .setLabel("truthInputSuggestion")
                .setStyle(TextInputStyle.Paragraph)

            const firstActRow = new ActionRowBuilder().addComponents(suggestion);

            modalBuilder.addComponents(firstActRow);

            await interaction.showModal(modalBuilder);

        }
    }

    if(interaction.isModalSubmit()) {
        const webhook = new WebhookClient({ url: `${process.env.SUGGESTION_WEBHOOK_URL}` });
        if(interaction.customId === "suggest_truth_modal") {
            const suggestion = interaction.fields.getTextInputValue('suggest_truth_input');

            await webhook.send({
                content: "New Suggestion!",
                username: "Truth Suggestion",
                embeds: [
                    new EmbedBuilder()
                        .setTitle("Truth Suggestion!")
                        .setDescription(`Suggestion: \`\`\`${suggestion}\`\`\`\nSuggested by: \`${interaction.user.tag} (${interaction.user.id}\`\n\nSuggested in: \`${interaction.guild.name} (${interaction.guild.id}\``)
                        .setColor("Green")
                        .setTimestamp()
                ]
            })
        }
    }
}