module.exports = (bot, message) => {
    const { MessageEmbed } = require('discord.js')
    require("dotenv").config();
    let prompt = process.openStdin()
    prompt.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
       let consoleembed = new MessageEmbed()
       .setAuthor(`Nek#2937`, 'https://cdn.discordapp.com/avatars/750510159289254008/a_9fe18c6777682023d66a55907fbd0957.png')
       .setTitle("ToD (Truth or Dare) Update!")
       .setColor('#5aacc4')
       .setThumbnail('https://cdn.discordapp.com/avatars/752306970467237970/07688b4ca89f1eab75ea07196e9d2aab.png')
       .setDescription(`**__Update:__**\n\n${x.join(" ")}`)
            // bot.channels.cache.get(`824332875758829638`).send({embeds: [consoleembed]});
        });
    };