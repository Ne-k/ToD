const fetch = require("node-fetch");
const waifuAPI = "https://waifu.pics/api";
const Discord = require("discord.js");

module.exports = {
  config: {
    name: "glomp",
    description:
      "Glomp (A glomp is a lunging, enthusiastic, over-the-top, and potentially dangerous hug that often begins with a running start, like a tackle.) a user.",
    examples: "1) <prefix>glomp @user/id\n2) <prefix>glomp @nek",
    usage: "glomp @user/id",
  },
  run: async (bot, message, args) => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find((m) =>
        [m.user.username, m.displayName, m.user.tag].some(
          (e) => e.toLowerCase() === args.join(" ").toLowerCase()
        )
      );
    if (!user) {
      return message.channel.send(
        "Please input a (valid) user to glomp them <:Megumin_Blush:843537370107215913>"
      );
    }

    let quotes = args.slice(1).join(" ");

    const waifu = new Discord.MessageEmbed();

    const { url } = await fetch(`${waifuAPI}/sfw/glomp`).then((res) =>
      res.json()
    );

    waifu
      .setImage(url)
      .setAuthor(
        `${message.author.username} gave ${user.user.tag} a enthusiastic, over-the-top, and potentially dangerous hug.`,
        message.author.avatarURL({ dynamic: true })
      )

      .setDescription(quotes)
      .setColor("RANDOM");

    return message.channel.send({ embeds: [waifu] });
  },
};
