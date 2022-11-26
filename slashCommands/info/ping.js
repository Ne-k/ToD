const { ApplicationCommandType, EmbedBuilder} = require('discord.js');
const AsciiTable = require("ascii-table");
module.exports = {
	name: 'ping',
	description: "Check bot's ping.",
	type: ApplicationCommandType.ChatInput,
	category: "info",
	cooldown: 3000,
	run: async (client, interaction) => {
		const table = new AsciiTable()
			.setHeading("Shard", "Servers", "Ping")
			.setAlign(0, AsciiTable.CENTER)
			.setAlign(1, AsciiTable.CENTER)
			.setAlign(2, AsciiTable.CENTER);
		const guildCount = await client.shard.fetchClientValues("guilds.cache.size");

		const ping = await client.shard.fetchClientValues("ws.ping");
		guildCount.forEach((count, shardId) => {
			table.addRow(shardId, count, `${ping[shardId]}ms`);
		});
		table.addRow(`---------`, `---------`, `---------`);
		table.addRow(`Total`, `${guildCount.reduce((servers, num) => num + servers, 0)}`, `${Math.round(ping.reduce((users, num) => num + users, 0) / ping.length)}ms`);

		let tps = 0,
			s = Date.now();
		while (Date.now() - s <= 1) tps++;
		tps *= 1000;

		let botping = Date.now() - interaction.createdTimestamp;
		interaction.reply({
			embeds: [
				new EmbedBuilder()
					.setColor(botping > 500 ? "Red" : "Green")
					.setDescription(`**Shard ${interaction.guild.shard.id}**:\n\nMessage Ping: \`${botping.toLocaleString()}ms\`\nWebsocket Ping: \`${client.ws.ping}ms\`\n[TPS](https://faq.haileybot.com/#tps): \`${tps.toLocaleString()}\``)
					.addFields(
						{
							name: "** **",
							value: `\`\`\`${table.toString()}\`\`\``
						}
					)
			]
		})

	}
};