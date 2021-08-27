const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
	slash: {

	name: 'wyr',
	description: 'Would You Rather questions.',
	commandOptions: null,
	global: true,
	},
	async execute(interaction, int, client) {

        const wyr = require('wyr');

        wyr().then((response) => { 
		client.api.interactions(interaction.id, interaction.token).callback.post({data: {
			type: 4,
			data: {
    					embeds: [new Discord.MessageEmbed().setColor('BLUE').setAuthor(`Let us play Would You rather!`).setDescription(`Would you rather:\n\n<:image_20210516_090228:843518773708324884> - \`${response.blue.question}\`\nor\n<:image_20210516_090221:843518746052001793> - \`${response.red.question}\``)]
				}
			}
		})
        })
	},
};