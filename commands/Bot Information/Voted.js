const Discord = require('discord.js')

module.exports = {
    config: {
        name: "vbvoted",
        usage: "voted ",
        example: "voted ",
        description: "Check if you've voted on Void Bot list.",
        permissions: "none"
    },
  run: async (bot, message, args) => {
const moment = require('moment')

    const fetch = require('node-fetch');
    
    fetch(`https://api.voidbots.net/bot/voted/752306970467237970/${message.author.id}`, { headers: { 'Authorization': "VOID_fUEzIf7lDejSyjO4cuadDANdhis8Yi6r8sDMk69eC0JgoPiy" } }).then(res => res.json()).then(data => {
    const status = data.voted ? "You have voted" : "nope"
    const EmbedStatus = data.voted ? "has voted." : "has not voted."
    const date = moment(data.votedAt).format('LLL')
    const next_date = moment(data.nextVote.date).format('LLL')
    const start_date = moment(data.votedAt);
const end_date = moment(data.nextVote.date);
const duration = moment.duration(end_date.diff(start_date));
const hoursLeft = duration.asHours();
        let TrueEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag} ${EmbedStatus}`, message.author.displayAvatarURL({ size: 32 }))
        .setDescription(`Voter ID: **${data.voter}** | Bot ID: **${data.botid}**`)
        .setColor('PURPLE')
        .addField('Next Vote:', `${next_date}`, true)
        .addField('Voted at:', `${date} `, true)
        .addField('Voted:', `${status}`)
        .addField('Benefits for voting:', 'My love :heart:', true)
        
        return message.channel.send(TrueEmbed);
    }).catch(console.error)

  }
}