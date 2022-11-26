const {getNewsNoDetails} = require("mal-scraper");
const {scrapNews} = require("@shineiichijo/mal-news-scraper")
const {EmbedBuilder} = require('discord.js');

module.exports = async (interaction) => {

    if(interaction.isButton()) {
        if (interaction.customId === "mal_news") {
            const news = await getNewsNoDetails()
            const link = news[0].link
            const data = await scrapNews(link)

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(data.title.replace(/[^a-zA-Z0-9 ]/g, ""))
                        .setDescription(data.description.substring(0, 1958))
                        .setThumbnail(data.image)
                        .setColor("Random")
                ],
                ephemeral: true
            })
        }
    }

}