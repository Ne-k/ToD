const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  config: {
    name: "fact",
    usgae: "fact",
    description: "Sends a `fact` message.",
  },
  run: async (bot, message, args) => {
    fetch("https://nekos.life/api/v2/fact")
      .then((res) => res.json())
      .then(async (data) => {
        let factEmbed = new Discord.MessageEmbed()
          .setColor("#eaecf3")
          .setTitle("Fact")
          .setDescription(data.fact);
        return message.channel.send({ embeds: [factEmbed] });
      });
  },
};
