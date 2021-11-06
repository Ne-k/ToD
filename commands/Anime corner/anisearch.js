const {MessageEmbed} = require("discord.js");

module.exports = {
    config: {
        name: "anisearch",
        usage: "anisearch <anime_name>",
        aliases: ["animesearch", "mal"],
        example: "1) anisearch K-ON!\n2) anisearch  落第騎士の英雄譚《キャバルリィ》",
        description: "Get information on a anime title on MyAnimeList.",
    },

    run: async (client, message, args) => {
        if (!args.length) {
            return message.channel.send("Please give me a valid anime name on MAL.");
        }

        let msg = await message.channel.send({
            content: "<a:Loading:854800971854643240> Fetching The Info....",
        });

        const malScraper = require("mal-scraper");

        const query = args.join(" ");

        malScraper.getResultsFromSearch(query).then(async (data) => {
            try {
                setTimeout(() => msg.delete());
                return message.channel
                    .send({
                        embeds: [
                            new MessageEmbed()
                                .setColor("YELLOW")
                                .setTitle("Select the option corresponding to your query.")
                                .setDescription(`\`\`\`` + data.map((t, i) => `#${i + 1} - ${t.name}`).join("\n") + `\`\`\``)
                                .setFooter("Selection will be deleted in 5 minutes."),
                        ],
                        components: [
                            {
                                type: 1,
                                components: [
                                    {
                                        type: 3,
                                        custom_id: "Selects",
                                        options: [
                                            {
                                                label: `#1`,
                                                value: "0",
                                                description: `${data[0].name.substring(0, 45) + ". . ."}`,
                                            },
                                            // .substring(0, 4068) + ". . .")
                                            {
                                                label: `#2`,
                                                value: "1",
                                                description: `${data[1].name.substring(0, 45) + ". . ."}`,
                                            },
                                            {
                                                label: `#3`,
                                                value: "2",
                                                description: `${data[2].name.substring(0, 45) + ". . ."}`,
                                            },
                                            {
                                                label: `#4`,
                                                value: "3",
                                                description: `${data[3].name.substring(0, 45) + ". . ."}`,
                                            },
                                            {
                                                label: `#5`,
                                                value: "4",
                                                description: `${data[4].name.substring(0, 45) + ". . ."}`,
                                            },
                                            {
                                                label: `#6`,
                                                value: "5",
                                                description: `${data[5].name.substring(0, 45) + ". . ."}`,
                                            },
                                            {
                                                label: `#7`,
                                                value: "6",
                                                description: `${data[6].name.substring(0, 45) + ". . ."}`,
                                            },
                                            {
                                                label: `#8`,
                                                value: "7",
                                                description: `${data[7].name.substring(0, 45) + ". . ."}`,
                                            },
                                            {
                                                label: `#9`,
                                                value: "8",
                                                description: `${data[8].name.substring(0, 45) + ". . ."}`,
                                            },
                                            {
                                                label: `#10`,
                                                value: "9",
                                                description: `${data[9].name.substring(0, 45) + ". . ."}`,
                                            },
                                        ],

                                        placeholder: "Choose an anime",
                                        default: true,
                                        min_values: 1,
                                        max_values: 1,
                                    },
                                ],
                            },
                        ],
                    })
                    .then((thing) => {
                        setTimeout(() => msg.delete(), 300000);

                        // Event Shit

                        client.on("interactionCreate", async (interaction) => {
                            if (interaction.guildId != message.guild.id) return;
                            if (interaction.user.id !== message.author.id) return;

                            interaction.deferUpdate();

                            if (interaction.values[0] == 0) {
                                malScraper
                                    .getInfoFromName(data[0].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");
                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }

                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField("Alternative Titles:", `\`${s1.englishTitle}, ${s1.japaneseTitle}\``, true)
                                            .addField("Total Episodes:", `\`${s1.episodes} episodes (${s1.duration})\``, true)
                                            .addField("Aired:", `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``, true)
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField("Score on MAL:", `\`${s1.score} (${s1.scoreStats})\``, true)
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField("Anime Popularity:", `\`${s1.popularity}\``, true)
                                            .addField("Characters:", "`" + s1.characters.map((ani) => `${ani.name} (${ani.role} character)`).join(` | `) + "`", true)
                                            .addField(`Trailer:`, `**[${s1.title}'s Trailer](${s1.trailer})**`, true);

                                        return thing.edit({embeds: [embed]});
                                    });
                            }

                            if (interaction.values[0] == 1) {
                                malScraper
                                    .getInfoFromName(data[1].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");

                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }

                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField(
                                                "Alternative Titles:",
                                                `\`${s1.englishTitle}, ${s1.japaneseTitle}\``,
                                                true
                                            )
                                            .addField(
                                                "Total Episodes:",
                                                `\`${s1.episodes} episodes (${s1.duration})\``,
                                                true
                                            )
                                            .addField(
                                                "Aired:",
                                                `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``,
                                                true
                                            )
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField(
                                                "Score on MAL:",
                                                `\`${s1.score} (${s1.scoreStats})\``,
                                                true
                                            )
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField(
                                                "Anime Popularity:",
                                                `\`${s1.popularity}\``,
                                                true
                                            )
                                            .addField(
                                                "Characters:",
                                                "`" +
                                                s1.characters
                                                    .map((ani) => `${ani.name} (${ani.role} character)`)
                                                    .join(` | `) +
                                                "`",
                                                true
                                            )
                                            .addField(
                                                `Trailer:`,
                                                `**[${s1.title}'s Trailer](${s1.trailer})**`,
                                                true
                                            );

                                        return thing.edit({embeds: [embed]});
                                    });
                            }
                            if (interaction.values[0] == 2) {
                                malScraper
                                    .getInfoFromName(data[2].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");

                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }
                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField(
                                                "Alternative Titles:",
                                                `\`${s1.englishTitle}, ${s1.japaneseTitle}\``,
                                                true
                                            )
                                            .addField(
                                                "Total Episodes:",
                                                `\`${s1.episodes} episodes (${s1.duration})\``,
                                                true
                                            )
                                            .addField(
                                                "Aired:",
                                                `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``,
                                                true
                                            )
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField(
                                                "Score on MAL:",
                                                `\`${s1.score} (${s1.scoreStats})\``,
                                                true
                                            )
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField(
                                                "Anime Popularity:",
                                                `\`${s1.popularity}\``,
                                                true
                                            )
                                            .addField(
                                                "Characters:",
                                                "`" +
                                                s1.characters
                                                    .map((ani) => `${ani.name} (${ani.role} character)`)
                                                    .join(` | `) +
                                                "`",
                                                true
                                            )
                                            .addField(
                                                `Trailer:`,
                                                `**[${s1.title}'s Trailer](${s1.trailer})**`,
                                                true
                                            );

                                        return thing.edit({embeds: [embed]});
                                    });
                            }
                            if (interaction.values[0] == 3) {
                                malScraper
                                    .getInfoFromName(data[3].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");

                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }
                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField(
                                                "Alternative Titles:",
                                                `\`${s1.englishTitle}, ${s1.japaneseTitle}\``,
                                                true
                                            )
                                            .addField(
                                                "Total Episodes:",
                                                `\`${s1.episodes} episodes (${s1.duration})\``,
                                                true
                                            )
                                            .addField(
                                                "Aired:",
                                                `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``,
                                                true
                                            )
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField(
                                                "Score on MAL:",
                                                `\`${s1.score} (${s1.scoreStats})\``,
                                                true
                                            )
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField(
                                                "Anime Popularity:",
                                                `\`${s1.popularity}\``,
                                                true
                                            )
                                            .addField(
                                                "Characters:",
                                                "`" +
                                                s1.characters
                                                    .map((ani) => `${ani.name} (${ani.role} character)`)
                                                    .join(` | `) +
                                                "`",
                                                true
                                            )
                                            .addField(
                                                `Trailer:`,
                                                `**[${s1.title}'s Trailer](${s1.trailer})**`,
                                                true
                                            );

                                        return thing.edit({embeds: [embed]});
                                    });
                            }

                            if (interaction.values[0] == 4) {
                                malScraper
                                    .getInfoFromName(data[4].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");
                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }
                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField(
                                                "Alternative Titles:",
                                                `\`${s1.englishTitle}, ${s1.japaneseTitle}\``,
                                                true
                                            )
                                            .addField(
                                                "Total Episodes:",
                                                `\`${s1.episodes} episodes (${s1.duration})\``,
                                                true
                                            )
                                            .addField(
                                                "Aired:",
                                                `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``,
                                                true
                                            )
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField(
                                                "Score on MAL:",
                                                `\`${s1.score} (${s1.scoreStats})\``,
                                                true
                                            )
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField(
                                                "Anime Popularity:",
                                                `\`${s1.popularity}\``,
                                                true
                                            )
                                            .addField(
                                                "Characters:",
                                                "`" +
                                                s1.characters
                                                    .map((ani) => `${ani.name} (${ani.role} character)`)
                                                    .join(` | `) +
                                                "`",
                                                true
                                            )
                                            .addField(
                                                `Trailer:`,
                                                `**[${s1.title}'s Trailer](${s1.trailer})**`,
                                                true
                                            );

                                        return thing.edit({embeds: [embed]});
                                    });
                            }
                            if (interaction.values[0] == 5) {
                                malScraper
                                    .getInfoFromName(data[5].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");
                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }
                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField(
                                                "Alternative Titles:",
                                                `\`${s1.englishTitle}, ${s1.japaneseTitle}\``,
                                                true
                                            )
                                            .addField(
                                                "Total Episodes:",
                                                `\`${s1.episodes} episodes (${s1.duration})\``,
                                                true
                                            )
                                            .addField(
                                                "Aired:",
                                                `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``,
                                                true
                                            )
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField(
                                                "Score on MAL:",
                                                `\`${s1.score}/10 (${s1.scoreStats}) | \``,
                                                true
                                            )
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField(
                                                "Anime Popularity:",
                                                `\`${s1.popularity}\``,
                                                true
                                            )
                                            .addField(
                                                "Characters:",
                                                "`" +
                                                s1.characters
                                                    .map((ani) => `${ani.name} (${ani.role} character)`)
                                                    .join(` | `) +
                                                "`",
                                                true
                                            )
                                            .addField(
                                                `Trailer:`,
                                                `**[${s1.title}'s Trailer](${s1.trailer})**`,
                                                true
                                            );

                                        return thing.edit({embeds: [embed]});
                                    });
                            }

                            if (interaction.values[0] == 6) {
                                malScraper
                                    .getInfoFromName(data[6].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");
                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }
                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField(
                                                "Alternative Titles:",
                                                `\`${s1.englishTitle}, ${s1.japaneseTitle}\``,
                                                true
                                            )
                                            .addField(
                                                "Total Episodes:",
                                                `\`${s1.episodes} episodes (${s1.duration})\``,
                                                true
                                            )
                                            .addField(
                                                "Aired:",
                                                `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``,
                                                true
                                            )
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField(
                                                "Score on MAL:",
                                                `\`${s1.score}/10 (${s1.scoreStats}) | \``,
                                                true
                                            )
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField(
                                                "Anime Popularity:",
                                                `\`${s1.popularity}\``,
                                                true
                                            )
                                            .addField(
                                                "Characters:",
                                                "`" +
                                                s1.characters
                                                    .map((ani) => `${ani.name} (${ani.role} character)`)
                                                    .join(` | `) +
                                                "`",
                                                true
                                            )
                                            .addField(
                                                `Trailer:`,
                                                `**[${s1.title}'s Trailer](${s1.trailer})**`,
                                                true
                                            );

                                        return thing.edit({embeds: [embed]});
                                    });
                            }

                            if (interaction.values[0] == 7) {
                                malScraper
                                    .getInfoFromName(data[7].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");
                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }
                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField(
                                                "Alternative Titles:",
                                                `\`${s1.englishTitle}, ${s1.japaneseTitle}\``,
                                                true
                                            )
                                            .addField(
                                                "Total Episodes:",
                                                `\`${s1.episodes} episodes (${s1.duration})\``,
                                                true
                                            )
                                            .addField(
                                                "Aired:",
                                                `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``,
                                                true
                                            )
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField(
                                                "Score on MAL:",
                                                `\`${s1.score}/10 (${s1.scoreStats}) | \``,
                                                true
                                            )
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField(
                                                "Anime Popularity:",
                                                `\`${s1.popularity}\``,
                                                true
                                            )
                                            .addField(
                                                "Characters:",
                                                "`" +
                                                s1.characters
                                                    .map((ani) => `${ani.name} (${ani.role} character)`)
                                                    .join(` | `) +
                                                "`",
                                                true
                                            )
                                            .addField(
                                                `Trailer:`,
                                                `**[${s1.title}'s Trailer](${s1.trailer})**`,
                                                true
                                            );

                                        return thing.edit({embeds: [embed]});
                                    });
                            }
                            if (interaction.values[0] == 8) {
                                malScraper
                                    .getInfoFromName(data[8].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");
                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }
                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField(
                                                "Alternative Titles:",
                                                `\`${s1.englishTitle}, ${s1.japaneseTitle}\``,
                                                true
                                            )
                                            .addField(
                                                "Total Episodes:",
                                                `\`${s1.episodes} episodes (${s1.duration})\``,
                                                true
                                            )
                                            .addField(
                                                "Aired:",
                                                `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``,
                                                true
                                            )
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField(
                                                "Score on MAL:",
                                                `\`${s1.score}/10 (${s1.scoreStats}) | \``,
                                                true
                                            )
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField(
                                                "Anime Popularity:",
                                                `\`${s1.popularity}\``,
                                                true
                                            )
                                            .addField(
                                                "Characters:",
                                                "`" +
                                                s1.characters
                                                    .map((ani) => `${ani.name} (${ani.role} character)`)
                                                    .join(` | `) +
                                                "`",
                                                true
                                            )
                                            .addField(
                                                `Trailer:`,
                                                `**[${s1.title}'s Trailer](${s1.trailer})**`,
                                                true
                                            );

                                        return thing.edit({embeds: [embed]});
                                    });
                            }
                            if (interaction.values[0] == 9) {
                                malScraper
                                    .getInfoFromName(data[9].name)

                                    .then(async (s1) => {
                                        const {getColorFromURL} = require("color-thief-node");
                                        if (s1.trailer === undefined) {
                                            s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
                                        }

                                        if (!s1.broadcast) {
                                            s1.broadcast = "?";
                                        }
                                        const dominantColor = await getColorFromURL(s1.picture);
                                        let embed = new MessageEmbed()
                                            .setTitle(s1.title)
                                            .setURL(s1.url)
                                            .setColor(dominantColor)
                                            .setDescription(s1.synopsis)
                                            .setImage(s1.picture)
                                            .addField(
                                                "Alternative Titles:",
                                                `\`${s1.englishTitle}, ${s1.japaneseTitle}\``,
                                                true
                                            )
                                            .addField(
                                                "Total Episodes:",
                                                `\`${s1.episodes} episodes (${s1.duration})\``,
                                                true
                                            )
                                            .addField(
                                                "Aired:",
                                                `\`${s1.aired} (Broadcasted every ${s1.broadcast})\``,
                                                true
                                            )
                                            .addField(`Rating:`, `\`${s1.rating}\``, true)
                                            .addField(`Anime Status:`, `\`${s1.status}\``, true)
                                            .addField("Genres:", `\`${s1.genres.join(`, `)}\``, true)
                                            .addField(
                                                "Score on MAL:",
                                                `\`${s1.score}/10 (${s1.scoreStats}) | \``,
                                                true
                                            )
                                            .addField("Ranked:", `\`${s1.ranked}\``, true)
                                            .addField(
                                                "Anime Popularity:",
                                                `\`${s1.popularity}\``,
                                                true
                                            )
                                            .addField(
                                                "Characters:",
                                                "`" +
                                                s1.characters
                                                    .map((ani) => `${ani.name} (${ani.role} character)`)
                                                    .join(` | `) +
                                                "`",
                                                true
                                            )
                                            .addField(
                                                `Trailer:`,
                                                `**[${s1.title}'s Trailer](${s1.trailer})**`,
                                                true
                                            );

                                        return thing.edit({embeds: [embed]});
                                    });
                            }
                            if (interaction.customId == "cancel") {
                                await setTimeout(() => thing.delete(), 0);

                                return message.channel.send({
                                    embeds: [
                                        new MessageEmbed()
                                            .setColor("RED")
                                            .setDescription(
                                                `Your search "\`${args.join(
                                                    " "
                                                )}\`" has been cancelled!`
                                            ),
                                    ],
                                });
                            }
                        });
                    });
            } catch (err) {
                msg.delete();
                console.log(err);
                return message.channel.send({
                    content: `Unable to find \`${args.join(
                        " "
                    )}\` on MyAnimeList, this is most likely an error.`,
                });
            }
        });
    },
};
