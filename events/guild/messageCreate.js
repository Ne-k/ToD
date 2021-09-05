const moment = require('moment')
const Discord = require('discord.js')
const { Collection, MessageEmbed } = require("discord.js");
const ms = require("ms");
const Statcord = require('statcord.js')
const Timeout = new Collection();

module.exports = async (bot, message) => {

    
    if (message.author.bot || message.channel.type === "dm") return;

  


   let prefix = process.env.prefix
    if(!message.content.toLowerCase().startsWith(prefix)) return;

    let cmdExecuted = moment().format('LLL')

    
            if (message.content.indexOf(prefix) !== 0);
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            
            const command = args.shift().toLowerCase()
           

          

try {


                let args = message.content.slice(prefix.length).trim().split(/ +/g);
                let cmd = args.shift().toLowerCase();
        
                
        
        
                var commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
                 if (commandfile){
                    let timeout = ms('3000');
                    
        if (Timeout.has(`${command.name}${message.author.id}`)) {
            return message.channel.send({embeds: [new MessageEmbed().setDescription(`Hey ` + "(・`ω´・)" +  ` Wooks wike you awe on a coowdown fow anyothew **${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), { long: true })}**, twy again watew >w< <a:GuraNekoWiggle:845453998622638130>`).setColor("RANDOM")]})
            .then(msg => {
                setTimeout(() => msg.delete(), 7000);
              })
        }
        Timeout.set(`${command.name}${message.author.id}`, Date.now() + timeout);
        setTimeout(() => {
            Timeout.delete(`${command.name}${message.author.id}`);
        }, timeout);

                 
                 
              
                  

                     let commandPing = Date.now() - message.createdTimestamp
                     bot.logger(`${message.author.tag}` + ` |`.red + ` (${message.author.id}) executed the command ` + (`${commandfile.config.name}`.underline.cyan) + ` at ${cmdExecuted}.` + ` Message Ping: ${commandPing.toLocaleString()}ms` , "command")
                    
                    // Statcord.ShardingClient.postCommand(cmd, message.author.id, bot);
                    commandfile.run(bot, message, args)
                    
                    
              
                 
                }
          
        


    } catch (e) {
        console.log(e)
    }

}
