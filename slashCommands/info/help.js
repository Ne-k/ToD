const {ApplicationCommandType, EmbedBuilder} = require("discord.js");
module.exports = {
    name: 'help',
    description: "All the bot commands are listed here in case you don't feel like looking at the interaction menu",
    cooldown: 3000,
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Command Help Panel")
                    .setDescription(
                        `<:pink_dash:1045563536283287562> __**Anime Corner**__:\n\`aniquote\`\, \`anisearch\`\, \`azurlane\`\, \`awoo\`\, \`booru\`\, \`foxes\`\, \`kitsune\`\, \`megumin\`\, \`neko\`, \`nekopara\`\, \`okami\`\, \`rem\`\, \`senko\`, \`sfwanime\`\, \`shinobu\`\, \`waifugen\`\n\n
<:orange_dash:1045563279055011920> __**Utility**__:\n\`disable\`, \`enable\`, \`help\`\, \`snipe\`\n\n<:purple_dash:1045563559024808017> __**Miscellaneous**__:\n\`botinfo\`\, \`invite\`\, \`ping\`\, \`policy\`\, \`suggest\`\n\n<:red_dash:1045563585813823488> __**Main Features**__:\n\`truth\`\, \`dare\`\, \`fact\`\, \`why\`\, \`wyr\`\n\n<:yellow_dash:1045563510874185738> __**Affections / Roleplay**__\n\`bite\`\, \`blush\`\, \`bonk\`\, \`cry\`\, \`cuddle\`\, \`dance\`\, \`feed\`\, \`glomp\`\, \`happy\`\, \`hug\`\, \`kiss\`, \`lick\`\, \`nom\`\, \`pat\`\, \`poke\`\, \`pout\`\, \`punch\`\, \`slap\`\, \`smile\`\, \`smug\`\, \`tickle\`\, \`wag\`\, \`stare\`\, \`wave\`\, \`wink\`\n\n__**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                    )
                    .setFooter({text:
                            client.commands.size + ` total commands.`
                    }),
            ],
        })

    }
    }