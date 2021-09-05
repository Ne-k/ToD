const Discord = require("discord.js");
const fetch = require('node-fetch')

module.exports = {
    slash: {
	name: 'why',
	description: 'Random "why" questions.',
	commandOptions: null,
	global: true,
    },
	async execute(interaction, int, client) {
        fetch("https://nekos.life/api/v2/why").then((res) => res.json()).then(async (data) => {

     
      
            let factEmbed = new Discord.MessageEmbed()
.setColor('#eaecf3')
.setTitle("Why")
.setDescription(data.why)

client.api.interactions(interaction.id, interaction.token).callback.post({slash: {
    type: 4,
    slash: {
                embeds: [factEmbed]
        }
    }
})

    })

    }
}