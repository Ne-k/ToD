const fetch = require("node-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "nom",
        description: "You can either eat another user or you can eat by your own.",
        usage: "nom",
    },
    run: async (bot, message, args) => {
        const waifuembed2 = new Discord.MessageEmbed();

        const {url} = await fetch(`${waifuAPI}/sfw/nom`).then((res) => res.json());
        let quote = args.slice(1).join(" ");
        waifuembed2
            .setImage(url)
            .setAuthor(`${message.author.username} is eating. . .`, message.author.avatarURL({dynamic: true}))
            .setDescription(quote)
            .setColor("RANDOM");

        return message.channel.send({embeds: [waifuembed2]});
    },
};
