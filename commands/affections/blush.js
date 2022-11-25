const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "blush",
        description: "Show the expression blush.",
        usage: "Blush.",
    },
    run: async (bot, message, args) => {
        const waifu = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/blush`).then((res) =>
            res.json()
        );
        let quotes = args.join(" ");

        waifu
            .setImage(url)
            .setTitle(`${message.author.username} feels flushed`)
            .setColor("RANDOM")
            .setDescription(quotes);

        return message.channel.send({embeds: [waifu]});
    },
};
