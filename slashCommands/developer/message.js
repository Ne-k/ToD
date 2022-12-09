const { ApplicationCommandType, ApplicationCommandOptionType, EmbedBuilder} = require("discord.js");

module.exports = {
    name: 'message',
    description: "Dm a message to a user through the bot",
    type: ApplicationCommandType.ChatInput,
    dev: true,
    options: [
        {
            name: "user_id",
            description: "The user you wish to dm",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "message",
            description: "The message you wish to send",
            type: ApplicationCommandOptionType.String,
            required: true,
        }
        ],
    run: async (client, interaction) => {
        const user = interaction.options.getString("user_id");
        const message = interaction.options.getString("message");

        client.users.fetch(user).then((user) => {
            user.send({
                embeds: [
                    new EmbedBuilder()
                        .setDescription(`Hello! You have received a message from my developer(s):\n\n\`\`\`${message}\`\`\``)
                        .setColor("Green")
                        .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
                        .setFooter({
                            text: "Please note that you aren't able to respond to this message."
                        })
                ]
            });
            interaction.reply({content: "Message sent!", ephemeral: true});
        })

    }
}