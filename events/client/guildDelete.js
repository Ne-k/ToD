module.exports = async (bot, guild) => {
    const { MessageEmbed, WebhookClient } = require("discord.js")
  let LeaveEmbed = new MessageEmbed()
    .setTitle('<:0_dnd:824333439028297758> BOT LEAVE <:0_dnd:824333439028297758>')
    .setColor('RED')
    .addField(guild.name, `\`${guild.id}\`\nMember Count:\n\`${guild.memberCount.toLocaleString()}\``)
    .setThumbnail(guild.iconURL())
    .setTimestamp()

    const webhookClient = new WebhookClient(
        process.env.GUILD_LOGGING_ID,
        process.env.GUILD_LOGGING_WEBHOOK
      );
    
      webhookClient.send({
        username: "ToD Guild Logging",
        avatarURL: "https://images-ext-2.discordapp.net/external/Zj62aTTOdl2xgGsOhGAF8uxunbM3NROYkh6cNl6l6O4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/752306970467237970/97998fd845941d3cb7ba4c27499cd36b.webp?width=338&height=338",
        embeds: [LeaveEmbed]
      });
}