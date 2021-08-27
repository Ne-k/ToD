const { MessageEmbed } = require('discord.js');
const booru = require('booru');

module.exports = {
    config: {
        name: "booru",
        description: "Searches on SafeBooru, note that the command is **not** for NSFW use and won't respond to NSFW related queries.",
        usage: "1) booru <query>",
        example: "1) booru dog",
    },

run: async (bot, message, args) => {

    
    const fetch = require('node-fetch');
        try {
            let NSFWonly = new MessageEmbed()
            .setDescription('This command can only be used in channels marked nsfw.')
            .setImage('https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif')
            if(!message.channel.nsfw){ return message.channel.send(NSFWonly); }
            if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('HORNY ALERT');
        
            let query = args.join(" ");
        
            if (!query) {
                return message.reply("Command Usage: `booru <Query>`")
            } else {
        
            booru.search('safebooru', [query], { limit: 1, random: true })
                .then(booru.commonfy)
                .then(images => {
                    for (let image of images) {
                        const embed = new MessageEmbed()
                            .setAuthor(`Safebooru ${query}`, 'https://c.catgirlsare.sexy/NrAI.png')
                            .setImage(image.common.file_url)
                            .setDescription(`[Image URL](${image.common.file_url})`)
                        
                            .setColor('RANDOM');
                        return message.channel.send({embeds: [embed]})
                    }
                })
            }
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }

    


 
}
}



