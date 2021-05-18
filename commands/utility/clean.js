module.exports = {
    config: {
        name: "clean",
        description: 'Clean 100 messages from the bot.'
    },
    run: async (bot, message, args,) => {

        try {
message.channel.messages.fetch({
    limit: 100 // Change `100` to however many messages you want to fetch
}).then((messages) => { 
    const botMessages = [];
    messages.filter(m => m.author.id === bot.user.id).forEach(msg => botMessages.push(msg))
    message.channel.bulkDelete(botMessages).then(() => {
        message.channel.send("Cleared bot messages").then(msg => msg.delete({
            timeout: 3000
        }))
    });
})
        } catch (err) {
            const {MessageEmbed} = require('discord.js')
            let errorEmbed = new MessageEmbed()
                  .setDescription(
                      [
                          `
                      Nek is such a retard:`,
                          `\`${err}\` `
                      ].join("\n")
                  )
                  .setColor('RED')
              message.channel.send(errorEmbed)
        }
    }
}