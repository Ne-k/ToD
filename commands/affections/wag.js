const fetch = require("cross-fetch");
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "wag",
        description: "Wag your fictional tail.",
        usage: "wag",
    },
    run: async (bot, message, args) => {
        const waifu = new Discord.EmbedBuilder();

        const {link} = await fetch(
            `https://purrbot.site/api/img/sfw/tail/gif`
        ).then((res) => res.json());
        let quotes = args.join(" ");
        waifu
            .setImage(link)
            .setTitle(`${message.author.username} wagged their tail.`)
            .setDescription(quotes)
            .setColor("RANDOM");

        return message.channel.send({embeds: [waifu]});
    },
};
