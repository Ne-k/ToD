const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'support',
    description: "Get the discord invite to the bot's support server",
    cooldown: 3000,
    type: ApplicationCommandType.ChatInput,
    userPerms: [],
    botPerms: [],
    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setColor('#03fcdb')
            .setTitle('Support invite')
            .setDescription("Here, you can join the support server with [this link](https://discord.gg/bRtYYHKZgt)")


        const actionRow = new ActionRowBuilder()
            .addComponents([
                new ButtonBuilder()
                    .setLabel('Support')
                    .setURL(".gg/bRtYYHKZgt")
                    .setStyle(ButtonStyle.Link)
            ])
        return interaction.reply({ embeds: [embed], components: [actionRow] })
    }
};
