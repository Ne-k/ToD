const { MessageEmbed, WebhookClient, Collection } = require("discord.js");
const talkedRecently = new Set();
module.exports = { 
    config: {
      name: "suggest",
      usage: "t;suggest <suggestion>",
      description: "Send a bot suggestion to the development server to be reviewed and may be added. It can be new `truth` or `dare` responses or new command ideas.",
    
    },
    run: async (client, message, args) => {
      if (talkedRecently.has(message.author.id)) {
        return message.channel.send({embeds: [new MessageEmbed().setDescription("As much as we appreciate your suggestion, please wait up to **1 minute** before using this command again, this is to prevent spam.").setColor('RANDOM')]});
} else {
  let reportedbug = args.join(" ").slice(0);
  let messageuser = message.author.username;
  let messageguild = message.guild.name;

  try {
if(!reportedbug) return message.channel.send('Please input a suggestion to send.')

if(reportedbug.toLowerCase() === 'dare') {
let nodareembed = new MessageEmbed()
.setColor('RED')
.setDescription('You are unable to suggest "`dare`", please suggest something else.')
return message.channel.send({embeds: [nodareembed]})
}
if(reportedbug.toLowerCase() === 'truth') {
let nodareembed = new MessageEmbed()
.setColor('RED')
.setDescription('You are unable to suggest "`truth`", please suggest something else.')
return message.channel.send({embeds: [nodareembed]})
}

message.channel.send({
  "components": [
    {
    "type": 1,
    "components": [
      {
        "type": 2,
        "label": "Agree",
        "style": 3,
        "custom_id": "agree"
      },
      {
        "type": 2,
        "label": "Deny",
         "style": 4,
         "custom_id": "deny"
      },
      {
        type: 2,
        label: "Support Server", 
        style: 5, 
        url: 'https://discord.gg/PVC35NbeTD'
      },
    ]
   
    }
    ],

  embeds: [new MessageEmbed().setColor('YELLOW').setAuthor(`Pending. . .`, message.author.avatarURL({dynamic: true})).setDescription(`You are about to send "\`${reportedbug}\`" to the support server as a suggestion. \n\nBy clicking **agree** you acknowledge ToD's **[Private Policy](https://github.com/NekWasTaken/ToD-Docs/blob/main/README.md#private-policy)** and any outcome of your suggestion (such as [getting blacklisted](https://github.com/NekWasTaken/ToD-Docs/blob/main/README.md#blacklist-faq) if your suggestion turns out to be a troll suggestion, or an abuse to the bot.) *Note: NSFW truths and dares are accepted*.\n\nIf you wish to cancel your suggestion, click **deny**.`).setFooter('This user interface will be deleted in 30 seconds if no choice is made.')]}).then(async m => {
    client.setTimeout(() => m.delete(), 30000);

    client.on('interactionCreate', async (interaction) => {
if (interaction.customId === 'agree') {
await client.setTimeout(() => m.delete(), 0);
let bugreportembedbecausewhythefucknotsohereistheembedname = new MessageEmbed()
.setTitle("<:image_20210516_090215:843518719506645003> New Suggestion! <:image_20210516_090215:843518719506645003>")
.setThumbnail(message.author.avatarURL())
.addField("__Suggestion:__", reportedbug)
.addField("__Suggested By:__", `${message.author.tag}\n \`${message.author.id}\` `)
.addField("__Suggested in:__", `${messageguild}\n \`${message.guild.id}\` `)
.setTimestamp()
.setColor("#cbbdd7")
const webhookClient = new WebhookClient(
  process.env.SUGGEST_LOGGING_ID,
  process.env.SUGGEST_LOGGING_WEBHOOK
);
webhookClient.send({
  username: "ToD Suggestions",
  avatarURL: client.user.avatarURL(),
  embeds: [bugreportembedbecausewhythefucknotsohereistheembedname]
});
let finalembed = new MessageEmbed()
.setTitle('Suggestion sent!')
.setColor('GREEN')
.setDescription(`Your suggestion "\`${reportedbug}\`" has successfully been sent to the development server to be reviewed! <:KannaPet:843534507419107338>`)
return message.channel.send({
  "components": [
    {
    "type": 1,
    "components": [
      {
        type: 2,
        label: "Support Server", 
        style: 5, 
        url: 'https://discord.gg/PVC35NbeTD'
      },
    ]
   
    }
    ],
  embeds: [finalembed]})
  
}
if (interaction.customId === 'deny') {
  m.delete()
  return message.channel.send({embeds: [new MessageEmbed().setColor('RED').setDescription('Successfully canceled your suggestion! <:Ranko_Pog:851883973403344947>')]}).then(msg => client.setTimeout(() => msg.delete(), 5000))
  
}
})


})

} catch (err) {
  console.log(err)
}
 
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 60000);
}



    }
    
}