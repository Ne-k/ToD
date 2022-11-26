const {ApplicationCommandType} = require("discord.js");
const malScraper = require("mal-scraper");
const Discord = require("discord.js");

module.exports = {
    name: 'myanimelist',
    description: "get a random dare question",
    type: ApplicationCommandType.ChatInput,
    category: "anime",
    options: [
        {
            name: 'anime',
            description: 'Search for an anime with the given title',
            type: 3,
            required: true
        }
    ],
    cooldown: 3000,
    run: async (client, interaction) => {
        const anime = interaction.options.getString('anime');

        malScraper.getResultsFromSearch(anime).then((data) => {
            // create a select menu with numbers from 1 to 10 with the description of the anime name
            const selectMenu = new Discord.SelectMenuBuilder()
                .setCustomId('mal_search')
                .setPlaceholder('Select an anime')
                .addOptions(data.map((anime, i) => {
                    return {
                        label: 1 + i + '. ',
                        description: data[i].name.substring(0,45) + ". . .",
                        value: data[i].name
                    }
                }))
            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setColor("Yellow")
                        .setTitle("Select the option corresponding to your query")
                ],
                components: [
                    new Discord.ActionRowBuilder()
                        .addComponents(selectMenu),
                    ]
            })
        })
    }
    }