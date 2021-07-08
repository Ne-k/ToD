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
    avatarURL: bot.user.avatarURL({format: 'png'}),
    embeds: [Join]
  });
}