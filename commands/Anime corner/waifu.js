
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
           
        message.channel.send({embeds: [new Discord.MessageEmbed().setColor('RED').setDescription('Please select an argument:\nUsage: \`waifu <argument>\`\n\n\n__Arguments__:\n\`best\` - Shows seasonal **best** waifus.\n\`popular\` - Sends a list of **popular** waifus (alltime).\n\`random\` - Sends **random** waifus.\n\`spopular\` - Sends the **seasonal most** popular waifus.\n\`top\` - Sends **top tier** waifus.\n\`trash\` - Sends the top **trash** waifus.')]})
   
        }

 // ==============================================================================================================================================================


if(args.join(" ") == 'random') {
    message.channel.startTyping()  
    require('node-fetch')(`https://casey.gg/api/mwl?type=randomwaifu`, { headers: { 'token': process.env.mwl_API_key}}).then(res => res.json()).then(d => {
        message.channel.stopTyping(true)
        return message.channel.send({embeds: [new Discord.MessageEmbed().setImage(d.data.display_picture).setTitle(d.data.name).setURL(d.data.url).setDescription(d.data.description).addField("Alternate Name:", `${d.data.original_name === null ? `No information found.` : `${d.data.original_name}`}`, true).setColor('GOLD').setFooter(`❤️ ${d.data.likes} likes | 🗑️ ${d.data.trash} dislikes`)]})
    })
    }

    if(args.join(" ") === 'popular') {
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
                embeds: [new Discord.MessageEmbed().setTitle('Popular Waifus (alltime) ranking').setColor('RANDOM').setFooter('This message will be deleted in 6 minutes.').setDescription(d.data.map((t, i) => `**#${i + 1}** - ${t.name}`).join('\n'))],
                "components": [
                    {
                        "type": 1,
                        "components": [
                            {
                                "type": 3,
                                "custom_id": 'Selects',
                                "options":[
                                    
                                    {
                                        
                                        "label": `Home`,
                                        "value": "Home",
                                        "emoji":{
                                            name:"🏠", id:null
                                        }, 
                                        "description": "Go back to the main ranking page",
                                    
                                    },
                                    
                                    {
                                        
                                        "label": `${d.data[0].name}`,
                                        "value": "0",
                                        "description": "Get info on the character!",
                                    
                                    },
                                    
                                    {
                                        
                                        "label": `${d.data[1].name}`,
                                        "value": "1",
                                        "description": "Get info on the character!",
                                        
                                    
                                    },
                                    {
                                        "label": `${d.data[2].name}`,
                                        "value": "2",
                                        "description": "Get info on the character!",
                                    
                                    },
                                    {
                                        "label": `${d.data[3].name}`,
                                        "value": "3",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[4].name}`,
                                        "value": "4",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[5].name}`,
                                        "value": "5",
                                        "description": "Get info on the character!",
                                    },
                                    {
                                        "label": `${d.data[6].name}`,
                                        "value": "6",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[7].name}`,
                                        "value": "7",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[8].name}`,
                                        "value": "8",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[9].name}`,
                                        "value": "9",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[10].name}`,
                                        "value": "10",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[11].name}`,
                                        "value": "11",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[12].name}`,
                                        "value": "12",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[13].name}`,
                                        "value": "13",
                                        "description": "Get info on the character!",
                                    },
                                    {
                                        "label": `${d.data[14].name}`,
                                        "value": "14",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[15].name}`,
                                        "value": "15",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[16].name}`,
                                        "value": "16",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[17].name}`,
                                        "value": "17",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[18].name}`,
                                        "value": "18",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    {
                                        "label": `${d.data[19].name}`,
                                        "value": "19",
                                        "description": "Get info on the character!",
                                        
                                    },
                                    
                                   
                                ],
                                
                                
                                "placeholder": "Choose a character",
                                "default": true,
                                "min_values": 1,
                                "max_values": 1
                            }
                            
                        ]
                    }
                ]

                /*

                
                                    
                                    {
                                        
                                        "label": `${d.data[1].name}`,
                                        "value": "1",
                                        "description": "Sneak n stab",
                                    
                                    },
                                    {
                                        "label": `${d.data[2].name}`,
                                        "value": "2",
                                        "description": "Sneak n stab",
                                    
                                    },
                                    {
                                        "label": `${d.data[3].name}`,
                                        "value": "3",
                                        "description": "Sneak n stab",
                                        
                                    },
                                    */
               
            }).then(msg => {
               
                client.setTimeout(() => msg.delete(), 360000)

                client.on('interactionCreate', async (interaction) => {
                    if(interaction.guildId != message.guild.id) return;
                    if(interaction.user.id !== message.author.id) {
                      return interaction.reply({content: `You aren't allowed to click this selection!`, ephemeral: true})
      
                    }
