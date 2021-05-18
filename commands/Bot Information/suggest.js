const { MessageEmbed, WebhookClient } = require("discord.js");

module.exports = { 
    config: {
      name: "suggest",
      usage: "t;suggest <suggestion>",
      description: "Send a bot suggestion to the development server to be reviewed and may be added. It can be new `truth` or `dare` responses or new command ideas.",
    
    },
    run: async (bot, message, args) => {
        let reportedbug = args.join(" ").slice(0);
        let messageuser = message.author.username;
        let messageguild = message.guild.name;

if(!reportedbug) return message.channel.send('Please input a suggestion to send.')

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
  avatarURL: "https://images-ext-2.discordapp.net/external/Zj62aTTOdl2xgGsOhGAF8uxunbM3NROYkh6cNl6l6O4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/752306970467237970/97998fd845941d3cb7ba4c27499cd36b.webp?width=338&height=338",
  embeds: [bugreportembedbecausewhythefucknotsohereistheembedname]
});

let finalembed = new MessageEmbed()
.setTitle('Suggestion sent!')
.setColor('GREEN')
.setDescription(`<:kekeke:824333380249583648> Thank you for the suggestion! You have sent "\`${reportedbug}\`" to the official server to be reviewed. If you'd like, head to the [support server](https://discord.gg/PVC35NbeTD) to see if your suggestion got accepted or denied. <:kekeke:824333380249583648>`)
message.channel.send(finalembed)
    
    }
    
}

