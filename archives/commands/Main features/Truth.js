const Discord = require("discord.js");

module.exports = {
        name: "truth",
        usage: "t;truth",
        description: "Sends a truth question from the game Truth or dare.",
    run: async (client, message, args) => {
        try {
            if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) === true) {
                let embed = new Discord.EmbedBuilder()
                    .setColor("#eaecf3")
                    .setTitle("Dare")
                    .setDescription(Math.random() > 0.6 ? client.tod.nsfwTruth[Math.floor(Math.random() * client.tod.nsfwTruth.length)] : client.tod.Truth[Math.floor(Math.random() * client.tod.Truth.length)]);

                return message.channel
                    .send({
                        components: [
                            {
                                type: 1,
                                components: [
                                    {
                                        type: 2,
                                        label: "Information",
                                        style: 5,
                                        url: "https://anime.services/u/​​‌‌​‌​‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌​​​​​‌‌​​​‌​‌‌​‌‌​‌​‌​​​‌‌‌​‌‌‌​​‌​",
                                        //"custom_id": 'ToD_Information'
                                    },
                                    {
                                        type: 2,
                                        label: "Rules",
                                        style: 5,
                                        url: "https://waifus.shop/u/​‌‌‌​​‌​​‌‌​‌‌​‌​‌‌​​‌‌​​‌‌​‌‌​‌​‌‌‌​​​‌​‌‌‌​​​‌​‌‌‌​​​‌​‌‌​​‌‌‌",
                                        // "custom_id": "ToD_Rules"
                                    },
                                ],
                            },
                        ],
                        embeds: [embed],
                    })
                    .then((m) => {
                        client.on("interactionCreate", async (interaction) => {
                            if (interaction.customId === "ToD_Information") {
                                await interaction.reply({
                                    content:
                                        "What exactly is Truth or Dare?\n\nTruth or Dare is one of the greatest party games for taking casual get-togethers to the next level. It brings even the most boring events to life and adds a fun, personal, and intimate touch to social engagements with friends. It is, without a doubt, the iconic party game for any party or sleepover! What's the best thing about Truth or Dare? The opportunity to get to know the other = players on a more intimate level. And, of course, dare them to make a total fool of themselves. So don't wait any longer and begin this entertaining game to put your friends or family to the test! All you need is our app, which contains hundreds of amusing, personal, and adventurous questions and challenges.",
                                    ephemeral: true,
                                });
                            }
                            if (interaction.customId === "ToD_Rules") {
                                await interaction.reply({
                                    content: `Players must either undertake the dare or answer the question truthfully. The answers must be unrelated to the game. After having the piece of paper read to them, players are not allowed to change their minds about picking "truth" or "dare." "Passing" is an option, but it comes with a penalty. A true pass earns a free dare. If you pass on a dare, you receive a free truth. In a current version of the game, the player is asked, 'Truth, Dare, Kiss, or Swear?' __But the rules can differ depending on who plays it and because this is Discord so you won't be able to do most things.__.`,
                                    ephemeral: true,
                                });
                            }
                        });
                    });
            }

            if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) == null) {
                //-----------------
                let random_footer = [
                    "To add more truth responses, run the suggest command and input the you want to add.",
                    "Tip: Use the ENABLE command for NSFW truth questions.",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                    " ",
                ];
                let result = Math.floor(Math.random() * random_footer.length);

                const {getColorFromURL} = require("color-thief-node");

                const dominantColor = await getColorFromURL(
                    message.author.avatarURL({format: "png"})
                );

                // Main
                return message.channel
                    .send({
                        components: [
                            {
                                type: 1,
                                components: [
                                    {
                                        type: 2,
                                        label: "Information",
                                        style: 5,
                                        url: "https://anime.services/u/​​‌‌​‌​‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌​​​​​‌‌​​​‌​‌‌​‌‌​‌​‌​​​‌‌‌​‌‌‌​​‌​",
                                        //"custom_id": 'ToD_Information'
                                    },
                                    {
                                        type: 2,
                                        label: "Rules",
                                        style: 5,
                                        url: "https://waifus.shop/u/​‌‌‌​​‌​​‌‌​‌‌​‌​‌‌​​‌‌​​‌‌​‌‌​‌​‌‌‌​​​‌​‌‌‌​​​‌​‌‌‌​​​‌​‌‌​​‌‌‌",
                                        // "custom_id": "ToD_Rules"
                                    },
                                ],
                            },
                        ],
                        embeds: [
                            new Discord.MessageEmbed()
                                .setFooter(random_footer[result])
                                .setColor(dominantColor)
                                .setTitle("Truth")
                                .setDescription(
                                    client.tod.Truth[
                                        Math.floor(Math.random() * client.tod.Truth.length)
                                        ]
                                ),
                        ],
                    })
                    .then((m) => {
                        let random_footer = [
                            "To add more truth responses, run the suggest command and input the truth you want to add.",
                            "Tip: Use the ENABLE command for NSFW truth questions. ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                            " ",
                        ];
                        let result = Math.floor(Math.random() * random_footer.length);

                        client.on("interactionCreate", async (interaction) => {
                            if (interaction.customId === "ToD_Information") {
                                await interaction.reply({
                                    content:
                                        "What exactly is Truth or Dare?\n\nTruth or Dare is one of the greatest party games for taking casual get-togethers to the next level. It brings even the most boring events to life and adds a fun, personal, and intimate touch to social engagements with friends. It is, without a doubt, the iconic party game for any party or sleepover! What's the best thing about Truth or Dare? The opportunity to get to know the other = players on a more intimate level. And, of course, dare them to make a total fool of themselves. So don't wait any longer and begin this entertaining game to put your friends or family to the test! All you need is our app, which contains hundreds of amusing, personal, and adventurous questions and challenges.",
                                    ephemeral: true,
                                });
                            }
                            if (interaction.customId === "ToD_Rules") {
                                await interaction.reply({
                                    content: `Players must either undertake the dare or answer the question truthfully. The answers must be unrelated to the game. After having the piece of paper read to them, players are not allowed to change their minds about picking "truth" or "dare." "Passing" is an option, but it comes with a penalty. A true pass earns a free dare. If you pass on a dare, you receive a free truth. In a current version of the game, the player is asked, 'Truth, Dare, Kiss, or Swear?' __But the rules can differ depending on who plays it and because this is Discord so you won't be able to do most things.__.`,
                                    ephemeral: true,
                                });
                            }
                        });
                    });
            }
            //#eaecc3
        } catch (e) {
            console.log(e);
            let random_footer = [
                "To add more truth responses, run the suggest command and input the you want to add.",
                "Tip: Use the ENABLE command for NSFW truth questions.",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
            ];
            let result = Math.floor(Math.random() * random_footer.length);

            const {getColorFromURL} = require("color-thief-node");

            const dominantColor = await getColorFromURL(
                message.author.avatarURL({format: "png"})
            );

            // Main
            return message.channel
                .send({
                    components: [
                        {
                            type: 1,
                            components: [
                                {
                                    type: 2,
                                    label: "Information",
                                    style: 5,
                                    url: "https://anime.services/u/​​‌‌​‌​‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌​​​​​‌‌​​​‌​‌‌​‌‌​‌​‌​​​‌‌‌​‌‌‌​​‌​",
                                    //"custom_id": 'ToD_Information'
                                },
                                {
                                    type: 2,
                                    label: "Rules",
                                    style: 5,
                                    url: "https://waifus.shop/u/​‌‌‌​​‌​​‌‌​‌‌​‌​‌‌​​‌‌​​‌‌​‌‌​‌​‌‌‌​​​‌​‌‌‌​​​‌​‌‌‌​​​‌​‌‌​​‌‌‌",
                                    // "custom_id": "ToD_Rules"
                                },
                            ],
                        },
                    ],
                    embeds: [
                        new Discord.MessageEmbed()
                            .setFooter(random_footer[result])
                            .setColor(dominantColor)
                            .setTitle("Truth")
                            .setDescription(
                                client.tod.Truth[
                                    Math.floor(Math.random() * client.tod.Truth.length)
                                    ]
                            ),
                    ],
                })
                .then((m) => {
                    client.on("interactionCreate", async (interaction) => {
                        if (interaction.customId === "ToD_Information") {
                            await interaction.reply({
                                content:
                                    "What exactly is Truth or Dare?\n\nTruth or Dare is one of the greatest party games for taking casual get-togethers to the next level. It brings even the most boring events to life and adds a fun, personal, and intimate touch to social engagements with friends. It is, without a doubt, the iconic party game for any party or sleepover! What's the best thing about Truth or Dare? The opportunity to get to know the other = players on a more intimate level. And, of course, dare them to make a total fool of themselves. So don't wait any longer and begin this entertaining game to put your friends or family to the test! All you need is our app, which contains hundreds of amusing, personal, and adventurous questions and challenges.",
                                ephemeral: true,
                            });
                        }
                        if (interaction.customId === "ToD_Rules") {
                            await interaction.reply({
                                content: `Players must either undertake the dare or answer the question truthfully. The answers must be unrelated to the game. After having the piece of paper read to them, players are not allowed to change their minds about picking "truth" or "dare." "Passing" is an option, but it comes with a penalty. A true pass earns a free dare. If you pass on a dare, you receive a free truth. In a current version of the game, the player is asked, 'Truth, Dare, Kiss, or Swear?' __But the rules can differ depending on who plays it and because this is Discord so you won't be able to do most things.__.`,
                                ephemeral: true,
                            });
                        }
                    });
                });
        }
    },
};
