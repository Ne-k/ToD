module.exports = {
	slash: {
		
	name: 'fact',
	description: 'Sends a random fact',
	commandOptions: null,
	global: true,
	
	},
	async execute(interaction, client) {
		const Discord = require("discord.js");
		const fetch = require('node-fetch')

		fetch("https://nekos.life/api/v2/fact").then((res) => res.json()).then(async (data) => {
			interaction.reply({embeds: [new Discord.MessageEmbed()
        .setColor('#eaecf3')
        .setTitle("Fact")
        .setDescription(data.fact)]
			})
		})
  }
}