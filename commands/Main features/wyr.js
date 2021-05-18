const questions = require('./Would-you-rather.json');
const { MessageEmbed  } = require("discord.js");
const Discord = require('discord.js');


module.exports = {
    config: {
        name: "wyr",
        usage: "wyr",
        description: "**W**ould **Y**ou **R**ather questions.",
    },
    run: async (bot, message, args) => {
        let blacklistEmbed = new MessageEmbed()
        .setTitle('You have been blacklisted!')
        .setColor('#2f3136')
        .setDescription("You have been **blacklisted** from ToD's **Main Features**. To appeal and get unblacklisted, join the [support server](https://discord.gg/PVC35NbeTD) and dm **Nek**.")
        .addField('Reason:', "Abusing the suggest command and sending in (what I think) is a troll submission.", true)
        .addField('Blacklisted by:', 'Nek#2937', true)
        if(message.author.id === '661312195224666114') return message.channel.send(blacklistEmbed)
try {

var messagetext =  questions[Math.floor(Math.random() * questions.length)]
let CC = ["#7c6efa", "#7476f8", "#6b7ef6", "#6385f3", "#5b8df1", "#5295ef", "#4a9ded", "#42a5eb", "#39ace8", "#31b4e6"];
let result = Math.floor((Math.random() * CC.length));
    var question = messagetext.split("Would you rather ")[1]

    reply = {
        embed: {
            color: CC[result],
            "description": `__Would you rather__: \n\n ${question}`,
            "footer": `To add more wyr responses, run the \`suggest\` command and input the dare you want to add.`
           
        },

    }
    console.log(question)
    wyrmessage = await message.channel.send(reply);
  
} catch(e) {
    let errorembed = new Discord.MessageEmbed()
    .setTitle('Command Error. . .')
    .setColor('RED')
    .setDescription(`Looks like an error occurred for the command \`WYR\` || Error: ${e}`)
    console.log(e)
    bot.channels.cache.get('824333133477314570').send(errorembed)
    message.channel.send(`Looks like an error occurred. This has been reported to the developer and will soon be fixed.`);
}
    }
}
