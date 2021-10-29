module.exports = {
  config: {
    name: "senko",
    usage: "senko",
    description: "Senko from Sewayaki Kitsune no Senko-san",
  },
  run: async (bot, message, args) => {
    const fetch = require("node-fetch");
    const Discord = require("discord.js");
    try {
      /* https://api.kaedee.xyz/v1/cdn/<anime/nsfw/sfw>/<category> */
      fetch(`https://api.kaedee.xyz/v1/cdn/anime/senko`, {
        headers: { Authorization: process.env.KAEDE_CDN_KEY },
      })
        .then((res) => res.json())
        .then((data) => {
          const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(data.path);
          return message.channel.send({ embeds: [embed] });
        });
    } catch (e) {
      console.log(e);
    }
  },
};
