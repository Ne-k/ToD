const Discord = require("discord.js");
const {ButtonStyle, ActionRowBuilder} = require("discord.js");
module.exports = async (interaction) => {
    if(interaction.isSelectMenu()) {
        if(interaction.customId === "mal_search") {
            const malScraper = require("mal-scraper");
            const Discord = require("discord.js");
            const anime = interaction.values[0];

            const button = new Discord.ButtonBuilder()
                .setCustomId('mal_news')
                .setLabel('Get Latest Anime News')
                .setStyle(ButtonStyle.Secondary)


            malScraper.getInfoFromName(anime).then((data) => {
                interaction.reply({
                    embeds: [
                        new Discord.EmbedBuilder()
                            .setTitle(data.title)
                            .setURL(data.url)
                            .setThumbnail(data.picture)
                            .setDescription(data.synopsis.substring(0, 2000))
                            .setColor("Random")
                            .addFields(
                                {
                                    name: "Alternative Titles",
                                    value: `\`${data.englishTitle}\` \`${data.japaneseTitle}\``,
                                    inline: true
                                },
                                {
                                    name: "Total Episodes",
                                    value: "\`" + data.episodes + `episodes (${data.duration})\``,
                                    inline: true
                                },
                                {
                                    name: "Aired",
                                    value: `\`${data.aired} (broadcast every ${data.broadcast})\``,
                                    inline: true
                                },
                                {
                                    name: "Rating",
                                    value: `\`${data.rating}\``,
                                    inline: true
                                },
                                {
                                    name: "Anime Status",
                                    value: `\`${data.status}\``,
                                    inline: true
                                },
                                {
                                    name: "Genres",
                                    value: `\`${data.genres.join(" ")}\``,
                                    inline: true
                                },
                                {
                                    name: "Score on myanimelist.net",
                                    value: `\`${data.score} (${data.scoreStats}\``,
                                    inline: true
                                },
                                {
                                    name: "Ranked",
                                    value: `\`${data.ranked}\``,
                                    inline: true
                                },
                                {
                                    name: "Anime Popularity",
                                    value: `\`${data.popularity}\``,
                                    inline: true
                                },
                                {
                                    name: "Characters",
                                    value: `\`${data.characters.map((ani) => `${ani.name} (${ani.role} character)`).join(` | `)}\``,
                                    inline: true
                                },
                                {
                                    name: "Trailer",
                                    value: `${data.trailer ? `[Click here](${data.trailer})` : "No trailer available"}`,
                                }
                            )
                    ],
                    components: [
                    new ActionRowBuilder()
                        .addComponents(button)
            ]
                })
            })
        }
    }
}