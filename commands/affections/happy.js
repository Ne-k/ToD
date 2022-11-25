const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
        name: "happy",
        description: "Show the expression happy.",
        usage: "happy.",
    run: async (bot, message, args) => {
        const waifu = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/happy`).then((res) => res.json());
        let quotes = args.join(" ");
        waifu
            .setImage(url)
            .setTitle(`${message.author.username} seems pretty happy.`)
            .setDescription(quotes)
            .setColor("RANDOM");

        return message.channel.send({embeds: [waifu]});
    },
};
