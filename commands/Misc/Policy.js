const {MessageEmbed} = require("discord.js");

module.exports = {
        name: "policy",
        usage: "t;policy",
        description:
            "Shows ToD (truth or dare)'s private policy stating if information is stored or collected.",
    run: async (bot, message, args) => {
        let Sembed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("ToD's private policy:")
            .setDescription(
                "The entire private policy has been moved to this [github repo](https://github.com/Ne-k/Docs/blob/main/Truth%20Or%20dare/readme.md)."
            );
        message.channel.send({embeds: [Sembed]});
    },
};
