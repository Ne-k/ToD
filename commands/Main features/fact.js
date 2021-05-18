const Discord = require("discord.js");
const fetch = require('node-fetch')
module.exports = {
    config: {
        name: "fact",
        usgae: "fact",
        description: "Sends a `fact` message.",
    },
    run: async (bot, message, args) => {
      let blacklistEmbed = new Discord.MessageEmbed()
        .setTitle('You have been blacklisted!')
        .setColor('#2f3136')
        .setDescription("You have been **blacklisted** from ToD's **Main Features**. To appeal and get unblacklisted, join the [support server](https://discord.gg/PVC35NbeTD) and dm **Nek**.")
        .addField('Reason:', "Abusing the suggest command and sending in (what I think) is a troll submission.", true)
        .addField('Blacklisted by:', 'Nek#2937', true)
        
        try {

          fetch("https://nekos.life/api/v2/fact").then((res) => res.json()).then(async (data) => {

     
      
                    let factEmbed = new Discord.MessageEmbed()
        .setColor('#eaecf3')
        .setTitle("Fact")
        .setDescription(data.fact)
        return message.channel.send(factEmbed)
  
        })
    
    } catch(e) {
      let errorembed = new Discord.MessageEmbed()
      .setTitle('Command Error. . .')
      .setColor('RED')
      .setDescription(`Looks like an error occurred for the command \`FACT\` || Error: ${e}`)
      bot.channels.cache.get('824333133477314570').send(errorembed)
      message.channel.send(`Looks like an error occurred, please use the \`BUGREPORT\` command and send this error message: \`${e.message}\``);
  }
        
        
}

        }



