const fetch = require("node-fetch");
const cheerio = require('cheerio');
const Discord = require("discord.js");


module.exports = {
    config: {
        name: "aniwallpaper",
        usage: "aniwallpaper",
        description: "Get a randomly generated anime wallpaper!",
    },
  run: async (bot, message, argument) => {
   let random = Math.floor(Math.random() * 107)
      let text = await fetch(`https://hdqwalls.com/category/anime-wallpapers/page/${random}`, { method: "GET" })
      text = await text.text()
      let $ = cheerio.load(text)
      let images = []
  
      $('img[class="thumbnail img-responsive custom_width"]').each(function(i, elem) {
        images.push($(this).attr('src'));
      });
  
  
      let limit = images.length
      let pg = 0;
      let embed = new Discord.MessageEmbed()
        .setColor("#FF69B4")
        .setImage(images[0].replace("/thumb", ""))
        .setFooter(`Requested by: ${message.author.tag} | Powered by hdqwalls.com`, message.author.displayAvatarURL({ size: 32 }))
      const msg = await message.channel.send(embed);
      if(message.guild.me.hasPermission("MANAGE_MESSAGES"))  msg.react("⬅️");
      if(message.guild.me.hasPermission("MANAGE_MESSAGES"))  await msg.react("➡️");
  
      const collector = msg.createReactionCollector(
        // only collect left and right arrow reactions from the message author
        (reaction, user) =>
          ["⬅️", "➡️"].includes(reaction.emoji.name) &&
          user.id === message.author.id,
        // time out after a minute
        { time: 120000 }
      );
  
      collector.on("collect", reaction => {
  
          if(message.guild.me.hasPermission("MANAGE_MESSAGES")) reaction.users.remove(message.author).then(async () => {
          if (reaction.emoji.name === "➡️") {
  
  
            if (!images[pg + 1]) {
              pg = pg
            } else {
              pg = pg + 1
            }
            embed = new Discord.MessageEmbed()
              .setColor("#FF69B4")
              .setImage(images[pg].replace("/thumb", ""))
            msg.edit(embed)
            msg.react("⬅️");
            await msg.react("��️");
          }
  
          else if (reaction.emoji.name === "⬅️") {
  
  
            if (!images[pg - 1]) {
  
              pg = pg
            } else {
              pg = pg - 1
            }
  
            embed = new Discord.MessageEmbed()
              .setColor("#FF69B4")
              .setImage(images[pg].replace("/thumb", ""))
            msg.edit(embed)
  
            msg.react("⬅️");
            await msg.react("➡️");
          }
        })
  
      })
  
        collector.on('end', collected => {
        if (msg) {
          if(message.guild.me.hasPermission("MANAGE_MESSAGES")) msg.reactions.removeAll()
        }
      });
    }
  
  

















}