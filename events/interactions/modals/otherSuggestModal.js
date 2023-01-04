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
        if(interaction.customId === "other_button") {
            // create a modal
            const modalBuilder = new ModalBuilder()
                .setTitle("Other")
                .setCustomId("other_modal")

            const suggestion = new TextInputBuilder()
                .setCustomId("other_input")
                .setPlaceholder("Enter in anything you want to report.")
                .setLabel("OtherInput")
                .setStyle(TextInputStyle.Paragraph)

            const firstActRow = new ActionRowBuilder().addComponents(suggestion);

            modalBuilder.addComponents(firstActRow);

            await interaction.showModal(modalBuilder);

        }
    }

    if(interaction.isModalSubmit()) {

        const webhook = new WebhookClient({ url: `${process.env.SUGGESTION_WEBHOOK_URL}` });
        if(interaction.customId === "other_modal") {
            const suggestion = interaction.fields.getTextInputValue('other_input');
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setDescription("Thank you for your report! You have sent ```" + suggestion + "``` as a suggestion to the developer.")
                        .setColor("Green")
                ]
            })
            await webhook.send({
                content: "New Report!",
                username: "Other Report",
                embeds: [
                    new EmbedBuilder()
                        .setTitle("Other report!")
                        .setDescription(`Input: \`\`\`${suggestion}\`\`\`\nSuggested by: \`${interaction.user.tag} (${interaction.user.id})\`\n\nSuggested in: \`${interaction.guild.name} (${interaction.guild.id})\``)
                        .setColor("Green")
                        .setTimestamp()
                ]
            })
        }
    }
}