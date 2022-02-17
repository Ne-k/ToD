const {MessageEmbed} = require("discord.js");
const os = require("os");
const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;

module.exports = {
    config: {
        name: "botinfo",
        aliases: ["binfo", "bi"],
        usage: "t;botinfo",
        description: "Get some stats on the bot",
    },
    run: async (bot, message, args) => {
        if (message.channel.type == "dm")
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

            let botembed = new MessageEmbed()
                .setDescription("Bot Information", true)
                .setColor("#ed95df")
                .setThumbnail(bot.user.displayAvatarURL)
                .setDescription("Hello! I am ToD, a unique, constantly evolving bot.")
                .setTitle("ToD (Truth or dare)", true)
                .addField("<:image_20210516_090539:843519573272690738>  Developer(s)", `\`\`\`${owner} | ${coowner}\`\`\``, true)
                .addField(`🖼️ Icon "artist"`, `\`\`\`a y o o ୨୧˚₊#0887\`\`\``, true)
                .addField("--------------------------------------------------------------------------------", `** **`)
                .addField(`• Shard ${message.guild.shard.id} Uptime`, `\`\`\`${duration}\`\`\``, true)
                .addField("• Total Shards", `\`\`\`${bot.options.shardCount}\`\`\``, true)
                .addField("⚙️ Watching", `\`\`\`${totalGuilds.toLocaleString()} Guild(s)\`\`\` `)
                .addField("• Mem Usage", `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\`\`\` `)
                .addField("• Arch", `\`\`\`${os.arch()}\`\`\` `, true)
                .addField("• Platform", ` \`\`\`${os.platform()}\`\`\` `, true)
                .addField(
                    "<:image_20210516_090705:843519935215829012> Created On",
                    `\`\`\`${moment(bot.user.createdAt).format(
                        "dddd, MMMM Do YYYY"
                    )} (${moment(bot.user.createdAt).fromNow()})\`\`\` `
                )
                .setTimestamp()
                .setImage(url);

            message.channel.send({
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                type: 2,
                                label: "Invite",
                                style: 5,
                                url: "https://nek.wtf/tod/invite",
                            },
                        ],
                    },
                ],
                embeds: [botembed],
            });
        });
    },
};
