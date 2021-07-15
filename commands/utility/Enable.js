module.exports = {
    config: {
        name: "enable",
        description: "Enable an option, such as NSFW truths and dares.",
        usage: 'emable <option>',
        aliases: ["en"],
        example: "1) enable nsfw\n2) enable",
    },
    run: async (client, message, args) => {
const {MessageEmbed} = require('discord.js')
        let prefix;
        if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await client.db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = client.default.prefix
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
        };


        try {
            let nsfwstatus = client.db.fetch(`nsfwEnabled_${message.guild.id}`)
            if (nsfwstatus == null) {
                nsfwstatus = false
            }


            if (!args[0]) {
                const AsciiTable = require('ascii-table')
                const table = new AsciiTable()
                    .setHeading('Options:', 'Enabled:')
                    .setAlign(0, AsciiTable.CENTER)
                    .setAlign(1, AsciiTable.CENTER)
                table.addRow('NSFW', nsfwstatus)


                return message.channel.send({embeds: [new MessageEmbed().setColor('RED').setDescription(`Please select an option below to enable.\nUsage: \`${prefix}enable <options>\`\n\n\`\`\`\n${table.toString()}\`\`\``)]})
            }

            /*
            To-do:
            
            - Make an "enabled by <user>" thing if the nsfw option is already enabled. // Status: Done.
            - Make user permission checking. // Status: Done
            - Add confirm and decline buttons to an embed. // Status: Done
            */



            if (args[0].toLowerCase() === 'nsfw') {
                if (!message.member.permissions.has("MANAGE_GUILD")) {
                    return message.channel.send({embeds: [new MessageEmbed().setColor('RED').setDescription('Looks like you have insignificant permissions. `MANAGE_GUILD` is needed to enable a option. <:Bonk:853033417112682574>')]})
                }




                /* Adding the message author to the database */
                if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) == null) {
                    client.db.set(`nsfwEnabledBy_${message.author.tag}_${message.guild.id}`, message.author.tag)
                }

                /* Checking if it's already enabled */
                if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) == true) {
                    return message.channel.send({embeds: [new MessageEmbed().setColor('RED').setDescription(`Looks like the NSFW truth/dares are already enabled. <a:awaugery:854870881046102067>`).setFooter(`Enabled by ${client.db.fetch(`nsfwEnabledBy_${message.author.tag}_${message.guild.id}`)}`)]})
                }

                if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) == null) {

                    return message.channel.send({
                        "components": [
                            {
                                "type": 1,
                                "components": [
                                    {
                                        "type": 2,
                                        "label": "Confirm",
                                        "style": 3,
                                        "custom_id": 'confirm'
                                    },
                                    {
                                        "type": 2,
                                        "label": "Cancel",
                                        "style": 4,
                                        "custom_id": "cancel"
                                    }
                                ]

                            }
                        ],
                        embeds: [new MessageEmbed().setColor('YELLOW').setTitle('Pending choice. . .').setDescription('You are about to enable **NSFW** truths and dares. The NSFW truths and dares will be randomly mixed into the normal questions with a small chance of showing.\n\nSelect `Confirm` if you wish to enable the NSFW questions.\nSelect `Cancel` if you wish to cancel.').setFooter(`The selection will automatically be canceled in 40 seconds.`)]
                    }).then(async msg => {
                        client.setTimeout(() => msg.delete(), 40000);
                        client.on('interactionCreate', async (interaction) => {
                            
                         

                                if (interaction.custom_id == 'confirm') {
                                    client.db.set(`nsfwEnabledBy_${message.author.tag}_${message.guild.id}`, message.author.tag)
                                    client.db.set(`nsfwEnabled_${message.guild.id}`, true)
    
                                    msg.edit({ embeds: [new client.messageembed().setColor('GREEN').setDescription('I have **enabled** `nsfw` truths and dares, you can disable this in the future by using the `disable` command.')]})
                                }
                                if (interaction.id == 'cancel') {
                                    msg.edit({ embeds: [new client.messageembed().setColor('RED').setDescription('Your selection has been canceled!')]})
                                }
                            
                           
                        })
                    })
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
}
