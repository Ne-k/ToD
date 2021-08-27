module.exports = {
	slash: {
		
	name: 'why',
	description: 'Sends a random why question',
	commandOptions: null,
	global: true,
	
	},
	async execute(interaction, client) {
		const Discord = require("discord.js");
		const fetch = require('node-fetch')

		fetch("https://nekos.life/api/v2/why").then((res) => res.json()).then(async (data) => {
			interaction.reply({embeds: [new Discord.MessageEmbed()
        .setColor('#eaecf3')
        .setTitle("Why")
        .setDescription(data.why)]
			})
		})
        
  }
}