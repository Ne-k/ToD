const fetch = require("node-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "shinobu",
        usage: "shinobu",
        description: "Image of shinobu from an anime I forgot.",
    },
    run: async (bot, message, args) => {
        const embed = new Discord.MessageEmbed();

        const {url} = await fetch(`${waifuAPI}/sfw/shinobu`).then((res) =>
            res.json()
        );

        embed.setImage(url).setColor("RANDOM").setDescription("Shinobu");
        message.channel.send({embeds: [embed]});
    },
};
