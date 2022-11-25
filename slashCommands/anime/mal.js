const {ApplicationCommandType} = require("discord.js");
const malScraper = require("mal-scraper");
const Discord = require("discord.js");

module.exports = {
    name: 'myanimelist',
    description: "get a random dare question",
    type: ApplicationCommandType.ChatInput,
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

        malScraper.getInfoFromName(anime).then((data) => {

        })
    }
    }