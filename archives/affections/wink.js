const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "wink",
        description: "Close and swiftly open the eye, usually to show that something is a joke or a secret or as a warning or welcoming gesture.",
        usage: "wink",
    },
    run: async (bot, message, args) => {
        const waifu = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/wink`).then((res) => res.json());
        let quotes = args.join(" ");
        waifu
            .setImage(url)
            .setTitle(`${message.author.username} winked`)
            .setDescription(quotes)
            .setColor("RANDOM");

        return message.channel.send({embeds: [waifu]});
    },
};
