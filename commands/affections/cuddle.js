const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
        name: "cuddle",
        description: "Cuddle with a specified user.",
        examples: "1) <prefix>cuddle @user/id\n2) <prefix>cuddle @nek",
        usage: "cuddle @user/id",
    run: async (bot, message, args) => {
        const {url} = await fetch(`${waifuAPI}/sfw/cuddle`).then((res) => res.json());
        let quotes = args.slice(1).join(" ");

        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.members.cache.find((m) =>
                [m.user.username, m.displayName, m.user.tag].some(
                    (e) => e.toLowerCase() === args.join(" ").toLowerCase()
                )
            );
        if (!user) {
            let embed = new Discord.EmbedBuilder()
                .setColor("RANDOM")
                .setImage(url)
                .setTitle(`${message.author.username} wants to cuddle. . .`)
            return message.channel.send(embed);
        }

        const waifu = new Discord.EmbedBuilder();

        waifu
            .setImage(url)
            .setTitle(`${message.author.username} wants to cuddle with ${user.user.tag}`)
            .setColor("RANDOM")
            .setDescription(quotes);

        return message.channel.send({embeds: [waifu]});
    },
};
