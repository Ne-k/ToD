const fetch = require("node-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "cry",
        description: "Show the expression cry.",
        usage: "cry",
    },
    run: async (bot, message, args) => {
        const waifu = new Discord.MessageEmbed();

        const {url} = await fetch(`${waifuAPI}/sfw/cry`).then((res) => res.json());
        let quotes = args.join(" ");

        waifu
            .setImage(url)
            .setTitle(`${message.author.username} is crying`)
            .setColor("RANDOM")
            .setDescription(quotes);

        return message.channel.send({embeds: [waifu]});
    },
};
