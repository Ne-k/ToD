const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
const chalk = require('chalk')
module.exports = {
    config: {
        name: "kitsu",
        usage: "kitsu <anime_name>",
        example: "1) kitsu K-ON! ",
        description: "Get information on a anime.",
    },
    
  run: async (bot, message, args) => {
        if(!args.length) {
          return message.channel.send("Please give me a valid anime name.")
        }
        let CC = ["#815498", "#f1cdc8", "#eaecf3", "#dcadae", "#cbbdd7", "#a7a2d0"];
        let result = Math.floor((Math.random() * CC.length));
    
          let msg = await message.channel.send("<a:Loading:777226808063688714> Fetching The Info....")
        
    
        try {
    
        let body = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`)
        body = await body.json()
    
      
         
        
            let embed = new MessageEmbed()
            .setAuthor(body.data[0].attributes.slug, 'https://avatars3.githubusercontent.com/u/7648832?s=400&v=4')
            .setColor(CC[result])
            .setDescription(`__Synopsis__:\n\n ${body.data[0].attributes.synopsis.length > 2048 ? "The Anime's Synopsis is too long to display. Try looking on the kitsu.io page." : body.data[0].attributes.synopsis}`)
            .setImage(body.data[0].attributes.posterImage.original)
            .addField("** **", `__**You**__ have searched for: \`${args.join(" ")}\`, and \`${body.data[0].attributes.slug}\` is the top result on **[kitsu.io](https://kitsu.io/explore/anime)**.`)
            .addField("Titles:", `\`${body.data[0].attributes.titles.en}, ${body.data[0].attributes.titles.en_jp}, ${body.data[0].attributes.titles.ja_jp}\``, true)
            .addField("Anime Ratings:", "`" + body.data[0].attributes.averageRating + "`", true)
            .addField("Abbreviated Titles:", `\`${body.data[0].attributes.abbreviatedTitles.length < 2 ? "No information found for abbreviated titles." : body.data[0].attributes.abbreviatedTitles}\``, true)
            .addField("Episodes:", "`" + body.data[0].attributes.episodeCount + "`", true)
            .addField("Favorites Count:", "`" + body.data[0].attributes.favoritesCount + "`", true)
            .addField("Anime Popularity Rank:", "`" + body.data[0].attributes.popularityRank + "`", true)
            .addField("Anime Status:", "`" + body.data[0].attributes.status + "`", true)
            .addField("Episode length (minutes):", "`" + body.data[0].attributes.episodeLength  == null ? 'No information found for episode length.' :  "`" + body.data[0].attributes.episodeLength + "`", true)
            .addField("User Count:", "`" + body.data[0].attributes.userCount + "`", true)
            .addField("Anime Age Rating:", ` \`${body.data[0].attributes.ageRating.length < 2 ? "No information found for age rating." : body.data[0].attributes.ageRating}\` `, true)
            .addField('Age Rating Guide:', ` \`${body.data[0].attributes.ageRatingGuide == null ? 'No information found for age rating' : body.data[0].attributes.ageRatingGuide}\` `, true)
            
            .addField('Sub Type:', `\`${body.data[0].attributes.subtype}\``, true)
            .addField('** **', "** **", true)
            .addField('Trailer link:', `**[LINK[1]](https://www.youtube.com/watch?v=${body.data[0].attributes.youtubeVideoId})** `, true)
            .addField('** **', "** **", true)
            .setFooter(`Requested by: ${message.author.tag} | Powered by kitsu.io.`, message.author.displayAvatarURL({ size: 32 }))
            
            
            
            message.channel.send(embed)
        msg.delete();
    
          

      } catch (err) {
        msg.delete();
     
         message.channel.send(`Unable to find \`${args.join(" ")}\` on kitsu.io, this is most likely an error.`);
         console.log(chalk.redBright(`[KITSU COMMAND ERROR]`) + ` - ${err}`)
       }                      

     
                       
    
  }

}