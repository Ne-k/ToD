const Discord = require("discord.js");
const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
module.exports = {
        name: "bite",
        description: "Bite another user..",
        examples: "1) <prefix>bite @user/id\n2) <prefix>bite @nek",
        usage: "bite @user/id",
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
            return message.channel.send("Please input a (valid) user to bite with them <:Megumin_Blush:843537370107215913>");
        }

        let quotes = args.slice(1).join(" ");

        const {url} = await fetch(`${waifuAPI}/sfw/bite`).then((res) => res.json());

        const waifu = new Discord.EmbedBuilder()
            .setTitle(`${message.author.username} has bitten ${user.user.tag}`)
            .setDescription(quotes)
            .setImage(url)
            .setColor("RANDOM");
        return message.channel.send({embeds: [waifu]});
    },
};
