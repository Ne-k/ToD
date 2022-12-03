const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
const Discord = require("discord.js");
const Schema = require("../../Database/guildConfigSchema");
module.exports = {
    name: 'truth',
    description: "get a random truth question",
    type: ApplicationCommandType.ChatInput,
    category: "fun",
    cooldown: 3000,
    run: async (client, interaction) => {
        Schema.findOne({guildID: interaction.guild.id}, async (err, data) => {

            if(!data) {
                await new Schema({
                    guildID: interaction.guild.id,
                    guildName: interaction.guild.name,
                    config: {
                        nsfwToggle: false,
                    }
                }).save();
            } else if(data.config.nsfwToggle === false) {
                const truth = client.tod.Truth[Math.floor(Math.random() * client.tod.Truth.length)];
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor("Random")
                            .setTitle("Truth")
                            .setDescription(truth)
                    ]
                })
            } else {
                const truth = client.tod.Truth.concat(client.tod.nsfwTruth)[Math.floor(Math.random() * client.tod.Truth.concat(client.tod.nsfwTruth).length)];
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor("Random")
                            .setTitle("Truth")
                            .setDescription(truth)
                        ]
                })
            }

        })
    }
    }