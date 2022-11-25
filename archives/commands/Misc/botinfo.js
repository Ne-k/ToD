const {MessageEmbed, EmbedBuilder} = require("discord.js");
const os = require("os");
const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;

module.exports = {
        name: "botinfo",
        aliases: ["binfo", "bi", "stats"],
        usage: "t;botinfo",
        description: "Get some stats on the bot",

    run: async (bot, message, args) => {
        if (message.channel.type === "dm")
            return message.channel.send(
                "❌ | This command command is disabled for DMs, please use this within a server!"
            );

        const fetch = require("node-fetch");
        const Discord = require("discord.js");
        const waifuAPI = "https://waifu.pics/api";
        const moment = require("moment");
        require("moment-duration-format");
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        let owner =  await bot.users.fetch("942798261536841730").then(x => x.tag );
        let coowner = await bot.users.fetch("700609775838298113").then(x => x.tag);
        const {url} = await fetch(`${waifuAPI}/sfw/happy`).then((res) =>
            res.json()
        );

        const promises = [
            await bot.shard.fetchClientValues("guilds.cache.size"),
            await bot.shard.broadcastEval((bot) => bot.guilds.cache.size),
        ];

        Promise.all(promises).then((results) => {
            const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
            const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

            let botembed = new EmbedBuilder()
                .setDescription("Command currently disabled.")


            message.channel.send({
                embeds: [botembed],
            });
        });
    },
};
