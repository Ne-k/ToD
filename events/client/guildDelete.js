module.exports = async (bot, guild) => {

  bot.db.delete(`prefix_${guild.id}`)
    const { MessageEmbed, WebhookClient } = require("discord.js")
  let LeaveEmbed = new MessageEmbed()
    .setTitle('<:0_dnd:824333439028297758> BOT LEAVE <:0_dnd:824333439028297758>')
    .setColor('RED')
    .setDescription(`**${guild.name}**\n\n\`${guild.id}\`\nMember Count:\n\`${guild.memberCount}\``)
    .setThumbnail(guild.iconURL())
    .setTimestamp()

    const webhookClient = new WebhookClient(
        process.env.GUILD_LOGGING_ID,
        process.env.GUILD_LOGGING_WEBHOOK
      );
    
      webhookClient.send({
        username: "ToD Guild Logging",
        avatarURL: bot.user.avatarURL({format: 'png'}),
        embeds: [LeaveEmbed]
      });
}