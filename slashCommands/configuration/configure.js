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
            type: ApplicationCommandOptionType.Boolean,
            required: true,
        }
    ],
    run: async (client, interaction) => {

        const nsfw_truth_dare = interaction.options.getBoolean("nsfw_truth_dare");

        Schema.findOne({guildID: interaction.guild.id}, async (err, data) => {
            if (err) throw err;
            if (data) {
                data.config.nsfwToggle = nsfw_truth_dare;
                data.save();
            } else {
                await new Schema({
                    guildID: interaction.guild.id,
                    guildName: interaction.guild.name,

                    config: {
                        nsfwToggle: nsfw_truth_dare,
                    }
                }).save();

                return interaction.reply({
                    embeds: [
                        new Discord.EmbedBuilder()
                            .setColor("Random")
                            .setTitle("Success!")
                            .setDescription(`Successfully updated the nsfw truth or dare setting to \`${nsfw_truth_dare}\``)
                    ]
                })
            }


        })

    }
    }