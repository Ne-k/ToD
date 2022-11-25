const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
        name: "dance",
        description: "Just dance.",
        usage: "dance",
    run: async (bot, message, args) => {
        const waifu = new Discord.EmbedBuilder();
        let quotes = args.join(" ");
        const {url} = await fetch(`${waifuAPI}/sfw/dance`).then((res) => res.json());

        waifu
            .setImage(url)
            .setTitle(`${message.author.username} is dancing`)
            .setDescription(quotes)
            .setColor("RANDOM");

        return message.channel.send({embeds: [waifu]});
    },
};
