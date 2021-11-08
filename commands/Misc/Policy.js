const {MessageEmbed} = require("discord.js");

module.exports = {
    config: {
        name: "policy",
        usage: "t;policy",
        description:
            "Shows ToD (truth or dare)'s private policy stating if information is stored or collected.",
    },
    run: async (bot, message, args) => {
        let Sembed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Tod's private policy:")
            .setDescription(
                "The entire private policy has been moved to this [github repo](https://nek.wtf/policy)."
            );
        message.channel.send({embeds: [Sembed]});
    },
};
