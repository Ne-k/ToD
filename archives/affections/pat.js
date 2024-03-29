const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
        name: "pat",
        description: "Pat a specified user.",
        examples: "1) <prefix>pat @user/id\n2) <prefix>pat @nek",
        usage: "pat @user/id",
    run: async (bot, message, args) => {
        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.members.cache.find((m) =>
                [m.user.username, m.displayName, m.user.tag].some(
                    (e) => e.toLowerCase() === args.join(" ").toLowerCase()
                )
            );
        if (!user) {
            return message.channel.send("Please input a (valid) user to pat them <:Megumin_Blush:843537370107215913>");
        }

        let quotes = args.slice(1).join(" ");

        const waifu = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/pat`).then((res) => res.json());

        waifu
            .setImage(url)
            .setTitle(`${message.author.username} patted ${user.user.tag}`)
            .setDescription(quotes)
            .setColor("RANDOM");
        return message.channel.send({embeds: [waifu]});
    },
};
