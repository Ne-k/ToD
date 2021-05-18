const { MessageEmbed } = require("discord.js");


module.exports = {
    config: {
        name: "uptime",
        aliases: ["up", "upt", "time"],
        usage: "t;uptime",
        description: "Show's ToD's uptime.",
        permissions: "none"
    },
    run: async (bot, message, args) => {

            let days = Math.floor(bot.uptime / 86400000);
            let hours = Math.floor(bot.uptime / 3600000) % 24;
            let minutes = Math.floor(bot.uptime / 60000) % 60;
            let seconds = Math.floor(bot.uptime / 1000) % 60;

            let Sembed = new MessageEmbed()
                .setColor('RANDOM')
                .addField("ToD's Uptime:", `__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`)
                .setFooter(`Command executed by ${message.author.tag}`, message.author.avatarURL);
                message.channel.send(Sembed);
        
    } 
}
