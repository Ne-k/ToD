const {ApplicationCommandType, EmbedBuilder} = require("discord.js");
const wyr = require("wyr").default;

module.exports = {
    name: 'wyr',
    description: "Would you rather do <question 1> or <question 2>",
    type: ApplicationCommandType.ChatInput,
    category: "fun",
    cooldown: 3000,
    run: async (client, interaction) => {

        wyr().then((response) => {
            // or .then(console.log) hehe
            interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor("Blurple")
                            .setTitle('Let us play Would You rather!')
                            .setDescription(
                                `Would you rather:\n\n🔵 - \`${response.blue.question}\`\nor\n🔴 - \`${response.red.question}\``
                            ),
                    ],
                fetchReply: true
                }).then((msg) => {
                    msg.react("🔵");
                    msg.react("🔴");
                });
        });
}
    }