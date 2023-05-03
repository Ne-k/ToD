const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
const Discord = require("discord.js");
const Schema = require("../../Database/guildConfigSchema");
const fetch = require("cross-fetch");
module.exports = {
    name: 'truth',
    description: "get a random truth question",
    type: ApplicationCommandType.ChatInput,
    category: "fun",
    cooldown: 3000,
    run: async (client, interaction) => {
        Schema.findOne({guildID: interaction.guild.id}, async (err, data) => {
            const apiTruths = await fetch("https://api.truthordarebot.xyz/v1/truth").then(res => res.json());
            let sfwTruths;
            let nsfwTruths;
            if (Math.random() < 0.5) {
                sfwTruths = client.tod.Truth[Math.floor(Math.random() * client.tod.Truth.length)];
            } else {
                sfwTruths = apiTruths.question;
            }


            if (Math.random() < 0.33) {
                nsfwTruths = client.tod.Truth[Math.floor(Math.random() * client.tod.Truth.length)];
            } else if (Math.random() < 0.66) {
                nsfwTruths = apiTruths.question;
            } else {
                nsfwTruths = client.tod.nsfwTruth[Math.floor(Math.random() * client.tod.nsfwTruth.length)];
            }
            if(!data) {
                await new Schema({
                    guildID: interaction.guild.id,
                    guildName: interaction.guild.name,
                }).save();

            } else if(!data.config.nsfwToggle) {
                const embed = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Truth")
                    .setDescription(sfwTruths)
                if(Math.floor(Math.random() * 100) === 1) {
                    embed.setFooter({text: "Want to suggest more truth questions? Feel free and use the /suggest command!"})
                }

                interaction.reply({
                    embeds: [
                        embed
                    ]
                })
            } else {
                const embed = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Truth")
                    .setDescription(nsfwTruths)
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