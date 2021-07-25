const { MessageEmbed } = require("discord.js");
const chalk = require('chalk')


module.exports = {
    config: {
        name: "anisearch",
        usage: "anisearch <anime_name>",
        aliases: ["animesearch", "mal"],
        example: "1) anisearch K-ON!\n2) anisearch  落第騎士の英雄譚《キャバルリィ》",
        description: "Get information on a anime title on MyAnimeList.",
    },
    
  run: async (client, message, args) => {
    if(!args.length) {
      return message.channel.send("Please give me a valid anime name on MAL.")
    }


      let msg = await message.channel.send({content: "<a:Loading:854800971854643240> Fetching The Info...."})
    

    

      const malScraper = require('mal-scraper')

      const query = args.join(" ")
      
      malScraper.getResultsFromSearch(query)
       .then(async (data) => { 
        try {
          

       
          client.setTimeout(() => msg.delete(), 0)
       return message.channel.send({
        components: [{
          "type": 1, components: [
              {
                  "type": 2,
          "label": '1️⃣', 
          "style": 1, 
          "custom_id": 'search1'
              },
              {
                "type": 2,
          "label": '2️⃣', 
          "style": 1, 
          "custom_id": 'Search2'
              },
              {
                "type": 2,
          "label": '3️⃣', 
          "style": 1, 
          "custom_id": 'Search3'
                
              },
              {
                "type": 2,
          "label": '4️⃣', 
          "style": 1, 
          "custom_id": 'Search4'
          
              },
              {
                "type": 2,
          "label": '5️⃣', 
          "style": 1, 
          "custom_id": 'Search5'
          
              },
          ]},
       {
           type: 1, components: [
            {
              "type": 2,
        "label": '6️⃣', 
        "style": 1, 
        "custom_id": 'Search6'
        
            },
            {
              "type": 2,
        "label": 'Cancel', 
        "style": 4, 
        "custom_id": 'cancel'
        
            },
           ]
          }],
         embeds: [new MessageEmbed().setColor('YELLOW').setTitle('Select the button corresponding to your query.').setDescription(`\`\`\`1. ${data[0].name}\n\n2. ${data[1].name}\n\n3. ${data[2].name}\n\n4. ${data[3].name}\n\n5. ${data[4].name}\n\n6. ${data[5].name}\`\`\``).setFooter('Selection will be deleted in 30 seconds.')]
        }).then(thing => {
          client.setTimeout(() => thing.delete(), 30000)

// Event Shit

            client.on('interactionCreate', async (interaction) => {

             if(interaction.guildId != message.guild.id) return;
              if(interaction.user.id !== message.author.id) {
                return interaction.reply({content: `You aren't allowed to click this button!`, ephemeral: true})

              }
                if(interaction.customId == 'search1') {
                  client.setTimeout(() => thing.delete(), 0)
                  message.channel.startTyping()
                  malScraper.getInfoFromName(data[0].name)
                  
     .then(async (s1) => { 
      const { getColorFromURL } = require('color-thief-node');
if(s1.trailer === undefined) {
s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
}

      const dominantColor = await getColorFromURL(s1.picture)
              let embed = new MessageEmbed()
              .setTitle(s1.title)
              .setURL(s1.url)
              .setColor(dominantColor)
              .setDescription(s1.synopsis)
              .setImage(s1.picture)
              .addField('Alternative Titles:', `\`${s1.englishTitle}, ${s1.japaneseTitle}\``, true)
              .addField('Total Episodes:', `\`${s1.episodes} episodes (${s1.duration})\``, true)
             .addField('Aired:', `\`${s1.aired}\``, true)
             .addField(`Rating:`, `\`${s1.rating}\``, true)
             .addField(`Anime Status:`, `\`${s1.status}\``, true)
             .addField('Genres:', `\`${s1.genres.join(`, `)}\``, true)
             .addField('Score on MAL:', `\`${s1.score} (${s1.scoreStats})\``, true)
             .addField('Ranked:', `\`${s1.ranked}\``, true)
             .addField('Anime Popularity:', `\`${s1.popularity}\``, true)
             .addField('Characters:', "`" + s1.characters.map(ani => ani.name).join(` | `) + "`", true)
             .addField(`Trailer:`, `**[${s1.title}'s Trailer](${s1.trailer})**`, true)

             message.channel.stopTyping(true)
             return message.channel.send({embeds: [embed]})

     })
     
              }
              
              
              
              if(interaction.customId == 'Search2') {
                client.setTimeout(() => thing.delete(), 0)
                message.channel.startTyping()
                  malScraper.getInfoFromName(data[1].name)
                  
     .then(async (s1) => { 
     
      const { getColorFromURL } = require('color-thief-node');

      if(s1.trailer === undefined) {
        s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
      }
      const dominantColor = await getColorFromURL(s1.picture)
              let embed = new MessageEmbed()
              .setTitle(s1.title)
              .setURL(s1.url)
              .setColor(dominantColor)
              .setDescription(s1.synopsis)
              .setImage(s1.picture)
              .addField('Alternative Titles:', `\`${s1.englishTitle}, ${s1.japaneseTitle}\``, true)
              .addField('Total Episodes:', `\`${s1.episodes} episodes (${s1.duration})\``, true)
             .addField('Aired:', `\`${s1.aired}\``, true)
             .addField(`Rating:`, `\`${s1.rating}\``, true)
             .addField(`Anime Status:`, `\`${s1.status}\``, true)
             .addField('Genres:', `\`${s1.genres.join(`, `)}\``, true)
             .addField('Score on MAL:', `\`${s1.score} (${s1.scoreStats})\``, true)
             .addField('Ranked:', `\`${s1.ranked}\``, true)
             .addField('Anime Popularity:', `\`${s1.popularity}\``, true)
             .addField('Characters:', "`" + s1.characters.map(ani => ani.name).join(` | `) + "`", true)
             .addField(`Trailer:`, `**[${s1.title}'s Trailer](${s1.trailer})**`, true)
             essage.channel.stopTyping(true)
              return message.channel.send({embeds: [embed]})
              
     })
              }
              if(interaction.customId == 'Search3') {
                client.setTimeout(() => thing.delete(), 0)
                message.channel.startTyping()
                  malScraper.getInfoFromName(data[2].name)
                  
     .then(async (s1) => { 
      const { getColorFromURL } = require('color-thief-node');

      if(s1.trailer === undefined) {
        s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
      }
     
      const dominantColor = await getColorFromURL(s1.picture)
              let embed = new MessageEmbed()
              .setTitle(s1.title)
              .setURL(s1.url)
              .setColor(dominantColor)
              .setDescription(s1.synopsis)
              .setImage(s1.picture)
              .addField('Alternative Titles:', `\`${s1.englishTitle}, ${s1.japaneseTitle}\``, true)
              .addField('Total Episodes:', `\`${s1.episodes} episodes (${s1.duration})\``, true)
             .addField('Aired:', `\`${s1.aired}\``, true)
             .addField(`Rating:`, `\`${s1.rating}\``, true)
             .addField(`Anime Status:`, `\`${s1.status}\``, true)
             .addField('Genres:', `\`${s1.genres.join(`, `)}\``, true)
             .addField('Score on MAL:', `\`${s1.score} (${s1.scoreStats})\``, true)
             .addField('Ranked:', `\`${s1.ranked}\``, true)
             .addField('Anime Popularity:', `\`${s1.popularity}\``, true)
             .addField('Characters:', "`" + s1.characters.map(ani => ani.name).join(` | `) + "`", true)
             .addField(`Trailer:`, `**[${s1.title}'s Trailer](${s1.trailer})**`, true)
             message.channel.stopTyping(true)
              message.channel.startTyping({embeds: [embed]})
             
     })
              }
              if(interaction.customId == 'Search4') {
                client.setTimeout(() => thing.delete(), 0)
                message.channel.startTyping()
                  malScraper.getInfoFromName(data[3].name)
                  
     .then(async (s1) => { 
      const { getColorFromURL } = require('color-thief-node');

      if(s1.trailer === undefined) {
        s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
      }


      const dominantColor = await getColorFromURL(s1.picture)
              let embed = new MessageEmbed()
              .setTitle(s1.title)
              .setURL(s1.url)
              .setColor(dominantColor)
              .setDescription(s1.synopsis)
              .setImage(s1.picture)
              .addField('Alternative Titles:', `\`${s1.englishTitle}, ${s1.japaneseTitle}\``, true)
              .addField('Total Episodes:', `\`${s1.episodes} episodes (${s1.duration})\``, true)
             .addField('Aired:', `\`${s1.aired}\``, true)
             .addField(`Rating:`, `\`${s1.rating}\``, true)
             .addField(`Anime Status:`, `\`${s1.status}\``, true)
             .addField('Genres:', `\`${s1.genres.join(`, `)}\``, true)
             .addField('Score on MAL:', `\`${s1.score} (${s1.scoreStats})\``, true)
             .addField('Ranked:', `\`${s1.ranked}\``, true)
             .addField('Anime Popularity:', `\`${s1.popularity}\``, true)
             .addField('Characters:', "`" + s1.characters.map(ani => ani.name).join(` | `) + "`", true)
             .addField(`Trailer:`, `**[${s1.title}'s Trailer](${s1.trailer})**`, true)
             message.channel.stopTyping(true)
              return message.channel.stop({embeds: [embed]})
              
     })
              }
              
              if(interaction.customId == 'Search5') {
                client.setTimeout(() => thing.delete(), 0)
                message.channel.startTyping()
                  malScraper.getInfoFromName(data[4].name)
                  
     .then(async (s1) => { 
      const { getColorFromURL } = require('color-thief-node');
      if(s1.trailer === undefined) {
        s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
      }

      const dominantColor = await getColorFromURL(s1.picture)
              let embed = new MessageEmbed()
              .setTitle(s1.title)
              .setURL(s1.url)
              .setColor(dominantColor)
              .setDescription(s1.synopsis)
              .setImage(s1.picture)
              .addField('Alternative Titles:', `\`${s1.englishTitle}, ${s1.japaneseTitle}\``, true)
              .addField('Total Episodes:', `\`${s1.episodes} episodes (${s1.duration})\``, true)
             .addField('Aired:', `\`${s1.aired}\``, true)
             .addField(`Rating:`, `\`${s1.rating}\``, true)
             .addField(`Anime Status:`, `\`${s1.status}\``, true)
             .addField('Genres:', `\`${s1.genres.join(`, `)}\``, true)
             .addField('Score on MAL:', `\`${s1.score} (${s1.scoreStats})\``, true)
             .addField('Ranked:', `\`${s1.ranked}\``, true)
             .addField('Anime Popularity:', `\`${s1.popularity}\``, true)
             .addField('Characters:', "`" + s1.characters.map(ani => ani.name).join(` | `) + "`", true)
             .addField(`Trailer:`, `**[${s1.title}'s Trailer](${s1.trailer})**`, true)
             message.channel.startTyping(true)
              return message.channel.send({embeds: [embed]})
              
     })
              }
              if(interaction.customId == 'Search6') {
                client.setTimeout(() => thing.delete(), 0)
                message.channel.startTyping()
                  malScraper.getInfoFromName(data[5].name)
                  
     .then(async (s1) => { 
      const { getColorFromURL } = require('color-thief-node');
      if(s1.trailer === undefined) {
        s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
      }

      const dominantColor = await getColorFromURL(s1.picture)
              let embed = new MessageEmbed()
              .setTitle(s1.title)
              .setURL(s1.url)
              .setColor(dominantColor)
              .setDescription(s1.synopsis)
              .setImage(s1.picture)
              .addField('Alternative Titles:', `\`${s1.englishTitle}, ${s1.japaneseTitle}\``, true)
              .addField('Total Episodes:', `\`${s1.episodes} episodes (${s1.duration})\``, true)
             .addField('Aired:', `\`${s1.aired}\``, true)
             .addField(`Rating:`, `\`${s1.rating}\``, true)
             
             .addField(`Anime Status:`, `\`${s1.status}\``, true)
             .addField('Genres:', `\`${s1.genres.join(`, `)}\``, true)
             .addField('Score on MAL:', `\`${s1.score}/10 (${s1.scoreStats}) | \``, true)
             .addField('Ranked:', `\`${s1.ranked}\``, true)
             .addField('Anime Popularity:', `\`${s1.popularity}\``, true)
             .addField('Characters:', "`" + s1.characters.map(ani => ani.name).join(` | `) + "`", true)
             .addField(`Trailer:`, `**[${s1.title}'s Trailer](${s1.trailer})**`, true)

             message.channel.stopTyping(true)

              return message.channel.send({embeds: [embed]})
              
     })
              }
              if(interaction.customId == 'cancel') {
                  await client.setTimeout(() => thing.delete(), 0)

                  return message.channel.send({embeds: [new MessageEmbed().setColor('RED').setDescription(`Your search "\`${args.join(" ")}\`" has been cancelled!`)]})
                  
              }
             
              
            
               

            })
           
        })
       
    
        
      } catch (err) {
        msg.delete();
        console.log(chalk.redBright(`[MAL COMMAND ERROR]`) + ` - ${err}`)
         return message.channel.send({content: `Unable to find \`${args.join(" ")}\` on MyAnimeList, this is most likely an error.`});
         
       }                      

       
      

 
       })

     
  
     
    
       
                       
    
  }

}