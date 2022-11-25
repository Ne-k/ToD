const fetch = require('cross-fetch')
const Discord = require('discord.js')
const {ApplicationCommandType } = require('discord.js')

module.exports = {
    name: 'azurlane',
    description: "get a random dare question",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    run: async (client, interaction) => {
        fetch(`https://gallery.fluxpoint.dev/api/sfw/img/azurlane`, {headers: {Authorization: process.env.FLUX_API_KEY},}).then((res) => res.json()).then((data) => {
                let fluxAzureEmbed = new Discord.EmbedBuilder()
                    .setTitle("Azurlane")
                    .setColor("#CACACA")
                    .setImage(data.file);
                interaction.reply({embeds: [fluxAzureEmbed]});
            });
    }
}