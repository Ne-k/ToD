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
                    .setDescription("As this is bot is community driven, you can suggest more truth/dare questions for the bot to use. \nYou can suggest questions by clicking the button below.\n\n" + `We currently have **${client.tod.Truth.length} truth questions** and **${client.tod.Dare.length} dare questions**. Along with **${client.tod.nsfwTruth.length} nsfw truth questions** and **${client.tod.nsfwDare.length} nsfw dare questions**.`)
                    .setFooter({text: "Please note that you may be messaged by me from the bot developer(s) if your suggestion is accepted."})
                    .setColor("Yellow")
            ],
            components: [
                row
                ]
        })

    }
    }