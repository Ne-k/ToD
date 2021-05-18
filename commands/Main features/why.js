const Discord = require("discord.js");

module.exports = {
    config: {
        name: "why",
        usage: "why",
        description: "Get `text` of a question",
    },
    run: async (bot, message, args) => {
      


        const fetch = require('node-fetch');
        try {
          fetch("https://nekos.life/api/v2/why").then((res) => res.json()).then(async (data) => {
          
                    let factEmbed = new Discord.MessageEmbed()
                    .setColor('#dcadae')
                    .setTitle("Why")
                    .setDescription(data.why)
                    message.channel.send(factEmbed)
        })
                
        
                } catch(e) {
                  let errorembed = new Discord.MessageEmbed()
                  .setTitle('Command Error. . .')
                  .setColor('RED')
                  .setDescription(`Looks like an error occurred for the command \`WHY\`\n\n Error: \`${e}\``)
                  bot.channels.cache.get('824333133477314570').send(errorembed)
                  message.channel.send(`Looks like an error occurred, please use the \`BUGREPORT\` command and send this error message: \`${e.message}\``);
              }
          }
        }