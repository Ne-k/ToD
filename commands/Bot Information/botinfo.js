const { MessageEmbed } = require("discord.js");
const os = require('os')

const moment = require("moment") 
const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;

module.exports = { 
  config: {
    name: "botinfo",
    aliases: ["binfo", "bi"],
    usage: "t;botinfo",
    description: "Get some stats on the bot",
  },
  run: async (bot, message, args) => {
    if (message.channel.type == "dm") return message.channel.send("❌ | This command command is disabled for DMs, please use this within a server!");
    let bicon = bot.user.displayAvatarURL; //bot avatar
    const promises = [
      bot.shard.fetchClientValues('guilds.cache.size'),
      bot.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)')
  ];

   Promise.all(promises)
      .then(results => {
          const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
          const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
          let botembed = new MessageEmbed()
          .setDescription("Bot Information", true)
          .setColor('#ed95df')   //hex color randomizer
          .setThumbnail(bot.user.displayAvatarURL)
          .setDescription('Hello! I am ToD, a unique, constantly evolving bot. If there are bugs, please report them to the support server!"')
          .setTitle("ToD (Truth or dare)", true)
          .setFooter(`Made with ❤️`)
          .addField("<:image_20210516_090539:843519573272690738>  Developer", "Nek#1112",true)
          .addField(`🖼️ Icon "artist"`, `a y o o ୨୧˚₊#7402`, true)
          .addField("<:image_20210516_090633:843519802348798032> ToD's discriminator", ` \`\`\`${bot.user.discriminator}\`\`\` `)
          .addField("⚙️ Watching", `\`\`\`${totalGuilds.toLocaleString()} Guild(s), and ${totalMembers.toLocaleString()} users!\`\`\` ` )
          .addField("• Mem Usage", `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\`\`\` `)
          .addField("• Arch", `\`\`\`${os.arch()}\`\`\` `,true)
          .addField("• Platform", ` \`\`\`${os.platform()}\`\`\` `,true)
          .addField("<:image_20210516_090705:843519935215829012> Created On", `\`\`\`${moment(bot.user.createdAt).format("dddd, MMMM Do YYYY")} (${moment(bot.user.createdAt).fromNow()})\`\`\` `)
          .setTimestamp()
      message.channel.send(botembed);
      })
   
    
  }
}
