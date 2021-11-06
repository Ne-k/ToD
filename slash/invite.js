module.exports = {
    slash: {
        name: "invite",
        description: "Get my invite link.",
        commandOptions: null,
    },
    global: true,

    async execute(interaction, int, client) {
        if (!int.isCommand()) return;
        const {MessageEmbed} = require("discord.js");
        const {link} = await require("node-fetch")(
            `https://purrbot.site/api/img/sfw/neko/gif`
        ).then((res) => res.json());

        let Sembed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(
                "**[Click here to invite ToD bot](hhttps://nek.wtf/invite)**\n\n**[Website](https://tod.nek.wtf)** **|** **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://nek.wtf/support)**"
            )
            .setImage(link);

        int.reply({
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            label: "Invite ToD",
                            style: 5,
                            url: "https://nek.wtf/invite",
                        },
                    ],
                },
            ],
            embeds: [Sembed],
        });
    },
};
