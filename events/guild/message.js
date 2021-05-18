const db = require('quick.db');
require("dotenv").config();
const queue2 = new Map();

const queue3 = new Map();
const Discord = require('discord.js')
const queue = new Map();
const games = new Map()
const config = require('../../config_prefix')
module.exports = async (bot, message) => {

  

    if(message.author.id == "750510159289254008"){
        prefix = ""
    } 
    try {
        let PREFIX = config.PREFIX
     

        
    

        if (message.author.bot || message.channel.type === "dm") return;

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }

        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let cmd = args.shift().toLowerCase();

        if(!message.content.toLowerCase().startsWith(prefix)) return;

        let ops = {
            queue2: queue2,
            queue: queue,
            queue3: queue3,
            games: games
        }

        var commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))

         if (commandfile){

         let  dis = db.fetch(`${commandfile.config.name}_${message.channel.id}_${message.guild.id}`)
         
         if(!dis) dis = "enabled";
         
         if(dis === "enabled"){
             
            console.log(commandfile)
        
            commandfile.run(bot, message, args, ops)
            
            
         }
         else{
            return;
         }
}

    } catch (e) {
        console.log(e);
    }


}


