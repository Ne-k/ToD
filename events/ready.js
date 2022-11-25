const { ActivityType } = require('discord.js');
const client = require('../index');
const chalk = require('chalk');

client.on("ready", () => {
	client.user.setActivity("Truth or Dare", { type: ActivityType.Playing });
	console.log(chalk.red(`Logged in as ${client.user.tag}!`))
});