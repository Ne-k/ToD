const Discord = require('discord.js')
const fetch = require('node-fetch')
const {Truth} = require('../json/ToD.json')
module.exports = {
  slash: {

	name: 'truth',
	description: 'Sends a truth question from the game Truth or dare.',
	commandOptions: null,
    global: true,
  
  },
	execute(interaction, client) {
    let truth = Truth[Math.floor(Math.random()*Truth.length)];
    interaction.reply({embeds: [new Discord.MessageEmbed().setColor("RANDOM").setTitle("Truth").setDescription(truth)], components: [{
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