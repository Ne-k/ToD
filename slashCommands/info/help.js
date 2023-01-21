const {ApplicationCommandType, EmbedBuilder} = require("discord.js");
module.exports = {
    name: 'help',
    description: "All the bot commands are listed here in case you don't feel like looking at the interaction menu",
    cooldown: 3000,
    type: ApplicationCommandType.ChatInput,
    category: "info",
    run: async (client, interaction) => {
        const commandNames = client.slashCommands.map(command => command.name);
        const commandCategories = client.slashCommands.map(command => command.category);

        const embed = new EmbedBuilder()
            .setColor("#03fcdb")
            .setTitle("Help")
            .setDescription(`All the bot commands are listed here in case you don't feel like looking at the interaction menu\n\n<:red_dash:1045563585813823488> __**Anime**__:\n${commandNames.filter(command => commandCategories[commandNames.indexOf(command)] === "anime").join(", ")}\n<:red_dash:1045563585813823488> __**Fun**__:\n${commandNames.filter(command => commandCategories[commandNames.indexOf(command)] === "fun").join(", ")}\n<:red_dash:1045563585813823488> __**Info**__:\n${commandNames.filter(command => commandCategories[commandNames.indexOf(command)] === "info").join(", ")}\n<:red_dash:1045563585813823488> __**Misc**__:\n${commandNames.filter(command => commandCategories[commandNames.indexOf(command)] === "utility").join(", ")}, ${commandNames.filter(command => commandCategories[commandNames.indexOf(command)] === "configuration").join(", ")}`)


        return interaction.reply({embeds: [embed]});
    }
    }