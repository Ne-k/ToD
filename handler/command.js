const { readdirSync } = require("fs")
require("dotenv").config();
module.exports = (bot) => {
  
  
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dirs}/${file}`);
            bot.commands.set(pull.config.name, pull);
            
            if (pull.config.aliases) pull.config.aliases.forEach(a => bot.aliases.set(a, pull.config.name));
          };
        };
        ["Anime corner", "utility", "Misc",  "Owner", "Main features", "affections"].forEach(x => load(x));
};