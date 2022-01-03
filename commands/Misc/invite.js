const {MessageEmbed} = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
    config: {
        name: "invite",
        aliases: ["links", "sites"],
        usage: "t;invite",
        description: "Sends the bot's invite links.",
    },
    run: async (bot, message, args) => {
        const {link} = await fetch(
            `https://purrbot.site/api/img/sfw/neko/gif`
        ).then((res) => res.json());

        let Sembed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(
                "**[Click here to invite ToD bot](https://nek.wtf/tod/invite)**\n\n<:Purple_dash:843518550966796309> [Top.gg](https://top.gg/bot/752306970467237970) **|** <:Orange_dash:843518612747976714> [Development Server](https://discord.gg/PVC35NbeTD) **|** <:Red_dash:843518522209992724> [Website](https://nek.wtf/tod)"
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
                            url: "https://nek.wtf/tod/invite",
                        },
                    ],
                },
            ],
            embeds: [Sembed],
        });
    },
};
