const stringTools = new (require("string-toolkit"))();
const { inspect } = require("util");
const Discord = require("discord.js");

let hrDiff = process.hrtime(process.hrtime());
module.exports = {
  config: {
    name: "eval",
    description: "Evaluation command.",
    usage: "eval <code>",
    example: "eval message",
    aliases: ["e"],
  },
  run: async (client, message, args) => {
    let print = console.log;
    let ToD = client;
    if (!process.env.developers.includes(message.author.id)) {
      let userAccess = new Discord.MessageEmbed()
        .setTitle("eval")
        .setDescription(
          "Sorry, the `eval` command can only be executed by the Developer."
        )
        .setColor("#cdf785");
      message.channel.send({ embeds: [userAccess] });
    }
    if (process.env.developers.includes(message.author.id)) {
      let isPromise = false;

      const dscformat = (lang, value) =>
        `\`\`\`${lang}\n${value}\n\`\`\``.replace(
          new RegExp(client.token, "g"),
          [...client.token]
            .map((v, i, a) => a[Math.floor(Math.random() * a.length)])
            .join("")
        );
      let CC = [
        "#815498",
        "#f1cdc8",
        "#eaecf3",
        "#dcadae",
        "#cbbdd7",
        "#a7a2d0",
      ];
      let result = Math.floor(Math.random() * CC.length);
      let code = args.join(" ").replace("```js", "").replace("```", "");

      if (!args.join(" "))
        return message.channel.send({
          content: "Idiot, I can't evaluate air.",
        });

      try {
        let evaled = eval(code);

        if (
          code.includes(`BOTTOKEN`) ||
          code.includes(`TOKEN`) ||
          code.includes("process.env.Token") ||
          code.includes("client.token") ||
          code.includes("child_process")
        ) {
          (evaled = new RegExp(client.token, "g")),
            [...client.token]
              .map((v, i, a) => a[Math.floor(Math.random() * a.length)])
              .join("");
        } else {
          evaled = eval(code);
        }

        let isPromise = false;
        if (evaled && evaled instanceof Promise) {
          isPromise = true;
          evaled = await evaled;
        }
        if (typeof evaled !== "string") evaled = inspect(evaled, { depth: 0 });
        let evalEmbeds = stringTools.toChunks(evaled, 1000).map((thing) =>
          new Discord.MessageEmbed()
            .setColor(CC[result])
            .addField(
              `:inbox_tray: **Input** :inbox_tray:`,
              `${dscformat("js", args.join(" "))}`
            )
            .setDescription(
              `:outbox_tray: **Output** :outbox_tray:\n${dscformat(
                "js",
                thing
              )}`
            )
            .addField(
              "Time",
              ` \`\`\`js\n${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ""}${
                hrDiff[1] / 1000000
              }\`\`\` `
            )
            .addField(
              "Type of",
              dscformat(
                "css",
                `${typeof evaled}${isPromise ? " (Originally Promise)" : ""}`
              )
            )
        );
        pagify(evalEmbeds, { xReact: true });
      } catch (err) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `:inbox_tray: **Input** :inbox_tray: ${dscformat(
              "js",
              args.join(" ")
            )}\n:outbox_tray: **Output** :outbox_tray:\n${dscformat("js", err)}`
          )
          .addField(
            "Time",
            ` \`\`\`js\n${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ""}${
              hrDiff[1] / 1000000
            }\`\`\` `
          )
          .addField(
            "Type",
            dscformat(
              "css",
              `${typeof evaled}${isPromise ? " (Originally Promise)" : ""}`
            )
          )
          .setColor("#FF0000");
        pagify([embed], { xReact: true });
      }

      async function pagify(embeds, options) {
        let reactions = ["◀️", "⏹️", "▶️", "🔵"];
        if (embeds.length == 1) reactions = ["⏹️", "🔵"];

        if (options && typeof options !== "object")
          throw Error(
            `options cannot be a ${typeof options} must be an object`
          );
        if (options && options.xReact == true) reactions.push("🔴");

        let currentPage = (options && options.currentPage) || 0;

        let pages = embeds.length;
        embeds[currentPage].setFooter(`Page ${currentPage + 1} of ${pages}`);
        const queueEmbed = await message.channel.send({
          embeds: [embeds[currentPage]],
        });

        await Promise.all(reactions.map((r) => queueEmbed.react(r)));
        const filter = (reaction, user) =>
          reactions.includes(reaction.emoji.name) &&
          message.author.id === user.id;
        const collector = queueEmbed.createReactionCollector(filter);

        collector.on("collect", async (reaction, user) => {
          try {
            switch (reaction.emoji.name) {
              case "▶️":
                if (!reactions.includes("▶️")) return;
                currentPage++;
                if (currentPage == pages) currentPage = 0;
                if (message.guild.me.permissions.has("MANAGE_MESSAGES"))
                  reaction.users.remove(user.id);
                queueEmbed.edit({
                  embeds: [embeds[currentPage]].setFooter(
                    `Page ${currentPage + 1} of ${pages}`
                  ),
                });
                break;
              case "⏹️":
                collector.stop();
                if (message.guild.me.permissions.has("MANAGE_MESSAGES")) {
                  reaction.message.reactions.removeAll();
                } else {
                  for (let r of queueEmbed.reactions.cache
                    .filter((r) => r.users.cache.has(client.user.id))
                    .array()) {
                    await r.users.remove(client.user.id);
                  }
                }
                break;

              case "◀️":
                if (!reactions.includes("◀️")) return;
                --currentPage;
                if (currentPage == -1) currentPage = pages - 1;
                if (message.guild.me.permissions.has("MANAGE_MESSAGES"))
                  reaction.users.remove(user.id);
                queueEmbed.edit({
                  embeds: [embeds[currentPage]].setFooter(
                    `Page ${currentPage + 1} of ${pages}`
                  ),
                });
                break;

              case "🔵":
                if (!reactions.includes("🔵")) return;
                --currentPage;
                if (currentPage == -1) currentPage = pages - 1;
                if (message.guild.me.permissions.has("MANAGE_MESSAGES"))
                  reaction.users.remove(user.id);
                queueEmbed.edit({
                  embeds: [embeds[currentPage]].setDescription(
                    `:outbox_tray: **Output** :outbox_tray:\n${dscformat(
                      "js",
                      `The Developer Has Closed The Evaluation.`
                    )}`
                  ),
                });
                break;

              case "🔴":
                if (!reactions.includes("🔴")) return;
                collector.stop();
                queueEmbed.delete();
                await message.channel.send({ content: "a" }).then((m) => {
                  m.edit({ content: "f" });
                  client.setTimeout(() => message.delete(), 0);
                });
                break;
            }
          } catch (err) {
            return;
          }
        });
      }
    }
  },
};
