const { ActivityType } = require('discord.js');
const client = require('../index');
require("@colors/colors")
const schema = require("../Database/guildConfigSchema")
client.on("ready", () => {
	client.user.setActivity("Truth or Dare", { type: ActivityType.Playing });
	console.log("[ Client ] ".green + `Logged in as ${client.user.tag}!`)

});