const {ApplicationCommandType} = require("discord.js");
const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: 'foxes',
    description: "Get wholesome foxes",
    type: ApplicationCommandType.ChatInput,
    category: "anime",
    cooldown: 3000,
    run: async (client, interaction) => {
        const {body} = await superagent.get(
            "http://asuna.ga/api/wholesome_foxes"
        );

        const embed = new Discord.EmbedBuilder()
            .setTitle(`~ Wholesome foxes ~`)
            .setColor("#3399FF")

            .setImage(body.url);
        interaction.reply({embeds: [embed]});
    }
    }