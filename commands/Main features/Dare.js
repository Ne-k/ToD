
const Discord = require('discord.js')

const fetch = require('node-fetch')


module.exports = {
    config: {
        name: "dare",
        usage: "dare",
        description: "Sends a dare question from the game Truth or dare.",
    },
    run: async (bot, message, args) => {
        let blacklistEmbed = new Discord.MessageEmbed()
        .setTitle('You have been blacklisted!')
        .setColor('#2f3136')
        .setDescription("You have been **blacklisted** from ToD's **Main Features**. To appeal and get unblacklisted, join the [support server](https://discord.gg/PVC35NbeTD) and dm **Nek**.")
        .addField('Reason:', "Abusing the suggest command and sending in (what I think) is a troll submission.", true)
        .addField('Blacklisted by:', 'Nek#2937', true)
        if(message.author.id === '661312195224666114') return message.channel.send(blacklistEmbed)
        if (message.channel.type == "dm") return message.channel.send("<a:No:776584754031493173> | This command command is disabled for DMs, please use this within a server!");

        try {
            fetch("https://summonjs.xyz/api/random-dare").then((res) => res.json()).then(async (data) => {
                //get random number between 0 and the length of the array
                random_footer = ["To add more dare responses, run the suggest command and input the dare you want to add.", ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
                let result = Math.floor((Math.random() * random_footer.length));
        //get random number between 0 and the length of the array
        let embed = new Discord.MessageEmbed()
        .setColor('#eaecf3')
        .setTitle("Dare")
        .setFooter(random_footer[result])
        .setDescription(data.dare)
        message.channel.send(embed)
        })
    } catch(e) {
        let errorembed = new Discord.MessageEmbed()
        .setTitle('Command Error. . .')
        .setColor('RED')
        .setDescription(`Looks like an error occurred for the command \`DARE\` || Error: ${e}`)
        bot.channels.cache.get('824333133477314570').send(errorembed)
        message.channel.send(`Looks like an error occurred, please use the \`BUGREPORT\` command and send this error message: \`${e.message}\``);
    }

    }
}