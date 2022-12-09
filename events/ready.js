const { ActivityType } = require('discord.js');
const client = require('../index');
require("@colors/colors")
const schema = require("../Database/guildConfigSchema")
client.on("ready", () => {
	client.user.setActivity("Truth or Dare", { type: ActivityType.Playing});

	client.shard.broadcastEval((bot) => bot.guilds.cache.size).then((res) => {
		console.log(`[ Client ]`.blue + ` Logged in as ${client.user.tag} | loaded ${res.reduce((prev, val) => prev + val, 0).toLocaleString()} servers and ${client.options.shardCount.toLocaleString()} shards.`.magenta);
	})

});