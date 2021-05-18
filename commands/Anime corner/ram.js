const Discord = require('discord.js')
const { get } = require("snekfetch");


module.exports = {
    config: {
        name: "ram",
        usage: "ram",
        description: "This command does absolutely nothing other than show a random gif of Ram. Why I did it, who knows.",
    },
  run: async (bot, message, args) => {
  
        
    const { body } = await get("https://rra.ram.moe/i/r?type=ram");

message.channel.send({
          embed: {
            "title": "Click here if the image failed to load.",
            "url": `https://cdn.ram.moe/${body.path.replace("/i/", "")}`,
            "color": 16758465,
            "image": {
              "url": `https://cdn.ram.moe/${body.path.replace("/i/", "")}`
            },
            "footer": {
              "icon_url": message.author.displayAvatarURL({ format: "png", size: 32 }),
              "text": `Requested by: ${message.author.tag} | Powered by animequotes and node-kitsu.`, 
            }
          }
        });

  }
}