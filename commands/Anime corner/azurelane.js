module.exports = {
  config: {
    name: "azurlane",
    description: "Sends a random azurlane picture.",
    usage: "aniquote",
  },
  run: async (bot, message, args) => {
    const Discord = require("discord.js");
    const fetch = require("node-fetch");

    fetch(`https://gallery.fluxpoint.dev/api/sfw/azurlane`, {
      headers: { Authorization: process.env.Fluxpoint_API_Key },
    })
      .then((res) => res.json())
      .then((data) => {
        let fluxAzureEmbed = new Discord.MessageEmbed()
          .setAuthor(
            "AzurLane",
            "https://static.wikia.nocookie.net/omniversal-battlefield/images/a/a8/FWPae6p.png/revision/latest?cb=20200116082838"
          )
          .setColor("#CACACA")
          .setImage(data.file);
        message.channel.send({ embeds: [fluxAzureEmbed] });
      });
  },
};
