const {commaListsAnd} = require("common-tags");
const {MessageEmbed, Permissions} = require("discord.js");
const AsciiTable = require("ascii-table");
module.exports = {
    config: {
        name: "disable",
        description: "Disable an option, such as NSFW truths and dares.",
        usage: "disable <option>",
        example: "1) disable nsfw\n2) disable",
    },
    run: async (client, message, args) => {
        let prefix = process.env.prefix;
        try {
            let nsfwstatus = client.db.fetch(`nsfwEnabled_${message.guild.id}`);
            if (nsfwstatus == null) {
                nsfwstatus = false;
            }

            let scamstatus = client.db.fetch(`antiscamEnabled_${message.guild.id}`);
            scamstatus = scamstatus === false || scamstatus == null;

            let muteRole = client.db.fetch(`mutedRole_${message.guild.id}`);
            muteRole = !!muteRole;

            switch(args[0]) {
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

                    if (client.db.fetch(`antiscamEnabled_${message.guild.id}`) === false || client.db.fetch(`antiscamEnabled_${message.guild.id}`) == null) {
                        client.db.set(`antiscamEnabled_${message.guild.id}`, true)
                        return message.channel.send('Anti Scam is now disabled.')
                    }

                    if (client.db.fetch(`antiscamEnabled_${message.guild.id}`) === true || client.db.fetch(`antiscamEnabled_${message.guild.id}`) == null) {
                        return message.channel.send({
                            embeds: [
                                new MessageEmbed()
                                    .setColor("RED")
                                    .setDescription(
                                        `Looks like anti-scam is already enabled. <a:awaugery:854870881046102067>`
                                    )
                            ],
                        });
                    }
                    break;

                case "nsfw":
                    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
                        return message.channel.send({
                            embeds: [
                                new client.messageembed()
                                    .setColor("RED")
                                    .setDescription(
                                        "Looks like you have insignificant permissions. `MANAGE_GUILD` is needed to disable a option. <:Bonk:853033417112682574>"
                                    ),
                            ],
                        });
                    }

                    if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) == null || client.db.fetch(`nsfwEnabled_${message.guild.id}`) === false) {
                        return message.channel.send({
                            emebds: [
                                new client.messageembed()
                                    .setColor("RED")
                                    .setDescription(
                                        `Looks like the NSFW option hasn't been enabled. <a:awaugery:854870881046102067>`
                                    ),
                            ],
                        });
                    }

                    if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) === true) {
                        client.db.delete(`nsfwEnabled_${message.guild.id}`);
                        client.db.delete(
                            `nsfwEnabledBy_${message.author.tag}_${message.guild.id}`
                        );
                        return message.channel.send({
                            embeds: [
                                new client.messageembed()
                                    .setColor("GREEN")
                                    .setDescription("I have **disabled** NSFW truths and dares."),
                            ],
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
                            new client.messageembed()
                                .setColor("RED")
                                .setDescription(
                                    `Please select an option below to disable.\nUsage: \`${prefix}disable <options>\`\n\n\`\`\`\n${table.toString()}\`\`\``
                                ),
                        ],
                    });
            }

        } catch (e) {
            console.log(e);
        }
    },
};
