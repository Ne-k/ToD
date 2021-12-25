const moment = require("moment");
const {MessageButton, Permissions} = require("discord.js");


module.exports = async (bot, message) => {
    const {Permissions, MessageEmbed, WebhookClient, MessageButton, MessageActionRow} = require("discord.js");
    const expression = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]?/gi; const regex = new RegExp(expression);
    const user = message.guild.members.cache.get(message.author.id);
    function makeButtonGrid(w, h) {
        let buttons = [];
        for (let x = 0; x < w * h; x++) {
            buttons.push({
                style: 1,
                type: 2,
                label: `${x + 1}`,
                custom_id: `btn_${x + 1}`,
            });
        }
        return Array.from({length: Math.ceil(buttons.length / 5)}, (a, r) =>
            buttons.slice(r * 5, r * 5 + 5)
        );
    }

    if (message.content.match(regex)) {

        const unix = Math.floor(new Date().getTime() / 1000);

        let data = await require('node-fetch')("https://anti-fish.bitflow.dev/check", {
            method: "post",
            body: JSON.stringify({message: message.content}),
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "ToD Anti-phishing (Nek#2937 / 750510159289254008)",
            },

        }).then(res => res.json())
        if (data.match) {

            try {

                let dataInfo = await require('node-fetch')(`https://api.phisherman.gg/v1/domains/info/${data.matches.map(m => m.domain)}`, {
                    headers: {
                        "Authorization": 'Bearer 02e6fac0-b924-48aa-b583-2d410fbc691a',
                        'Content-Type': 'application/json',
                        "User-Agent": "Anti-phishing (Nek#2937 / 750510159289254008)",
                    },
                }).then(res => res.json())

                if (message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD) || message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return;


                if (message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) setTimeout(() => message.delete(), 1000)




                let linkstat = dataInfo[`${data.matches.map(m => m.domain)}`].status

                if (linkstat === "ONLINE") {
                    linkstat = "Active"
                } else {
                    linkstat = "Inactive"
                }
                const embed = new MessageEmbed()
                    .setTitle(`❌ ${data.matches.map(m => m.type)} link detected!`)
                    .setColor('RED')
                    .setThumbnail(message.author.avatarURL({dynamic: true}))
                    .setDescription(`<@${message.author.id}> | ${message.author.tag} (${message.author.id})\n*Please grant me the \`Timeout Members\` permission so I can timeout users when I detect a phishing link.*\n\n\n**${linkstat}** ${dataInfo[`${data.matches.map(m => m.domain)}`].classification} link found <t:${unix}:R>:\n ||${data.matches.map(m => m.domain)}||`)
                    .setFooter("Do not click on these links, they're fake and meant to steal your account details. To disable this message, run t;disable")
                if(message.guild.me.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)) {
                    await user.timeout(10000 * 60 * 1000, 'Detected a phishing link from the user.');
                    embed.setDescription(`<@${message.author.id}> | ${message.author.tag} (${message.author.id})\nhas been timed out for 6 days and 22 hours.\n\n\n**${linkstat}** ${dataInfo[`${data.matches.map(m => m.domain)}`].classification} link found <t:${unix}:R>:\n ||${data.matches.map(m => m.domain)}||`)

                }
                const webhookClient = new WebhookClient({ url: process.env.ANTISCAM_WebURL });
                await webhookClient.send({
                    username: 'anti-scam',
                    avatarURL: message.author.avatarURL({dynamic: true}),
                    embeds: [
                        new MessageEmbed()
                            .setColor("GREEN")
                            .setThumbnail(message.guild.iconURL({dynamic: true}))
                            .setTitle('__Scam link prevented in:__')
                            .setDescription(`\`${message.guild.name}\` (${message.guild.id}) | ${message.guild.memberCount.toLocaleString()}\n${data.matches.map(m => m.domain)}\n\n<t:${unix}:R> (<t:${unix}:F>)`)
                    ],
                });
                /*
                                    new MessageEmbed()
                                            .setColor("GREEN")
                                            .setThumbnail(message.guild.iconURL({dynamic: true}))
                                            .setTitle('__Scam link prevented in:__')
                                            .setDescription(`\`${message.guild.name}\` (${message.guild.id}) | ${message.guild.memberCount} ]\n\n<t:${unix}:R> (<t:${unix}:F>)`)
                                     */

                const row = new MessageActionRow()
                    .addComponents(new MessageButton()
                        .setCustomId('del')
                        .setLabel('Delete')
                        .setStyle('DANGER'),
                    )
                    .addComponents(new MessageButton()
                        .setCustomId('remTime')
                        .setLabel('Remove Timeout')
                        .setStyle('SUCCESS'),
                    )
                    .addComponents(new MessageButton()
                        .setCustomId('info')
                        .setLabel('Get Domain Info')
                        .setStyle('SECONDARY'),
                    );
                return message.channel.send({
                    content: message.author.id,
                    embeds: [embed],
                    components: [row],
                }).then((msg) => {
                    setTimeout(() => {
                        msg.delete()
                    }, 8.64e+7)
                    bot.on("interactionCreate", async (interaction) => {
                        if(interaction.customId === 'remTime') {
                            if(!interaction.member.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)) return interaction.reply({content: 'You do not have permission to remove timeouts.', ephemeral: true});
                            await user.disableCommunicationUntil(null, 'Moderator removed timeout.');
                            return interaction.reply({content: 'Timeout removed.', ephemeral: true})

                        }
                        if (interaction.customId === "del") {
                            if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                                interaction.reply({content: `You can't delete this message`, ephemeral: true})
                            } else {
                                msg.delete()
                            }

                        }

                        if (interaction.customId === "info") {
                            let thing = new MessageEmbed()
                                .addField('Useless Domain info:', `__Domain IP__: **${dataInfo[`${data.matches.map(m => m.domain)}`].details.ip_address ? dataInfo[`${data.matches.map(m => m.domain)}`].details.ip_address : 'IP address not found.'}**\n__Asn Name__: ${dataInfo[`${data.matches.map(m => m.domain)}`].details.asn.asn_name ? dataInfo[`${data.matches.map(m => m.domain)}`].details.asn.asn_name : 'No asn name found.'}`)
                                .setImage(dataInfo[`${data.matches.map(m => m.domain)}`].details.websiteScreenshot)
                                .setColor('RANDOM')
                            return interaction.reply({embeds: [thing], ephemeral: true})
                        }

                    })
                })


            } catch (e) {
                console.log(e)
            }
        }
    }
}