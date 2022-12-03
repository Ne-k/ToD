const {ApplicationCommandOptionType, ApplicationCommandType} = require('discord.js');
const Discord = require("discord.js");
const Schema = require("../../Database/guildConfigSchema");


module.exports = {
    name: 'configure',
    description: "Configure ToD's settings for your server.",
    type: ApplicationCommandType.ChatInput,
    category: "configuration",
    cooldown: 3000,
    options: [
        {
            name: "nsfw_truth_dare",
            description: "Enable or disable nsfw truth or dare questions.",
            value: "nsfw_truth_dare",
            type: ApplicationCommandOptionType.Boolean,
        },
        {
            name: "voting_toggle",
            description: "Enable or disable voting notifications for the entire bot.",
            value: "voting_toggle",
            type: ApplicationCommandOptionType.Boolean,
        }
    ],
    run: async (client, interaction) => {
        const nsfwToggle = interaction.options.getBoolean("nsfw_truth_dare");
        const votingToggle = interaction.options.getBoolean("voting_toggle");

        if(votingToggle === null && nsfwToggle === null) {
            return interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setColor("Red")
                        .setTitle("Error")
                        .setDescription("Please provide a valid option.")
                ]
            })
        }
        if(votingToggle !== null && nsfwToggle !== null) {
            return interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setColor("Red")
                        .setTitle("Error")
                        .setDescription("You can only configure one setting at a time.")
                ]
            })
        }
        Schema.findOne({guildID: interaction.guild.id}, async (err, data) => {
            if(!data) {
                await new Schema({
                    guildID: interaction.guild.id,
                    guildName: interaction.guild.name,
                }).save();
                return interaction.reply({
                    content: "Please try again, the configuration wasn't saved."
                })
            }

            // if nsfwToggle is not null, then the user is trying to change the nsfwToggle setting
            if(nsfwToggle !== null) {
                    data.config.nsfwToggle = nsfwToggle;
                    data.save();
            } else if(votingToggle !== null) {
                data.config.votingToggle = votingToggle;
                data.save();
            }



            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setTitle("Success!")
                        .setColor("Green")
                        .setDescription("Your configuration has been saved!\n\n**NSFW Truth or Dare:** " + data.config.nsfwToggle + "\n**Voting Notifications:** " + data.config.votingToggle)
                    ]
            })

        })

    }
    }