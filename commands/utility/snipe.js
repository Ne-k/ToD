const Discord = require("discord.js");

module.exports = {
    config: {
        name: "snipe",
        usage: "t;snipe",
        description: "Snipe a deleted message.",
    },
    run: async (bot, message, args) => {
        try {

        let channelsnipe = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find((c) => c.name.toLowerCase() === args.join(" ").toLocaleLowerCase()) || message.channel.id;
        let snip = bot.snipe.get(channelsnipe);
            let unix = Math.floor(snip.date / 1000)
        if (!snip) return message.channel.send("🔴 No deleted messages found.");
        let embed = new Discord.MessageEmbed()
            .setColor("#eaecf3")
            .setThumbnail(snip.avatar)
            .setDescription(`<@${snip.user.id}> | ${snip.user.tag} (${snip.user.id})\ndeleted the message <t:${unix}:R> (<t:${unix}:F>)\n\n\`\`\`${snip.msg ? snip.msg : 'No message found maybe a file was attached.'}\`\`\``)
        if (snip.image) {
            setTimeout(() => {
                message.channel.send({content: snip.image});
            }, 1000)

        }

        return message.channel.send({embeds: [embed]});
        } catch (err) {
            console.log(err);
        }
    },
};
