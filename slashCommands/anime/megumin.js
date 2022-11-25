const Discord = require("discord.js");
const fetch = require("cross-fetch");
const {ApplicationCommandType} = require("discord.js");


module.exports = {
    name: 'megumin',
    description: "Get a random picture of Megumin from Konosuba",
    type: ApplicationCommandType.ChatInput,
    category: "anime",
    cooldown: 3000,
    run: async (client, interaction) => {
        const waifu = new Discord.EmbedBuilder();
        const {url} = await fetch(`https://waifu.pics/api/sfw/megumin`).then((res) => res.json());
        waifu.setImage(url).setDescription("Megumin").setColor("Random");
        interaction.reply({embeds: [waifu]});


    }
}