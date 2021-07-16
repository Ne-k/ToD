module.exports = {
    config: {
        name: "fbl",
        aliases: ["blacklist"]
    },
    run: async (client, message, args,) => {
        const Discord = require('discord.js')
        const {WebhookClient} = require('discord.js')

const moment = require('moment')
        if (!client.default.developers.includes(message.author.id)) {
            return;
        }
        if (client.default.developers.includes(message.author.id)) {

let blacklistTarget = args.join(' ')


client.database.run(`INSERT INTO blacklist (userID, moderator, reason) VALUES (?, ?, ?)`, blacklistTarget, message.author.tag, 'Forced blacklist, see the blacklist logs for more information.', async(err) => {
message.channel.send({content: `User was force blacklisted.`})
let blacklistlogembed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Blacklist Logs:')
.addField('__User__:', `${blacklistTarget}`)
.addField('__Blacklisted For__:', `None | Forced blacklist.`)
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
})
        }

    }
}