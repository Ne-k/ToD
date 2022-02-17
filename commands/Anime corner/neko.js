module.exports = {
    config: {
        name: "neko",
        usage: "neko",
        description: "Shows imagines of nekos __from waifu.pics",
    },
    run: async (bot, message, args) => {
        const fetch = require("node-fetch");
        const Discord = require("discord.js");
        try {
            fetch(`https://api.waifu.pics/sfw/neko`)
                .then((res) => res.json())
                .then((data) => {
                    const embed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setImage(data.url);
                    return message.channel.send({embeds: [embed]});
                });
        } catch (e) {
            console.log(e);
        }
    },
};
