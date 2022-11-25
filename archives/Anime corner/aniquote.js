const {EmbedBuilder} = require("discord.js");
module.exports = {

        name: "aniquote",
        description: "Generates a random anime quote. ",
        usage: "aniquote",

    run: async (bot, message, args) => {
        const {MessageEmbed} = require("discord.js");
        const {randomQuote} = require("animequotes");
        const {searchAnime} = require("node-kitsu");
        const {quote, anime, id, name} = randomQuote();
        const res = (await searchAnime(anime, 0).catch(() => {
        })) || [];

        const image = res?.[0]?.attributes?.coverImage?.original || null;
        return message.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setColor(`Grey`)
                    .addFields( {
                        name: "** **",
                        value: `**${quote}**`,
                        inline: false
                    },
                        {
                        name: "Anime",
                        value: `Quoted from [${anime}](${`https://kitsu.io/anime/${id}`})`,
                        inline: true,
                    },)
                    .setImage(image)
                    .setTimestamp(),
            ],
        });
    },
};
