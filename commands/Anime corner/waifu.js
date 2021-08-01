
const Discord = require('discord.js')
const ColorThief = require('color-thief-updated')
var colorThief = new ColorThief();
const fs = require('fs')
module.exports = {
    config: {
        name: "waifu",
        usage: "waifu",
        description: "Sends a embed with a random waifu from `https://mywaifulist.moe`.",
    },
    run: async (client, message, args) => {
        if(!args.join(" ")) {
           
        message.channel.send({embeds: [new Discord.MessageEmbed().setColor('RED').setDescription('Please select an argument:\nUsage: \`waifu <argument>\`\n\n\n__Arguments__:\n\`random\` - Sends random waifus.\n\`popular\` - Sends a list of popular waifus (alltime).')]})
   
        }
if(args.join(" ") == 'random') {
    message.channel.startTyping()  
    require('node-fetch')(`https://casey.gg/api/mwl?type=randomwaifu`, { headers: { 'token': process.env.mwl_API_key}}).then(res => res.json()).then(d => {
        message.channel.stopTyping(true)
        return message.channel.send({embeds: [new Discord.MessageEmbed().setImage(d.data.display_picture).setTitle(d.data.name).setURL(d.data.url).setDescription(d.data.description).addField("Alternate Name:", `${d.data.original_name === null ? `No information found.` : `${d.data.original_name}`}`, true).addField('Type:', `${d.data.type}`, true).setColor('GOLD').setFooter(`❤️ ${d.data.likes} likes | 🗑️ ${d.data.trash} dislikes`)]})
    })
    }

    if(args.join(" ") === 'popular') {
try {
        function makeButtonGrid(w, h) {
            let buttons = [];
            for (let x = 0; x < w * h; x++) {
              buttons.push({
                style: 1,
                type: 2,
                label: `${x + 1}`,
                custom_id: `btn_${x + 1}`
              });
            }
            return Array.from({ length: Math.ceil(buttons.length / 5) }, (a, r) =>
              buttons.slice(r * 5, r * 5 + 5)
            );
          }
          

        require('node-fetch')(`https://japi.rest/mywaifulist/v1/popular`, { headers: { 'Authorization': process.env.japi_API_key}}).then(res => res.json()).then(d => {
            /* d.data.map((t, i) => `**${`#${i}` + 1}** - ${t.name}`).join('\n') */

            /*
 "components": [
                    {
                    "type": 1,
                    "components": [
                      {
                        "type": 2,
                        emoji: {
                            name:"⬅️", id: null
                        },  
                        "style": 1, 
                        "custom_id": '1'
                      },
                      {
                          "type": 2, 
                          emoji: {
                            name:"➡️", id: null
                        }, 
                          "style": 1, 
                          "custom_id": "1"
                      }
                    ]
                   
                    }
                    ],


            */

            return message.channel.send({

                components: makeButtonGrid(5, 4).map(x => ({type: 1, components: x})), 

                embeds: [new Discord.MessageEmbed().setTitle('Popular Waifus (alltime)').setColor('RANDOM').setAuthor('Select a button corresponding number placement.').setDescription(d.data.map((t, i) => `**${i + 1}** - ${t.name}`).join('\n')).setFooter("Command will be deleted in 6 minutes.")]
            }).then(msg => {
                
                client.setTimeout(() => msg.delete(), 360000)

                client.on('interactionCreate', async (interaction) => {
               
                    if(interaction.guildId != message.guild.id) return;
                    if(interaction.user.id !== message.author.id) {
                      return interaction.reply({content: `You aren't allowed to click this button!`, ephemeral: true})
      
                    }

    if(interaction.customId == 'btn_1') {
        let data = d.data[0]
       
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_1') {
        let data = d.data[0]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_2') {
        let data = d.data[1]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_3') {
        let data = d.data[2]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_4') {
        let data = d.data[3]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_5') {
        let data = d.data[4]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_6') {
        let data = d.data[5]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_7') {
        let data = d.data[6]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_8') {
        let data = d.data[7]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_9') {
        let data = d.data[8]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_10') {
        let data = d.data[9]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_11') {
        let data = d.data[10]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_12') {
        let data = d.data[11]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_13') {
        let data = d.data[12]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_14') {
        let data = d.data[13]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_15') {
        let data = d.data[14]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.customId == 'btn_16') {
        let data = d.data[15]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }
    if(interaction.customId == 'btn_17') {
        let data = d.data[16]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }
    if(interaction.customId == 'btn_18') {
        let data = d.data[17]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }
    if(interaction.customId == 'btn_19') {
        let data = d.data[18]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }
    if(interaction.customId == 'btn_20') {
        let data = d.data[19]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ").replace(`${data.name.toLowerCase()}`, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes} likes | 🗑️ ${data.trash} dislikes`).setColor(colorThief.getColor(buffer))]})
    }


                


                   
                    
                })
            })
       
           
        })
        
    }catch(e) {
            console.log(e)
    }
    }


      

}
}