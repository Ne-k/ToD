const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
const Discord = require("discord.js");
const Schema = require("../../Database/guildConfigSchema");
const fetch = require("cross-fetch");

module.exports = {
    name: 'dare',
    description: "get a random dare question",
    type: ApplicationCommandType.ChatInput,
    category: "fun",
    cooldown: 3000,
    run: async (client, interaction) => {

        Schema.findOne({guildID: interaction.guild.id}, async (err, data) => {
            const apiDare = await fetch("https://api.truthordarebot.xyz/v1/dare").then(res => res.json());
            let sfwDare;
            let nsfwDare;
            if (Math.random() < 0.5) {
                sfwDare = client.tod.Dare[Math.floor(Math.random() * client.tod.Dare.length)];
            }
            else {
                sfwDare = apiDare.question;
            }

            if(Math.random() < 0.33) {
                nsfwDare = client.tod.nsfwDare[Math.floor(Math.random() * client.tod.nsfwDare.length)];
            }
            else if(Math.random() < 0.66) {
                nsfwDare = apiDare.question;
            }
            else {
                nsfwDare = client.tod.nsfwDare[Math.floor(Math.random() * client.tod.nsfwDare.length)];
            }
            if(!data) {
                await new Schema({
                    guildID: interaction.guild.id,
                    guildName: interaction.guild.name,
                }).save();
            } else if(data.config.nsfwToggle === false) {
                const embed =  new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Dare")
                    .setDescription(sfwDare)
                if(Math.floor(Math.random() * 100) === 1) {
                    embed.setFooter({text: "Want to suggest more dare questions? Feel free and use the /suggest command!"})
                }
                interaction.reply({
                    embeds: [
                       embed
                    ]
                })
            } else {
                const embed =  new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Dare")
                    .setDescription(nsfwDare)
                if(Math.floor(Math.random() * 100) === 1) {
                    embed.setFooter({text: "Want to suggest more dare questions? Feel free and use the /suggest command!"})
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