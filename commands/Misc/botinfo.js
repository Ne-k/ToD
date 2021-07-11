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

    const { MessageButton } = require('discord-buttons');

    if (message.channel.type == "dm") return message.channel.send("❌ | This command command is disabled for DMs, please use this within a server!");

    let bicon = bot.user.displayAvatarURL(); 

    const fetch = require('node-fetch')
    const Discord = require('discord.js')
    const waifuAPI = 'https://waifu.pics/api'
    /* https://api.kaedee.xyz/v1/cdn/<anime/nsfw/sfw>/<category> */
    const moment = require("moment");
    require("moment-duration-format");
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    
    
      
    const { url } = await fetch(`${waifuAPI}/sfw/happy`).then(res => res.json())
  
    const promises = [
      bot.shard.fetchClientValues('guilds.cache.size'),
      bot.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)')
  ];

   Promise.all(promises)
      .then(results => {
          const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
          const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

          let footerthing = ["made in the USA", "made in the USA", "made in the USA", "made in the USA", "made in the USA", "made in the USA", "made in the USA", "made in the USA", "made in the USA", "made by asian bored as hell"]
          let result = Math.floor((Math.random() * footerthing.length));
          let botembed = new MessageEmbed()
          .setDescription("Bot Information", true)
          .setColor('#ed95df')  
          .setThumbnail(bot.user.displayAvatarURL)
          .setDescription('Hello! I am ToD, a unique, constantly evolving bot.')
          .setTitle("ToD (Truth or dare)", true)
          .setFooter(`Made with ❤️ ${footerthing[result]}`)
          .addField("<:image_20210516_090539:843519573272690738>  Developer", "\`\`\`Nek#2937\`\`\`",true)
          .addField(`🖼️ Icon "artist"`, `\`\`\`a y o o ୨୧˚₊#0887\`\`\``, true)
          .addField("--------------------------------------------------------------------------------", `** **`)
          .addField(`• Shard ${message.guild.shardID} Uptime`, `\`\`\`${duration}\`\`\``, true)
          .addField('• Total Shards', `\`\`\`${bot.options.shardCount}\`\`\``, true)
          .addField("⚙️ Watching", `\`\`\`${totalGuilds.toLocaleString()} Guild(s), and ${totalMembers.toLocaleString()} users!\`\`\` ` )
          .addField("• Mem Usage", `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\`\`\` `)
          .addField("• Arch", `\`\`\`${os.arch()}\`\`\` `,true)
          .addField("• Platform", ` \`\`\`${os.platform()}\`\`\` `,true)
          .addField("<:image_20210516_090705:843519935215829012> Created On", `\`\`\`${moment(bot.user.createdAt).format("dddd, MMMM Do YYYY")} (${moment(bot.user.createdAt).fromNow()})\`\`\` `)
          .setTimestamp()
          .setImage(url)

          let button = new MessageButton()
         
          .setLabel('Invite') 
          .setStyle("url")
          .setURL('https://discord.com/oauth2/authorize?client_id=752306970467237970&scope=bot&permissions=470150368')
          
          let button1 = new MessageButton()
         
          .setLabel('Semi-accurate stats') 
          .setStyle("url")
          .setURL('https://statcord.com/bot/752306970467237970')
          
          message.channel.send({
  buttons: [
    button, button1
  ],
  embed: botembed
});
      })
   
    
  }
}
