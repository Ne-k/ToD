module.exports = {
  config: {
    name: "neko",
    usage: "neko",
    description: "Shows imagines of nekos __from kaedee.xyz__",
  },
  run: async (bot, message, args) => {
    const fetch = require("node-fetch");
    const Discord = require("discord.js");
    try {
      /* https://api.kaedee.xyz/v1/cdn/<anime/nsfw/sfw>/<category> */
      fetch(`https://api.waifu.pics/sfw/neko`)
        .then((res) => res.json())
        .then((data) => {
          const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(data.url);
          return message.channel.send({ embeds: [embed] });
        });
    } catch (e) {
      console.log(e);
    }
  },
};
