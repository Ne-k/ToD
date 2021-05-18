const { MessageEmbed, WebhookClient } = require("discord.js");
const chalk = require("chalk");




module.exports = async (client) => {
  console.log(chalk.redBright("[SHARD DISCONNECTED]"), `A shard has disconnected.`);

  let reconnectEmbed = new MessageEmbed()
    .setDescription(`<:image_20210516_090128:843518522209992724> Shard **#${client.shardId}** has disconnected.`)
    .setColor("RED")
    .setTimestamp();

    const webhookClient = new WebhookClient(
      process.env.SHARD_LOGGING_ID,
      process.env.SHARD_LOGGING_WEBHOOK
    );
  
    webhookClient.send({
      username: "ToD shard Logging",
      avatarURL: "https://images-ext-2.discordapp.net/external/Zj62aTTOdl2xgGsOhGAF8uxunbM3NROYkh6cNl6l6O4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/752306970467237970/97998fd845941d3cb7ba4c27499cd36b.webp?width=338&height=338",
      embeds: [reconnectEmbed]
    });
};