const {MessageEmbed} = require("discord.js");

module.exports = {
    config: {
        name: "support",
        aliases: ["server", "discord"],
        usage: "t;support",
        description:
            "Sends ToD support server, along with a server that helped with the development if ToD.",
    },
    run: async (bot, message, args) => {
        let Sembed = new MessageEmbed()
            .setColor("#7975a8")
            .setDescription("**[Support Server Invite](https://nek.wtf/support)**")
            .setTimestamp()
            .setThumbnail(bot.user.displayAvatarURL());

        return message.channel.send({embeds: [Sembed]});
    },
};
