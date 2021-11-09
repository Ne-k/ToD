const moment = require("moment");
const {Collection, MessageEmbed, Permissions} = require("discord.js");
const ms = require("ms");
require('colors')
const db = require("quick.db");
const Timeout = new Collection();

/*
        const links = await superagent
        .get(`${process.env.scamAPI}`);

        const scam = links.body
        const scamRegex = !!scam.find((word) => {
            if(message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD) || message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return;
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(message.content);
        })
        */

module.exports = async (bot, message) => {
    if (message.author.bot || message.channel.type === "dm") return;

    if (message.content && db.fetch(`antiscamEnabled_${message.guild.id}`) === false) {


        const expression = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]?/gi;
        const regex = new RegExp(expression);
        const t = message.content;

        if (t.match(regex)) {

            const unix = Math.floor(new Date().getTime() / 1000);

            let data = await require('node-fetch')("https://anti-fish.bitflow.dev/check", {
                method: "post",
                body: JSON.stringify({message: message.content}),
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "Anti-phishing (Nek#2937 / 750510159289254008)",
                },

            }).then(res => res.json())
            if (data.match) {

                try {
                    if (db.fetch(`${message.author.id}`) === message.author.id) {
                        return;
                    } else {
                        let dataInfo = await require('node-fetch')(`https://api.phisherman.gg/v1/domains/info/${data.matches.map(m => m.domain)}`, {
                            headers: {
                                "Authorization": 'Bearer 02e6fac0-b924-48aa-b583-2d410fbc691a',
                                'Content-Type': 'application/json',
                                "User-Agent": "Anti-phishing (Nek#2937 / 750510159289254008)",
                            },
                        }).then(res => res.json())

                        if (message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD) || message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return;
                        setTimeout(() => {
                            if (message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                                message.delete()
                            }
                        }, 0);

                        if (bot.db.fetch(`mutedRole_${message.guild.id}`)) {
                            if (message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
                                const muter = bot.db.fetch(`mutedRole_${message.guild.id}`);
                                message.member.roles.add(muter);
                            }
                        }

                        let linkstat = dataInfo[`${data.matches.map(m => m.domain)}`].status

                        if (linkstat === "ONLINE") {
                            linkstat = "Active"
                        } else {
                            linkstat = "Inactive"
                        }

                        const embed = new MessageEmbed()
                            .setAuthor(`❌ ${data.matches.map(m => m.type)} link detected!`)
                            .setColor('RED')
                            .setThumbnail(message.author.avatarURL({dynamic: true}))
                            .setDescription(`<@${message.author.id}> | ${message.author.tag} (${message.author.id})\n\n\n**${linkstat}** ${data.matches.map(m => m.type.toLowerCase())} link found <t:${unix}:R>:\n ||${data.matches.map(m => m.domain)}||`)
                            .addField('Useless Domain info:', `__Domain IP__: **${dataInfo[`${data.matches.map(m => m.domain)}`].details.ip_address ? dataInfo[`${data.matches.map(m => m.domain)}`].details.ip_address : 'IP address not found.'}**\n__Asn Name__: ${dataInfo[`${data.matches.map(m => m.domain)}`].details.asn.asn_name ? dataInfo[`${data.matches.map(m => m.domain)}`].details.asn.asn_name : 'No asn name found.'}`)
                            .setImage(dataInfo[`${data.matches.map(m => m.domain)}`].details.websiteScreenshot)
                            .setFooter('To configure this, use the t;disable or t;enable commands.');
                        console.log(`Anti-Scam:`.green + ` [ Scam link prevented in ${message.guild.id} ]`)

                        db.set(`${message.author.id}`, message.author.id)
                        setTimeout(() => {
                            db.delete(`${message.author.id}`)
                        }, 6000)

                        return message.channel.send({
                            content: message.author.id,
                            embeds: [embed],
                            components: [
                                {
                                    type: 1,
                                    components: [
                                        {
                                            type: 2,
                                            label: "Delete",
                                            style: 4,
                                            custom_id: "del",
                                        },
                                    ],
                                },
                            ],
                        }).then((msg) => {
                            bot.on("interactionCreate", async (interaction) => {
                                if (interaction.customId === "del") {
                                    if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                                        interaction.reply({content: `You can't delete this message`, ephemeral: true})
                                    } else {
                                        setTimeout(() => msg.delete(), 0);
                                    }

                                }

                            })
                        })
                    }


                } catch (e) {
                    console.log(e)
                }


            }
            // interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)


        }


    } else if (!db.fetch(`antiscamEnabled_${message.guild.id}`)) {


        const expression = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]?/gi;
        const regex = new RegExp(expression);
        const t = message.content;

        if (t.match(regex)) {

            const unix = Math.floor(new Date().getTime() / 1000);

            let data = await require('node-fetch')("https://anti-fish.bitflow.dev/check", {
                method: "post",
                body: JSON.stringify({message: message.content}),
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "Anti-phishing (Nek#2937 / 750510159289254008)",
                },

            }).then(res => res.json())
            if (data.match) {

                try {
                    if (db.fetch(`${message.author.id}`) === message.author.id) {
                        return;
                    } else {
                        let dataInfo = await require('node-fetch')(`https://api.phisherman.gg/v1/domains/info/${data.matches.map(m => m.domain)}`, {
                            headers: {
                                "Authorization": 'Bearer 02e6fac0-b924-48aa-b583-2d410fbc691a',
                                'Content-Type': 'application/json',
                                "User-Agent": "Anti-phishing (Nek#2937 / 750510159289254008)",
                            },
                        }).then(res => res.json())

                        if (message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD) || message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return;
                        setTimeout(() => {
                            if (message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                                message.delete()
                            }
                        }, 0);

                        if (bot.db.fetch(`mutedRole_${message.guild.id}`)) {
                            if (message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
                                const muter = bot.db.fetch(`mutedRole_${message.guild.id}`);
                                message.member.roles.add(muter);
                            }
                        }

                        let linkstat = dataInfo[`${data.matches.map(m => m.domain)}`].status

                        if (linkstat === "ONLINE") {
                            linkstat = "Active"
                        } else {
                            linkstat = "Inactive"
                        }

                        const embed = new MessageEmbed()
                            .setAuthor(`❌ ${data.matches.map(m => m.type)} link detected!`)
                            .setColor('RED')
                            .setThumbnail(message.author.avatarURL({dynamic: true}))
                            .setDescription(`<@${message.author.id}> | ${message.author.tag} (${message.author.id})\n\n\n**${linkstat}** ${data.matches.map(m => m.type.toLowerCase())} link found <t:${unix}:R>:\n ||${data.matches.map(m => m.domain)}||`)
                            .addField('Useless Domain info:', `__Domain IP__: **${dataInfo[`${data.matches.map(m => m.domain)}`].details.ip_address ? dataInfo[`${data.matches.map(m => m.domain)}`].details.ip_address : 'IP address not found.'}**\n__Asn Route__: ${dataInfo[`${data.matches.map(m => m.domain)}`].details.asn.asn_name ? dataInfo[`${data.matches.map(m => m.domain)}`].details.asn.route : 'No route found.'}\n__Asn Name__: ${dataInfo[`${data.matches.map(m => m.domain)}`].details.asn.asn_name ? dataInfo[`${data.matches.map(m => m.domain)}`].details.asn.asn_name : 'No asn name found.'}`)
                            .setImage(dataInfo[`${data.matches.map(m => m.domain)}`].details.websiteScreenshot)
                            .setFooter('To configure this, use the t;disable or t;enable commands.');
                        console.log(`Anti-Scam:`.green + ` [ Scam link prevented in ${message.guild.id} ]`)

                        db.set(`${message.author.id}`, message.author.id)
                        setTimeout(() => {
                            db.delete(`${message.author.id}`)
                        }, 6000)

                        return message.channel.send({
                            content: message.author.id,
                            embeds: [embed],
                            components: [
                                {
                                    type: 1,
                                    components: [
                                        {
                                            type: 2,
                                            label: "Delete",
                                            style: 4,
                                            custom_id: "del",
                                        },
                                    ],
                                },
                            ],
                        }).then((msg) => {
                            bot.on("interactionCreate", async (interaction) => {
                                if (interaction.customId === "del") {
                                    if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                                        interaction.reply({content: `You can't delete this message`, ephemeral: true})
                                    } else {
                                        setTimeout(() => msg.delete(), 0);
                                    }

                                }

                            })
                        })
                    }


                } catch (e) {
                    console.log(e)
                }


            }
            // interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)


        }


    }


    let prefix = process.env.prefix;
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    let cmdExecuted = moment().format("LLL");

    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();


    try {


        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let cmd = args.shift().toLowerCase();

        const commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
        if (commandfile) {
            let timeout = ms("3000");

            if (await Timeout.has(`${command.name}${message.author.id}`)) {
                return message.channel
                    .send({
                        embeds: [
                            new MessageEmbed()
                                .setDescription(
                                    `Hey ` +
                                    "(・`ω´・)" +
                                    ` Wooks wike you awe on a coowdown fow anyothew **${ms(
                                        Timeout.get(`${command.name}${message.author.id}`) -
                                        Date.now(),
                                        {long: true}
                                    )}**, twy again watew >w< <a:GuraNekoWiggle:845453998622638130>`
                                )
                                .setColor("RANDOM"),
                        ],
                    })
                    .then((message) => {
                        setTimeout(() => message.delete(), 7000);
                    });
            }

            await Timeout.set(`${command.name}${message.author.id}`, Date.now() + timeout);
            setTimeout(() => {
                Timeout.delete(`${command.name}${message.author.id}`);
            }, timeout);

            let commandPing = Date.now() - message.createdTimestamp;
            bot.logger(`${message.author.tag}` + ` |`.red + ` (${message.author.id}) executed the command ` + `${commandfile.config.name}`.underline.cyan + ` ${args.join(" ").blue}` + ` at ${cmdExecuted}.` + ` Message Ping: ${commandPing.toLocaleString()}ms`, "command");

            // Statcord.ShardingClient.postCommand(cmd, message.author.id, bot);
            commandfile.run(bot, message, args);
        }
    } catch (e) {
        console.log(e);
    }
};
