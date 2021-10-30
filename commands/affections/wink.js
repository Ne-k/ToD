const fetch = require("node-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
  config: {
    name: "wink",
    description: "Close and swiftly open the eye, usually to show that something is a joke or a secret or as a warning or welcoming gesture.",
    usage: "wink",
  },
  run: async (bot, message, args) => {
    const waifu = new Discord.MessageEmbed();

    const { url } = await fetch(`${waifuAPI}/sfw/wink`).then((res) => res.json());
    let quotes = args.join(" ");
    waifu
      .setImage(url)
      .setAuthor(`${message.author.username} just winked.`, message.author.avatarURL({ dynamic: true }))
      .setDescription(quotes)
      .setColor("RANDOM");

    return message.channel.send({ embeds: [waifu] });
  },
};
