
const Discord = require('discord.js')

module.exports = {
  config: {
      name: "why",
      usage: "why",
      description: `Random "why" questions.`,
  },
  run: async (bot, message, args) => {
    require('node-fetch')("https://nekos.life/api/v2/why").then((res) => res.json()).then(async (data) => {

     
      
      let factEmbed = new Discord.MessageEmbed()
.setColor('#eaecf3')
.setTitle("Why")
.setDescription(data.why)
return message.channel.send({embeds: [factEmbed]})
  })
  }
}
