const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
    name: 'truth',
    description: "get a random truth question",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    run: async (client, interaction) => {

        // Main
        return interaction.reply({
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                type: 2,
                                label: "Information",
                                style: 5,
                                url: "https://github.com/Ne-k/Docs/blob/main/Truth%20Or%20dare/Information.md",
                                //"custom_id": 'ToD_Information'
                            },
                            {
                                type: 2,
                                label: "Rules",
                                style: 5,
                                url: "https://github.com/Ne-k/Docs/blob/main/Truth%20Or%20dare/Rules.md",
                                // "custom_id": "ToD_Rules"
                            },
                        ],
                    },
                ],
                embeds: [
                    new Discord.EmbedBuilder()
                        .setColor("Random")
                        .setTitle("Truth")
                        .setDescription(client.tod.Truth[Math.floor(Math.random() * client.tod.Truth.length)]),
                ],
            })
    }
    }