module.exports = async (bot, guild) => {
  const { MessageEmbed, WebhookClient } = require("discord.js")
  let Join = new MessageEmbed()
  .setTitle('<:0_online:824333430367059969> NEW JOIN <:0_online:824333430367059969>')
  .setColor('GREEN')
  .addField(`\n‿︵‿︵‿︵‿︵‿︵‿︵\n\n${guild.name}`, `Guild ID:\n\`${guild.id}\`\nMember Count:\n\`${guild.memberCount.toLocaleString()}\`\nCreated at:\n\`${guild.createdAt}\``)
  .setThumbnail(guild.iconURL())
  .setTimestamp()

  const webhookClient = new WebhookClient(
    process.env.GUILD_LOGGING_ID,
    process.env.GUILD_LOGGING_WEBHOOK
  );

  webhookClient.send({
    username: "ToD Guild Logging",
    avatarURL: "https://images-ext-2.discordapp.net/external/Zj62aTTOdl2xgGsOhGAF8uxunbM3NROYkh6cNl6l6O4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/752306970467237970/97998fd845941d3cb7ba4c27499cd36b.webp?width=338&height=338",
    embeds: [Join]
  });
}