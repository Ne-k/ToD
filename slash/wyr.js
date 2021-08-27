const Discord = require('discord.js')

module.exports = {
	slash: {

	name: 'wyr',
	description: 'Would You Rather questions.',
	commandOptions: null,
	global: true,
	},
	async execute(interaction, client) {
  	const wyr = require('wyr');
    wyr().then((response) => { 
			interaction.reply({ 
				embeds: [new Discord.MessageEmbed().setColor('BLUE').setAuthor(`Let us play Would You rather!`).setDescription(`Would you rather:\n\n<:image_20210516_090228:843518773708324884> - \`${response.blue.question}\`\nor\n<:image_20210516_090221:843518746052001793> - \`${response.red.question}\``)]
			})
    })
	},
}; 