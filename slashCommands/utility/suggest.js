const {ApplicationCommandType, EmbedBuilder, ButtonBuilder, ActionRowBuilder} = require("discord.js");
const { Events, ModalBuilder, ButtonStyle } = require('discord.js');
module.exports = {
    name: 'suggest',
    description: "You can suggest more truth/dare questions for the bot to use.",
    cooldown: 3000,
    type: ApplicationCommandType.ChatInput,
    category: "utility",
    run: async (client, interaction) => {

        const truthButton = new ButtonBuilder()
        .setLabel('Truth')
        .setStyle(ButtonStyle.Success)
        .setCustomId('truth_button')
            .setEmoji('🤫');

        const dareButton = new ButtonBuilder()
        .setLabel('Dare')
        .setStyle(ButtonStyle.Success)
        .setCustomId('dare_button')
            .setEmoji('🤭');

        const row = new ActionRowBuilder()
        .addComponents(truthButton, dareButton);

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription("As this is bot is community driven, you can suggest more truth/dare questions for the bot to use. \nYou can suggest questions by clicking the button below.")
                    .setColor("Yellow")
            ],
            components: [
                row
                ]
        })

    }
    }