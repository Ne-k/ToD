
const Discord = require('discord.js')
const logger = require('../../modules/logger')
module.exports = {
    config: {
        name: "ubl",
        aliases: ["unblacklist"]
    },
    run: async (client, message, args,) => {


try {
    if (!client.default.developers.includes(message.author.id)) {
        let userAccess = new Discord.MessageEmbed()
        .setTitle("unblacklist")
        .setDescription("Sorry, the `unblacklist` command can only be executed by the Developer(s).")
        .setColor("#cdf785");
        message.channel.send({embeds: [userAccess]})
    }
    if (client.default.developers.includes(message.author.id)) {

        let invalidInput = new Discord.MessageEmbed()
            .setDescription(`Please provide the correct arguments!`)
            .setColor('RED')
        if (!args[0]) return message.channel.send({embeds: [invalidInput]})

        const blacklistTarget = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
        let blacklistReason = args.slice(1).join(" ");
        if (!blacklistReason) blacklistReason = `No reason specified`;

        let targetNotFound = new Discord.MessageEmbed()
            .setDescription(`Please provide a valid user!`)
            .setColor('RED')
        if (!blacklistTarget) return message.channel.send({embeds: [targetNotFound]})

        await client.database.get(`SELECT * FROM blacklist WHERE userID = ? `, blacklistTarget.id, async(err, r) => {
            if (err) return console.log(err);

            let userExist = new Discord.MessageEmbed()
                .setDescription(`That user is isnt blacklisted!`)
                .setColor('RED')
            if (!r) return message.channel.send({embeds: [userExist]})

            await client.database.run(`DELETE FROM blacklist WHERE id = ?`, r.id, async(err) => {
                if (err) return console.log(err);

                let blacklistedUser = new Discord.MessageEmbed()
                    .setDescription(`\`${blacklistTarget.user.username}\` was **unblacklisted**!`)
                    .setColor('GREEN')
                message.channel.send({embeds: [blacklistedUser]})
            });
        });
    }
} catch (err) {
    logger(err, "error")
}
    }
}