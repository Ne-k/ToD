const { MessageEmbed, WebhookClient } = require("discord.js")
module.exports = { 
    config: {
      name: "bugreport",
      usage: "bugreport <Bug/Args>",
      aliases: ["br"],
      example: "bugreport the kitsu embed isn't sending.",
      description: "**B**ug **r**eport: Sends a bug report to the [development server](https://bit.ly/ToD-Support) to be reviewed and fixed.",
    },
    run: async (bot, message, args) => {
      let reportedbug = args.join(" ").slice(0);
      if(!reportedbug) return message.channel.send('Please input a suggestion to send.')
        
        let messageuser = message.author.username;
        let messageguild = message.guild.name;


let bugreportembedbecausewhythefucknotsohereistheembedname = new MessageEmbed()
.setTitle("<:image_20210516_090158:843518650161299456> Bug Report <:image_20210516_090158:843518650161299456>")
.setThumbnail(message.author.avatarURL())
.addField("__Reported bug:__", reportedbug)
.addField("__Reported By:__", `${message.author.tag}\n \`${message.author.id}\` `)
.addField("__Reported in:__", `${messageguild}\n \`${message.guild.id}\` `)
.setTimestamp()
.setColor("#cbbdd7")
const webhookClient = new WebhookClient(
  process.env.BUG_LOGGING_ID,
  process.env.BUG_LOGGING_WEBHOOK
);

webhookClient.send({
  username: "ToD Bug Reports",
  avatarURL: "https://images-ext-2.discordapp.net/external/Zj62aTTOdl2xgGsOhGAF8uxunbM3NROYkh6cNl6l6O4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/752306970467237970/97998fd845941d3cb7ba4c27499cd36b.webp?width=338&height=338",
  embeds: [bugreportembedbecausewhythefucknotsohereistheembedname]
});
let finalembed = new MessageEmbed()
.setTitle('Suggestion sent!')
.setColor('GREEN')
.setDescription(`<:kekeke:824333380249583648> Thank you for the bug report! You have sent "\`${reportedbug}\`" to the official server to be reviewed. <:kekeke:824333380249583648>`)
message.channel.send(finalembed)
    }

}
