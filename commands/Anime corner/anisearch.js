const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
const chalk = require('chalk')
const  {MessageButton, MessageActionRow} = require('discord-buttons')
const AsciiTable = require('ascii-table')
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


      let msg = await message.channel.send("<a:Loading:854800971854643240> Fetching The Info....")
    

    

      const malScraper = require('mal-scraper')

      const query = args.join(" ")
      
      malScraper.getResultsFromSearch(query)
       .then(async (data) => { 
        try {
          
            let search1 = new MessageButton()
            .setStyle('blurple') 
            .setLabel('1') 
            .setID('search1Event') 
            
let search2 = new MessageButton()
.setLabel('2')
.setStyle('blurple')
.setID('Search2')
let search3 = new MessageButton()
.setLabel('3')
.setStyle('blurple')
.setID('Search3')
let search4 = new MessageButton()
.setLabel('4')
.setStyle('blurple')
.setID('Search4')
let search5 = new MessageButton()
.setLabel('5')
.setStyle('blurple')
.setID('Search5')
let search6 = new MessageButton()
.setLabel('6')
.setStyle('blurple')
.setID('Search6')
let cancelbutton = new MessageButton()
.setLabel('Cancel')
.setStyle('red')
.setID('cancel')

let buttonRow = new MessageActionRow()
.addComponent(search1)
.addComponent(search2)
.addComponent(search3)
.addComponent(search4)
.addComponent(search5)
let buttonrow2 = new MessageActionRow()
.addComponent(search6)
.addComponent(cancelbutton)

       await msg.delete()
       return message.channel.send({components: [buttonRow, buttonrow2], embed: new MessageEmbed().setColor('YELLOW').setTitle('Select the button corresponding to your query.').setDescription(`\`\`\`1. ${data[0].name}\n\n2. ${data[1].name}\n\n3. ${data[2].name}\n\n4. ${data[3].name}\n\n5. ${data[4].name}\n\n6. ${data[5].name}\`\`\``).setFooter('The selection will automatically be canceled in 40 seconds.')}).then(thing => {
         thing.delete({timeout: 40000})
            client.on('clickButton', async (button) => {
             if(button.guild.id != message.guild.id) return;
              if(button.clicker.user.id == message.author.id) { 
                if(button.id == 'search1Event') {
                  
                  await thing.delete()
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
             return button.channel.send(embed)
              
     })
     
              }
              if(button.id == 'Search2') {
                  await thing.delete()
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
             message.channel.stopTyping(true)
              return button.channel.send(embed)
              
     })
              }
              if(button.id == 'Search3') {
                  await thing.delete()
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
             message.channel.stopTyping()
              return button.channel.send(embed)
             
     })
              }
              if(button.id == 'Search4') {
                  await thing.delete()
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
              return button.channel.send(embed)
              
     })
              }
              
              if(button.id == 'Search5') {
                  await thing.delete()
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
             message.channel.stopTyping(true)
              return button.channel.send(embed)
              
     })
              }
              if(button.id == 'Search6') {
                  await thing.delete()
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
              return button.channel.send(embed)
              
     })
              }
              if(button.id == 'cancel') {
                  await thing.delete()
message.channel.startTyping()
message.channel.stopTyping(true)
                  return button.channel.send({embed: new MessageEmbed().setColor('RED').setDescription(`Your search "\`${args.join(" ")}\`" has been cancelled!`)})
                  
              }
              message.channel.stopTyping(true)
              }
            
               
message.channel.stopTyping(true)
            })
            message.channel.stopTyping(true)
        })
       
    
        
      } catch (err) {
        msg.delete();
        console.log(chalk.redBright(`[MAL COMMAND ERROR]`) + ` - ${err}`)
         return message.channel.send(`Unable to find \`${args.join(" ")}\` on MyAnimeList, this is most likely an error.`);
         
       }                      

       
      

 
       })

     
  
     
    
       
                       
    
  }

}