const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {

        name: "smile",
        description: "Show the expression smile.",
        usage: "smile",

    run: async (bot, message, args) => {
        const waifu = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/smile`).then((res) =>
            res.json()
        );
        let quotes = args.join(" ");
        waifu
            .setImage(url)
            .setTitle(`${message.author.username} is smiling`)
            .setDescription(quotes)
            .setColor("RANDOM");

        return message.channel.send({embeds: [waifu]});
    },
};
