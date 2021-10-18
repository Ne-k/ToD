const fetch = require("node-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");
const ColorThief = require("color-thief-updated");
var colorThief = new ColorThief();
module.exports = {
  slash: {
    name: "neko",
    c: "Anime",
    description: "Cat girls drawn in an anime artstyle",
    commandOptions: null,
  },
  global: true,

  async execute(interaction, int, client) {
    if (!int.isCommand()) return;
    const waifu = new Discord.MessageEmbed();
    const { url } = await fetch(`${waifuAPI}/sfw/neko`).then((res) =>
      res.json()
    );
    let arrayBuffer = await require("node-fetch")(url).then((m) =>
      m.arrayBuffer()
    );
    const buffer = Buffer.from(arrayBuffer);
    waifu.setImage(url).setColor(colorThief.getColor(buffer));

    int.reply({
      embeds: [waifu],
    });
  },
};
