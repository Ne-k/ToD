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
                }).save();

            } else if(data.config.nsfwToggle === false) {
                const truth = client.tod.Truth[Math.floor(Math.random() * client.tod.Truth.length)];
                const embed = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Truth")
                    .setDescription(truth)
                if(Math.floor(Math.random() * 100) === 1) {
                    embed.setFooter({text: "Want to suggest more truth questions? Feel free and use the /suggest command!"})
                }

                interaction.reply({
                    embeds: [
                        embed
                    ]
                })
            } else {
                const truth = client.tod.Truth.concat(client.tod.nsfwTruth)[Math.floor(Math.random() * client.tod.Truth.concat(client.tod.nsfwTruth).length)];

                const embed = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Truth")
                    .setDescription(truth)
                if(Math.floor(Math.random() * 100) === 1) {
                    embed.setFooter({text: "Want to suggest more truth questions? Feel free and use the /suggest command!"})
                }
                interaction.reply({
                    embeds: [
                        embed
                        ]
                })
            }

        })
    }
    }