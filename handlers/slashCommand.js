const fs = require('fs');

const { PermissionsBitField } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest')

const AsciiTable = require('ascii-table');
const table = new AsciiTable().setHeading('Slash Commands', 'Stats').setBorder('|', '=', "0", "0")

const TOKEN = process.env.TOKEN;

const rest = new REST({ version: '9' }).setToken(TOKEN);
require('@colors/colors')

module.exports = (client) => {
	const slashCommands = []; 

	fs.readdirSync('./slashCommands/').forEach(async dir => {
		const files = fs.readdirSync(`./slashCommands/${dir}/`).filter(file => file.endsWith('.js'));

		for(const file of files) {
				const slashCommand = require(`../slashCommands/${dir}/${file}`);
				slashCommands.push({
					name: slashCommand.name,
					description: slashCommand.description,
					type: slashCommand.type,
					options: slashCommand.options ? slashCommand.options : null,
					default_permission: slashCommand.default_permission ? slashCommand.default_permission : null,
					default_member_permissions: slashCommand.default_member_permissions ? PermissionsBitField.resolve(slashCommand.default_member_permissions).toString() : null
				});
			
				if(slashCommand.name) {
						client.slashCommands.set(slashCommand.name, slashCommand)
						table.addRow(file.split('.js')[0], '✅')
				} else {
						table.addRow(file.split('.js')[0], '⛔')
				}
		}
		
	});
	console.log(table.toString().red);

	(async () => {
		rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
			.then(() => console.log("[ Discord ]".cyan + " Successfully deleted application commands.".green))
			.catch(console.error);

		// filter out the message command
		const filteredSlashCommands = slashCommands.filter((command) => command.name !== 'message');
		const devCommands = []
		// push the message command to devCommands
		slashCommands.forEach((command) => {
			if(command.name === 'message') devCommands.push(command)
		})
			try {
				await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {body: filteredSlashCommands},);
				await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, "953754034630717451"), {body: devCommands},);
				console.log("[ Discord ] ".green + "Successfully registered application commands.");
			} catch (error) {
				console.log(error);
			}
	})();
};
