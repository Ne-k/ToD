const db = require('quick.db');
const moment = require('moment')
const queue2 = new Map();
const queue3 = new Map();
const fetch = require('node-fetch')
const queue = new Map();
const games = new Map()
const Discord = require('discord.js')
const { Collection, MessageEmbed } = require("discord.js");
const ms = require("ms");
const Statcord = require('statcord.js')
const Timeout = new Collection();

module.exports = async (bot, message) => {

    
    if (message.author.bot || message.channel.type === "dm") return;

  


    let prefix;
    let fetched = await db.fetch(`prefix_${message.guild.id}`);

    if (fetched === null) {
        prefix = bot.default.prefix
    } else {
        prefix = fetched
    }
    if(!message.content.toLowerCase().startsWith(prefix)) return;

    let cmdExecuted = moment().format('LLL')

    
            if (message.content.indexOf(prefix) !== 0);
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            
            const command = args.shift().toLowerCase()
           

            try {
                bot.database.get(`SELECT * FROM blacklist WHERE userID = "${message.author.id}"`, (err, r) => {
                    if (err) bot.logger(err, "dbError")
                    if (r) {
                        bot.logger((`${message.author.tag} (${message.author.id})`.underline.yellow) +  ` tried to use a command but failed, because they're blacklisted.` + `${message.content}`.cyan, 'blacklist')
                        /*
                        fetch(`https://waifu.pics/api/sfw/cry` ).then(res => res.json()).then(data => {
                            let blacklistEmbed = new Discord.MessageEmbed()
                                .setAuthor(`Access Denied`, message.author.displayAvatarURL({ type: "gif" }))
                                .setColor('RED')
                                .setImage(data.url)
                                .setDescription(`**${message.author.tag}**, it looks like you have been **blacklisted** from using my services <:AI_nani:843606251162042380>\n\nTo get the **blacklist lifted**, dm **Nek#2937** or join the [support server](https://discord.gg/PVC35NbeTD) to appeal. For more information about being blacklisted, head to this [FAQ link](https://github.com/NekWasTaken/ToD/blob/main/README.md#blacklist-faq) <:KannaPet:843534507419107338>`)
                            return message.channel.send(blacklistEmbed)
                            .then(msg => {
                                msg.delete({ timeout: 15000})
                              })
                              
                        })
                        */
                       return;
                    } 
                })
            } catch (err) {
                bot.logger(err, "error")
            }
            
        
    

try {
    bot.database.get(`SELECT * FROM blacklist WHERE userID = "${message.author.id}"`, (err, r) => {
            if (!r) {

                let args = message.content.slice(prefix.length).trim().split(/ +/g);
                let cmd = args.shift().toLowerCase();
        
                
        
                let ops = {
                    queue2: queue2,
                    queue: queue,
                    queue3: queue3,
                    games: games
                }
        
                var commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
                 if (commandfile){
                    let timeout = ms('4000');
                    
        if (Timeout.has(`${command.name}${message.author.id}`)) {
            return message.channel.send({embeds: [new MessageEmbed().setDescription(`Hey ` + "(・`ω´・)" +  ` Wooks wike you awe on a coowdown fow anyothew **${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), { long: true })}**, twy again watew >w< <a:GuraNekoWiggle:845453998622638130>`).setColor("RANDOM")]})
            .then(msg => {
                bot.setTimeout(() => msg.delete(), 7000);
              })
        }
        Timeout.set(`${command.name}${message.author.id}`, Date.now() + timeout);
        setTimeout(() => {
            Timeout.delete(`${command.name}${message.author.id}`);
        }, timeout);
        
                 let  dis = db.fetch(`${commandfile.config.name}_${message.channel.id}_${message.guild.id}`)
                 
                 if(!dis){
                     dis = "enabled";
                 }
                 
                 if(dis === "enabled"){
                    Statcord.ShardingClient.postCommand(command, message.author.id, bot);

                     let commandPing = Date.now() - message.createdTimestamp
                     bot.logger(`${message.author.tag}` + ` |`.red + ` (${message.author.id}) executed the command ` + (`${commandfile.config.name}`.underline.cyan) + ` at ${cmdExecuted}.` + ` Message Ping: ${commandPing.toLocaleString()}ms` , "command")
                
                    commandfile.run(bot, message, args, ops)
                    
                    
              
                 }
                }
            }

        })
        


    } catch (e) {
        console.log(e)
    }

}
