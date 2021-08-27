const Discord = require('discord.js')
const fetch = require('node-fetch')
const {Dare} = require('../json/ToD.json')
module.exports = {
  slash: {

	name: 'dare',
	description: 'Sends a Dare from the game Truth or dare.',
	commandOptions: null,
    global: true,
  
  },
	execute(interaction, client) {
    let dare = Dare[Math.floor(Math.random()*Dare.length)];
    interaction.reply({embeds: [new Discord.MessageEmbed().setColor("RANDOM").setTitle("Truth").setDescription(dare)], components: [{
      type: 1,
      components: [
        {
          type: 2,
          label: "Information", 
          style: 5, 
          url: 'https://anime.services/u/​​‌‌​‌​‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌​​​​​‌‌​​​‌​‌‌​‌‌​‌​‌​​​‌‌‌​‌‌‌​​‌​'
          //"custom_id": 'ToD_Information'
        },
        {
            type: 2, 
            label: "Rules", 
            style: 5, 
            url: 'https://waifus.shop/u/​‌‌‌​​‌​​‌‌​‌‌​‌​‌‌​​‌‌​​‌‌​‌‌​‌​‌‌‌​​​‌​‌‌‌​​​‌​‌‌‌​​​‌​‌‌​​‌‌‌'
            // "custom_id": "ToD_Rules"
        }
      ]
     
      }]})

	},
};   