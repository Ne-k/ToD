module.exports = {
    config: {
        name: "enable",
        description: "Enable an option, such as NSFW truths and dares.",
        usage: "emable <option>",
        aliases: ["en"],
        example: "1) enable nsfw\n2) enable",
    },
    run: async (client, message, args) => {

        const {MessageEmbed, Permissions} = require("discord.js");

        if (message.author.bot || message.channel.type === "dm") return;
        let prefix = process.env.PREFIX;

        try {
            let nsfwstatus = client.db.fetch(`nsfwEnabled_${message.guild.id}`);
            if (nsfwstatus == null) {
                nsfwstatus = false;
            }

            let scamstatus = client.db.fetch(`antiscamEnabled_${message.guild.id}`);
            scamstatus = scamstatus === false || scamstatus == null;


            let muteRole = client.db.fetch(`mutedRole_${message.guild.id}`);
            muteRole = !!muteRole;
            switch(args[0].toLowerCase()) {
                case "antiscam":
                    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
                        return message.channel.send({
                            embeds: [
                                new MessageEmbed()
                                    .setColor("RED")
                                    .setDescription(
                                        "Looks like you have insignificant permissions. `MANAGE_GUILD` is needed to enable a option. <:Bonk:853033417112682574>"
                                    ),
                            ],
                        });
                    }

                    if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) && !message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
                        return message.channel.send({embeds: [new MessageEmbed().setColor('RED').setDescription("I don't have the permission `MANAGE_MESSAGES` and `MANAGE_ROLES`\n I need these permissions to delete detected scam links from the chats.")]})
                    }


                    if (client.db.fetch(`antiscamEnabled_${message.guild.id}`) === true) {
                        client.db.set(`antiscamEnabled_${message.guild.id}`, false)
                        return message.channel.send({embeds: [new MessageEmbed().setColor('GREEN').setDescription('Anti scam is now enabled!').setFooter({text: 'To enable automute, enable the muterole option.'}).setThumbnail(message.author.avatarURL({dynamic: true}))]})
                    }

                    if (client.db.fetch(`antiscamEnabled_${message.guild.id}`) === false || client.db.fetch(`antiscamEnabled_${message.guild.id}`) == null) {
                        return message.channel.send({
                            content: 'Uh oh, looks like Anti-Scam is already enabled.'
                        });
                    }
                    break;
                case "nsfw":
                    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
                        return message.channel.send({
                            embeds: [
                                new MessageEmbed()
                                    .setColor("RED")
                                    .setDescription(
                                        "Looks like you have insignificant permissions. `MANAGE_GUILD` is needed to enable a option. <:Bonk:853033417112682574>"
                                    ),
                            ],
                        });
                    }

                    /* Adding the message author to the database */
                    if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) == null) {
                        client.db.set(
                            `nsfwEnabledBy_${message.author.tag}_${message.guild.id}`,
                            message.author.tag
                        );
                    }

                    /* Checking if it's already enabled */
                    if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) === true) {
                        return message.channel.send({
                            embeds: [
                                new MessageEmbed()
                                    .setColor("RED")
                                    .setDescription(
                                        `Looks like the NSFW truth/dares are already enabled. <a:awaugery:854870881046102067>`
                                    )
                                    .setFooter({text:
                                        `Enabled by ${client.db.fetch(
                                            `nsfwEnabledBy_${message.author.tag}_${message.guild.id}`
                                        )}`}
                                    ),
                            ],
                        });
                    }

                    if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) == null || client.db.fetch(`nsfwEnabled_${message.guild.id}`) === false) {
                        return message.channel
                            .send({
                                components: [
                                    {
                                        type: 1,
                                        components: [
                                            {
                                                type: 2,
                                                label: "Confirm",
                                                style: 3,
                                                custom_id: "confirm",
                                            },
                                            {
                                                type: 2,
                                                label: "Cancel",
                                                style: 4,
                                                custom_id: "cancel",
                                            },
                                        ],
                                    },
                                ],
                                embeds: [
                                    new MessageEmbed()
                                        .setColor("YELLOW")
                                        .setTitle("Pending choice. . .")
                                        .setDescription(
                                            "You are about to enable **NSFW** truths and dares. The NSFW truths and dares will be randomly mixed into the normal questions with a small chance of showing.\n\nSelect `Confirm` if you wish to enable the NSFW questions.\nSelect `Cancel` if you wish to cancel."
                                        )
                                        .setFooter({text:
                                            `The selection will automatically be cancelled in 40 seconds.`
                                        }),
                                ],
                            })
                            .then(async (msg) => {
                                setTimeout(() => msg.delete(), 40000);
                                client.on("interactionCreate", async (interaction) => {
                                    if (interaction.guildId !== message.guild.id) return;
                                    if (interaction.user.id === message.author.id) {
                                        if (interaction.customId === "confirm") {
                                            setTimeout(() => msg.delete(), 0);
                                            client.db.set(`nsfwEnabled_${message.guild.id}`, true);
                                            message.channel
                                                .send({
                                                    embeds: [
                                                        new MessageEmbed()
                                                            .setColor("GREEN")
                                                            .setDescription(
                                                                "I have successfully enabled NSFW truths and dares."
                                                            )
                                                            .setFooter({text:
                                                                "This message will automatically delete in 30 seconds"
                                                            }),
                                                    ],
                                                })
                                                .then((msg) => setTimeout(() => msg.delete(), 5000));
                                        }
                                        if (interaction.customId === "cancel") {
                                            setTimeout(() => msg.delete(), 0);
                                            message.channel
                                                .send({
                                                    embeds: [
                                                        new MessageEmbed()
                                                            .setColor("DARK_NAVY")
                                                            .setDescription("Your selection has been cancelled!")
                                                            .setFooter({text:
                                                                "This message will automatically delete in 30 seconds"
                                                            }),
                                                    ],
                                                })
                                                .then((My_cock) =>
                                                    setTimeout(() => My_cock.delete(), 5000)
                                                );
                                        }
                                    }
                                });
                            });
                    }
                    break;
                default:
                    const AsciiTable = require("ascii-table");
                    const table = new AsciiTable()
                        .setHeading("Options:", "Enabled:")
                        .setAlign(0, AsciiTable.CENTER)
                        .setAlign(1, AsciiTable.CENTER);
                    table.addRow("NSFW", nsfwstatus);
                    table.addRow("AntiScam", scamstatus);
                    table.addRow("MuteRole", muteRole);

                    return message.channel.send({
                        embeds: [
                            new MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    `Please select an option below to enable.\nUsage: \`${prefix}enable <options>\`\n\n\`\`\`\n${table.toString()}\`\`\``
                                ),
                        ],
                    });

            }

        } catch (e) {
            console.log(e);
        }
    },
};
