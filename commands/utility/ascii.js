const figlet = require('figlet');
const Discord = require('discord.js')


module.exports = {
    config: {
        name: "ascii",
        usage: "t;ascii <MSG>",
        description: "Converts text to ascii.",
        example: "ascii Example text"
    },
    run: async (bot, message, args) => {
        if(!args[0]) return message.channel.send('Please provide some text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                message.channel.send('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')
            let embed = new Discord.MessageEmbed()
            .setDescription('```' + data + '```')
            .setColor('#a7a2d0')
            message.channel.send(embed)


            



        })
    }
}