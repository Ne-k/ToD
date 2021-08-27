module.exports = {
    config: {
        name: "reboot",
        aliases: ["restart"]
        
    },
    run: async (bot, message, args) => {
        
        if (!bot.default.developers.includes(message.author.id)) {
            let userAccess = new Discord.MessageEmbed()
            .setTitle("Reboot")
            .setDescription("Sorry, the `Reboot` command can only be executed by the Developer.")
            .setColor("#cdf785");
            return message.channel.send({emebds: [userAccess]})
        }
        if (bot.default.developers.includes(message.author.id)) { 
        const { MessageEmbed, WebhookClient } = require('discord.js')
        const { exec } = require("child_process");
        bot.shard.broadcastEval(client => client.user.setStatus('idle'))
        bot.user.setActivity(`Rebooting. . .`, {
            type: 'LISTENING'
          });
          
          
          const moment = require('moment')
          let manualRebootEmbed = new MessageEmbed()
          .setColor('YELLOW')
          .setDescription(`[ MANUAL REBOOT ] - Client has been manually rebooted by **${message.author.tag}**.`)
          .setFooter(moment(Date.now()).format('dddd, MMMM Do'))
          .setTimestamp()
          const webhookClient = new WebhookClient({
            id: process.env.CLIENT_LOGGING_ID,
            token: process.env.CLIENT_LOGGING_WEBHOOK
          });
        
          webhookClient.send({
            username: "ToD Client Logging",
            avatarURL: bot.user.avatarURL(),
            embeds: [manualRebootEmbed]
          });
        let RebootingEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription('Now rebooting, be back in a couple minutes. . .')
        message.channel.send({embeds: [RebootingEmbed]})
        
        
        exec("pm2 restart ToD", (error, stdout, stderr) => {
            if (error) {
                console.log(error || `No error`)
            }
            if (stderr) {
                console.log(stderr || `No stderr`)
                
            }


        });
    }
    }
    
}