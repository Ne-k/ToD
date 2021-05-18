
var facts = []
const fetch = require('node-fetch')
const Discord = require('discord.js')
const { black } = require('chalk')


module.exports = {
    config: {
        name: "truth",
        usage: "t;truth",
        description: "Sends a truth question from the game Truth or dare.",
    },
    run: async (bot, message, args) => {
        let blacklistEmbed = new Discord.MessageEmbed()
        .setTitle('You have been blacklisted!')
        .setColor('#2f3136')
        .setDescription("You have been **blacklisted** from ToD's **Main Features**. To appeal and get unblacklisted, join the [support server](https://discord.gg/PVC35NbeTD) and dm **Nek**.")
        .addField('Reason:', "cock lmao", true)
        .addField('Blacklisted by:', 'Nek#2937', true)
        if (message.channel.type == "dm") return message.channel.send("<a:No:776584754031493173> | This command command is disabled for DMs, please use this within a server!");
        try {
            fetch("https://summonjs.xyz/api/random-truth").then((res) => res.json()).then(async (data) => {
        //get random number between 0 and the length of the array
        random_footer = ["To add more truth responses, run the suggest command and input the truth you want to add.",  ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
        let result = Math.floor((Math.random() * random_footer.length));
        let embed = new Discord.MessageEmbed()
.setColor('#a7a2d0')
.setTitle("Truth")
.setFooter(random_footer[result])
.setDescription(data.truth)

message.channel.send(embed)
        })
} catch(e) {
    let errorembed = new Discord.MessageEmbed()
    .setTitle('Command Error. . .')
    .setColor('RED')
    .setDescription(`Looks like an error occurred for the command \`TRUTH\` || Error: ${e}`)
    bot.channels.cache.get('824333133477314570').send(errorembed)
    message.channel.send(`Looks like an error occurred, please use the \`BUGREPORT\` command and send this error message: \`${e.message}\``);
}
   
    
    }
}