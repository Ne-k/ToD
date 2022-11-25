const fetch = require("cross-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
        name: "lick",
        description: "Lick a user.",
        usage: "lick @user/id",
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
            return message.channel.send("Please input a (valid) user to lick them <:Megumin_Blush:843537370107215913>");
        }

        const waifuembed2 = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/lick`).then((res) =>
            res.json()
        );
        let quotes = args.slice(1).join(" ");
        waifuembed2
            .setImage(url)
            .setTitle(`${message.author.username} licked ${user.user.tag}`)
            .setDescription(quotes)
            .setColor("RANDOM");

        return message.channel.send({embeds: [waifuembed2]});
    },
};
