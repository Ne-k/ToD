const Discord = require("discord.js");

module.exports = {
    config: {
        name: "why",
        usage: "why",
        description: "Get `text` of a question",
    },
    run: async (bot, message, args) => {
      


        const fetch = require('node-fetch');

          fetch("https://nekos.life/api/v2/why").then((res) => res.json()).then(async (data) => {
          
                    let factEmbed = new Discord.MessageEmbed()
                    .setColor('#dcadae')
                    .setTitle("Why")
                    .setDescription(data.why)
                    message.channel.send(factEmbed)
        })
                

          }
        }