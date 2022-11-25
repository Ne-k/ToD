const Discord = require("discord.js");
const fetch = require("cross-fetch");
const {ApplicationCommandType} = require("discord.js");


module.exports = {
    name: 'neko',
    description: "get a random dare question",
    type: ApplicationCommandType.ChatInput,
    category: "anime",
    cooldown: 3000,
    run: async (client, interaction) => {
        const waifu = new Discord.EmbedBuilder();
        const {url} = await fetch(`https://waifu.pics/api/sfw/neko`).then((res) => res.json());
        waifu.setImage(url).setDescription("Neko").setColor("Random");
        interaction.reply({embeds: [waifu]});


    }
}