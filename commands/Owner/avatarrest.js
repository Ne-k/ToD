
const {MessageEmbed } = require('discord.js')
module.exports = {
    config: {
        name: "resetavatar",
        aliases: ["find", "calculate", "e"]
    },
    run: async (bot, message, args,) => {
        if (message.author.id != '750510159289254008') return;
bot.user.setAvatar('https://media.discordapp.net/attachments/777983875170304006/797155289848741959/No-textToD.png')
message.channel.send('Successfully executed.')

    }
}