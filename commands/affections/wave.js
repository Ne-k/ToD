const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "wave",
        description: "Wave your hand.",
        usage: "wave",
    },
    run: async (bot, message, args) => {
        const waifu = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/wave`).then((res) =>
            res.json()
        );
        let quotes = args.join(" ");
        waifu
            .setImage(url)
            .setTitle(`${message.author.username} waved their hand`)
            .setDescription(quotes)
            .setColor("RANDOM");

        return message.channel.send({embeds: [waifu]});
    },
};