if(interaction.values[0] == 'Home') {
    msg.edit({ embeds: [new Discord.MessageEmbed().setFooter('This message will be deleted in 6 minutes.').setFooter('This message will be deleted in 6 minutes.').setTitle('Popular Waifus (alltime)').setColor('RANDOM').setDescription(d.data.map((t, i) => `**${i + 1}** - ${t.name}`).join('\n'))],})
}

    if(interaction.values[0] == 0) {
        let data = d.data[0]
       
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 1) {
        let data = d.data[1]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 2) {
        let data = d.data[2]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 3) {
        let data = d.data[3]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 4) {
        let data = d.data[4]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 5) {
        let data = d.data[5]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 6) {
        let data = d.data[6]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 7) {
        let data = d.data[7]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 8) {
        let data = d.data[8]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 9) {
        let data = d.data[9]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 10) {
        let data = d.data[10]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 11) {
        let data = d.data[11]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 12) {
        let data = d.data[12]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 13) {
        let data = d.data[13]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 14) {
        let data = d.data[14]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 15) {
        let data = d.data[15]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }

    if(interaction.values[0] == 16) {
        let data = d.data[16]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }
    if(interaction.values[0] == 17) {
        let data = d.data[17]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }
    if(interaction.values[0] == 18) {
        let data = d.data[18]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }
    if(interaction.values[0] == 19) {
        let data = d.data[19]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }
    if(interaction.values[0] == 20) {
        let data = d.data[20]
        let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
        const buffer = Buffer.from(arrayBuffer)
       

        msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
    }


                


                   
                    
                })
            })
       
           
        })
        
    
    }

    // ==============================================================================================================================================================

    
        if(args.join(" ") === 'best') {
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
              
    
            require('node-fetch')(`https://japi.rest/mywaifulist/v1/current/best`, { headers: { 'Authorization': process.env.japi_API_key}}).then(res => res.json()).then(d => {
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
                    embeds: [new Discord.MessageEmbed().setTitle('Seasonal best waifus ranking').setFooter('This message will be deleted in 6 minutes.').setColor('RANDOM').setDescription(d.data.map((t, i) => `**#${i + 1}** - ${t.name}`).join('\n'))],
                    "components": [
                        {
                            "type": 1,
                            "components": [
                                {
                                    "type": 3,
                                    "custom_id": 'Selects',
                                    "options":[
                                        
                                        {
                                            
                                            "label": `Home`,
                                            "value": "Home",
                                            "emoji":{
                                                name:"🏠", id:null
                                            },
                                            "description": "Go back to the main ranking page",
                                        
                                        },
                                        
                                        {
                                            
                                            "label": `${d.data[0].name}`,
                                            "value": "0",
                                            "description": "Get info on the character!",
                                        
                                        },
                                        
                                        {
                                            
                                            "label": `${d.data[1].name}`,
                                            "value": "1",
                                            "description": "Get info on the character!",
                                            
                                        
                                        },
                                        {
                                            "label": `${d.data[2].name}`,
                                            "value": "2",
                                            "description": "Get info on the character!",
                                        
                                        },
                                        {
                                            "label": `${d.data[3].name}`,
                                            "value": "3",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[4].name}`,
                                            "value": "4",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[5].name}`,
                                            "value": "5",
                                            "description": "Get info on the character!",
                                        },
                                        {
                                            "label": `${d.data[6].name}`,
                                            "value": "6",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[7].name}`,
                                            "value": "7",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[8].name}`,
                                            "value": "8",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[9].name}`,
                                            "value": "9",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[10].name}`,
                                            "value": "10",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[11].name}`,
                                            "value": "11",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[12].name}`,
                                            "value": "12",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[13].name}`,
                                            "value": "13",
                                            "description": "Get info on the character!",
                                        },
                                        {
                                            "label": `${d.data[14].name}`,
                                            "value": "14",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[15].name}`,
                                            "value": "15",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[16].name}`,
                                            "value": "16",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[17].name}`,
                                            "value": "17",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[18].name}`,
                                            "value": "18",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[19].name}`,
                                            "value": "19",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        
                                       
                                    ],
                                    
                                    
                                    "placeholder": "Choose a character",
                                    "default": true,
                                    "min_values": 1,
                                    "max_values": 1
                                }
                                
                            ]
                        }
                    ]
    
                    /*
    
                    
                                        
                                        {
                                            
                                            "label": `${d.data[1].name}`,
                                            "value": "1",
                                            "description": "Sneak n stab",
                                        
                                        },
                                        {
                                            "label": `${d.data[2].name}`,
                                            "value": "2",
                                            "description": "Sneak n stab",
                                        
                                        },
                                        {
                                            "label": `${d.data[3].name}`,
                                            "value": "3",
                                            "description": "Sneak n stab",
                                            
                                        },
                                        */
                   
                }).then(msg => {
                   
                    client.setTimeout(() => msg.delete(), 360000)
    
                    client.on('interactionCreate', async (interaction) => {
                        if(interaction.guildId != message.guild.id) return;
                        if(interaction.user.id !== message.author.id) {
                          return interaction.reply({content: `You aren't allowed to click this selection!`, ephemeral: true})
          
                        }
    if(interaction.values[0] == 'Home') {
        msg.edit({ embeds: [new Discord.MessageEmbed().setFooter('This message will be deleted in 6 minutes.').setTitle('Popular Waifus (alltime)').setColor('RANDOM').setDescription(d.data.map((t, i) => `**${i + 1}** - ${t.name}`).join('\n'))],})
    }
    
        if(interaction.values[0] == 0) {
            let data = d.data[0]
           
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 1) {
            let data = d.data[1]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 2) {
            let data = d.data[2]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 3) {
            let data = d.data[3]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 4) {
            let data = d.data[4]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 5) {
            let data = d.data[5]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 6) {
            let data = d.data[6]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 7) {
            let data = d.data[7]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 8) {
            let data = d.data[8]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 9) {
            let data = d.data[9]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 10) {
            let data = d.data[10]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 11) {
            let data = d.data[11]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 12) {
            let data = d.data[12]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 13) {
            let data = d.data[13]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 14) {
            let data = d.data[14]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 15) {
            let data = d.data[15]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 16) {
            let data = d.data[16]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 17) {
            let data = d.data[17]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 18) {
            let data = d.data[18]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 19) {
            let data = d.data[19]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 20) {
            let data = d.data[20]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
    
                    
    
    
                       
                        
                    })
                })
           
               
            })
            
        
        }
      
         // ==============================================================================================================================================================


        if(args.join(" ") === 'top') {
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
              
    
            require('node-fetch')(`https://japi.rest/mywaifulist/v1/best`, { headers: { 'Authorization': process.env.japi_API_key}}).then(res => res.json()).then(d => {
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
                    embeds: [new Discord.MessageEmbed().setTitle('Top tier waifus ranking').setColor('RANDOM').setFooter('This message wull be deleted in 6 minutes.').setDescription(d.data.map((t, i) => `**#${i + 1}** - ${t.name}`).join('\n'))],
                    "components": [
                        {
                            "type": 1,
                            "components": [
                                {
                                    "type": 3,
                                    "custom_id": 'Selects',
                                    "options":[
                                        
                                        {
                                            
                                            "label": `Home`,
                                            "value": "Home",
                                            "emoji":{
                                                name:"🏠", id:null
                                            },
                                            "description": "Go back to the main ranking page",
                                        
                                        },
                                        
                                        {
                                            
                                            "label": `${d.data[0].name}`,
                                            "value": "0",
                                            "description": "Get info on the character!",
                                        
                                        },
                                        
                                        {
                                            
                                            "label": `${d.data[1].name}`,
                                            "value": "1",
                                            "description": "Get info on the character!",
                                            
                                        
                                        },
                                        {
                                            "label": `${d.data[2].name}`,
                                            "value": "2",
                                            "description": "Get info on the character!",
                                        
                                        },
                                        {
                                            "label": `${d.data[3].name}`,
                                            "value": "3",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[4].name}`,
                                            "value": "4",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[5].name}`,
                                            "value": "5",
                                            "description": "Get info on the character!",
                                        },
                                        {
                                            "label": `${d.data[6].name}`,
                                            "value": "6",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[7].name}`,
                                            "value": "7",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[8].name}`,
                                            "value": "8",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[9].name}`,
                                            "value": "9",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[10].name}`,
                                            "value": "10",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[11].name}`,
                                            "value": "11",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[12].name}`,
                                            "value": "12",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[13].name}`,
                                            "value": "13",
                                            "description": "Get info on the character!",
                                        },
                                        {
                                            "label": `${d.data[14].name}`,
                                            "value": "14",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[15].name}`,
                                            "value": "15",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[16].name}`,
                                            "value": "16",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[17].name}`,
                                            "value": "17",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[18].name}`,
                                            "value": "18",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[19].name}`,
                                            "value": "19",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        
                                       
                                    ],
                                    
                                    
                                    "placeholder": "Choose a character",
                                    "default": true,
                                    "min_values": 1,
                                    "max_values": 1
                                }
                                
                            ]
                        }
                    ]
    
                    /*
    
                    
                                        
                                        {
                                            
                                            "label": `${d.data[1].name}`,
                                            "value": "1",
                                            "description": "Sneak n stab",
                                        
                                        },
                                        {
                                            "label": `${d.data[2].name}`,
                                            "value": "2",
                                            "description": "Sneak n stab",
                                        
                                        },
                                        {
                                            "label": `${d.data[3].name}`,
                                            "value": "3",
                                            "description": "Sneak n stab",
                                            
                                        },
                                        */
                   
                }).then(msg => {
                   
                    client.setTimeout(() => msg.delete(), 360000)
    
                    client.on('interactionCreate', async (interaction) => {
                        if(interaction.guildId != message.guild.id) return;
                        if(interaction.user.id !== message.author.id) {
                          return interaction.reply({content: `You aren't allowed to click this selection!`, ephemeral: true})
          
                        }
    if(interaction.values[0] == 'Home') {
        msg.edit({ embeds: [new Discord.MessageEmbed().setFooter('This message will be deleted in 6 minutes.').setTitle('Popular Waifus (alltime)').setColor('RANDOM').setDescription(d.data.map((t, i) => `**${i + 1}** - ${t.name}`).join('\n'))],})
    }
    
        if(interaction.values[0] == 0) {
            let data = d.data[0]
           
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.'}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 1) {
            let data = d.data[1]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.'}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 2) {
            let data = d.data[2]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.'}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 3) {
            let data = d.data[3]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 4) {
            let data = d.data[4]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 5) {
            let data = d.data[5]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 6) {
            let data = d.data[6]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 7) {
            let data = d.data[7]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 8) {
            let data = d.data[8]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 9) {
            let data = d.data[9]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 10) {
            let data = d.data[10]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 11) {
            let data = d.data[11]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 12) {
            let data = d.data[12]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 13) {
            let data = d.data[13]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 14) {
            let data = d.data[14]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 15) {
            let data = d.data[15]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 16) {
            let data = d.data[16]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 17) {
            let data = d.data[17]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 18) {
            let data = d.data[18]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 19) {
            let data = d.data[19]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 20) {
            let data = d.data[20]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
    
                    
    
    
                       
                        
                    })
                })
           
               
            })
            
        
        }

        


        // ==============================================================================================================================================================

        if(args.join(" ") === 'trash') {
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
              
    
            require('node-fetch')(`https://japi.rest/mywaifulist/v1/trash`, { headers: { 'Authorization': process.env.japi_API_key}}).then(res => res.json()).then(d => {
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
                    embeds: [new Discord.MessageEmbed().setTitle('Top trash waifu ranking').setColor('RANDOM').setFooter('This message wull be deleted in 6 minutes.').setDescription(d.data.map((t, i) => `**#${i + 1}** - ${t.name}`).join('\n'))],
                    "components": [
                        {
                            "type": 1,
                            "components": [
                                {
                                    "type": 3,
                                    "custom_id": 'Selects',
                                    "options":[
                                        
                                        {
                                            
                                            "label": `Home`,
                                            "value": "Home",
                                            "emoji":{
                                                name:"🏠", id:null
                                            },
                                            "description": "Go back to the main ranking page",
                                        
                                        },
                                        
                                        {
                                            
                                            "label": `${d.data[0].name}`,
                                            "value": "0",
                                            "description": "Get info on the character!",
                                        
                                        },
                                        
                                        {
                                            
                                            "label": `${d.data[1].name}`,
                                            "value": "1",
                                            "description": "Get info on the character!",
                                            
                                        
                                        },
                                        {
                                            "label": `${d.data[2].name}`,
                                            "value": "2",
                                            "description": "Get info on the character!",
                                        
                                        },
                                        {
                                            "label": `${d.data[3].name}`,
                                            "value": "3",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[4].name}`,
                                            "value": "4",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[5].name}`,
                                            "value": "5",
                                            "description": "Get info on the character!",
                                        },
                                        {
                                            "label": `${d.data[6].name}`,
                                            "value": "6",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[7].name}`,
                                            "value": "7",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[8].name}`,
                                            "value": "8",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[9].name}`,
                                            "value": "9",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[10].name}`,
                                            "value": "10",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[11].name}`,
                                            "value": "11",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[12].name}`,
                                            "value": "12",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[13].name}`,
                                            "value": "13",
                                            "description": "Get info on the character!",
                                        },
                                        {
                                            "label": `${d.data[14].name}`,
                                            "value": "14",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[15].name}`,
                                            "value": "15",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[16].name}`,
                                            "value": "16",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[17].name}`,
                                            "value": "17",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[18].name}`,
                                            "value": "18",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[19].name}`,
                                            "value": "19",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        
                                       
                                    ],
                                    
                                    
                                    "placeholder": "Choose a character",
                                    "default": true,
                                    "min_values": 1,
                                    "max_values": 1
                                }
                                
                            ]
                        }
                    ]
    
                    /*
    
                    
                                        
                                        {
                                            
                                            "label": `${d.data[1].name}`,
                                            "value": "1",
                                            "description": "Sneak n stab",
                                        
                                        },
                                        {
                                            "label": `${d.data[2].name}`,
                                            "value": "2",
                                            "description": "Sneak n stab",
                                        
                                        },
                                        {
                                            "label": `${d.data[3].name}`,
                                            "value": "3",
                                            "description": "Sneak n stab",
                                            
                                        },
                                        */
                   
                }).then(msg => {
                   
                    client.setTimeout(() => msg.delete(), 360000)
    
                    client.on('interactionCreate', async (interaction) => {
                        if(interaction.guildId != message.guild.id) return;
                        if(interaction.user.id !== message.author.id) {
                          return interaction.reply({content: `You aren't allowed to click this selection!`, ephemeral: true})
          
                        }
    if(interaction.values[0] == 'Home') {
        msg.edit({ embeds: [new Discord.MessageEmbed().setFooter('This message will be deleted in 6 minutes.').setTitle('Popular Waifus (alltime)').setColor('RANDOM').setDescription(d.data.map((t, i) => `**${i + 1}** - ${t.name}`).join('\n'))],})
    }
    
        if(interaction.values[0] == 0) {
            let data = d.data[0]
           
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
            
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.'}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 1) {
            let data = d.data[1]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.'}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 2) {
            let data = d.data[2]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.'}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 3) {
            let data = d.data[3]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 4) {
            let data = d.data[4]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 5) {
            let data = d.data[5]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 6) {
            let data = d.data[6]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 7) {
            let data = d.data[7]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 8) {
            let data = d.data[8]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 9) {
            let data = d.data[9]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 10) {
            let data = d.data[10]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 11) {
            let data = d.data[11]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 12) {
            let data = d.data[12]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 13) {
            let data = d.data[13]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 14) {
            let data = d.data[14]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 15) {
            let data = d.data[15]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
        if(interaction.values[0] == 16) {
            let data = d.data[16]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 17) {
            let data = d.data[17]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 18) {
            let data = d.data[18]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 19) {
            let data = d.data[19]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 20) {
            let data = d.data[20]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
    
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ") == null ? data.slug.replace(/-/gi, " ") : 'No information found.' }`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
    
    
                    
    
    
                       
                        
                    })
                })
           
               
            })
            
        
        }



        // ==============================================================================================================================================================
        if(args.join(" ") === 'spopular') {
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
              
        
            require('node-fetch')(`https://japi.rest/mywaifulist/v1/current/popular`, { headers: { 'Authorization': process.env.japi_API_key}}).then(res => res.json()).then(d => {
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
                    embeds: [new Discord.MessageEmbed().setTitle('Seasonal most popular waifu ranking').setColor('RANDOM').setFooter('This message wull be deleted in 6 minutes.').setDescription(d.data.map((t, i) => `**#${i + 1}** - ${t.name}`).join('\n'))],
                    "components": [
                        {
                            "type": 1,
                            "components": [
                                {
                                    "type": 3,
                                    "custom_id": 'Selects',
                                    "options":[
                                        
                                        {
                                            
                                            "label": `Home`,
                                            "value": "Home",
                                            "emoji":{
                                                name:"🏠", id:null
                                            },
                                            "description": "Go back to the main ranking page",
                                        
                                        },
                                        
                                        {
                                            
                                            "label": `${d.data[0].name}`,
                                            "value": "0",
                                            "description": "Get info on the character!",
                                        
                                        },
                                        
                                        {
                                            
                                            "label": `${d.data[1].name}`,
                                            "value": "1",
                                            "description": "Get info on the character!",
                                            
                                        
                                        },
                                        {
                                            "label": `${d.data[2].name}`,
                                            "value": "2",
                                            "description": "Get info on the character!",
                                        
                                        },
                                        {
                                            "label": `${d.data[3].name}`,
                                            "value": "3",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[4].name}`,
                                            "value": "4",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[5].name}`,
                                            "value": "5",
                                            "description": "Get info on the character!",
                                        },
                                        {
                                            "label": `${d.data[6].name}`,
                                            "value": "6",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[7].name}`,
                                            "value": "7",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[8].name}`,
                                            "value": "8",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[9].name}`,
                                            "value": "9",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[10].name}`,
                                            "value": "10",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[11].name}`,
                                            "value": "11",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[12].name}`,
                                            "value": "12",
                                            "description": "Get info on the character!",
                                            
                                        },
                                        {
                                            "label": `${d.data[13].name}`,
                                            "value": "13",
                                            "description": "Get info on the character!",
                                        },
                                        {
                                            "label": `${d.data[14].name}`,
                                            "value": "14",
                                            "description": "Get info on the character!",
                                            
                                        },
                                       
                                       
                                    ],
                                    
                                    
                                    "placeholder": "Choose a character",
                                    "default": true,
                                    "min_values": 1,
                                    "max_values": 1
                                }
                                
                            ]
                        }
                    ]
        
                    /*
        
                    
                                        
                                        {
                                            
                                            "label": `${d.data[1].name}`,
                                            "value": "1",
                                            "description": "Sneak n stab",
                                        
                                        },
                                        {
                                            "label": `${d.data[2].name}`,
                                            "value": "2",
                                            "description": "Sneak n stab",
                                        
                                        },
                                        {
                                            "label": `${d.data[3].name}`,
                                            "value": "3",
                                            "description": "Sneak n stab",
                                            
                                        },
                                        */
                   
                }).then(msg => {
                   
                    client.setTimeout(() => msg.delete(), 360000)
        
                    client.on('interactionCreate', async (interaction) => {
                        if(interaction.guildId != message.guild.id) return;
                        if(interaction.user.id !== message.author.id) {
                          return interaction.reply({content: `You aren't allowed to click this selection!`, ephemeral: true})
          
                        }
        if(interaction.values[0] == 'Home') {
        msg.edit({ embeds: [new Discord.MessageEmbed().setFooter('This message will be deleted in 6 minutes.').setTitle('Seasonal most popular waifu ranking').setColor('RANDOM').setDescription(d.data.map((t, i) => `**${i + 1}** - ${t.name}`).join('\n'))],})
        }
        
        if(interaction.values[0] == 0) {
            let data = d.data[0]
           
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 1) {
            let data = d.data[1]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 2) {
            let data = d.data[2]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 3) {
            let data = d.data[3]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 4) {
            let data = d.data[4]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description).setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 5) {
            let data = d.data[5]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 6) {
            let data = d.data[6]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 7) {
            let data = d.data[7]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 8) {
            let data = d.data[8]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 9) {
            let data = d.data[9]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 10) {
            let data = d.data[10]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 11) {
            let data = d.data[11]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 12) {
            let data = d.data[12]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 13) {
            let data = d.data[13]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 14) {
            let data = d.data[14]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 15) {
            let data = d.data[15]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        if(interaction.values[0] == 16) {
            let data = d.data[16]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 17) {
            let data = d.data[17]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 18) {
            let data = d.data[18]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 19) {
            let data = d.data[19]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        if(interaction.values[0] == 20) {
            let data = d.data[20]
            let arrayBuffer = await require('node-fetch')(data.display_picture).then(m => m.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
           
        
            msg.edit({embeds: [new Discord.MessageEmbed().setTitle(`${data.name}`).addField('From The Anime:', `${data.slug.replace(/-/gi, " ")}`, true).addField('Popularity rank:', '#' + data.popularity_rank, true).setDescription(data.description.substring(0, 4068) + ". . .").setImage(data.display_picture).setFooter(`❤️ ${data.likes.toLocaleString()} likes | 🗑️ ${data.trash.toLocaleString()} dislikes`).setColor(colorThief.getColor(buffer))]})
        }
        
        
                    
        
        
                       
                        
                    })
                })
           
               
            })
            
        
        }
      
      

}
}