const {MessageEmbed} = require("discord.js");
const fetch = require("cross-fetch");
module.exports = {
        name: "invite",
        aliases: ["links", "sites"],
        usage: "t;invite",
        description: "Sends the bot's invite links.",
    run: async (bot, message, args) => {
        const {link} = await fetch(
            `https://purrbot.site/api/img/sfw/neko/gif`
        ).then((res) => res.json());

        let Sembed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(
                "**[Click here to invite ToD bot](https://discord.com/oauth2/authorize?client_id=943187676549513236&scope=bot+applications.commands&permissions=1531427810624)**\n **|** <:Orange_dash:843518612747976714> [Development Server](https://discord.gg/bRtYYHKZgt)\n)"
            )
            .setImage(link);
        return message.channel.send({
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            label: "Invite ToD",
                            style: 5,
                            url: "https://discord.com/oauth2/authorize?client_id=943187676549513236&scope=bot+applications.commands&permissions=1531427810624e",
                        },
                    ],
                },
            ],
            embeds: [Sembed],
        });
    },
};
