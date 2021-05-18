const Discord = require("discord.js");
const kitsu = require('node-kitsu');
module.exports = {
    config: {
        name: "manga",
        aliases: ["mangasearch"],
        usage: "manga <Manga query>",
        example: "1) manga Kimetsu no Yaiba",
        description: "Get information on a manga.",

    },
  run: async (bot, message, argument) => {

        message.react('<a:loading:777226808063688714>')
        kitsu.searchManga(argument, 0).then(results => {
            searchResult = results[0];
            if(!searchResult){
              message.channel.send("Manga Not Found | Try doing `t;manga <Manga name>`");
            }else{
              var mangaID = searchResult.id;
              var titleEn = searchResult.attributes.titles.en;
              if(!titleEn){
                  titleEn = "English title Not Found."
              }
              var titleJP = searchResult.attributes.titles.en_jp;
              if(!titleJP){
                  titleJP = "Rōmaji title Not Found."
              }
              var title = searchResult.attributes.canonicalTitle;
              if(!title){
                if(!titleEn){
                    title = titleEn;
                }else if(!titleJP){
                    title = titleJP;
                }else{
                    title = "Canon Title Not Found.";
                }
              }
              var synopsis = searchResult.attributes.synopsis;
              if(!synopsis){
                  synopsis = "No Synopsis Found";
              }
              var chapterCount = searchResult.attributes.chapterCount;
              if(!chapterCount){
                  chapterCount = "Unknown";
              }
              var volumeCount = searchResult.attributes.volumeCount;
              if(!volumeCount){
                    volumeCount = "Unknown";
              }
              var serialization = searchResult.attributes.serialization;
              if(!serialization){
                    serialization = "Unknown";
              }
              var status = searchResult.attributes.status;
              var startDate = searchResult.attributes.startDate;
              if(!startDate){
                  startDate = "Unknown";
              }
              var endDate = searchResult.attributes.endDate;
              if(!endDate){
                  endDate = "Unknown";
              }                    
              var smallPoster = searchResult.attributes.posterImage.small;
        
              //If the synopsis is longer then 700 characters cut it off and add "..."
              //So the post doesn't become to long.
              if(synopsis.length > 700){
                  var synopsis = synopsis.substring(0, 700) + '...';
              }
              //The Status returns lowercase "finished", This transforms it into "Finished"
              var statusUpper = status.charAt(0).toUpperCase() + status.substr(1).toLowerCase();
        
              const embed = new Discord.MessageEmbed()
                   .setTitle(title)
                   .setAuthor("ToD-Manga", bot.user.displayAvatarURL())
                   .setColor(14462382)
                   .setDescription("Status: "+statusUpper)
                   .setFooter("Manga information brought to you by Kitsu.io", "https://media.discordapp.net/attachments/777983875170304007/796234578930958346/No-textToD.png")
                   .setImage(smallPoster)
                   .setTimestamp()
                   .setURL("https://kitsu.io/anime/"+mangaID)
                   .addField("Synopsis:", synopsis)
                   .addField("Magazine:", serialization)
                   .addField("Chapters:", chapterCount, true)
                   .addField("Volumes:", volumeCount,true)
                   .addField("English:", titleEn, true)
                   .addField("Romanized:", titleJP, true)
                   .addField("Start:", startDate, true)
                   .addField("End:", endDate, true)
                   .setFooter(`Requested by: ${message.author.tag} | Powered by kitsu.io`, message.author.displayAvatarURL({ size: 32 }))
                   message.channel.send({embed});
                   message.reactions.removeAll()
            }//END if !searchresults
        });//END searchManga
    
        



  }
}