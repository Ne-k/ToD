const Discord = require("discord.js");
const fetch = require("cross-fetch");
const {ApplicationCommandType} = require("discord.js");


module.exports = {
    name: 'awoo',
    description: "get a random dare question",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    run: async (client, interaction) => {
        const waifu = new Discord.EmbedBuilder();
        const {url} = await fetch(`https://waifu.pics/api/sfw/awoo`).then((res) => res.json());
        waifu.setImage(url).setDescription("Awoo?").setColor("Random");
        interaction.reply({embeds: [waifu]});


    }
    }