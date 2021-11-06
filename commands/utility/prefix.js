const db = require("quick.db");
const Discord = require("discord.js");
const {MessageEmbed, Permissions} = require("discord.js");

module.exports = {
    config: {
        name: "prefix",
        description: "Chnage/Know The server's Prefix or the Global Prefix",
        usage: "prefix <new prefix/reset>",
        example: "1) prefix = \n2) prefix reset",
        aliases: ["prefix", "setprefix"],
    },

    run: async (client, message, args) => {
        return message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setColor("RED")
                    .setDescription(
                        `Sadly, this command is disabled due to discord planning to remove message content privileges for verified bots. In a couple months, the \`t;\` prefix will be replaced with a mention prefix and will have slash commands (soon). More information about this can be found at https://support-dev.discord.com/hc/en-us/articles/4404772028055 . `
                    ),
            ],
        });
    },
};
