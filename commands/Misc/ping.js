const { MessageEmbed } = require("discord.js");

module.exports = {
  config: {
    name: "ping",
    aliases: ["latency"],
    usage: "t;ping",
    description: "Get the bot's ping!",
  },
  run: async (bot, message, args) => {
    const AsciiTable = require("ascii-table");
    const table = new AsciiTable()
      .setHeading("Shard", "Servers", "Ping")
      .setAlign(0, AsciiTable.CENTER)
      .setAlign(1, AsciiTable.CENTER)
      .setAlign(2, AsciiTable.CENTER);
    const guildCount = await bot.shard.fetchClientValues("guilds.cache.size");

    const ping = await bot.shard.fetchClientValues("ws.ping");
    guildCount.forEach((count, shardId) => {
      table.addRow(shardId, count, `${ping[shardId]}ms`);
    });
    table.addRow(`---------`, `---------`, `---------`);
    table.addRow(
      `Total`,
      `${guildCount.reduce((servers, num) => num + servers, 0)}`,
      `${Math.round(
        ping.reduce((users, num) => num + users, 0) / ping.length
      )}ms`
    );

    let tps = 0,
      s = Date.now();
    while (Date.now() - s <= 1) tps++;
    tps *= 1000;

    let botping = Date.now() - message.createdTimestamp;

    if (message.channel.type == "dm")
      return message.channel.send(
        ":x: | This command command is disabled for DMs, please use this within a server!"
      );
    message.channel
      .send({ content: "<a:Loading:824333296141467669> Pinging..." })
      .then((m) => {
        m.edit({ content: `🏓Pong!` });
        let Sembed = new MessageEmbed()
          .setColor("GREEN")
          .setDescription(
            `**Shard ${message.guild.shard.id}**:\n\n${
              botping > 500
                ? "<:image_20210516_090128:843518522209992724>"
                : "<:image_20210516_090142:843518578749865994>"
            } Message ping: \`${botping.toLocaleString()}ms\`\n${
              bot.ws.ping > 500
                ? "<:image_20210516_090128:843518522209992724>"
                : "<:image_20210516_090142:843518578749865994>"
            } Websocket ping: \`${bot.ws.ping}ms\`\n${
              tps > 10000000
                ? "<:image_20210516_090128:843518522209992724>"
                : "<:image_20210516_090142:843518578749865994>"
            } [TPS](https://faq.haileybot.com/#tps): \`${tps.toLocaleString()}\``
          )
          .addField(
            "** **",
            `\`\`\`---------------------------${table.toString()}\`\`\``
          );
        m.edit({ embeds: [Sembed] });
      });
  },
};
