const moment = require('moment')
module.exports = (client, interaction) => {
    try {
        if (!client.slashcmds.has(interaction.commandName)) return;
        let cmdExecuted = moment().format('LLL')
        //client.logger(`${interaction.member.user.username}#${interaction.member.user.discriminator}` + ` |`.red + ` (${interaction.member.user.id}) executed ` + `slash `.red + `command ` + (`${interaction.commandName.toUpperCase()}`.underline.cyan) + ` at ${cmdExecuted}.` , "command")
        client.slashcmds.get(interaction.commandName).execute(interaction, client)
    } catch (error) {
        console.log(error)
    }
  
}