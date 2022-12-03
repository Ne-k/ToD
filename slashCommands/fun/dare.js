const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
const Discord = require("discord.js");
const Schema = require("../../Database/guildConfigSchema");

module.exports = {
    name: 'dare',
    description: "get a random dare question",
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
                const dare = client.tod.Dare[Math.floor(Math.random() * client.tod.Dare.length)];
                const embed =  new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Dare")
                    .setDescription(dare)
                if(Math.floor(Math.random() * 100) === 1) {
                    embed.setFooter({text: "Want to suggest more dare questions? Feel free and use the /suggest command!"})
                }
                interaction.reply({
                    embeds: [
                       embed
                    ]
                })
            } else {
                const dare = client.tod.Dare.concat(client.tod.nsfwDare)[Math.floor(Math.random() * client.tod.Dare.concat(client.tod.nsfwDare).length)];
                const embed =  new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Dare")
                    .setDescription(dare)
                if(Math.floor(Math.random() * 100) === 1) {
                    embed.setFooter({text: "Want to suggest more dare questions? Feel free and use the /suggest command!"})
                }
                interaction.reply({
                    embeds: [

                        ]
                })
            }

        })
    }
}