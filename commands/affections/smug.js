const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {

        name: "smug",
        description: "Show the expression smug.",
        usage: "smug",
    run: async (bot, message, args) => {
        const waifu = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/smug`).then((res) => res.json());
        let quotes = args.join(" ");
        waifu
            .setImage(url)
            .setTitle(`${message.author.username} has a smug on their face.`)
            .setDescription(quotes)
            .setColor("RANDOM");

        return message.channel.send({embeds: [waifu]});
    },
};
