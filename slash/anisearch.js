const { MessageEmbed } = require("discord.js");

module.exports = {
    slash: {
        name: 'anisearch',
        c: 'Anime', 
          description: 'Searches an anime title on MyAnimeList',
          commandOptions: [
              {
                  type: 3,
                  name: "query",
                  description: "Your query to search on MyAnimeList",
                  required: true
              }
          ],
          global: true,
    },
	
	async execute(interaction, int, client) {

        const malScraper = require('mal-scraper')
    
        try {
            malScraper.getInfoFromName(interaction.data.options[0].value).then(async (s1) => { 
             const { getColorFromURL } = require('color-thief-node');

       if(s1.trailer === undefined) {
       s1.trailer = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
       }
       
       if(!s1.broadcast) {
         s1.broadcast = '?'
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
                    .addField('Air:', `\`${s1.aired} (Broadcasts every ${s1.broadcast})\``, true)
                    .addField(`Rating:`, `\`${s1.rating}\``, true)
                    .addField(`Anime Status:`, `\`${s1.status}\``, true)
                    .addField('Genres:', `\`${s1.genres.join(`, `)}\``, true)
                    .addField('Score on MAL:', `\`${s1.score} (${s1.scoreStats})\``, true)
                    .addField('Ranked:', `\`${s1.ranked}\``, true)
                    .addField('Anime Popularity:', `\`${s1.popularity}\``, true)
                    .addField('Characters:', "`" + s1.characters.map(ani => ani.name).join(` | `) + "`", true)
                    .addField(`Trailer:`, `**[${s1.title}'s Trailer](${s1.trailer})**`, true)
                
                    client.api.interactions(interaction.id, interaction.token).callback.post({data: {
                        type: 4,
                        data: {
                "components": [
                    {
                    "type": 1,
                    "components": [
                      {
                        "type": 2,
                        "label": "MyAnimeList page", 
                        "style": 5, 
                        "url": `${s1.url}`
                      },
        
                    ]
                   
                    }
                    ],
                embeds: [embed],
                        }
                    }
            })
        })

        } catch(e) {
            console.log(e)
        }
    


    }
}