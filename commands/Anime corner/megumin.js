module.exports = {

        name: "megumin",
        example: "1) megumin",
        description:
            "Image of megumin from the anime [Konosuba](https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo).",

    run: async (bot, message, argument) => {
        const fetch = require("cross-fetch");
        const waifuAPI = "https://waifu.pics/api";
        const Discord = require("discord.js");

        const meguminembed = new Discord.EmbedBuilder();

        const {url} = await fetch(`${waifuAPI}/sfw/megumin`).then((res) =>
            res.json()
        );

        meguminembed.setImage(url).setColor("RANDOM").setDescription(`Megumin`);
        message.channel.send({embeds: [meguminembed]});
    },
};
