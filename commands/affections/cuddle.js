const fetch = require("node-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
  config: {
    name: "cuddle",
    description: "Cuddle with a specified user.",
    examples: "1) <prefix>cuddle @user/id\n2) <prefix>cuddle @nek",
    usage: "cuddle @user/id",
  },
  run: async (bot, message, args) => {
    const { url } = await fetch(`${waifuAPI}/sfw/cuddle`).then((res) =>
      res.json()
    );
    let quotes = args.slice(1).join(" ");

    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find((m) =>
        [m.user.username, m.displayName, m.user.tag].some(
          (e) => e.toLowerCase() === args.join(" ").toLowerCase()
        )
      );
    if (!user) {
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(url)
        .setAuthor(
          `${message.author.username} wants a cuddle. . .`,
          message.author.avatarURL({ dynamic: true })
        );
      return message.channel.send(embed);
    }

    const waifu = new Discord.MessageEmbed();

    waifu
      .setImage(url)
      .setAuthor(
        `${message.author.username} is cuddling with ${user.user.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setColor("RANDOM")
      .setDescription(quotes);

    return message.channel.send({ embeds: [waifu] });
  },
};
