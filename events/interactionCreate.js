const { EmbedBuilder, Collection, PermissionsBitField, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle,
	WebhookClient
} = require('discord.js');
const ms = require('ms');
const client = require('../index');
require('dotenv').config();
const Schema = require('../Database/guildConfigSchema');

const cooldown = new Collection();


client.on('interactionCreate', async interaction => {
	// modals
	await require('./interactions/modals/truthSuggestModal')(interaction);
	await require('./interactions/modals/dareSuggestModal')(interaction);
	await require('./interactions/modals/otherSuggestModal')(interaction);
	//selects
	await require('./interactions/Select Menus/myanimelistSelect')(interaction)
	//buttons
	await require('./interactions/buttons/malNews')(interaction);

	const slashCommand = client.slashCommands.get(interaction.commandName);
		if (interaction.type === 4) {
			if(slashCommand.autocomplete) {
				const choices = [];
				await slashCommand.autocomplete(interaction, choices)
			}
		}
		if (!interaction.type === 2) return;
	
		if(!slashCommand) return client.slashCommands.delete(interaction.commandName);
		try {
			if(slashCommand.cooldown) {
				if(cooldown.has(`slash-${slashCommand.name}${interaction.user.id}`)) return interaction.reply({ content: "You are on cooldown for **<duration>**".replace('<duration>', ms(cooldown.get(`slash-${slashCommand.name}${interaction.user.id}`) - Date.now(), {long : true}) ) })
				if(slashCommand.userPerms || slashCommand.botPerms) {
					if(!interaction.memberPermissions.has(PermissionsBitField.resolve(slashCommand.userPerms || []))) {
						const userPerms = new EmbedBuilder()
						.setDescription(`🚫 ${interaction.user}, You don't have \`${slashCommand.userPerms}\` permissions to use this command!`)
						.setColor('Red')
						return interaction.reply({ embeds: [userPerms] })
					}
					if(!interaction.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(slashCommand.botPerms || []))) {
						const botPerms = new EmbedBuilder()
						.setDescription(`🚫 ${interaction.user}, I don't have \`${slashCommand.botPerms}\` permissions to use this command!`)
						.setColor('Red')
						return interaction.reply({ embeds: [botPerms] })
					}

				}

				await slashCommand.run(client, interaction)
				console.log("[ Slash Command ] ".green + `${interaction.user.tag} (${interaction.user.id}) used the slash command ${interaction.commandName} in ${interaction.guild.name} (${interaction.guild.id})`)


				Schema.findOne({guildID: interaction.guild.id}, async (err, data) => {
					if(!data) {
						await new Schema({
							guildID: interaction.guild.id,
							guildName: interaction.guild.name,
							config: {
								votingToggle: true,
								nsfwToggle: false,
							}
						}).save()

						return interaction.channel.send({content: "Please try again. . ."});

					}

					if(data.config.votingToggle) {
						if(Math.floor(Math.random() * 1000) === 1) {
							await interaction.channel.send({
								embeds: [
									new EmbedBuilder()
										.setColor("Green")
										.setTitle("Thanks for using me!")
										.setDescription("If you are enjoying me, please consider [voting](https://top.gg/bot/943187676549513236) for me and leaving a review, it would mean a lot!")
										.setFooter({text: "If you would like to not get this notification, use the command /configure voting_toggle:False to disable all further messages"})
								],
							})
						}
					}
				})

				cooldown.set(`slash-${slashCommand.name}${interaction.user.id}`, Date.now() + slashCommand.cooldown)
				setTimeout(() => {
					cooldown.delete(`slash-${slashCommand.name}${interaction.user.id}`)
				}, slashCommand.cooldown)
			} else {
				if(slashCommand.userPerms || slashCommand.botPerms) {
					if(!interaction.memberPermissions.has(PermissionsBitField.resolve(slashCommand.userPerms || []))) {
						const userPerms = new EmbedBuilder()
						.setDescription(`🚫 ${interaction.user}, You don't have \`${slashCommand.userPerms}\` permissions to use this command!`)
						.setColor('Red')
						return interaction.reply({ embeds: [userPerms] })
					}
					if(!interaction.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(slashCommand.botPerms || []))) {
						const botPerms = new EmbedBuilder()
						.setDescription(`🚫 ${interaction.user}, I don't have \`${slashCommand.botPerms}\` permissions to use this command!`)
						.setColor('Red')
						return interaction.reply({ embeds: [botPerms] })
					}

				}
				await slashCommand.run(client, interaction);
				console.log("[ Slash Command ] ".green + `${interaction.user.tag} (${interaction.user.id}) used the slash command ` +  `${interaction.commandName}`.green + ` in ${interaction.guild.name} (${interaction.guild.id})`)

			}
		} catch (error) {
				console.log(error);
		}
});