const { MessageEmbed, Permissions } = require("discord.js");
module.exports = {
  config: {
    name: "disable",
    description: "Disable an option, such as NSFW truths and dares.",
    usage: "disable <option>",
    example: "1) disable nsfw\n2) disable",
  },
  run: async (client, message, args) => {
    let prefix = process.env.prefix;
    try {
      let nsfwstatus = client.db.fetch(`nsfwEnabled_${message.guild.id}`);
      if (nsfwstatus == null) {
        nsfwstatus = false;
      }
      if (!args[0]) {
        const AsciiTable = require("ascii-table");
        const table = new AsciiTable()
          .setHeading("Options:", "Enabled:")
          .setAlign(0, AsciiTable.CENTER)
          .setAlign(1, AsciiTable.CENTER);
        table.addRow("NSFW", nsfwstatus);

        return message.channel.send({
          embeds: [
            new client.messageembed()
              .setColor("RED")
              .setDescription(
                `Please select an option below to disable.\nUsage: \`${prefix}disable <options>\`\n\n\`\`\`\n${table.toString()}\`\`\``
              ),
          ],
        });
      }

      if (args[0].toLowerCase() === "nsfw") {
        if (!message.member.permissions.has(32)) {
          return message.channel.send({
            embeds: [
              new client.messageembed()
                .setColor("RED")
                .setDescription(
                  "Looks like you have insignificant permissions. `MANAGE_GUILD` is needed to disable a option. <:Bonk:853033417112682574>"
                ),
            ],
          });
        }

        if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) == null) {
          return message.channel.send({
            emebds: [
              new client.messageembed()
                .setColor("RED")
                .setDescription(
                  `Looks like the NSFW option hasn't been enabled. <a:awaugery:854870881046102067>`
                ),
            ],
          });
        }

        if (client.db.fetch(`nsfwEnabled_${message.guild.id}`) === true) {
          client.db.delete(`nsfwEnabled_${message.guild.id}`);
          client.db.delete(
            `nsfwEnabledBy_${message.author.tag}_${message.guild.id}`
          );
          return message.channel.send({
            embeds: [
              new client.messageembed()
                .setColor("GREEN")
                .setDescription("I have **disabled** NSFW truths and dares."),
            ],
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  },
};
