const Discord = require('discord.js')
const { WebhookClient } = require('discord.js')
const logger = require('../../modules/logger')
const moment = require('moment')

module.exports = {
    config: {
        name: "bl",
        aliases: ["blacklist"]
    },
    run: async (client, message, args,) => {
        
        try {
            if (!client.default.developers.includes(message.author.id)) {
                let userAccess = new Discord.MessageEmbed()
                .setTitle("blacklist")
                .setDescription("Sorry, the `blacklist` command can only be executed by the Developer.")
                .setColor("#cdf785");
                message.channel.send(userAccess)
            }
            if (client.default.developers.includes(message.author.id)) {
    
                let invalidInput = new Discord.MessageEmbed()
                    .setDescription(`Please provide the correct arguments!`)
                    .setColor('RED')
                if (!args[0]) return message.channel.send(invalidInput)
    
                const blacklistTarget = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
                let blacklistReason = args.slice(1).join(" ");
                if (!blacklistReason) blacklistReason = `No reason specified`;
    
                let targetNotFound = new Discord.MessageEmbed()
                    .setDescription(`Please provide a valid user!`)
                    .setColor('RED')
                if (!blacklistTarget) return message.channel.send(targetNotFound)
    
                await client.database.get(`SELECT * FROM blacklist WHERE userID = ?`, blacklistTarget.id, async(err, r) => {
                    if (err) return console.log(err);
    
                    let userExist = new Discord.MessageEmbed()
                        .setDescription(`That user is already blacklisted!`)
                        .setColor('RED')
                    if (r) return message.channel.send(userExist)

                if(blacklistTarget.id === '750510159289254008') {
                    return message.channel.send("I am not able to blacklist a developer.")
                }
                if(blacklistTarget.id === '622890595614195722') {
                    return message.channel.send("I am not able to blacklist a developer.")
                }
    
                    await client.database.run(`INSERT INTO blacklist (userID, moderator, reason) VALUES (?, ?, ?)`, blacklistTarget.id, message.author.tag, blacklistReason, async(err) => {
                    
                        if (err) return console.log(err);
                       
                        /* Blacklist logs */
                        let blacklistlogembed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('Blacklist Logs:')
                        .addField('__User__:', `${blacklistTarget.user.tag} (\`${blacklistTarget.user.id}\`)`)
                        .setThumbnail(blacklistTarget.user.avatarURL({dynamic: true}))
                        .addField('__Blacklisted For__:', `${blacklistReason}`)
                        .addField(`__Blacklisted By__:`, `${message.author.tag}`)
                        .setFooter(moment(Date.now()).format('dddd, MMMM Do'))
                        .setTimestamp()
                        const webhookClient = new WebhookClient(
                            process.env.OTHER_LOGGING_ID,
                            process.env.OTHER_LOGGING_WEBHOOK
                          );
                          
                          webhookClient.send({
                            username: "ToD Blacklist Logging",
                            avatarURL: "https://images-ext-2.discordapp.net/external/Zj62aTTOdl2xgGsOhGAF8uxunbM3NROYkh6cNl6l6O4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/752306970467237970/97998fd845941d3cb7ba4c27499cd36b.webp?width=338&height=338",
                            embeds: [blacklistlogembed]
                          });
                          /* End Blacklist Logs */


                        let blacklistedUser = new Discord.MessageEmbed()
                            .setDescription(`\`${blacklistTarget.user.username}\` was **blacklisted** for the reason: \`${blacklistReason}\``)
                            .setColor('GREEN')
                        return message.channel.send(blacklistedUser)
                    });
                });
            }
        } catch (err) {
            logger(err, "error")
        }

    }
}