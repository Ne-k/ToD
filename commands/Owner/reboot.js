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
            message.channel.send(userAccess)
        }
        if (bot.default.developers.includes(message.author.id)) { 
        const { MessageEmbed, WebhookClient } = require('discord.js')
        const { exec } = require("child_process");
        bot.shard.broadcastEval(`this.user.setStatus('idle')`)
        bot.user.setActivity(`Rebooting. . .`, {
            type: 'LISTENING'
          });
          
          
          const moment = require('moment')
          let manualRebootEmbed = new MessageEmbed()
          .setColor('YELLOW')
          .setDescription(`[ MANUAL REBOOT ] - Client has been manually rebooted by **${message.author.tag}**.`)
          .setFooter(moment(Date.now()).format('dddd, MMMM Do'))
          .setTimestamp()
          const webhookClient = new WebhookClient(
            process.env.CLIENT_LOGGING_ID,
            process.env.CLIENT_LOGGING_WEBHOOK
          );
        
          webhookClient.send({
            username: "ToD Client Logging",
            avatarURL: "https://images-ext-2.discordapp.net/external/Zj62aTTOdl2xgGsOhGAF8uxunbM3NROYkh6cNl6l6O4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/752306970467237970/97998fd845941d3cb7ba4c27499cd36b.webp?width=338&height=338",
            embeds: [manualRebootEmbed]
          });
        let RebootingEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription('Now rebooting, be back in a couple minutes. . .')
        message.channel.send(RebootingEmbed)
        
        exec("npx pm2 restart all", (error, stdout, stderr) => {
            if (error) {
                let ErrorEmbed = new MessageEmbed()
                .setColor('RED')
                .setDescription(`Looks like I encountered an error when rooboting: \`${error}\` `)
                message.channel.send(ErrorEmbed)
                return;
            }
            if (stderr) {
                let stderrEmbed = new MessageEmbed()
                .setColor('YELLOW')
                .setDescription(`stderr: ${stderr}`)
                message.channel.send(stderrEmbed)
                return;
            }


        });
    }
    }
    
}