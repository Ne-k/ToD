const fetch = require("node-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {

        name: "awoo",
        description: "Show fox girls.",
        usage: "awoo",

    run: async (bot, message, args) => {
        const waifu = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/awoo`).then((res) =>
            res.json()
        );

        waifu.setImage(url).setDescription("Awoo?").setColor("Random");
        message.channel.send({embeds: [waifu]});
    },
};
