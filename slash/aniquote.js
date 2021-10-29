module.exports = {
  slash: {
    name: "aniquote",
    description: "Sends a random quote from a anime.",
    commandOptions: null,
  },
  global: true,

  async execute(interaction, int) {
    if (!int.isCommand()) return;
    const { MessageEmbed } = require("discord.js");

    const { randomQuote } = require("animequotes");

    const { searchAnime } = require("node-kitsu");

    const { quote, anime, id, name } = randomQuote();
    const res = (await searchAnime(anime, 0).catch(() => {})) || [];

    require("mal-scraper")
      .getInfoFromName(anime)
      .then((i) => {
        let animeembed = new MessageEmbed()
          .setColor(`GREY`)
          .addField(`*Quoted from ${anime}*`, `${quote}\n\n- *${name}*`)
          .setImage(image)
          .setTimestamp();

        const image = res?.[0]?.attributes?.coverImage?.original || null;

        return int.reply({
          components: [
            {
              type: 1,
              components: [
                {
                  type: 2,
                  label: "MyAnimeList page",
                  style: 5,
                  url: `${i.url}`,
                },
              ],
            },
          ],
          embeds: [animeembed],
        });
      });
  },
};
