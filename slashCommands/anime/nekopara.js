const fetch = require('cross-fetch')
const Discord = require('discord.js')
const {ApplicationCommandType } = require('discord.js')

module.exports = {
    name: 'nekopara',
    description: "Get a random image from the anime Nekopara",
    type: ApplicationCommandType.ChatInput,
    category: "anime",
    cooldown: 3000,
    run: async (client, interaction) => {
        fetch(`https://gallery.fluxpoint.dev/api/sfw/img/nekopara`, {headers: {Authorization: process.env.FLUX_API_KEY},}).then((res) => res.json()).then((data) => {
            let fluxAzureEmbed = new Discord.EmbedBuilder()
                .setTitle("Nekopara")
                .setColor("#CACACA")
                .setImage(data.file);
            interaction.reply({embeds: [fluxAzureEmbed]});
        });
    }
}